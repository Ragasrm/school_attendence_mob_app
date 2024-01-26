import {
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
  IonButton,
  IonSelect,
  IonSelectOption,
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
      <IonContent className="ion-content">
        <IonGrid className="grid-position">
          <IonRow className="row-margin">
            <IonCol className="left-col" size="4">
              Year :
            </IonCol>
            <IonCol className="right-col">
              <IonSelect fill="outline" placeholder="select year">
                <IonSelectOption value="apple">2020</IonSelectOption>
                <IonSelectOption value="banana">2021</IonSelectOption>
                <IonSelectOption value="orange">2022</IonSelectOption>
              </IonSelect>
            </IonCol>
          </IonRow>
          <IonRow className="row-margin">
            <IonCol className="left-col" size="4">
              Month :
            </IonCol>
            <IonCol className="right-col">
            <IonSelect fill="outline" placeholder="select Month">
                <IonSelectOption value="apple">Jan</IonSelectOption>
                <IonSelectOption value="banana">Feb</IonSelectOption>
                <IonSelectOption value="orange">March</IonSelectOption>
              </IonSelect>
            </IonCol>
          </IonRow>
        </IonGrid>
        <IonGrid className="btn-grid">
          <IonRow>
            <IonCol>
              <IonButton onClick={() => alert("Donwload todo")}>
                Download
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Report;
