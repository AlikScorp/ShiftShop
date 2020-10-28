import React from 'react'
import classes from './Header.module.css';
import {Container, Col, Row} from 'reactstrap';
import logo from './logo.svg';
import profile from './user.svg';
import favorites from './Favorites.svg';
import cart from './Cart.svg';
import menu from './menu.svg';
import search from './search.svg';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <Container fluid className='no_gap'>
                <Row lg="3">
                    <Col lg="1">
                        <Logo />
                    </Col>
                    <Col lg="10" className={classes.top_menu}>
                        <Menu />
                    </Col>
                    <Col lg="1" className={classes.language_bar}>
                        <LanguageBar />
                    </Col>
                </Row>
                <Row lg="3" className={classes.tool_bar}>
                    <Col lg="2"><Catalog /></Col>
                    <Col lg="8"><SearchBar /></Col>
                    <Col lg="2"><Icons /></Col>
                </Row>
            </Container>
        </header>
    );
}

const Logo = () => {
    return (
        <NavLink to='/'><img src={logo} alt='ShiftShop Logo' /></NavLink>
    )
}

const Menu = () => {
    return (
        <nav className={classes.top_menu}>
            <NavLink to={`/for_partners`} activeClassName={classes.active} className={classes.top_menu__item}>Партнерам</NavLink>
            <NavLink to={`/for_buyers`} activeClassName={classes.active} className={classes.top_menu__item}>Покупателям</NavLink>
            <NavLink to={`/company`} activeClassName={classes.active} className={classes.top_menu__item}>Компания</NavLink>
        </nav>
    )
}

const LanguageBar = () => {
    return (
        <ul className={classes.language_bar}>
            <li className={`${classes.language_bar__item} ${classes.active}`}>
                <NavLink to="/">Ru</NavLink>
            </li>
            <li className={classes.language_bar__item}>
                <NavLink to='/tm'>Tm</NavLink>
            </li>
        </ul>
    )
}

const Icons = () => {
    return (
        <div className={classes.icons}>
            <div className={classes.icon}><img src={profile} alt="User profile"/></div>
            <div className={classes.icon}><img src={favorites} alt="User profile"/></div>
            <div className={classes.icon}><img src={cart} alt="User profile"/></div>
        </div>
    )
}

const Catalog = () => {
    return (
        <div className={classes.catalog}>
            <div className={classes.catalog__icon}><img src={menu} alt="Menu" /></div>
            <div className={classes.catalog__title}>Каталог</div>
        </div>
    )
}

const SearchBar = () => {
    return (
        <div className={classes.search_bar}>
            <form className={classes.search_form} action="">
                <div className={classes.first_column}>
                    <select name="area" id="area">
                        <option value="everythere">Везде</option>
                        <option value="everywhere">Нигде</option>
                        <option value="neverthere">Никогда</option>
                        <option value="always">Всегда</option>
                    </select>
                </div>
                <div className={classes.second_column}>
                    <input type="text" placeholder="Искать на Shift Shop" />
                </div>
                <div className={classes.third_column}>
                    <button><img src={search} alt="Search"/></button>
                </div>
            </form>
        </div>
    )
}

export default Header;