// const http = require('http');
// const url = require('url');
const connectDb = require('./mongodb')


//read data
const main = async () => {
    let data = await connectDb();
    data = await data.find().toArray();
    console.log(data);
}
main();

// 1) basic server and routing 

// function hello(req,res){
//     const PathName = req.url;
//     if(PathName === '/dashboard') {
//         res.write("<h1>hey Dashboard</h1>");
//     }else {
//         res.write("<h1>hey Any</h1>");
//     }
//     res.end();
// }

// http.createServer(hello).listen(4500);

// 2) basic API
// http.createServer((req,res)=> {
//     res.writeHead(200)
//     res.write(JSON.stringify({name: 'Ayush', email : 'ayush@1rivet.com'}));
//     res.end();
// }).listen(5000);