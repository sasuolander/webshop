
console.log("controller pages loaded")

module.exports = function addUser (req, res){
    console.log("hi")
    res.writeHead(200);
    res.end("Hi")
}
