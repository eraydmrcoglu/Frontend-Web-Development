import React, { useContext } from 'react';
import { Context } from '../context/ProductsProvider';
import { Link } from 'react-router-dom';

const Header = () => {

    const { filterProducts } = useContext(Context);

    const handleClick = (e) => {
        filterProducts(e.target.value)
    }

    return (
      <div className="header">
        <ul className="product-nav">
          <li>
            <Link to="/">Mağaza</Link>
          </li>
          <li>
            <Link to="/favorites">Favoriler</Link>
          </li>
        </ul>

        <div className="product-option">
          <span className="product-option__text">Sırala</span>
          <select onChange={handleClick} className="product-option__select">
            <option value>Seç</option>
            <option value="lowest">Yüksek fiyattan düşük fiyata</option>
            <option value="highest">Düşük fiyattan Yüksek fiyata</option>
          </select>
        </div>
      </div>
    );
}

export default Header;