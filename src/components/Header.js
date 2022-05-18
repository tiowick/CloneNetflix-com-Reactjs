import React from "react";
import './Header.css';


export default ({black}) => {
    return (
        <header className={black ? 'black' : ''}>
            <div className="header--logo">
                <a href="/">
                    <img src="http://www.stickpng.com/img/download/580b57fcd9996e24bc43c529/image" alt=""/>
                </a>
            </div>
            <div className="header--user">
                <a href="/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="usuario"/>
                </a>
            </div>
        </header>
    );
}
