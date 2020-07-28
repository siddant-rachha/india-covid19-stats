const search_state_element = document.querySelector(".search-state");
const state_list_element = document.querySelector(".state-list");
const chang_state_btn = document.querySelector(".change-state");
const close_list_btn = document.querySelector(".close");
const input = document.getElementById("search-input");

function createStateList(){
    const num_states = state_list.length;
    let i = 0, ul_list_id;
    state_list.forEach((state,index)=>{
        if (index % Math.ceil(num_states/2)==0) {
            ul_list_id = `list-${i}`
            state_list_element.innerHTML += `<ul id=${ul_list_id}></ul>`
            i++;
        }
        document.getElementById(`${ul_list_id}`).innerHTML+=
        `<li onclick="fetchData('${state.code}')" id="${state.name}"> 
        ${state.name}</li>`
    })

}
createStateList()


chang_state_btn.addEventListener("click", function(){
    search_state_element.classList.toggle("hide");
    input.value = ""
    resetStateList();
})

close_list_btn.addEventListener("click", function(){
    search_state_element.classList.toggle("hide");
})

state_list_element.addEventListener("click", function(){
    search_state_element.classList.toggle("hide");
})

input.addEventListener("input", function(){
    let value = input.value.toUpperCase()

    state_list.forEach(state=>{
        if(state.name.toUpperCase().startsWith(value)){
            document.getElementById(state.name).classList.remove("hide")
        }else{
            document.getElementById(state.name).classList.add("hide")
        }
    }) 
})

resetStateList = function(){
    state_list.forEach(state=>{
            document.getElementById(state.name).classList.remove("hide")
    }) 

}