import { useState } from 'react';
import './Country.css'

const Country = ({ country }) => {
    const { name, flags, area, population, cca3 } = country;
    const [visited, setVisited] = useState(false);

    const handleVisited = () => {
        setVisited(!visited);
    }

    return (
        <div className="country">
            <h3>{name.common}</h3>
            <img className='flag' src={flags.png} alt={name.common} />
            <p>Population: {population} </p>
            <p>Area: {area} </p>
            <p>Code: {cca3} </p>
            <button onClick={handleVisited}>{visited ? 'Visited' : 'Going'}</button>
            <p>{visited ? 'I have visited this country!' : 'I want to visit this country.'}</p>
        </div>
    );
};

export default Country;