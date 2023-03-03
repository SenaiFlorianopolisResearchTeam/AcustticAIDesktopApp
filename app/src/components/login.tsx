import Link from "next/link"
import Styles from "../scss/login.module.scss"

export default function Login(){

    return(
        <div className={Styles.login}>
            <input type="email"/>
            <Link href="/signup">Signup</Link>
        </div>
    )
}