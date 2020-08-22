#!/bin/bash

echo "Qual sua idade?"
red IDADE
read IDADE
if [ "$IDADE" -ge "16" ]
then
echo "Voce ja pode votar! "
else 
echo "Voce ainda nao pode votar "
