import Link from "next/link"
import Styles from "../scss/login.module.scss"
import { invoke } from '@tauri-apps/api/tauri'

export default function Login(){

    const Loginauth = async (email: string, pass:string, newpass:string) => {
        try {
            const resultado = await invoke('login', {email, pass, newpass});
            console.log(resultado);
          } catch (e) {
            console.error(e);
          }
    }

    const testemail = "a@gmail.com"
    const testpass = "123"

    return(
        <div className={Styles.login}>
            <input type="email"/>
            <input type="password"/>
            <input type="password"/>
            <button onClick={() => Loginauth(testemail, testpass, testpass)}>Logar</button>
            <Link href="/signup">Signup</Link>
        </div>
    )
}