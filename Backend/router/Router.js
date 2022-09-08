module.exports = class Router  {
    routes = []
    //TODO add ability to select http method
    add = function (path,callback) {
        this.routes.push({url:"/"+path,callback:callback})
    }

    main = function (req, res){
        if (!req.headers.get("Authorization")){
            res.statusCode = 401
            throw Error("No Authentication")
        }

        res.setHeader("Content-Type", "text/json");

        if (this.routes.length === 0)
            throw Error("Empty routes table")
        this.routes.forEach(function (route) {
            console.log(req.url)
            console.log(route)
            if (route.url === req.url) {
                route.callback(req, res)
            }else {
                console.log("Did not find endpoint")
                res.end("Api error")
            }
        })
    }
};
