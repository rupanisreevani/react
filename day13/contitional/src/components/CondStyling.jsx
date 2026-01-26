import"./Styling.css"
export function CondStyling() {
  const isLoggedIn = true;

  return (
    <div>
      {
        isLoggedIn
          ? <p className="login">Successfully Logged In</p>
          : <p className="logout">Failed to Login</p>
      }
    </div>
  );
}
