import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react'
import "./attendence.css"

type Props = {}

function attendence({}: Props) {
  return (
   <IonPage>
    <IonHeader>
        <IonToolbar className='ion-tool-bar'>
            <IonTitle>QR CODE Scanner</IonTitle>
        </IonToolbar>
    </IonHeader>
    <IonContent>

    </IonContent>
   </IonPage>
  )
}

export default attendence