export default class Router  {
    static routes = []


    static add (path,callback) {
        this.routes.push({url:"/"+path,callback:callback})
    }

    main = function (){
        const me = this
        // check cookie
        const path = window.locatio.pathname

        if (Router.routes.length === 0)
            throw Error("Empty routes table")

        const routeFound = Router.routes.find(function (route) {
            return route.url === path;
        })

        console.log(path)
        console.log(routeFound)

        if(typeof routeFound !== "undefined") {
            if (typeof routeFound.callback === "function"){
                routeFound.callback
            }
        } else if (path === "/favicon.ico") {
            // add favicon ico if there is time for it
        } else {
            console.log("Did not find endpoint: " +path)
        }
    }
};
