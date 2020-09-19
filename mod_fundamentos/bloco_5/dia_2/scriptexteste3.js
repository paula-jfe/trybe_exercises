window.onload = function () {

    let tag1 = document.querySelector("#pai");
    let tag2 = document.querySelector("#elementoOndeVoceEsta");
    let tag3 = document.querySelector("#primeiroFilhoDoFilho");    

    div1grau();
    function div1grau() {
        let tag1Children = tag1.children;
        for (index = 0; index < tag1.children.length; index += 1) {
            if (tag1Children[index].id !== tag2.id) {
                tag1.removeChild(tag1Children[index]);
            } if (tag1.lastElementChild.id !== tag2.id) {
                tag1.removeChild(tag1.lastElementChild);
            }
        }
    }

    div2grau();
    function div2grau() {
        let tag2Children = tag1.children;
        for (index = 0; index < tag1.children.length; index += 1) {
            if (tag2Children[index].id !== tag3.id) {
                tag2.removeChild(tag2Children[index]);
            } if (tag2.lastElementChild.id !== tag3.id) {
                tag2.removeChild(tag2.lastElementChild);
            }
        }
    }
}