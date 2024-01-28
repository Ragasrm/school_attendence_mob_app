import { Network } from "@capacitor/network";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

function useNetworkCheckhook() {
  const history = useHistory();
  // const [netWorkStatus, setNetWorkStatus] = useState({});

  const logCurrentNetworkStatus = async (_history:any) => {
    const status = await Network.getStatus();
    console.log('Network status:', status);
    console.log('connected status:', status.connected);


    if(!status.connected){
      console.log("try logout")
      _history.push("/login")
    }
    // setNetWorkStatus(status);
  };
  useEffect(() => {
    // Check internet connection when the component mounts
    // checkInternetConnection();

    // Add network status change listener
    const networkStatusListener = Network.addListener('networkStatusChange', ()=>logCurrentNetworkStatus(history));

    // Cleanup the listener when the component unmounts
    return () => {
      networkStatusListener.remove();
    };
  }, []); // Empty dependency array to run the effect only once during mount

  // return {
  //   netWorkStatus,
  //   // checkInternetConnection,
  // };
}

export default useNetworkCheckhook;
