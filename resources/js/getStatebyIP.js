let shortStateCode;

window.addEventListener("load", () => {
    let state_code = geoplugin_regionCode()
    let _country = geoplugin_countryName()

    let user_state;
    if (_country == 'India') {
        state_list.forEach(state => {
            if (state.code == state_code) {
                user_state = state.name;
            }
        })
    }
    else {
        user_state = 'Delhi';
        state_code = 'DL';
    }

    shortStateCode = state_code.toLowerCase();
})