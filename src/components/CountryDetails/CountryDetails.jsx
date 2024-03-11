import CountryData from "../CountryData/CountryData";

const CountryDetails = ({country}) => {
    return (
        <div>
            <h4>Country Details</h4>
            <hr />
            <CountryData
            country={country}
            ></CountryData>
        </div>
    );
};

export default CountryDetails;