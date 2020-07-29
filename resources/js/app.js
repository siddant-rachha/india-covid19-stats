const state_name_element = document.querySelector(".state .name")
const total_cases_element = document.querySelector(".total-cases .value")
const new_cases_element = document.querySelector(".total-cases .new-value")
const recovered_element = document.querySelector(".recovered .value")
const new_recovered_element = document.querySelector(".recovered .new-value")
const deaths_element = document.querySelector(".deaths .value")
const new_deaths_element = document.querySelector(".deaths .new-value")
const ctx = document.getElementById("axes_line_chart").getContext("2d")

updateState = function (stateCode) {
    console.log('app.js runned')
    stateCode = stateCode.toUpperCase()
    state_list.forEach(state_list_item => {
        console.log(state_list_item.code)
        if(stateCode===state_list_item.code){
            state_name_element.textContent = state_list_item.name
        }
        
    });
    console.log(stateCode)
}
