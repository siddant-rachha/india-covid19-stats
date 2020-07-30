updateState = function (stateCode) {
    stateCode = stateCode.toUpperCase()
    state_list.forEach(state_list_item => {
        if(stateCode===state_list_item.code){
            state_name_element.textContent = state_list_item.name
        }
        
    });
}
