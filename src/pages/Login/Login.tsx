import { useState } from "react";

import { IonAlert } from "@ionic/react";

import { useHistory } from 'react-router-dom';

import Input from "../../components/Input/Input";
import LockIcon from "../../utils/LockIcon";
import UserIcon from "../../utils/UserIcon";
import SVGComponent from "../../utils/LoginImage";
import Logo from "../../utils/Logo";

import "./Login.css";

const Login: React.FC = () => {

  // hooks
  const history = useHistory();
  // states
  const [firstName, setfirstName] = useState("");
  const [password, setpassword] = useState("");
  const [isOpen, setisOpen] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.name === "User Name") {
      setfirstName(event.target.value);
    }

    if (event.target.name === "Password") {
      setpassword(event.target.value);
    }
  };

  const handleSumbit = () => {
    if (!firstName && !password) {
      setisOpen(true);
      return;
    }

    const body = {
      userName: firstName,
      password: password,
    };

    /** 
    * TODO:  make api call for login and handle response and error
    */
    console.log("submitted data", body);
    setfirstName("");
    setpassword("");
    history.push("/dashboard");
  };

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
      <div style={{ margin: "0 15px" }}>
        <Input title="User Name" value={firstName} handleChange={handleChange}>
          <UserIcon />
        </Input>
        <Input
          title="Password"
          type="Password"
          value={password}
          handleChange={handleChange}
        >
          <LockIcon />
        </Input>
      </div>
      <div className="login_btn_container">
        <button className="login_btn" onClick={() => handleSumbit()}>
          LOG IN
        </button>
        <p className="forget_pass" onClick={() => alert("forget PWD will do")}>
          Forget Password?
        </p>
      </div>
      <IonAlert
        isOpen={isOpen}
        message="Please Enter user name and password"
        buttons={["Action"]}
        onDidDismiss={() => setisOpen(false)}
      ></IonAlert>
    </div>
  );
};

export default Login;
