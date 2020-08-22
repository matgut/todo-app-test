import React from 'react';
import { FaPizzaSlice } from 'react-icons/fa';

const Header = () =>{

    return (
        <header className="header" data-testid="header">
            <nav>
                <div className="logo">
                    <img src="/img/logo.png" alt="logolist"/>
                </div>
                <div className="settings">
                    <ul>
                        <li>+</li>
                        <li>
                            <FaPizzaSlice/>
                        </li>
                        <li></li>

                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Header;