var btn = document.getElementById('calcola');
var listaNomi = [];
var errore = document.getElementById('errore');

function persone (_nome, _cognome, _data) {
    this.nome = _nome;
    this.cognome = _cognome;
    this.data = _data;
}

window.addEventListener('DOMContentLoaded', init);

function init() {
    errore.style.display = 'none';
    if (listaNomi.length > 0) {
        stampaLista();
    }
}

btn.addEventListener('click', (e) => {
    let newNome = document.getElementById('nome').value;
    let newCognome = document.getElementById('cognome').value;
    let newData = document.getElementById('data').value;

    let newPersona = new persone(newNome, newCognome, newData);
    if (newData > 0) {
        newPersona.data = newData;
    }
    if (newNome == '' || newCognome == '' || newData == '') {
        errore.style.display = 'block';
        return;
    }

    listaNomi.push(newPersona);
    console.log(listaNomi);

    stampaLista();
    cancellaForm();
});

function calcolaAnno() {
    let data = document.getElementById('data').value;
    
}

function stampaLista() {
    errore.style.display = 'none';
    let lista = document.getElementById('lista');
    lista.innerHTML = '';
    listaNomi.forEach((elemento) => {
        let colonna1 = `<td class="w-25 text-center">${elemento.nome}</td>`;
        let colonna2 = `<td class="w-25 text-center">${elemento.cognome}</td>`;
        let colonna3 = `<td class="w-25 text-center">${elemento.data}</td>`;
        let colonna4 = `<td class="w-25 text-center"><span onclick="rimuovi(${listaNomi.indexOf(elemento)})" class="btn btn-danger btn-sm">X</td>`;

        lista.innerHTML += `<tr>${colonna1}${colonna2}${colonna3}${colonna4}</tr>`;
    });
}

function rimuovi(indice) {
    listaNomi.splice(indice, 1);
    stampaLista();
}

function cancellaForm() {
    document.getElementById('nome').value = '';
    document.getElementById('cognome').value = '';
    document.getElementById('data').value = '';
}