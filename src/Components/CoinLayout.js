import React from "react";
import './Coin.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function CoinLayout({ image, name, price, market_cap, price_change }) {
    // here all image, name, price, market_cap, price_change are props
    // line 16 code ensures that if change is posotive then data will be gree otherwise red showing decrement or increment
    return (
        <div className="coin-container">
            {/* <div className="coin-row">
                <div className="coin">
                    <img src={image} alt="crypto" />
                    <h1>{name}</h1>
                    <p className="coin-symbol"></p>
                </div>
                <div className="coin-data">
                    <p className="coin-price">Rs.{price}</p>
                    {price_change<0 ? (<p className="coin-percent red">{price_change}%</p>):(<p className="coin-percent green">{price_change}%</p>)}
                <p className="coin-marketcap">
                    Mkt Cap: Rs.{market_cap}
                </p>
                </div>
            </div> */}
            <Row id="coin-row">
                <Col id="coin">
                    <img src={image} alt="crypto" id="coin-image" />
                    <h1 id="coin-name">{name}</h1>
                </Col>
                <Col>
                    <p className="coin-price">Rs.{price}</p>
                </Col>
                <Col>
                    {price_change < 0 ? (<p className="coin-percent red">{price_change}%</p>) : (<p className="coin-percent green">{price_change}%</p>)}
                </Col>
                <Col>
                    <p className="coin-marketcap">
                        Mkt Cap: Rs.{market_cap}
                    </p>
                </Col>
            </Row>
        </div>
    )
}

export default CoinLayout
