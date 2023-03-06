#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

mod auth;

use std::process::Command;

fn main() {

    //Command::new("meu_executavel.exe")
            //.spawn()
            //.expect("Falha ao iniciar o executável");

    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![auth::login])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
