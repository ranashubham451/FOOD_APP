import { useEffect, useState } from "react";


const useOnlineStatus=()=>{
    const [onlineStatus,setonlineStatus]=useState(true);
    // check if online or offline
    useEffect(()=>{
       window.addEventListener("offline",()=>{
            setonlineStatus(false);
       })
       window.addEventListener("online",()=>{
            setonlineStatus(true);
       })
    },[])
  

    // boolean value
    return onlineStatus;
}
export default useOnlineStatus;