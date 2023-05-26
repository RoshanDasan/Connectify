import React,{useEffect} from 'react'
import jwt_decode from 'jwt-decode';

interface Window {
  google: any;
}

function GoogleAuth() {
  function handleCallbackResponse(response: any) {
    console.log(response);
    console.log(jwt_decode(response.credential));
  }

  useEffect(() => {
    /* global google */
    (window as unknown as Window).google.account.id.initialize({
      client_id: "465788205530-d09rv4blovs5l31q350pluh7gn0e38cr.apps.googleusercontent.com",
      callback: handleCallbackResponse
    });
  
    (window as unknown as Window).google.accounts.id.renderButton(
      document.getElementById("googleLoginButton")!,
      { theme: "outline", size: 'large' }
    );
  }, []);
  


  return (
    <div>
      <div>
      <div id='googleLoginButton'></div>
      </div>
    </div>
  )
}

export default GoogleAuth
