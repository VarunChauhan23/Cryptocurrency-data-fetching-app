import React, { useState, useEffect } from 'react';
import CoinLayout from './CoinLayout';
import axios from 'axios';
import Loader from './Loader';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import '../App.css';

function FetchCoins() {

    // useState hook coins to get the parsedData of all the coins
    const [coins, setCoins] = useState([]);

    // useState hook to handle the loading
    const [loading, setLoading] = useState(true);

    // useState hook to handle the search values
    const [searchValue, setSearchValue] = useState("");

    // axios.get is a function which send get request to the specified URL.
    useEffect(() => {
        axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en&precision=3")
            .then(res => {
                setCoins(res.data);
                setLoading(false);
            }).catch(error => {
                console.log(error);
                setLoading(false);
            })
    }, [])

    // function to handle the filter of coin as per the search term
    const filteredCoins = coins.filter(coin =>
        coin.name.toLowerCase().includes(searchValue.toLowerCase())
    )

    return (
        <>
            <InputGroup id='coin-search'>
                <Form.Control as="textarea" id='coin-input' aria-label="With textarea" placeholder='Provide a coin name' value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
            </InputGroup>
            {loading ? (
                <Loader />
            ) : (
                <div>
                    {filteredCoins.map((element) => (
                        <CoinLayout key={element.id} image={element.image} name={element.name} price={element.current_price} market_cap={element.market_cap} price_change={element.price_change_percentage_24h} />
                    ))}
                </div>
            )}
        </>
    )
}

export default FetchCoins
