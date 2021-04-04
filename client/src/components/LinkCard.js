import React from 'react';

export const LinkCard = ({link}) => {
    const {to, from, clicks, date} = link
    return (
        <div>
            <h2>Link</h2>
            <p>Reduced link: <a href={to} target="_blank" rel="noreferrer" >{to}</a></p>
            <p>From: <a href={from} target="_blank" rel="noreferrer" >{from}</a></p>
            <p>Clicks amount: <strong>{clicks}</strong></p>
            <p>Creation time: <strong>{new Date(date).toLocaleString()}</strong></p>
        </div>
    );
};
