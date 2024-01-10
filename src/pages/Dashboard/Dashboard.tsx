import Attendence from "../../utils/Attendence"
import Profile from "../../utils/Profile"
import Report from "../../utils/Report"
import Students from "../../utils/Students"
import Teacher from "../../utils/Teacher"
import "./Dashboard.css"

type Props = {}

export default function Dashboard({}: Props) {

  const handleFeatureClick = (params:string) => {
    alert(params)
  }

  return (
    <div className="dashboard-container">
      <div className="dashboard_profile">
        <Profile />
      </div>
        <h3>Arunachala Evening School</h3>
      <div className="students_count">
          <table className="students_count_table">
            <tbody>
              <tr>
                <th>Total Students : </th>
                <td>22 (15)</td>
              </tr>
              <tr>
                <th>Boys : </th>
                <td>10</td>
              </tr>
              <tr>
                <th>Girls : </th>
                <td>12</td>
              </tr>
              <tr>
                <th>Total Teachers : </th>
                <td>05</td>
              </tr>
            </tbody>
          </table>
      </div>
      <div className="absentees">
        <h3>Long Absentees</h3>
          <ol className="absentees_list" type="1">
            <li>Sathish kumar</li>
            <li>Ragav</li>
            <li>Harish</li>
          </ol>
      </div>
      <div className="feature">
        <div className="feature_attendence" onClick={()=>handleFeatureClick('attendence')}>
          <Attendence />
          <p>Attendence</p>
        </div>
        <div className="feature_report" onClick={()=>handleFeatureClick('report')}>
          <Report />
          <p>Attendence<br />Report</p>
        </div>
        <div className="feature_students" onClick={()=>handleFeatureClick('students')}>
          <Students />
          <p>Students</p>
        </div>
        <div className="feature_teachers" onClick={()=>handleFeatureClick('teachers')}>
          <Teacher />
          <p>Teachers</p>
        </div>
      </div>
    </div>
  )
}