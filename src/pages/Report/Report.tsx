import {
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
  IonButton
} from "@ionic/react";
import "./report.css";

type Props = {};

const Report = (props: Props) => {
  return (
    <IonPage>
      {/*  either can adjust css for this IONHEADER or can use div to solve this */}
      <IonHeader>
        <IonToolbar className="tool-bar-cus-class">
          <IonTitle>
            <p className="title-align">Attendance Report</p>
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid className="grid-position">
          <IonRow className="row-margin">
            <IonCol className="left-col" size="4">
              Year :
            </IonCol>
            <IonCol className="right-col">DD field</IonCol>
          </IonRow>
          <IonRow className="row-margin">
            <IonCol className="left-col" size="4">
              Month :
            </IonCol>
            <IonCol className="right-col">DD field</IonCol>
          </IonRow>
        </IonGrid>
        <IonGrid className="btn-grid">
        <IonRow>
            <IonCol>
            <IonButton onClick={()=>alert('Donwload todo')}>Download</IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Report;
