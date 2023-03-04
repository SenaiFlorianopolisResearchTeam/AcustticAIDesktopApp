#[tauri::command]
pub fn login(email: &str, _pass: &str, _newpass: &str) -> Result<String, String> {
    let resultado = format!("Os parâmetros foram: {}, {}, {}", email, _pass, _newpass);
    Ok(resultado)
}