import React, {useContext, useEffect, useState} from 'react';
import {useHttp} from "../hooks/useHTTP";
import {AuthContext} from "../context/authContext";
import {useHistory} from "react-router-dom";

export const CreatePage = () => {
    const auth = useContext(AuthContext);
    const {request} = useHttp();
    const history = useHistory();
    const [link, setLink] = useState('');

    useEffect(() => {
        window.M.updateTextFields();
    }, [])

    const handleLinkChange = e => {
        setLink(e.target.value)
    }

    const pressHandler = async e => {
        if (e.key === 'Enter') {
            try {
                const data = await request('/api/link/generate',
                    'POST', {from: link}, {Authorization: `Bearer ${auth.token}`});
                history.push(`/detail/${data.link._id}`)
            } catch (e) {

            }
        }
    }

    return (
        <div className="row">
            <div className="col s8 offset-s2" style={{paddingTop: '2rem'}}>
                <div className="input-field col s6">
                    <input
                        placeholder="Put your link"
                        id="Link" type="text"
                        name="email"
                        onChange={handleLinkChange}
                        value={link}
                        onKeyPress={pressHandler}
                    />
                    <label htmlFor="link">Enter link</label>
                </div>
            </div>
        </div>
    );
};
