const output_ul = document.getElementById("output_ul");
const input_data = document.getElementById("input_data");
const add_button = document.getElementById("add_button");
const reset_data = document.getElementById("reset_data");

reset_data.addEventListener('click',()=>{
    output_ul.innerHTML = "";
})

add_button.addEventListener('click',()=>{
    let cli = document.createElement("li");
    cli.id = "li_data";
    cli.innerHTML = input_data.value;

    let delete_button = document.createElement("button");
    delete_button.innerHTML = "delete";
    cli.appendChild(delete_button);

    // cli.innerHTML = `<li>${input_data.value} <button> delete </button> </li>`;
    delete_button.addEventListener('click',()=>{
        cli.remove();
    })

    input_data.value = ""

    output_ul.appendChild(cli); 
})
