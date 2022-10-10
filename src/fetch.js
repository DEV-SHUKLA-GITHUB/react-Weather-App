import React from 'react'
import "./styles.css"

export default function FetchMe() {

  const [city,setCity]= React.useState(null)
  const [search,setSearch]= React.useState("delhi")

  React.useEffect(() => {
    const fetchData = async ()=> {
    const url = `https://api.openweathermap.org/data/2.5/weather?q= ${search} &units=metric&appid=e18f3037f5555c2e2263ddf6edc42a82`
    const response = await fetch(url);
    const responseJson = await response.json();
    setCity(responseJson.main);
    console.log(responseJson.main)
    };
  fetchData();
  },[search])
  
    
  return (
    <div className="mainDiv">
      <div className='inputDiv'>
        <h1>Weather Update</h1>
        <label >Enter City  </label>
        <input type="search" placeholder="Enter City" onChange={(event)=>{
          setSearch(event.target.value)
        }} />
        </div>
        {!city ? (
        <p>No Data Found</p>
        ):(
        <div className='displayDiv'>
          <h2>{search}</h2>
          <h2>Temperature {city.temp}</h2>
        </div>
      )}
    </div>
  )
}
