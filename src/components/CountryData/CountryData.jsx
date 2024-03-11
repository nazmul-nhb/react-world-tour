const CountryData = ({country}) => {
    return (
        <div>
            <p><small>Official Name: {country.name.official} </small></p>
        </div>
    );
};

export default CountryData;