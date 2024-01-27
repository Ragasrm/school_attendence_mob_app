import { PropsWithChildren } from "react";
import "./input.css";

type InputProps = PropsWithChildren & {
  title: string;
  value?:string;
  handleChange?:any
  type?:string;

};

function Input(prop: any) {
  console.log(prop)  
  const {title, children,value, handleChange, type = "text", register} = prop;
    
  return (
    <>
      <p className="input-title">{title}</p>
      <div style={{ display: "flex", border: "1px solid #d9d9d9", height:'43px', borderRadius:'10px 10px 10px 10px', margin: "0px 0px 10px 0px"  }}>
        {children}
        <input
        {...register}
        className="input-field" 
        type={type}
        //  value={value} 
        //  onChange={(e)=>handleChange(e)}
        />
      </div>
    </>
  );
}

export default Input;
