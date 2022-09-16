export default class Router  {
    static routes = []


    static add (path,callback) {
        this.routes.push({url:"/"+path,callback:callback})
    }

    main = function (req, res){
        const authenticate = require("./../middleware/authentication")
        const me = this
        // check cookie

        authenticate(req, res)

        res.setHeader("Content-Type", "text/json");

        if (Router.routes.length === 0)
            throw Error("Empty routes table")

        const routeFound = Router.routes.find(function (route) {
            return route.url === req.url;
        })

        console.log(req.url)
        console.log(routeFound)

        if(typeof routeFound !== "undefined") {
            if (typeof routeFound.callback === "function"){
                routeFound.callback
            }
        } else if (req.url === "/favicon.ico") {
            // add favicon ico if there is time for it
        } else {
            console.log("Did not find endpoint: " +req.url)
        }
    }
};
