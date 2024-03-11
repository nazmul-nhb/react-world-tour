import { useEffect, useState } from "react";
import Country from "../Country/Country";
import './Countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([]);
    const [visitedFlags, setVisitedFlags] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data));
    }, [])

    const handleVisitedCountry = country => {
        // visitedCountries.push(country); 
        // push/pop will not work cause array is immutable in useState
        // we'll create a new array with rest operator
        const newVisitedCountries = [...visitedCountries, country];
        // set new array in the useState
        setVisitedCountries(newVisitedCountries);
    }

    const handleVisitedFlags = flag =>{
        const newVisitedFlags = [...visitedFlags, flag];
        setVisitedFlags(newVisitedFlags);
    }

    return (
        <div>
            <h3>Countries: {countries.length}</h3>
            <div>
                <h4>Visited Countries: {visitedCountries.length} </h4>
                <ul>
                    {
                        visitedCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)
                    }
                </ul>
            </div>
            <div>
                <h4>Visited Flags</h4>
                <div className="flag-container">
                    {
                        visitedFlags.map((flag, idx) => <img key={idx} src={flag.png} alt={flag.alt} />)
                    }
                </div>
            </div>
            <div className="country-container">
                {
                    countries.map(
                        country => <Country
                            key={country.cca3}
                            handleVisitedCountry={handleVisitedCountry}
                            handleVisitedFlags={handleVisitedFlags}
                            country={country}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;