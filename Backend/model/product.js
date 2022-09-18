class Product {
    id = 0;
    name = "";
    additionalInfo="";
    price = 0;
}

class Order {
    id = 0;
    price = 0;
  //  product: new Product();
}

exports.modules = {
    Order:Order,
    Product:Product
}
