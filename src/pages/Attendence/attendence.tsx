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
import Close from "../../utils/Icons/close";

type Props = {};

type ScanedContent = {
  content: string;
  format: string;
  hasContent: boolean;
};

function attendence({}: Props) {

    // hooks
    const history = useHistory();

  const [err, setErr] = useState<string>();
  const [hideBtn, setHideBtn] = useState(false);
  const [scanedContent, setScanedContent] = useState<ScanedContent | null>(null);
  const [title, setTitle] = useState<string>("Scan QR code");
  const [exit, setExit] = useState<boolean>(true)


  // {
  //   content: '{"name":"Ragav","id":22}',
  //   format: "QR_CODE",
  //   hasContent: true,
  // }

  const stopScan = () => {
    console.log("***************");
    BarcodeScanner.showBackground();
    BarcodeScanner.stopScan();
    setHideBtn(false);
    // setTitle("Scanned Details");


    // push to DASHBOARD if closing it completely
    //history.push(`/dashboard`);
  };

  const startScan = async () => {
    
    console.log("scan")
    setTitle(title);
    setScanedContent(null);
    // Check camera permission
    // This is just a simple example, check out the better checks below
    await BarcodeScanner.checkPermission({ force: true });

    document.querySelector("body")?.classList.add("scanner-active");

    // make background of WebView transparent
    // note: if you are using ionic this might not be enough, check below
    BarcodeScanner.hideBackground();
    setHideBtn(true);

    const result = await BarcodeScanner.startScan(); // start scanning and wait for a result

    // if the result has content
    if (result.hasContent) {
      console.log(result); // log the raw scanned content

      setScanedContent(result);
      setExit(false)

      document.querySelector("body")?.classList.remove("scanner-active");
      stopScan();
    }
  };

  const handleSubmitAttendence = () => {
    // get the data from state
    // submit data to API
    // redirect to scan
    setScanedContent(null);
    setTitle(title);
    startScan();
    setExit(true)

  }

  useEffect(() => {
    const checkPermission = async () => {
      try {
        // check or request permission
        const status = await BarcodeScanner.checkPermission({ force: true });
        console.log("status", status);

        if (status.granted) {
          // the user granted permission
          return true;
        }

        return false;
      } catch (error: any) {
        console.log("err", error);
        setErr(error?.message);
      }
    };
    checkPermission();
    startScan();
    return () => {};
  }, []);

  let a = scanedContent?.content;

 console.log("---->",exit);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className="ion-tool-bar">
          <IonTitle>{title}</IonTitle>
          <IonButtons slot="end">
            {(hideBtn || scanedContent?.content) && (
              <IonButton onClick={ ()=> exit ?  history.push(`/dashboard`) : startScan()} color={"danger"}>
                <Close />
              </IonButton>
            )}
          </IonButtons>
        </IonToolbar>
      </IonHeader>
     {<IonContent
        className={scanedContent?.content ? "scan-bg hideBg" : "hideBg"}
      >
        {/* {!hideBtn && <IonButton onClick={startScan}>Start Scan</IonButton>} */}
        {!hideBtn && <div className="scanned-content">
          <div> { "scanedContent?.content"}</div>
          <div><IonButton onClick={handleSubmitAttendence}>Submit</IonButton></div>
         
          </div>}
      </IonContent>}
    </IonPage>
  );
}

export default attendence;
