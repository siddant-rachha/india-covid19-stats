// ALL COUNTRY NAMES WITH THEIR ISO CODE
let country_list = [
    { name: 'Andhra Pradesh', code: 'AP' },
    { name: 'Arunachal Pradesh', code: 'AR' },
    { name: 'Assam', code: 'AS' },
    { name: 'Bihar', code: 'BR' },
    { name: 'Chhattisgarh', code: 'CT' },
    { name: 'Goa', code: 'GA' },
    { name: 'Gujarat', code: 'GJ' },
    { name: 'Haryana', code: 'HR' },
    { name: 'Himachal Pradesh', code: 'HP' },
    { name: 'Jharkhand', code: 'JH' },
    { name: 'Karnataka', code: 'KA' },
    { name: 'Kerala', code: 'KL' },
    { name: 'Madhya Pradesh', code: 'MP' },
    { name: 'Maharashtra', code: 'MH' },
    { name: 'Manipur', code: 'MN' },
    { name: 'Meghalaya', code: 'ML' },
    { name: 'Mizoram', code: 'MZ' },
    { name: 'Nagaland', code: 'NL' },
    { name: 'Odisha', code: 'OR' },
    { name: 'Punjab', code: 'PB' },
    { name: 'Rajasthan', code: 'RJ' },
    { name: 'Sikkim', code: 'SK' },
    { name: 'Tamil Nadu', code: 'TN' },
    { name: 'Telangana', code: 'TG' },
    { name: 'Tripura', code: 'TR' },
    { name: 'Uttar Pradesh', code: 'UP' },
    { name: 'Uttarakhand', code: 'UT'},
    { name: 'West Bengal', code: 'WB' },
    { name: 'Andaman and Nicobar Islands', code: 'AN' },
    { name: 'Chandigarh', code: 'CH' },
    { name: 'Daman and Diu', code: 'DD' },
    { name: 'Dadra and Nagar Haveli', code: 'DN' },
    { name: 'Delhi', code: 'DL' },
    { name: 'Jammu and Kashmir', code: 'JK' },
    { name: 'Ladakh', code: 'LA' },
    { name: 'Lakshadweep', code: 'LD' },
    { name: 'Puducherry', code: 'PY' }
];

const search_country_element = document.querySelector(".search-country");
const country_list_element = document.querySelector(".country-list");
const chang_country_btn = document.querySelector(".change-country");
const close_list_btn = document.querySelector(".close");
const input = document.getElementById("search-input");

function createCountryList(){
    const num_countries = country_list.length;
    console.log(num_countries)
    let i = 0, ul_list_id;
    country_list.forEach((country,index)=>{
        if (index % Math.ceil(num_countries/2)==0) {
            ul_list_id = `list-${i}`
            country_list_element.innerHTML += `<ul id=${ul_list_id}></ul>`
            i++;
        }

        document.getElementById(`${ul_list_id}`).innerHTML+=
        `<li onclick="fetchData('${country.name}')" id="${country.name}"> 
        ${country.name}</li>`

    })

}
createCountryList()


chang_country_btn.addEventListener("click", function(){
    search_country_element.classList.toggle("hide");
    input.value = ""
    resetCountryList();
})

close_list_btn.addEventListener("click", function(){
    search_country_element.classList.toggle("hide");
})

country_list_element.addEventListener("click", function(){
    search_country_element.classList.toggle("hide");
})

input.addEventListener("input", function(){
    let value = input.value.toUpperCase()

    country_list.forEach(country=>{
        if(country.name.toUpperCase().startsWith(value)){
            document.getElementById(country.name).classList.remove("hide")
        }else{
            document.getElementById(country.name).classList.add("hide")
        }
    }) 
})

resetCountryList = function(){
    country_list.forEach(country=>{
            document.getElementById(country.name).classList.remove("hide")
    }) 

}