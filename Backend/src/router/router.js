
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

    async parser(req) {
        const buffers = [];
        for await (const chunk of req) {
            buffers.push(chunk);
        }
        const data = Buffer.concat(buffers).toString();
        if (data.length !== 0) {
            try {
                console.log("rawData",data)
                req.body = JSON.parse(data);
                console.log("body parsed", JSON.parse(data));
            } catch (e) {
                console.error("invalid json")
            }
        }
    }

    async requestValidator(req, res, callback) {
        if (typeof req !== 'undefined' || typeof res !== 'undefined') {
            await this.parser(req)
            const {authenticate} = require("../middleware/authentication")
            authenticate(req, res).then(async function (r) {
                if(r && typeof r !== 'undefined' )
                    await callback(req, res)
                }
            ).catch(t => console.log(t))

        }
    }
    async requestValidatorLogin(req, res, callback) {
        if (typeof req !== 'undefined' || typeof res !== 'undefined') {
            await this.parser(req)
            await callback(req, res)
        }
    }



    main = async function (req, res) {

        const me = this

       //const item =  me.requestValidator(req, res)
      //  const stateResponse = await authenticate(item.req,item.res)


        res.setHeader("Content-Type", "application/json");

        if (Router.routes.length === 0)
            throw Error("Empty routes table")


        if (req.url ==="/login" ||  req.url ==="/user" && req.method === "POST" ){
            const routeFound = Router.routes.find(function (route) {
                return route.url === req.url && route.method === req.method
            })

            console.log(req.url, req.method)
            console.log(routeFound)
            if (typeof routeFound.callback === "function") {
                await me.requestValidatorLogin(req, res, routeFound.callback)
            }
            }else {

            const routeFound = Router.routes.find(function (route) {
                return route.url === req.url && route.method === req.method
            })

            console.log(req.url, req.method)
            console.log(routeFound)

            if (typeof routeFound !== "undefined") {
                if (typeof routeFound.callback === "function") {
                    await me.requestValidator(req, res, routeFound.callback)
                }
            } else if (req.url === "/favicon.ico") {
                // add favicon ico if there is time for it
            } else {
                console.log("Did not find endpoint: " + req.url)
            }
            }






    }
};
