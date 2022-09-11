module.exports = class Router  {
   static routes = []


    static get (path,callback) {
        this.routes.push({url:"/"+path,callback:callback,method:"GET"})
    }
    static  post (path,callback) {
        this.routes.push({url:"/"+path,callback:callback,method:"POST"})
    }
    static update (path,callback) {
        this.routes.push({url:"/"+path,callback:callback,method:"UPDATE"})
    }
    static delete (path,callback) {
        this.routes.push({url:"/"+path,callback:callback,method:"DELETE"})
    }


    requestValidator (req, res,callback){
        if (typeof req !== 'undefined' || typeof res !== 'undefined') {
            callback(req,res)
        }
    }

    main = function (req, res){
        const me = this
       // check cookie

        /*if (!req.headers.get("Authorization")){
            res.statusCode = 401
            throw Error("No Authentication")
        }*/

        res.setHeader("Content-Type", "text/json");

        if (Router.routes.length === 0)
            throw Error("Empty routes table")
        Router.routes.forEach(function (route) {
            console.log(req.url,req.method)
            console.log(route)
            const correctURLAndMethod = route.url === req.url && route.method === req.method

            if (correctURLAndMethod) {
                if (typeof route.callback === "function"){
                    me.requestValidator(req, res, route.callback)
                }
            } else if (req.url === "/favicon.ico") {
              // add favicon ico if there is time for it
            } else {
                console.log("Did not find endpoint")
                res.end("Api error")
            }
        })
    }
};
