import { useState } from "react";
import { invoke } from "@tauri-apps/api/tauri";
import Image from "next/image";
import Navbar from "../components/navbar";
import Dropbox from "../components/dropbox";

export default function Dashboard() {

  return (
    <>
      <Navbar/>
      <div className="content">
        <Dropbox/>
        <h1>Dashboard</h1>
      </div>
    </>
  );
}
