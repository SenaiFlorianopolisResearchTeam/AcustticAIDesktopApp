import { useState, useEffect } from "react";
import { invoke } from "@tauri-apps/api/tauri";
import Image from "next/image";
import isOnline from 'is-online';
import Link from "next/link";

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
    <>
      <h1>login</h1>
      <Link href="/signup">signup</Link>
    </>
  );
}
