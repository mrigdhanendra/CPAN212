import express from "express";
const app = express();
const PORT = process.env.PORT || 8000

app.listen(PORT, ()=>{
    console.log(`http://localhost:${PORT}`)
});

// console.log()clear

// app.get("/", (req,res)=>{
//     res.send("Hello from the server");
// });

app.post("/", (req,res)=>{
    res.send("Hello from the POST request");
});

app.put("/", (req,res)=>{
    res.send("Hello from the PUT request");
});

/*


https://www.youtube.com/watch?v=eS0reNNZ2Z4
DOMAIN: https://www.youtube.com
END POINT: /watch
? - query object
v= eS0reNNZ2Z4

req: {
ip,
OS,
url,
method
query,- for searching information DB
 params, body
}
*/

app.get("/watch", (req,res)=>{
 console.log(req.url);  //  /watch
 console.log(req.query);
 console.log(req.params);
 console.log(req.body);

 res.send("YOu got to  the watch endpoint")
});