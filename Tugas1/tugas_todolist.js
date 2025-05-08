let index = localStorage.length;

reset_data.addEventListener('click',() => {
    output_ul.innerHTML = "";
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

    const li = document.createElement('li');
    
    const p = document.createElement('p');
    p.id = "p_data";
    p.innerText = input_data.value;

    li.appendChild(p);

    const delete_div = document.createElement('div');
    delete_div.id = "delete_div";

    const delete_button = document.createElement('button');
    delete_button.id = "delete_button";
    
    delete_button.addEventListener('click',()=>{
        output_ul.removeChild(li)
        localStorage.removeItem(i);
    })
    delete_button.innerText = "delete"; 
    delete_div.appendChild(delete_button)
    li.appendChild(delete_div);
    
    output_ul.appendChild(li);

    input_data.value = "";
})
