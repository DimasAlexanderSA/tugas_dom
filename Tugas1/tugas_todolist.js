let index = localStorage.length;

reset_data.addEventListener('click',() => {
    output_table.innerHTML = "";
    localStorage.clear();
})

add_button.addEventListener('click',() => {
    if(!input_data.value.replaceAll(' ','')){
        alert("input shouldn't be empty");
        return;
    }

    //add data to local storage
    const i = index.toString();
    localStorage.setItem(i, input_data.value);
    ++index;

    //td for data and button
    const td_button = document.createElement('td');
    const td_data = document.createElement('td');
    
    td_data.innerHTML = `<ul><li>${input_data.value}</li></ul>`;
    
    const delete_button = document.createElement('button');
    delete_button.addEventListener('click',()=>{
        td_button.remove();
        td_data.remove();
        localStorage.removeItem(i)
    })
    delete_button.innerText = "delete"; 
    td_button.appendChild(delete_button);
    
    
    //add table row to table element
    const table_row = document.createElement('tr');
    table_row.appendChild(td_data);
    table_row.appendChild(td_button);
    output_table.appendChild(table_row);

    input_data.value = "";
})
