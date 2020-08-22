#!/bin/bash

DATA=$(date +%F)

for ARQUIVO in `ls *.png`
   do
      mv $ARQUIVO ${DATA}-${ARQUIVO}
done


