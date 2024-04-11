// 1) import json-server library
const jsonServer = require('json-server')
// 2) create server using create function inside json-server library.
const mediaPlayerServer = jsonServer.create()
// 3) create the path for db.json file - router()
const router = jsonServer.router('db.json')
// 4) create a middleware to convert json content to js object
const middleware = jsonServer.defaults()
// 5) server should use router as well as middleware
mediaPlayerServer.use(middleware)
mediaPlayerServer.use(router)
// 6) set a port to server
// process.env - to select the port that is available when the 4000 is consumed or used.
const port = 4000 || process.env
// 7 run the server
mediaPlayerServer.listen(port, ()=>{
    console.log(`server running successfully at port ${port}`);
})