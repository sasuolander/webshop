module.exports = function router (req, res) {
    switch (req.url) {
        case "/product":
            res.writeHead(200);
            res.end("product");
            break
        case "/user":
            res.writeHead(200);
            res.end("user");
            break
    }
};