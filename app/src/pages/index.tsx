import { useEffect } from "react";
import isOnline from 'is-online';
import Login from "../components/login";

export default function App() {

  useEffect(() => {
    async function checkInternetConnection() {
      const online = await isOnline();
      if (online) {
        console.log('Você está conectado à internet!');
      } else {
        window.location.href = '/dashboard';
      }
    }
    checkInternetConnection(); 
  }, []);

  return (
    <div className="content">
      <Login/>
    </div>
  );
}
