
import react from 'react';
import "./css/form.css";

export default function Form(props) {
    return (
        <div>
            <div>
                <div className="background">
                    <div className="shape"></div>
                    <div className="shape"></div>
                </div>
                <form>
                    <h3>Login</h3>
                    <label>Username</label>
                    <input type="text" placeholder="Email or Phone" id="username"/>
                    <label>Password</label>
                    <input type="password" placeholder="Password" id="password"/>
                    <button>Log In</button>
                </form>
            </div>
        </div>
    )
}




