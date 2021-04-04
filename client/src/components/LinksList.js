import React from 'react';
import {Link} from "react-router-dom";

export const LinksList = ({links}) => {
    if (!links.length) {
        return <p className="center">There is no links</p>
    }
    return (
        <div>
            <table>
                <thead>
                <tr>
                    <th>№</th>
                    <th>Original link</th>
                    <th>Reduced link</th>
                    <th>Open</th>
                </tr>
                </thead>

                <tbody>
                {links.map((item, idx) => (
                    <tr key={item._id}>
                        <td>{idx + 1}</td>
                        <td>{item.from}</td>
                        <td>{item.to}</td>
                        <td>
                            <Link to={`/detail/${item._id}`}>Open</Link>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};
