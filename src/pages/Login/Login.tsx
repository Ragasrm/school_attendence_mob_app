import { useState } from "react";

import { IonAlert, IonContent, IonPage, useIonLoading } from "@ionic/react";

import { useHistory } from "react-router-dom";

import { SubmitHandler, useForm } from "react-hook-form";

import Input from "../../components/Input/Input";
import LockIcon from "../../utils/Icons/LockIcon";
import UserIcon from "../../utils/Icons/UserIcon";
import SVGComponent from "../../utils/Icons/LoginImage";
import Logo from "../../utils/Icons/Logo";

import "./Login.css";

type FormField = {
  useName: string;
  password: string;
};

const Login: React.FC = () => {
  // hooks
  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormField>();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [present, dismiss] = useIonLoading();
  // states
  const [firstName, setfirstName] = useState("");
  const [password, setpassword] = useState("");
  const [isOpen, setisOpen] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.name === "User Name") {
      setfirstName(event.target.value);
    }

    if (event.target.name === "Password") {
      setpassword(event.target.value);
    }
  };

  const Sumbit: SubmitHandler<FormField> = async (data) => {
    present({
      message: "Verifying user...!",
    });
    await new Promise((resolve) => setTimeout(resolve, 5000));

  

    const body = {
      ...data,
    };

    /**
     * TODO:  make api call for login and handle response and error
     */
    console.log("submitted data", body);

    setTimeout(() => {
      dismiss();
      setfirstName("");
      setpassword("");

      history.push("/dashboard");
      console.log("Form submitted");
    }, 5000);
  };

  const handleModelClose = () => {
    setisOpen(false);
    setMessage("");
  };

  return (
    <IonPage>
      <IonContent className="ion-content">
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
          <form onSubmit={handleSubmit(Sumbit)}>
            <div style={{ margin: "0 15px" }}>
              {/* <input  className="input-field"  {...register("useName")}/> */}
              <Input
                title="User Name"
                register={{
                  ...register("useName", {
                    required: "Username is Required",
                    validate: (value) => {
                      if (
                        !value.match(
                          "^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$"
                        )
                      ) {
                        return "Invalid User name";
                      }
                      return true;
                    },
                  }),
                }}
              >
                <UserIcon />
              </Input>
              {errors.useName && (
                <div style={{ color: "red" }}>{errors.useName.message}</div>
              )}
              <Input
                title="Password"
                type="Password"
                register={{
                  ...register("password", { required: "password is Required" }),
                }}
              >
                <LockIcon />
              </Input>
              {errors.password && (
                <div style={{ color: "red" }}>{errors.password.message}</div>
              )}
            </div>
            <div className="login_btn_container">
              <button
                disabled={isSubmitting}
                className="login_btn"
                type="submit"
                //onClick={() => handleSumbit()}
              >
                {isSubmitting ? "Loading" : "LOG IN"}
              </button>
              <p
                className="forget_pass"
                onClick={() => alert("forget PWD will do")}
              >
                Forget Password?
              </p>
            </div>
          </form>
          <IonAlert
            isOpen={isOpen}
            message={message}
            buttons={["Action"]}
            onDidDismiss={() => handleModelClose()}
          ></IonAlert>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Login;
