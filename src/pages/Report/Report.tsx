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
import { yearsData } from "../../utils/common/yearAndMonthGenerator";
import { useState } from "react";

type Props = {};

const Report = (props: Props) => {

  const [year, setYear] = useState(yearsData);
  const [months, setMonths] = useState<any>([]);


  const handleMonthFilter = (selectedYear:any) => {
    console.log(selectedYear?.detail?.value);
    let filteredDate = year.filter(data => data.year === selectedYear?.detail?.value);
    console.log(filteredDate[0].months)
    let month = [...filteredDate[0].months]
    setMonths(month)
  }
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
              <IonSelect fill="outline" placeholder="select year" onIonChange={(e)=>handleMonthFilter(e)} interfaceOptions="{cssClass: 'my-class'}">
                {
                  year.map((data, index)=>(
                    <IonSelectOption key={index} value={data.year}>{data.year}</IonSelectOption>
                  ))
                }
               
                {/* <IonSelectOption value="banana">2021</IonSelectOption>
                <IonSelectOption value="orange">2022</IonSelectOption> */}
              </IonSelect>
            </IonCol>
          </IonRow>
          <IonRow className="row-margin">
            <IonCol className="left-col" size="4">
              Month :
            </IonCol>
            <IonCol className="right-col">
            <IonSelect fill="outline" placeholder="select Month" >
              {
               months &&  months.map((data:any, index:number)=>(
                  <IonSelectOption value={data.month} key={index}>{data.month}</IonSelectOption>
                ))
              }
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
