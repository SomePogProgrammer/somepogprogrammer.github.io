import { useState, useEffect } from 'react';
import { apiFuncs } from 'server-globals'
/*
export async function useAPIRequest(fetchLocation, method, data ) {
    const [lastRequestTime, setRequestTime] = useState(25000)
    var currentTime = apiFuncs.getESTLocalTime({ getRawTime: true })
    fetchLocation = process.env.NEXT_PUBLIC_SITE_URL + "server/api/primaryRoute" + fetchLocation

    
    currentTime = apiFuncs.getESTLocalTime({ getRawTime: true })
    console.log(currentTime)
    console.log(Math.abs(currentTime - lastRequestTime))
    if (Math.abs(currentTime - lastRequestTime) >= 25000) {
        await fetch(
            fetchLocation,
            {
                method: method,
                body: JSON.stringify(data) | null,
                headers: {
                    "Content-Type": "application/json",
                },
            }
        )
            .then(async (res) => {
                var data = await res.json();

                if (data["ERROR_"]) {

                    setRequestTime(currentTime)
                    localStorage.setItem("Last_Request_Time", lastRequestTime)
                    throw { "Error Message": data["Message"], ERROR_: data["ERROR_"] };
                }

                if (data._id) {
                    console.log(data);
                    console.log({ "Request Time": lastRequestTime, "Current Time": currentTime })
                    setRequestTime(currentTime)
                    localStorage.setItem("Last_Request_Time", lastRequestTime)
                    localStorage.setItem("Job_Request", data._id);
                    return data
                }

            })
            .catch((err) => {
                console.log(err);
                return err
            });
    }
};


*/



export function useAPIRequest() {
  const [isOnline, setIsOnline] = useState(true);
  useEffect(() => {
    function handleOnline() {
      setIsOnline(true);
    }
    function handleOffline() {
      setIsOnline(false);
    }
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);
  return isOnline;
}