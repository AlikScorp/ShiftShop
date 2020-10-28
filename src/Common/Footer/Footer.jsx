import React from "react";
import { NavLink } from "react-router-dom";
import { Container, Col, Row } from "reactstrap";
import classes from "./Footer.module.css";
import logo from "./logo.svg";

// const menu = [
//     {
//         title: 'Партнерам',
//         url: '/',
//         submenu:
//         [
//             {
//                 title: 'Сотрудничество',
//                 url: '/',
//                 submenu: false
//             },
//             {
//                 title: 'Правила',
//                 url: '/',
//                 submenu: false
//             }
//         ]
//     },
//     {
//         title: 'Покупателям',
//         url: '/',
//         submenu:
//         [
//             {
//                 title: 'Как сделать заказ',
//                 url: '/',
//                 submenu: false
//             },
//             {
//                 title: 'Способы оплаты',
//                 url: '/',
//                 submenu: false
//             },
//             {
//                 title: 'Условия доставки',
//                 url: '/',
//                 submenu: false
//             },
//             {
//                 title: 'Возврат товара',
//                 url: '/',
//                 submenu: false
//             }
//         ]
//     },
//     {
//         title: 'Компания',
//         url: '/',
//         submenu:
//         [
//             {
//                 title: 'О нас',
//                 url: '/',
//                 submenu: false
//             },
//             {
//                 title: 'Контакты',
//                 url: '/',
//                 submenu: false
//             },
//             {
//                 title: 'Вакансии',
//                 url: '/',
//                 submenu: false
//             }
//         ]
//     }
// ];

const Footer = () => {
  // let cStr = '';
  // menu.forEach((item, key, array) => {
  //     cStr += `<li><a href="${item.url}">${item.title}</a>`;
  //     if (item.submenu) {
  //         cStr += `<ul className=${classes.submenu}>`;
  //         item.submenu.forEach((item, key, array) => {
  //             cStr += `<li><a href="${item.url}">${item.title}</a></li>`;
  //         })
  //         cStr += '</ul>';
  //     }
  //     cStr += '</li>';
  // })

  // console.log(cStr);

  // let {path, url} = useRouteMatch();

  return (
    <footer>
      <Container fluid className="no_gap">
        <Row lg="3">
          <Col lg="3">
            <div className={classes.logo}>
              <img src={logo} alt="Shift Shop Logo" />
            </div>
          </Col>
          <Col lg="6">
            <div className={classes.site_map}>
              <ul className={classes.main_menu}>
                <li>
                  <NavLink to="/for_partners">Партнерам</NavLink>
                  <ul className={classes.submenu}>
                    <li>
                      <NavLink to="/">Сотрудничество</NavLink>
                    </li>
                    <li>
                      <NavLink to="/">Правила</NavLink>
                    </li>
                  </ul>
                </li>
                <li>
                  <NavLink to="/for_buyers">Покупателям</NavLink>
                  <ul className={classes.submenu}>
                    <li>
                      <NavLink to="/">Как сделать заказ</NavLink>
                    </li>
                    <li>
                      <NavLink to="/">Способы оплаты</NavLink>
                    </li>
                    <li>
                      <NavLink to="/">Условия доставки</NavLink>
                    </li>
                    <li>
                      <NavLink to="/">Возврат товара</NavLink>
                    </li>
                  </ul>
                </li>
                <li>
                  <NavLink to="/company">Компания</NavLink>
                  <ul className={classes.submenu}>
                    <li>
                      <NavLink to="/">О нас</NavLink>
                    </li>
                    <li>
                      <NavLink to="/">Контакты</NavLink>
                    </li>
                    <li>
                      <NavLink to="/">Вакансии</NavLink>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </Col>
          <Col lg="3">
            <div className={classes.empty}>&nbsp;</div>
          </Col>
          <Col lg="12">
            <div className={classes.copyright}>&copy; 2020 ShiftShop</div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
