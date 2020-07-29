const state_name_element = document.querySelector(".state .name")
const total_cases_element = document.querySelector(".total-cases .value")
const total_tested_element = document.querySelector(".total-tested .value")
// const new_cases_element = document.querySelector(".total-cases .new-value")
const recovered_element = document.querySelector(".recovered .value")
// const new_recovered_element = document.querySelector(".recovered .new-value")
const deaths_element = document.querySelector(".deaths .value")
// const new_deaths_element = document.querySelector(".deaths .new-value")
let stateliveData;


liveStateData = (shortStateCode) => {

    fetch("https://api.covid19india.org/v4/data.json")
        .then(response => {
            return response.json()
        })
        .then(response => {
            console.log(shortStateCode)
            stateliveData = response[shortStateCode.toUpperCase()]['total']
            console.log(stateliveData)
        })
        .then(response=>{
            total_cases_element.textContent = stateliveData.confirmed
            recovered_element.textContent = stateliveData.recovered
            deaths_element.textContent = stateliveData.deceased
            total_tested_element.textContent = stateliveData.tested

        })
        .catch(err => {
            console.log(err);
        });
}

