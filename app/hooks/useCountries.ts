import countries from "world-countries";

const formattedCountries =countries.map((country) =>({
    value: country.cca2,
    label: country.name.common,
    false:country.flag,
    latitude:country.latlng,
    region: country.region
}))

const useCountries= () =>{
    const getAll =() => formattedCountries;

    const getByValue =(value:string) => formattedCountries.find((item) => item.value ===value)
    return{
        getAll,
        getByValue
    }

};

export default useCountries;