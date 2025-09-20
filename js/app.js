let amigos = [];
let amigosSorteados = false;
let amigoInformado;

function adicionar() {
    if (amigosSorteados) {
        document.getElementById('lista-sorteio').innerHTML = '';
        amigosSorteados = false;
    }

    let amigo = document.getElementById('nome-amigo');
    let lista = document.getElementById('lista-amigos');

    if (amigo.value == '') {
        alert('Informe o nome do amigo!');
        return;
    }

    amigoInformado = amigo.value.toUpperCase();

    if (amigos.includes(amigoInformado)) {
        alert('Amigo já adicionado!');
        return;
    }

    amigos.push(amigoInformado);

    if (lista.textContent == '') {
        lista.textContent = amigoInformado;
    } else {
        lista.textContent = lista.textContent + ', ' + amigoInformado;
    }

    amigo.value = '';
}

function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] =
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function sortear() {
    if (amigos.length == 0) {
        alert('Adicione amigos para sortear!');
        return;
    }

    if (amigos.length < 4) {
        alert('Adicione mais amigos para sortear!');
        return;
    }

    embaralha(amigos);

    let sorteio = document.getElementById('lista-sorteio');

    for (let i = 0; i < amigos.length; i++) {
        if (i == amigos.length - 1) {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] +' --> ' +amigos[0] + '<br/>';
        } else {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] +' --> ' +amigos[i + 1] + '<br/>';
        }
    }

    amigosSorteados = true;
}

function reiniciar() {
    amigos = [];
    amigosSorteados = false;
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
}