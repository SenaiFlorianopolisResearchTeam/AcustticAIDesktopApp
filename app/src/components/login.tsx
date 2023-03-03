import Link from "next/link"
import Styles from "../scss/login.module.scss"
import { invoke } from '@tauri-apps/api/tauri'

export default function Login(){

    const Loginauth = () => {
        invoke.call("login")
    }

    return(
        <div className={Styles.login}>
            <input type="email"/>
            <input type="password"/>
            <input type="password"/>
            <button onClick={() => Loginauth()}>Logar</button>
            <Link href="/signup">Signup</Link>
        </div>
    )
}