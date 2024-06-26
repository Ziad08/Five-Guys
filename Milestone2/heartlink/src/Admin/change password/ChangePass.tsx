import { useState } from "react";
import "./changePass.css";
import AdminNavbar from "../../components/NavigationBar/AdminNavbar/AdminNavbar.tsx";
import HeaderOfSection from "../../components/Header/HeaderOfSection.tsx";

const ChangePasswordForm = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChangePassword = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (newPassword.trim() === "" || confirmPassword.trim() === "") {
      setError("Please fill in both password fields");
      return;
    }

    if (newPassword !== confirmPassword) {
      setError("Passwords don't match");
      return;
    }

    // Simulate password change success (replace with your actual logic)
    console.log("Changing password to:", newPassword);

    // Reset form fields
    setNewPassword("");
    setConfirmPassword("");
    setError("");

    // Show success alert
    alert("Password changed successfully!");
  };

  const toggleNewPasswordVisibility = () => {
    setShowNewPassword(!showNewPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <>
      <AdminNavbar />
      <div>
        <HeaderOfSection title={"Change Password"} />
      </div>
      <form onSubmit={handleChangePassword} className="formContainer">
        <div className="changePasswordContainer">
          <div style={{ position: "relative", top: "25%" }}>
            <div className="passwordInput">
              <label>New Password:</label>
              <input
                type={showNewPassword ? "text" : "password"}
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
              <button type="button" onClick={toggleNewPasswordVisibility}>
                {showNewPassword ? "Hide" : "Show"}
              </button>
            </div>
            <div className="passwordInput">
              <label>Confirm New Password:</label>
              <input
                type={showConfirmPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <button type="button" onClick={toggleConfirmPasswordVisibility}>
                {showConfirmPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>
        </div>
        <div className="last-div-in-change-password">
          <div className="buttonContainer">
            <button className={"change-button"} type="submit">
              Change Password
            </button>
          </div>
          {error && <p className="errorMessage">{error}</p>}
        </div>
      </form>
    </>
  );
};

export default ChangePasswordForm;
