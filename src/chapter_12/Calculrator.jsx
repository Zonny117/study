import { useState } from 'react';
import TemperatureInput from './TemperatureInput';

function BoilingVerdict(props) {
  if (props.celsius >= 100) {
    return <p>물이 끓습니다.</p>;
  }
  return <p>물이 끓지 않습니다.</p>;
}

function toCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

function tryConvert(temperautre, convert) {
  const input = parseFloat(temperautre);

  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

function Calculrator(props) {
  const [temperautre, setTemperature] = useState('');
  const [scale, setScale] = useState('c');

  const handleCelsiusChange = temperautre => {
    setTemperature(temperautre);
    setScale('c');
  };

  const handleFahrenheitChange = temperautre => {
    setTemperature(temperautre);
    setScale('f');
  };

  const celsius =
    scale === 'f' ? tryConvert(temperautre, toCelsius) : temperautre;

  const fahrenheit =
    scale === 'c' ? tryConvert(temperautre, toFahrenheit) : temperautre;

  return (
    <div>
      <TemperatureInput
        scale="c"
        temperautre={celsius}
        onTemperatureChange={handleCelsiusChange}
      ></TemperatureInput>

      <TemperatureInput
        scale="f"
        temperautre={fahrenheit}
        onTemperatureChange={handleFahrenheitChange}
      ></TemperatureInput>

      <BoilingVerdict celsius={parseFloat(celsius)}></BoilingVerdict>
    </div>
  );
}

export default Calculrator;
