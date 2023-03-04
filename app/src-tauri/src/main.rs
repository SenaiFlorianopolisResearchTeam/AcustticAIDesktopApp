#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
#[tauri::command]
fn login(email: &str, _pass: &str, _newpass: &str) -> Result<String, String> {
    let resultado = format!("Os parâmetros foram: {}, {}, {}", email, _pass, _newpass);
    Ok(resultado)
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![login])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
