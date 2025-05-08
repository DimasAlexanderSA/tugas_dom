let array_data = [];

function isinorder(){
    for (let i = 0; i < localStorage.length; ++i) if (localStorage.key(i) === i) return true;

    return false;
}

function inorderindex(){

    if (!localStorage.length || isinorder()) return;
    
    for (let i = localStorage.length - 1 ; i >= 0; --i) array_data.push(localStorage.getItem(localStorage.key(i)));

    localStorage.clear();

    array_data.forEach( (eachdata, index) => localStorage.setItem(index.toString(),eachdata));
}

inorderindex();

array_data.forEach((eachdata,index) => {
    const li = document.createElement('li');
    
    const p = document.createElement('p');
    p.id = "p_data";
    p.innerText = eachdata;

    li.appendChild(p);

    const delete_div = document.createElement('div');
    delete_div.id = "delete_div";

    const delete_button = document.createElement('button');
    delete_button.id = "delete_button"
    delete_button.addEventListener('click',()=>{
        output_ul.removeChild(li);
        localStorage.removeItem(index.toString());
    })
    delete_button.innerText = "delete"; 
    delete_div.appendChild(delete_button);
    li.appendChild(delete_div);
    
    output_ul.appendChild(li);

    input_data.value = "";
})