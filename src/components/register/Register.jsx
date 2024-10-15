import "./register.css";

const Register = () => {
    return (
        <div className="login-container">
            <div className="login-wrapper">
                <div className="login-left">
                    <h3 className="login-logo">Social media App</h3>
                    <span className="login-desc">
                        Connect with friends and the world around you on Social media App.
                    </span>
                </div>
                <div className="login-right">
                    <div className="login-box">
                        <input className="login-input" placeholder="Username" />
                        <input className="login-input" placeholder="Email" />
                        <input className="login-input" placeholder="Password" />
                        <input className="login-input" placeholder="Password again" />
                        <button className="login-button">Log in</button>
                        <button className="login-register-button">Create a New Account</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Register
