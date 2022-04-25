const express = require('express');
const app = express();
const path=require('path')
const dotenv = require('dotenv')
dotenv.config()
const PORT=process.env.PORT || 80


// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../client/build')));

app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
});

/*app.get('/',(req,res)=>{
    res.json({msg:'HOME PAGE'});
})*/


app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});


app.listen(PORT, () => {
    console.log(`I am listening to port ${PORT}`)
})