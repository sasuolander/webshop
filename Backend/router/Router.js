module.exports = class Router  {
    routes = []

    add = function (path,callback) {
        this.routes.push({url:"/"+path,callback:callback})
    }

    main = function (req, res){
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
