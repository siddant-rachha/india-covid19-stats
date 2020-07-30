const state_name_element = document.querySelector(".state .name")
const total_cases_element = document.querySelector(".total-cases .value")
const total_tested_element = document.querySelector(".total-tested .value")
const recovered_element = document.querySelector(".recovered .value")
const deaths_element = document.querySelector(".deaths .value")
const india_cases = document.querySelector(".india-cases .india-value")
const india_recovered = document.querySelector(".india-recovered .india-value")
const india_deaths = document.querySelector(".india-deaths .india-value")


fetch("https://covid-19-data.p.rapidapi.com/country?format=json&name=india", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "covid-19-data.p.rapidapi.com",
		"x-rapidapi-key": "4db143a0d2msh5c29b3c778a0ca5p1a0766jsn8c479a5cfe1f"
	}
})
.then(response => {
	return response.json();
})
.then(response=>{
    india_cases.textContent = response[0].confirmed.toLocaleString()
    india_recovered.textContent = response[0].recovered.toLocaleString()
    india_deaths.textContent = response[0].deaths.toLocaleString()
    console.log(response)
})
.catch(err => {
	console.log(err);
});


let stateliveData;


liveStateData = (shortStateCode) => {

    fetch("https://api.covid19india.org/v4/data.json")
        .then(response => {
            return response.json()
        })
        .then(response => {
            console.log(shortStateCode)
            stateliveData = response[shortStateCode.toUpperCase()]['total']
            console.log(response)
        })
        .then(response=>{
            total_cases_element.textContent = stateliveData.confirmed.toLocaleString()
            recovered_element.textContent = stateliveData.recovered.toLocaleString()
            deaths_element.textContent = stateliveData.deceased.toLocaleString()
            total_tested_element.textContent = stateliveData.tested.toLocaleString()

        })
        .catch(err => {
            console.log(err);
        });
}

