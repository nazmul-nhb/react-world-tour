import { useState } from 'react';
import './Country.css'
import CountryDetails from '../CountryDetails/CountryDetails';

const Country = ({ country, handleVisitedCountry, handleVisitedFlags }) => {
    const { name, flags, area, population, cca3 } = country;
    const [visited, setVisited] = useState(false);

    const handleVisited = () => {
        setVisited(!visited);
    }

    return (
        <div className={`country ${visited && 'visited'}`}>
            <h3>{name.common}</h3>
            <img className='flag' src={flags.png} alt={flags.alt} />
            <p>Population: {population} </p>
            <p>Area: {area} </p>
            <p>Code: {cca3} </p>
            <button onClick={() => { handleVisitedCountry(country) }}>Mark Visited</button>
            <br /><br />
            <button onClick={() => { handleVisitedFlags(country.flags) }}>Mark Flag As Visited</button>
            <br /><br />
            <button onClick={handleVisited}>{visited ? 'Visited' : 'Going'}</button>
            <p>{visited ? 'I have visited this country!' : 'I want to visit this country.'}</p>
            <CountryDetails
            country={country}
            ></CountryDetails>
        </div>
    );
};

export default Country;