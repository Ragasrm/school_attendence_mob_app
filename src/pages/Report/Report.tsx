import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react";

type Props = {};

const Report = (props: Props) => {
  return (
    <IonPage>

        {/*  either can adjust css for this IONHEADER or can use div to solve this */}
        <IonHeader>
        <IonToolbar>
          <IonTitle>Attendance Report</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
      <p>Report content will come here</p>
      </IonContent>
    </IonPage>
  );
};

export default Report;
