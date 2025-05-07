const output_div = document.getElementById("output_div");
const input_data = document.getElementById("input_data");
const Tambah_button = document.getElementById("Tambah_button");

Tambah_button.addEventListener('click',()=>{
    let chtml = document.createElement("p")
    chtml.innerHTML = `${input_data.value} <button id="delete_data">delete</button>`;
    output_div.appendChild(chtml); 
})
