import React from "react";
import { Link } from "react-router-dom";

const SubCatergories: React.FC = (): JSX.Element => {
  return (
    <ul className="nav nav-list">
      <li className="nav-header">SUB CATEGORIES</li>
      <li>
        <Link to="/product">Nullam semper elementum</Link>
      </li>
      <li className="active">
        <Link to="/product">Phasellus ultricies</Link>
      </li>
      <li>
        <Link to="/product">Donec laoreet dui</Link>
      </li>
      <li>
        <Link to="/product">Nullam semper elementum</Link>
      </li>
      <li>
        <Link to="/product">Phasellus ultricies</Link>
      </li>
      <li>
        <Link to="/product">Donec laoreet dui</Link>
      </li>
    </ul>
  );
};

export default SubCatergories;
