#!/bin/bash

  DIRETORIO=$1
  EXTENSAO=$2

  DATA=$(date +%F)

  cd $DIRETORIO
    for ARQUIVO in `ls *.$EXTENSAO`
        do
            echo "Renomeando $ARQUIVO para ${DATA}-${ARQUIVO}"
            mv $ARQUIVO ${DATA}-${ARQUIVO}
    done


