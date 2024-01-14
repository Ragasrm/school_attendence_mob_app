import { Network } from "@capacitor/network";
import { useEffect, useState } from "react";

function useNetworkCheckhook() {
  const [netWorkStatus, setNetWorkStatus] = useState({});

  const logCurrentNetworkStatus = async () => {
    const status = await Network.getStatus();
    console.log('Network status:', status);
    setNetWorkStatus(status);
  };

//   const checkInternetConnection = async () => {
//     try {
//       // Make a request to Google (replace with an appropriate URL)
//       const response = await fetch('https://www.google.com', {
//         method: 'GET',
//         mode: 'no-cors', // This is important for a simple HEAD request to check for internet connectivity
//       });

//       console.log("response", response)

//       if (response.ok) {
//         // Internet connection is available
//         console.log('Internet is available');
//         logCurrentNetworkStatus();
//       } else {
//         // Internet connection is not available
//         console.log('Internet is not available');
//         setNetWorkStatus({ connected: false });
//       }
//     } catch (error) {
//       // An error occurred, handle as needed
//       console.error('Error checking internet connection:', error);
//     }
//   };

  useEffect(() => {
    console.log("useNetworkCheckhook")
    // Check internet connection when the component mounts
    // checkInternetConnection();

    // Add network status change listener
    const networkStatusListener = Network.addListener('networkStatusChange', logCurrentNetworkStatus);

    // Cleanup the listener when the component unmounts
    return () => {
      networkStatusListener.remove();
    };
  }, []); // Empty dependency array to run the effect only once during mount

  return {
    netWorkStatus,
    // checkInternetConnection,
  };
}

export default useNetworkCheckhook;
