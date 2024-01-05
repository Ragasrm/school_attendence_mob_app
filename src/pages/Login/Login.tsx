import Input from "../../components/Input/Input";
import LockIcon from "../../utils/LockIcon";
import SVGComponent from "../../utils/LoginImage";
import Logo from "../../utils/Logo";
import UserIcon from "../../utils/userIcon";
import "./Login.css";

const Login: React.FC = () => {
  return (
    <div className="login-container">
      <div className="login-logo">
        <Logo />
      </div>
      <div className="login_img">
        <SVGComponent />
      </div>
      <div className="login_title_container">
        <div>Arunachala Evening</div>
        <div>School</div>
      </div>
      <div style={{margin:'0 15px'}}> 
          <Input title="User Name"><UserIcon/></Input>
          <Input title="Password" type="Password"><LockIcon/></Input>

        </div>
      <div className="login_btn_container">
        <div className="login_btn" onClick={()=> alert("Login function will do")}>LOG IN</div>
        <p className="forget_pass" onClick={()=> alert("forget PWD will do")}>Forget Password?</p>
      </div>
    </div>
  );
};

export default Login;
