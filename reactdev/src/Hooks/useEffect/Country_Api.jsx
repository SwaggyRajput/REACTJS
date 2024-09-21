import { useEffect, useState } from "react";

const CountryList = () => {
  const [countries, setCountries] = useState([]);
  async function fetchData() {
    await fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => console.log(data[0]));
  }

  /*

  fetch("https://restcountries.com/v3.1/all")  //API will be called infinitely time as setCountries is set so it will rerender and API will be called
    .then((res) => res.json())
    .then((data) => setCountries(data));

  */
  useEffect(() => {
    // fetch("https://restcountries.com/v3.1/all")
    //   .then((res) => res.json())
    //   .then((data) => setCountries(data));
    fetchData();
    // return () => setCountries([]); //Cleanup function which runs on unmounting
  }, []); //Dependency array or list and useEffect runs when element in list changes its value
  return (
    <>
      {/* {countries.map((country)=>{
        return <h1>{country}</h1>
      })} */}
    </>
  )
};

export default CountryList;
