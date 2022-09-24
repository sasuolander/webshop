
nosta docker oleva tietokanta ajamalla docker compose -p webproject1 -f system.yaml up

Systeemiin on kovakoodattu käyttäjä testuser, joka toimii kun env DEV = true. 
Voit sillä luoda uuden käyttäjän.

Tämä viritelmä ei tietoturvallinen mutta tässä yhteydessä 
kätevin tapa hoitaa systeemin aloitus. Oikeassa systeemissä pitäisi olla oma asennuohjelma/prosessi
jossa määritetään ensimmäinen super admin käyttäjä.

Backend kansiossa luo .env jossa tämä sisältö:

DATABASE=mongodb://localhost:27017/test

MONGODB_USERNAME=salasana

MONGODB_PASSWORD=salasana

DEV=true

TOKEN_KEY= //token hash jolla token salataan, salt koodi

npm install ja npm run start komennolla lähtee toimimaan kun ajetaan oikeassa kansiossa.

