#!/bin/bash

CAMINHO2=$@
for CAMINHO in $CAMINHO2
    do
    if [ -f $CAMINHO ]
        then
            echo "Ele é um arquivo comum"
    elif [ -d $CAMINHO ]
        then
            echo "Ele é um diretorio"
        else
            echo "Ele é outro tipo de arquivo"
    fi
ls -l $CAMINHO
done



