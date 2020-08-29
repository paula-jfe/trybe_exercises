let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (int i = 0; i < numbers.length; i++) { /* contador i - para i menor que elementos da array numbers */
    for (int j = 0; j < numbers.length - 1; j++) { /* contador j - para j menor que elementos da array numbers e menor que i */
        if (inteiros[j] > inteiros[j + 1]) { /*  */
        int inteiroArmazenado = inteiros[j]; /*  */
        inteiros[j] = inteiros[j + 1]; /*  */
        inteiros[j + 1] = inteiroArmazenado; /*  */
        }
    }
}

/* https://www.guj.com.br/t/ordenar-arrays-no-braco-resolvido/53255/4 para ajudar nos exercícios bônus */