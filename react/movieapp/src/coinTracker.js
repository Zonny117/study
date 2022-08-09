import { useEffect } from 'react';
import { useState } from 'react';

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [value, setValue] = useState(0);
  const [select, setSelect] = useState(0);
  const [buy, setBuy] = useState(0);
  useEffect(() => {
    fetch('https://api.coinpaprika.com/v1/tickers')
      .then(response => response.json())
      .then(json => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  function onChange(e) {
    setValue(e.target.value);
  }
  function handleSelect(e) {
    const price = coins[e.target.selectedIndex].quotes.USD.price;
    setSelect(price);
  }
  useEffect(() => {
    setBuy(select / value);
  }, [select, value]);
  return (
    <div>
      <h1>The Coins! {loading ? null : `(${coins.length})`}</h1>
      <input
        type="text"
        onChange={onChange}
        placeholder="write an amount of coins you want to buy"
        style={{ width: '250px', display: 'block' }}
      />
      {loading ? (
        <strong>Loading....</strong>
      ) : (
        <select onChange={handleSelect} style={{ width: '260px' }}>
          {coins.map(coin => (
            <option key={coin.id}>
              {coin.name} ({coin.symbol}) : $ {coin.quotes.USD.price} USD
            </option>
          ))}
        </select>
      )}
      <div>you can buy {buy ? buy : 0} coins</div>
    </div>
  );
}

export default App;
