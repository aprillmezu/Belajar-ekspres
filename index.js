const  express = require('express')// impor modul express
const app = express() // instalasi exspress
const port = 3000 // port

// route //
app.get("/", (req, res) => {
    res.send("Hello");
});

//route /about
app.get("/about",(req,res)=> {
    res.send("About Us");
});

//route /contact
app.get("/contact",(req,res)=>{
    res.send("contact Us");
});

//route /contact
app.get("/contact", (req,res)=>{
    //res.send("Hello");
    res.sendFile(__dirname + "/index.html");
});

//route /about
app.get("/contact", (req,res)=>{
    //res.send("about Us");
    res.sendFile(__dirname + "/about.html");
});

//route /contact
app.get("/contact", (req,res)=>{
    //res.send("contact Us");
    res.sendFile(__dirname + "/contact.html");
});

//route /mahasiswa
app.get("/mahasiswa",(req,res)=>{
    res.json({
        "status" : "succes",
        "message" : "data mahasiswa",
        "data" :[
            {npm: 2226240169, nama: "April"},
            {npm: 2226240169, nama: "yani"},
            {npm: 2226240169, nama: "Rokky"}]
    })
});

//route /dosen dengan respon json sebagai berikut
app.get("/dosen",(req,res)=>{
    res.json({
        "status" : "succes",
        "message" : "data dosen",
        "data": [
            {prodi: "Sistem Informasi", dosen: ["iis","faris","david"]},
            {prodi: "informatika", dosen: ["derry","siska","yohannes"]}

        ]
    })
})

//handle route yang tidak teraftar
app.use("/",(req,res)=>{
    res.send
    ("<h1>404 Not Found</h1>");
});

// jalankan server
app.listen(port,()=>{ 
    console.log(`Server dapat diakses di http://localhost:${port}`);
});