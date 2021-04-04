import React, {useContext, useEffect} from 'react';
import {useHttp} from "../hooks/useHTTP";
import {useMessage} from "../hooks/useMessage";
import {AuthContext} from "../context/authContext";

export const AuthPage = () => {
    const auth = useContext(AuthContext);
    const {request, error, clearError} = useHttp();
    const message = useMessage();
    const [form, setForm] = React.useState({email: '', password: ''});
    const changeHandler = (e) => {
        setForm({...form, [e.target.name]: e.target.value})
    }

    useEffect(() => {
        window.M.updateTextFields();
    }, [])

    useEffect(() => {
        message(error);
        clearError();
    }, [error, message])

    const registerHandler = async () => {
        try {
            const data = await request('/api/auth/register', 'POST', {...form});
            message(data.message)
        } catch (e) {}
    }

    const loginHandler = async () => {
        try {
            const data = await request('/api/auth/login', 'POST', {...form});
            auth.login(data.token, data.userId)
            message(data.message)
        } catch (e) {}
    }
    return (
        <div>
            <h1>Auth page</h1>
            <div className="col s6 offset-s3">
                <div className="card blue darken-1">
                    <div className="card-content white-text">
                        <span className="card-title">Authorization</span>
                        <div className="input-field col s6">
                            <input
                                placeholder="Enter email"
                                id="email" type="email"
                                name="email"
                                onChange={changeHandler}
                                value={form.email}
                            />
                                <label htmlFor="email">Email</label>
                        </div>
                        <div className="input-field col s6">
                            <input
                                placeholder="Enter password"
                                id="password"
                                type="password"
                                name="password"
                                onChange={changeHandler}
                                value={form.password}
                            />
                            <label htmlFor="password">Email</label>
                        </div>
                    </div>
                    <div className="card-action">
                       <button
                           onClick={loginHandler}
                           className="btn yellow darken-4"
                           style={{marginRight: 20}}
                       >
                           Enter
                       </button>
                        <button
                            onClick={registerHandler}
                            className="btn grey lighten-1 black-text"
                        >
                            Registration
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
