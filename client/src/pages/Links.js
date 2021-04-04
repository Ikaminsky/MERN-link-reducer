import React, {useCallback, useContext, useEffect, useState} from 'react';
import {useHttp} from "../hooks/useHTTP";
import {AuthContext} from "../context/authContext";
import {Loader} from "../components/Loader";
import {LinksList} from "../components/LinksList";

export const LinksPage = ({}) => {
    const [links, setLinks] = useState()
    const {loading, request} = useHttp()
    const {token} = useContext(AuthContext)

    const fetchLinks = useCallback(async () => {
        try {
            const data = await request('/api/link', 'GET', null, {
                Authorization: `Bearer ${token}`
            })
            setLinks(data)
        } catch (e) {}
    }, [token, request])

    useEffect(() => {
        fetchLinks()
    }, [fetchLinks])

    if (loading) {
        return <Loader />
    }

    return (
        <>
            {!loading && links && (
                <LinksList links={links}/>
            )}
        </>
    );
};
