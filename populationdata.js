
const getData3 = () => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://countriesnow.space/api/v0.1/countries/population");
    xhr.send();
    xhr.responseType = "json";
    xhr.onload = () => {

        const countries = xhr.response;

        objectOfCountries = countries["data"];

        var populationLessThan2Lakhs = objectOfCountries.filter((country) => country.populationCounts[20].value < 200000)
        console.log(populationLessThan2Lakhs)

    }
}
getData3();