import React from 'react';
import { Link } from 'react-router-dom';

const Manufactures: React.FC = ():JSX.Element => {
    return (
        <ul className="nav nav-list below">
        <li className="nav-header">MANUFACTURES</li>
        <li><Link to="/product">Adidas</Link></li>
        <li><Link to="/product">Nike</Link></li>
        <li><Link to="/product">Dunlop</Link></li>
        <li><Link to="/product">Yamaha</Link></li>
      </ul>
    )
}

export default Manufactures;