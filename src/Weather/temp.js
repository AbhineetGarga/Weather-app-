import React, { useEffect, useState } from "react";
import "./style.css";
import Weathercarg from "./Weathercarg";

const GetWeatherInfo = async (searchValue, setTempInfo) => {
  try {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=63826eb5e31e732daa0e9197bdd38c60`;
    let res = await fetch(url);
    let data = await res.json();

    const { temp, pressure, humidity } = data.main;
    const { main: weathermood } = data.weather[0];
    const { name } = data;
    const { speed } = data.wind;
    const { sunset, country } = data.sys;

    const newWeatherInfo = {
      temp,
      pressure,
      humidity,
      weathermood,
      name,
      speed,
      sunset,
      country,
    };
    setTempInfo(newWeatherInfo);
  } 
  catch (error) 
  {
    console.log(error);
  }
};

const Temp = () => {
  const [searchValue, setSearchValue] = useState("Assam");
  const [tempinfo, setTempInfo] = useState({});

  useEffect(() => {
    GetWeatherInfo(searchValue, setTempInfo);
  }, [searchValue]);

  return (
    <>
      <div className="wrap">
        <div className="search">
          <input
            type="search"
            placeholder="what u want to search"
            autoFocus
            id="search"
            className="searchTerm"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />

          <button
            className="searchButton"
            type="button"
            onClick={() => GetWeatherInfo(searchValue, setTempInfo)}
          >
            Search
          </button>
        </div>
 

      </div>
      <Weathercarg tempinfo={tempinfo} />
    
    </>
  );
};

export default Temp;


























// import React, { useEffect, useState } from "react";
// import "./style.css";
// import Weathercarg from "./Weathercarg";

// const Temp = () => {
//   const [searchValue, setSearchValue] = useState("Pune");
//   const [tempinfo, setTempInfo] = useState({});

//   const GetWeatherInfo = async () => {
//     try {
//     let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=63826eb5e31e732daa0e9197bdd38c60`;

//       let res = await fetch(url);
//       let data = await res.json();
//       // console.log (data);..
//       //calling the data from api..
//       const { temp, pressure, humidity } = data.main;
//       const { main: weathermood } = data.weather[0];
//       const { name } = data;
//       const { speed } = data.wind;
//       const { sunset, country } = data.sys;
//       //creating my new api
//       const newWeatherInfo = {
//         //Destructuring API
//         temp,
//         pressure,
//         humidity,
//         weathermood,
//         name,
//         speed,
//         sunset,
//         country,
//       };
//       setTempInfo(newWeatherInfo);
//     } catch (error) {
//       console.log(error);
//     }



//     useEffect(() => {
//       GetWeatherInfo();
//     }, []);
//   };
//     return (
//       <>
//         <div className="wrap">
//           <div className="search">
//             <input
//               type="search"
//               placeholder="what u want to search"
//               autoFocus
//               id="search"
//               className="searchTerm"
//               value={searchValue}
//               onChange={(e) => setSearchValue(e.target.value)}
//             />

//             <button
//               className=" searchButton "
//               type="button"
//               onClick={GetWeatherInfo}
//             >
//               Search
//             </button>
//           </div>
//         </div>

//         <Weathercarg tempinfo={tempinfo} />
//       </>
//     );

// };

// export default Temp;
