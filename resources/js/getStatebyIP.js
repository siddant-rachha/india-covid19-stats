let shortStateCode;

window.addEventListener("load", () => {
    let state_code;
    let _country;
    let user_state;
    try {
        state_code = geoplugin_regionCode()
        _country = geoplugin_countryName()
    } catch (error) {
        user_state = 'Delhi';
        state_code = 'DL';
    }

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