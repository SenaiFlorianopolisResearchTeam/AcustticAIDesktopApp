#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

mod auth;

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![auth::login])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
