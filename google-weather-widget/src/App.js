import logo from "./logo.svg";
import "./App.css";
import WeatherCard from "./components/WeatherCard";
import cloud from "./weather-img/cloudy.png";
import lightCloud from "./weather-img/partly_cloudy.png";
import lightRain from "./weather-img/rain_light.png";
import heavyRain from "./weather-img/rain.png";
import sunny from "./weather-img/sunny.png";

const weatherArr = [
  {
    day: "Sun",
    type: sunny,
    minTemperature: 20,
    maxTemperature: 30,
  },
  {
    day: "Mon",
    type: sunny,
    minTemperature: 17,
    maxTemperature: 25,
  },
  {
    day: "Tue",
    type: lightCloud,
    minTemperature: 15,
    maxTemperature: 22,
  },
  {
    day: "Wed",
    type: lightRain,
    minTemperature: 10,
    maxTemperature: 19,
  },
  {
    day: "Thu",
    type: heavyRain,
    minTemperature: 11,
    maxTemperature: 20,
  },
  { day: "Fri", type: cloud, minTemperature: 12, maxTemperature: 19 },
  {
    day: "Sat",
    type: lightCloud,
    minTemperature: 15,
    maxTemperature: 20,
  },
];
function App() {
  return (
    <div className="weather-div">
      {weatherArr.map((day) => (
        <WeatherCard
          day={day.day}
          type={day.type}
          maxTemperature={`${day.maxTemperature}°`}
          minTemperature={`${day.minTemperature}°`}
        />
      ))}
    </div>
  );
}

export default App;
