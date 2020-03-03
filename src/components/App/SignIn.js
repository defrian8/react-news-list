import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import api from '../../config/api';
import { setUser } from '../../config/auth';
function SignIn() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    
    let history = useHistory();

    const handleLogin = e => {
        e.preventDefault();
        setError(null);
        setLoading(true);
        const uname = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        let credential = {
            username: uname,
            password: password,
        };
        if (uname !== "" && password !== "") {
            api.post("/login", credential)
                .then(response => {
                    setLoading(false);

                    if (response.data.error != null) {
                        if (response.data.error === true) {
                            setError(response.data.message);
                        }

                    } else {
                        let token = response.data.meta.token;
                        let userData = response.data.data;
                        setUser(token, userData);
                        //props.history.push("/");
                        history.push("/");
                    }
                }).catch(error => {
                    setLoading(false);
                    setError("Error Try again");
                });
        }else{
            setError("Fill all field");
            setLoading(false);
        }
    }
    return (
        <div className="Login">
            <header className="modal-card-head">
                <p className="modal-card-title">Login</p>
                <Link to="/">Kembali</Link>
            </header>
            <section id="login-body">
                <form onSubmit={handleLogin}>
                    <div className="form-group">
                        <input type="text" name="username" id="username" />

                    </div>
                    <div className="form-group">
                        <input type="password" name="password" id="password" />

                    </div>
                    <div className="form-group">
                        {error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br />
                        <button className="btn btn-login" type="submit"
                            onClick={handleLogin} disabled={loading}>
                            {loading ? 'Loading...' : 'Login'}
                        </button>
                    </div>
                </form>
            </section>

        </div>
    );

}
const useFormInput = initialValue => {
    const [value, setValue] = useState(initialValue);

    const handleChange = e => {
        setValue(e.target.value);
    }
    return {
        value,
        onChange: handleChange
    }
}
export default SignIn