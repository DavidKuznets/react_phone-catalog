/* eslint-disable max-len */
import { NavLink, Link } from 'react-router-dom';
import './Header.scss';
import classNames from 'classnames';
import { useCart } from '../../Functional/CartContext/CartContext';
import { Aside } from '../Aside/Aside';
import { useState } from 'react';
import heartLove from '../../../public/figmaLogo/HeartLove.svg';
import figmaLogo from '../../../public/figmaLogo/Logo.svg';
import packetImg from '../../../public/figmaLogo/Packet.svg';

export const Header = () => {
  const { cart, favorites } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const getLinkClass = ({ isActive }: { isActive: boolean }) =>
    classNames('navbar-item', {
      'is-active': isActive,
    });

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  return (
    <header className="header">
      <div className="header__top">
        <div className="header__logo">
          <Link to="/">
            <img src={figmaLogo} alt="NiceGadgets logo" />
          </Link>
        </div>

        <nav className="header__nav">
          <NavLink to="/" className={getLinkClass}>
            HOME
          </NavLink>
          <NavLink to="/phones" className={getLinkClass}>
            PHONES
          </NavLink>
          <NavLink to="/tablets" className={getLinkClass}>
            TABLETS
          </NavLink>
          <NavLink to="/accessories" className={getLinkClass}>
            ACCESSORIES
          </NavLink>
        </nav>

        <div className="header__head--logo">
          <div className="header__heart">
            <Link to="/favorites" className="header__heart__top">
              <img
                src={heartLove}
                alt="Favorites"
                className="header__heart__top__btn"
              />
              {favorites.length > 0 && (
                <span className="cart-count cart-count--favorites">
                  {favorites.length}
                </span>
              )}
            </Link>
          </div>

          <div className="header__packet">
            <Link to="/cart" className="header__packet__top">
              <img
                src={packetImg}
                alt="Cart"
                className="header__packet__top__btn"
              />
              {cart.length > 0 && (
                <span className="cart-count cart-count--cart">
                  {cart.length}
                </span>
              )}
            </Link>
          </div>

          <div className="header__burger-wrapper">
            <div className="header__burger">
              <button
                type="button"
                className="header__burger-menu"
                onClick={toggleMenu}
              >
                <span />
                <span />
                <span />
              </button>
            </div>
          </div>
        </div>
        <Aside isMenuOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      </div>
    </header>
  );
};
