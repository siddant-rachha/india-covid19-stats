let shortStateCode;
let _country;


window.addEventListener("load", () => {
    fetch("https://find-any-ip-address-or-domain-location-world-wide.p.rapidapi.com/iplocation?apikey=873dbe322aea47f89dcf729dcc8f60e8", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "find-any-ip-address-or-domain-location-world-wide.p.rapidapi.com",
            "x-rapidapi-key": "4db143a0d2msh5c29b3c778a0ca5p1a0766jsn8c479a5cfe1f"
        }
    })
        .then(response => {
            return response.json()
        })
        .then(response => {
            shortStateCode = response.stateCode
            _country = response.country
            console.log(`then block of getStateIP: ${_country}`)
        })
        .then(response => {
            console.log(`getStatebyIP: ${_country}`)
            if (_country == 'India') {
            }
            else {
                shortStateCode = 'DL';
            }
            shortStateCode = shortStateCode.toLowerCase();
            console.log(`getStatebyIP: ${shortStateCode}`)
        })
        .then(response=>{
            main();
        })
        .catch(err => {
            console.log(err);
        });
    

})







// window.addEventListener("load", () => {
//     let state_code;
//     let _country;
//     let user_state;
//     try {
//         state_code = geoplugin_regionCode()
//         _country = geoplugin_countryName()
//     } catch (error) {
//         user_state = 'Delhi';
//         state_code = 'DL';
//     }

//     if (_country == 'India') {
//         state_list.forEach(state => {
//             if (state.code == state_code) {
//                 user_state = state.name;
//             }
//         })
//     }
//     else {
//         user_state = 'Delhi';
//         state_code = 'DL';
//     }

//     shortStateCode = state_code.toLowerCase();
// })