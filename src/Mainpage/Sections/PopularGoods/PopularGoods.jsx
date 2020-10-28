import React from 'react';
import {Col, Row, Container} from 'reactstrap';
import classes from './PopularGoods.module.css';
import Banner1 from './banner1.jpg';
import Banner2 from './banner2.jpg';
import samsungGalaxy from './samsungGalaxy.jpg';
import heart from './Heart.svg';

const PopularGoods = () => {
    return(
        <section className={classes.popularGoods}>
            <Container fluid>
                <Row lg="1">
                    <Col lg="12">
                        <h2>Популярные товары</h2>
                    </Col>
                </Row>
                <Row lg="4" className={classes.justify_sb}>
                    <Col lg="3" className={classes.product}>
                        <ProductItem id="1" title="Смартфон Samsung A107" price="3280" image={samsungGalaxy} old_price="5280"/>
                    </Col>
                    <Col lg="3" className={classes.product}>
                        <ProductItem id="1" title="Смартфон Samsung A107" price="3280" image={samsungGalaxy} old_price="5280"/>
                    </Col>
                    <Col lg="3" className={classes.product}>
                        <ProductItem id="1" title="Смартфон Samsung A107" price="3280" image={samsungGalaxy} old_price="5280"/>
                    </Col>
                    <Col lg="3" className={`${classes.banner}`}>
                        <img src={Banner1} alt="Presino Banner"/>
                    </Col>
                </Row>
                <Row lg="4" className={classes.justify_sb}>
                    <Col lg="3" className={classes.product}>
                        <ProductItem id="1" title="Смартфон Samsung A107" price="3280" image={samsungGalaxy} old_price="5280"/>
                    </Col>
                    <Col lg="3" className={classes.product}>
                        <ProductItem id="1" title="Смартфон Samsung A107" price="3280" image={samsungGalaxy} old_price="5280"/>
                    </Col>
                    <Col lg="3" className={classes.product}>
                        <ProductItem id="1" title="Смартфон Samsung A107" price="3280" image={samsungGalaxy} old_price="5280"/>
                    </Col>
                    <Col lg="3" className={`${classes.banner}`}>
                        <img src={Banner2} alt="Samsung Banner"/>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}


const ProductItem = ({id, title, price, image, favorite = false, old_price}) => {
    return (
        <figure className={classes.product}>
            <div className={classes.discount}>-5%</div>
            <img className={classes.favorite} src={heart} alt="Favorite" />
            <img src={image} alt={title} />
            <hr />
            <figcaption className={classes.product_title}>{title}</figcaption>
            <div className={classes.prices}>
                <h3 className={classes.new_price}>{price} tmt</h3>
                <h3 className={classes.old_price}>{old_price} tmt</h3>
            </div>
            <div className={classes.btn_toBin}>В корзину</div>
        </figure>
    )
}


export default PopularGoods