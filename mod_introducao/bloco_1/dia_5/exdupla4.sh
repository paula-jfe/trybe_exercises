#!/bin/bash

ARQUIVO="/home/jessica/trybe-exercises/my-shell-scripts/ex6.sh"

if [ -e "$ARQUIVO" ]
    then
        echo "O caminho $ARQUIVO está habilitado!"
fi
if [ -w "$ARQUIVO" ]
    then
        echo "Você tem permissão para editar $ARQUIVO"
    else
        echo "Você NÂO foi autorizado a editar $ARQUIVO"
fi



