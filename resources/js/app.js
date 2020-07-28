const country_name_element = document.querySelector(".country .name")
const total_cases_element = document.querySelector(".total-cases .value")
const new_cases_element = document.querySelector(".total-cases .new-value")
const recovered_element = document.querySelector(".recovered .value")
const new_recovered_element = document.querySelector(".recovered .new-value")
const deaths_element = document.querySelector(".deaths .value")
const new_deaths_element = document.querySelector(".deaths .new-value")

const ctx = document.getElementById("axes_line_chart").getContext("2d")

let app_data = [],
cases_list = [],
recovered_list = [],
deaths_list = [],
dataElements = []; 

let country_code = geoplugin_regionCode()
let _country = geoplugin_countryName()

let user_country;
if(_country=='India'){
	country_list.forEach(country=>{
		if(country.code == country_code){
			user_country = country.name;
		}
	})
}
else{
	user_country = 'Delhi';
}

console.log(user_country);


// fetchData = function(user_country){
// fetch(`https://api.covid19india.org/states_daily.json`)
// .then(response=>{
// 	return response.json()
// })
// .then(response=>{
//  console.log(response)
//  lengthofData = response.states_daily.length
//  for (let index = 0; index < lengthofData; index+=3) {
// 	 cases_list.push(response.states_daily[index].tt)
//  }
//  for (let index = 1; index < lengthofData; index+=3) {
// 	recovered_list.push(response.states_daily[index].tt)
// }
// for (let index = 2; index < lengthofData; index+=3) {
// 	deaths_list.push(response.states_daily[index].tt)
// }
// console.log(cases_list)
// console.log(recovered_list)
// console.log(deaths_list)

// })
// }
// fetchData()
