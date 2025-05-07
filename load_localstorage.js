let array_data = [];

function isinorder(){
    for (let i = 0; i < localStorage.length; ++i) if (localStorage.key(i) === i) return true;

    return false;
}

function inorderindex(){
    

    if (!localStorage.length || isinorder()) return;
    
    for (let i = localStorage.length - 1 ; i >= 0; --i) array_data.push(localStorage.getItem(localStorage.key(i)));

    localStorage.clear();

    array_data.forEach( (eachdata, index) => localStorage.setItem(index.toString(),eachdata))
    console.log("try")

}

inorderindex();

array_data.forEach((eachdata,index) => {
    const td_button = document.createElement('td');
    const td_data = document.createElement('td');

    td_data.innerHTML = `<ul><li>${eachdata}</li></ul>`

    const delete_button = document.createElement('button');
    delete_button.addEventListener('click',()=>{
        td_button.remove();
        td_data.remove();
        localStorage.removeItem(index.toString());
    })
    delete_button.innerText = "delete"; 
    td_button.appendChild(delete_button);

    const table_row = document.createElement('tr');
    table_row.appendChild(td_data);
    table_row.appendChild(td_button);
    output_table.appendChild(table_row);
})