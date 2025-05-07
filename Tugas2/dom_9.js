function tambah(){
    let elemen = document.createElement('p');
    elemen.innerText = "ini paragraf yang akan dihapus";
    elemen.id = "hapussaya";
    document.getElementById('container').appendChild(elemen);
}

function hapus(){
    let container = document.getElementById('container');
    let target = document.getElementById('hapussaya');
    if(target) container.removeChild(target);
    else alert("Paragraf belum ada atau sudah dihapus.")
}

document.getElementById('tambah').addEventListener('click',tambah);
document.getElementById('hapus').addEventListener('click',hapus);