#!/bin/bash

echo "Digite o caminho de um arquivo ou diretório:"

read CAMINHO

if [ -f "$CAMINHO" ]
    then
        echo "$CAMINHO é um arquivo comum"
elif [ -d "$CAMINHO" ]
    then
        echo "$CAMINHO é um diretório"
    else
        echo "$CAMINHO é alguma outra coisa"
fi
ls -l $CAMINHO



