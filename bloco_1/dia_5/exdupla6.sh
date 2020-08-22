#!/bin/bash

CAMINHO=$1

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



