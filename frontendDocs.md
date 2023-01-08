# FRONTEND APP

## Stack
* React
* Typescript
* MUI

## Instalacja i uruchomienie frontendu
Potrzebujemy zainstalować środowisko node.js, po czym doinstalujemy  do niego menadżer paczek yarn.

1. Instalacja node.js( korzystam z wersji 19.0.0):  
[Pobierz node.js v19.0.0 z tego linku](https://nodejs.org/download/release/v19.0.0/win-x64/)  
`node --version` (sprawdzenie, czy node.js zainstalował się poprawnie)  

2. Instalacja yarna z konsoli node.js:  
`npm install --global yarn` (flaga --global oznacza globalną instalację yarna na poziomie systemu operacyjnego, npm to domyślny menadżer paczek instalowany razem z node.js)
`yarn --version` (sprawdzenie, czy yarn zainstalował się poprawnie)  

3. Pobranie wymaganych dependencji w projekcie  
Otwieramy projekt frontendowy:  
`cd SpotUS/frontend`  
Pobranie wymaganych paczek jest proste, wystarczy w konsoli wpisać:  
`yarn`  
yarn pobierze wszystkie wymagane paczki, które są określone w pliku package.json  

4. Uruchomienie projektu(musicie znajdować się w folderze SpotUS/frontend)  
`yarn dev`  
Na porcie http://localhost:5173/ uruchomi się reactowa aplikacja w trybie deweloperskim.  
