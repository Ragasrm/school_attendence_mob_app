import React from "react";

function UserIcon() {
  return (
    <div style={{ padding:'5px', backgroundColor:'#d9d9d9', borderRadius:'10px 0px 0px 10px'}}>
      <svg
        width="22"
        height="25"
        viewBox="0 0 22 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.9998 12.1951C14.3414 12.1951 17.0504 9.46515 17.0504 6.09756C17.0504 2.72998 14.3414 0 10.9998 0C7.65817 0 4.94922 2.72998 4.94922 6.09756C4.94922 9.46515 7.65817 12.1951 10.9998 12.1951Z"
          fill="#292D32"
        />
        <path
          d="M11 15.2439C4.93728 15.2439 0 19.3415 0 24.3902C0 24.7317 0.266226 25 0.605059 25H21.3949C21.7338 25 22 24.7317 22 24.3902C22 19.3415 17.0627 15.2439 11 15.2439Z"
          fill="#292D32"
        />
      </svg>
    </div>
  );
}

export default UserIcon;
