import React from 'react';
import './App.css';
import Header from './Common/Header'
import Footer from './Common/Footer'
import Banner from './Common/Banner'
import PopularGoods from './Mainpage/Sections/PopularGoods/PopularGoods';
import DiscountGoods from './Mainpage/Sections/DiscountGoods/DiscountGoods';
import {BrowserRouter as Router, Route, Switch } from "react-router-dom"

// const languages = { 
//   rus: {lang: 'Русский', url: '', path: 'ru'},
//   tkm: {lang: 'English', url: '/tm', path: 'tm'}
// }

const App = () => {
  // const locale = window.localStorage.getItem('locale');
  // let language = null;

  // console.log(window.location.pathname);

  // if ( locale === null ) {
  //   language = languages.rus;
  //   window.localStorage.setItem( 'locale', JSON.stringify(language) );
  // }
  // else {
  //   language = JSON.parse(locale);
  // }

  // console.log(language);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/for_partners">
            <Header/>
            <h2>For Partners</h2>
          </Route>
          <Route path="/for_buyers">
            <Header/>
            <h2>For buyers</h2>
          </Route>
          <Route path="/company">
            <Header/>
            <h2>ShiftShop</h2>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

const MainPage = () => {
  return(
    <>
      <Header/>
      <Banner/>
      <PopularGoods/>
      <DiscountGoods/>
      <Footer/>
    </>

  )
}

export default App;
