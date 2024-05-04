import "./Buttons.css";
const showLogin = () => {
  var login = document.querySelector(".login") as HTMLElement;
  var welcome = document.querySelector(".welcomeDashboard") as HTMLElement;
  var app = document.querySelector(".app") as HTMLElement;
  login.style.display = "flex";
  welcome.classList.add("shade");
  app.classList.add("shade");
};
function LoginButton() {
  return (
    <button className="loginButton" onClick={showLogin}>
      Login
    </button>
  );
}

export default LoginButton;
