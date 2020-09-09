function removeElements() {
    let remove = document.querySelectorAll("div");
    /* let palavras = [pai, elementoOndeVoceEsta, primeiroFilhoDoFilho]; */
    for (let i = 0; i < remove.length; i += 1) {
        let elemento = remove[i];
        if (elemento.innerHTML.includes("pai") || elemento.innerHTML.includes("elementoOndeVoceEsta") || elemento.innerHTML.includes("primeiroFilhoDoFilho")) {
            return elemento;
        } else {
            return body.removeChild(elemento);
        }
        /* for (let j = 0; j < palavras.length; j += 1) {
            if (remove.innerHTML.includes("palavras[j]")) {
            } else {
                body.removeChild(remove[i]);
            } */
    }
}
