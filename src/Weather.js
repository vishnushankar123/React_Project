import React, { useState} from 'react';
import axios from 'axios';
import './Weather.css'
// import './Spread.css';
// import '../node_modules/bootstrap/dist/css/bootstrap.css';
// import '../node_modules/bootstrap/dist/js/bootstrap.js';
 
const Weather = () => {
    const [currentWeather, setCurrentWeather] = useState({});
    const [forecast, setForecast] = useState([]);
    const [loc, setLoc] = useState('');
    // Function to handle input change for location
    const locationChange = (e) => {
        setLoc(e.target.value);
    };
    // Function to fetch current weather and forecast data
    const fetchData = () => {
        // Fetch current weather data
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=11c15604a23bd024c1c83c12bf0a9e6f`)
            .then((res) => {
                setCurrentWeather(res.data);
            })
        // Fetch forecast data
        axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${loc}&appid=11c15604a23bd024c1c83c12bf0a9e6f`)
            .then((res) => {
                // Filter to get daily forecast (every 8th item)
                const dailyForecast = res.data.list.filter((forecastItem, index) => index % 8 === 0);
                setForecast(dailyForecast);
            })  
    };
    // Effect hook to fetch data when location changes
    // useEffect(() => {
    //     fetchData();
    // });
    return (
        <div className='body' id="Weather">
            <div className="container-fluid" id="Weather">
                <div className="row">
                    <div className="col-md-4 text-warning">
                        <h1>Weather<br />&Forecast</h1>
                    </div>
                    <div className="col-md-4"></div>
                    <div className="col-md-4">
                        <h1>
                            <span className="text-white">Date</span>
                            <br />
                            <span style={{color:'white'}}>{new Date().toLocaleDateString('en-US')}</span>
                        </h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-5">
                        <input type="text" className="form-control" placeholder="Enter your city" style={{ width: '100%' }} onChange={locationChange} />
                    </div>
                    <div className="col-md-5">
                        <button className="but" onClick={fetchData}>Get Data</button>
                    </div>
                    <div className="col-md-2"></div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="text-center" style={{color:'white'}}>CURRENT WEATHER</h1>
                    </div>
                </div>
                <div className="row current-weather">
                    <div className="col-md-4">
                        <h1 style={{color:'white'}}>
                            {currentWeather.name},{currentWeather.sys?.country}
                            <br />
                            {new Date().toLocaleDateString('en-US')}
                        </h1>
                    </div>
                    <div className="col-md-4">
                        <h3 style={{color:'white'}}>
                            Temp{' '}
                            <span style={{color:'white'}}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="25px" height="25px">
                                <path d="M448 96a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM320 96a96 96 0 1 1 192 0A96 96 0 1 1 320 96zM144 64c-26.5 0-48 21.5-48 48V276.5c0 17.3-7.1 31.9-15.3 42.5C70.2 332.6 64 349.5 64 368c0 44.2 35.8 80 80 80s80-35.8 80-80c0-18.5-6.2-35.4-16.7-48.9c-8.2-10.6-15.3-25.2-15.3-42.5V112c0-26.5-21.5-48-48-48zM32 112C32 50.2 82.1 0 144 0s112 50.1 112 112V276.5c0 .1 .1 .3 .2 .6c.2 .6 .8 1.6 1.7 2.8c18.9 24.4 30.1 55 30.1 88.1c0 79.5-64.5 144-144 144S0 447.5 0 368c0-33.2 11.2-63.8 30.1-88.1c.9-1.2 1.5-2.2 1.7-2.8c.1-.3 .2-.5 .2-.6V112zM192 368c0 26.5-21.5 48-48 48s-48-21.5-48-48c0-20.9 13.4-38.7 32-45.3V272c0-8.8 7.2-16 16-16s16 7.2 16 16v50.7c18.6 6.6 32 24.4 32 45.3z" />
                            </svg></span>
                            <br />
                            {Math.round(isNaN(currentWeather.main?.temp) ? '' : currentWeather.main?.temp - 273.15)}{' '}
                            <sup>o</sup>C
                        </h3>
                    </div>
                    <div className="col-md-4">
                        {currentWeather.weather?.map((weather) => (
                            <div key={weather.id}>
                                <h2>{weather.description}</h2>
                                <img src={`http://openweathermap.org/img/w/${weather.icon}.png`} alt="" />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="text-center" style={{color:'white'}}>5-DAY FORECAST</h1>
                    </div>
                </div>
                <div className="row">
                    {forecast.map((forecastItem) => (
                        <div key={forecastItem.dt} className="col-md-2">
                            <div className="weather-box">
                                <h3>
                                    {new Date(forecastItem.dt * 1000).toLocaleDateString('en-US', {
                                        weekday: 'long'
                                    })}
                                    <br />
                                    {Math.round(isNaN(forecastItem.main.temp) ? '' : forecastItem.main.temp - 273.15)}{' '}
                                    <sup>o</sup>C
                                </h3>
                                <h4>{forecastItem.weather[0].description}</h4>
                                <img src={`http://openweathermap.org/img/w/${forecastItem.weather[0].icon}.png`}alt="" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
export default Weather;

// import React, { useState} from 'react';
// import axios from 'axios';
// import './Weather.css'
// // import './Spread.css';
// // import '../node_modules/bootstrap/dist/css/bootstrap.css';
// // import '../node_modules/bootstrap/dist/js/bootstrap.js';
 
// const Weather= () => {
//     const [currentWeather, setCurrentWeather] = useState({});
//     const [forecast, setForecast] = useState([]);
//     const [loc, setLoc] = useState('');
//     // Function to handle input change for location
//     const locationChange = (e) => {
//         setLoc(e.target.value);
//     };
//     // Function to fetch current weather and forecast data
//     const fetchData = () => {
//         // Fetch current weather data
//         axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=11c15604a23bd024c1c83c12bf0a9e6f`)
//             .then((res) => {
//                 setCurrentWeather(res.data);
//             })
//         // Fetch forecast data
//         axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${loc}&appid=11c15604a23bd024c1c83c12bf0a9e6f`)
//             .then((res) => {
//                 // Filter to get daily forecast (every 8th item)
//                 const dailyForecast = res.data.list.filter((forecastItem, index) => index % 8 === 0);
//                 setForecast(dailyForecast);
//             })  
//     };
//     // Effect hook to fetch data when location changes
//     // useEffect(() => {
//     //     fetchData();
//     // });
//     return (
//         <div className='body'>
//             <div className="container-fluid" id="main">
//                 <div className="row">
//                     <div className="col-md-4 text-warning">
//                         <h1>Weather<br />&Forecast</h1>
//                     </div>
//                     <div className="col-md-4"></div>
//                     <div className="col-md-4">
//                         <h1>
//                             <span className="text-danger">Date</span>
//                             <br />
//                             {new Date().toLocaleDateString('en-US')}
//                         </h1>
//                     </div>
//                 </div>
//                 <div className="row">
//                     <div className="col-md-5">
//                         <input type="text" className="form-control" placeholder="Enter your city" style={{ width: '100%' }} onChange={locationChange} />
//                     </div>
//                     <div className="col-md-5">
//                         <button className="but" onClick={fetchData}>Get Data</button>
//                     </div>
//                     <div className="col-md-2"></div>
//                 </div>
//                 <div className="row">
//                     <div className="col-md-12">
//                         <h1 className="text-center">CURRENT WEATHER</h1>
//                     </div>
//                 </div>
//                 <div className="row current-weather">
//                     <div className="col-md-4">
//                         <h1>
//                             {currentWeather.name},{currentWeather.sys?.country}
//                             <br />
//                             {new Date().toLocaleDateString('en-US')}
//                         </h1>
//                     </div>
//                     <div className="col-md-4">
//                         <h3>
//                             Temp{' '}
//                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="25px" height="25px">
//                                 <path d="M448 96a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM320 96a96 96 0 1 1 192 0A96 96 0 1 1 320 96zM144 64c-26.5 0-48 21.5-48 48V276.5c0 17.3-7.1 31.9-15.3 42.5C70.2 332.6 64 349.5 64 368c0 44.2 35.8 80 80 80s80-35.8 80-80c0-18.5-6.2-35.4-16.7-48.9c-8.2-10.6-15.3-25.2-15.3-42.5V112c0-26.5-21.5-48-48-48zM32 112C32 50.2 82.1 0 144 0s112 50.1 112 112V276.5c0 .1 .1 .3 .2 .6c.2 .6 .8 1.6 1.7 2.8c18.9 24.4 30.1 55 30.1 88.1c0 79.5-64.5 144-144 144S0 447.5 0 368c0-33.2 11.2-63.8 30.1-88.1c.9-1.2 1.5-2.2 1.7-2.8c.1-.3 .2-.5 .2-.6V112zM192 368c0 26.5-21.5 48-48 48s-48-21.5-48-48c0-20.9 13.4-38.7 32-45.3V272c0-8.8 7.2-16 16-16s16 7.2 16 16v50.7c18.6 6.6 32 24.4 32 45.3z" />
//                             </svg>
//                             <br />
//                             {Math.round(isNaN(currentWeather.main?.temp) ? '' : currentWeather.main?.temp - 273.15)}{' '}
//                             <sup>o</sup>C
//                         </h3>
//                     </div>
//                     <div className="col-md-4">
//                         {currentWeather.weather?.map((weather) => (
//                             <div key={weather.id}>
//                                 <h2>{weather.description}</h2>
//                                 <img src={`http://openweathermap.org/img/w/${weather.icon}.png`} alt="" />
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//                 <div className="row">
//                     <div className="col-md-12">
//                         <h1 className="text-center">5-DAY FORECAST</h1>
//                     </div>
//                 </div>
//                 <div className="row">
//                     {forecast.map((forecastItem) => (
//                         <div key={forecastItem.dt} className="col-md-2">
//                             <div className="weather-box">
//                                 <h3>
//                                     {new Date(forecastItem.dt * 1000).toLocaleDateString('en-US', {
//                                         weekday: 'long'
//                                     })}
//                                     <br />
//                                     {Math.round(isNaN(forecastItem.main.temp) ? '' : forecastItem.main.temp - 273.15)}{' '}
//                                     <sup>o</sup>C
//                                 </h3>
//                                 <h4>{forecastItem.weather[0].description}</h4>
//                                 <img src={`http://openweathermap.org/img/w/${forecastItem.weather[0].icon}.png`}alt="" />
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// };
// export default Weather;