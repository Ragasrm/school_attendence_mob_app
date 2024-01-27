// React
import { useHistory } from "react-router-dom";
import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { BarcodeScanner } from "@capacitor-community/barcode-scanner";
import "./attendence.css";
import { useEffect, useState } from "react";
import Close from "../../utils/Icons/Close";

type Props = {};

type ScanedContent = {
  content: string;
  format: string;
  hasContent: boolean;
};

function Attendence() {
  // hooks
  const history = useHistory();

  const [err, setErr] = useState<string>();
  const [scanedContent, setScanedContent] = useState<ScanedContent | null>({
    hasContent: true,
    content: '{"name":"Ragavendiran"}',
    format: "QR_CODE",
  });
  const [title, setTitle] = useState<string>("Scan QR code");

  const stopScan = (exit?: boolean) => {
    if (exit) {
      BarcodeScanner.showBackground();
      BarcodeScanner.stopScan();
      history.push("/dashboard");
    } else {
      BarcodeScanner.showBackground();
      BarcodeScanner.stopScan();
    }
  };

  const startScan = async () => {
    console.log("scan start");

    // content will be set null every time while start scanning
    setTitle("Scan QR");
    setScanedContent(null);
    // Check camera permission
    // This is just a simple example, check out the better checks below
    await BarcodeScanner.checkPermission({ force: true });

    document.querySelector("body")?.classList.add("scanner-active");

    // make background of WebView transparent
    // note: if you are using ionic this might not be enough, check below
    BarcodeScanner.hideBackground();

    const result = await BarcodeScanner.startScan(); // start scanning and wait for a result

    // if the result has content
    if (result.hasContent) {
      console.log(result); // log the raw scanned content

      setScanedContent(result);
      setTitle("Scanned Content");

      document.querySelector("body")?.classList.remove("scanner-active");
      stopScan();
    }
  };

  const handleSubmitAttendence = () => {
    // get the data from state
    // submit data to API
    // redirect to scan
    setScanedContent(null);
    setTitle("Scan QR code");
    startScan();
  };

  useEffect(() => {
    const checkPermission = async () => {
      try {
        // check or request permission
        const status = await BarcodeScanner.checkPermission({ force: true });
        if (status.granted) {
          // the user granted permission
          return true;
        }

        return false;
      } catch (error: any) {
        setErr(error?.message);
      }
    };
    checkPermission();
    startScan();
    return () => {};
  }, []);

  console.log("scanedContent", scanedContent);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className="ion-tool-bar">
          <IonTitle>{title}</IonTitle>
          <IonButtons slot="end">
            {/* functionlity will change based on some condition */}
            <IonButton
              onClick={() =>
                scanedContent?.content ? startScan() : stopScan(true)
              }
              color={"danger"}
            >
              <Close />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      {
        <IonContent
          className={scanedContent?.content ? "scan-bg hideBg" : "hideBg"}
        >
          {scanedContent?.content ? (
            <div className="scanned-content">
              {/* <div> {JSON.parse(scanedContent?.content).name}</div> */}
              <div>Ragavendiran</div>
              <div>
                <IonButton onClick={handleSubmitAttendence}>Submit</IonButton>
              </div>
            </div>
          ) : (
            <div className="scan-box"></div>
          )}
        </IonContent>
      }
    </IonPage>
  );
}

export default Attendence;
