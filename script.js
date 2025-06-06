const passwordInput = document.getElementById("passwordInput");
const togglePasswordCheckbox = document.getElementById("togglePassword");

togglePasswordCheckbox.addEventListener("change", () => {
  // チェックボックスがチェックされているか確認
  if (togglePasswordCheckbox.checked) {
    // チェックされている場合、typeを'text'に変更してパスワードを表示
    passwordInput.type = "text";
  } else {
    // チェックされていない場合、typeを'password'に戻してパスワードを隠す
    passwordInput.type = "password";
  }
});
