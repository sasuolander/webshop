
nosta docker oleva tietokanta ajamalla docker compose -p webproject1 -f system.yaml up

Systeemiin on kovakoodattu käyttäjä testuser, joka toimii kun env DEV = true. 
Voit sillä luoda uuden käyttäjän Add user sivulla. 

Backend kansiossa luo .env jossa tämä sisältö:

DATABASE=mongodb://localhost:27017/test

MONGODB_USERNAME=salasana

MONGODB_PASSWORD=salasana

DEV=true

TOKEN_KEY= //token hash jolla token salataan, salt koodi

HASH_SALT = // salt level numero

HOSTNAME=localhost

PORT=3000

UI kansiossa luo .env jossa tämä sisältö:

ENDPOINT="http://127.0.0.1:3000/"

npm install ja npm run start komennolla lähtee toimimaan kun ajetaan oikeassa kansiossa.

Ensimmäinen operaatio testuser on mennä
Add Product sivulle lisäämään tuotteita joita käyttäjä voi ostaa.

Käyttäjä polut ostaa

Sisään kirjautumisen jälkeen paina Shop linkkiä.

Paina Add to cart.

Siirry Cart sivuun painamalla linkkiä cart

Painna nappia Buying laittaakseen Order menemään.

Katso Order Management sivulla asetettuja Order.

