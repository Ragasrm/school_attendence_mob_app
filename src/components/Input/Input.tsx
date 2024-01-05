import { PropsWithChildren } from "react";
import UserIcon from "../../utils/userIcon";
import "./input.css";

type InputProps = PropsWithChildren & {
  title: string;
  type?:string
};

function Input(prop: InputProps) {
    const {title, children, type = "text"} = prop;
  return (
    <>
      <p className="input-title">{title}</p>
      <div style={{ display: "flex", border: "1px solid #d9d9d9", height:'43px', borderRadius:'10px 10px 10px 10px', margin: "0px 0px 10px 0px"  }}>
        {children}
        <input className="input-field" type={type} />
      </div>
    </>
  );
}

export default Input;
