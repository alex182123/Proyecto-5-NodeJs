const moongose = require('mongoose')
const password = '7122022'
const dbname = 'CasasProyecto'
const uri = 'mongodb+srv://JostinDB:${password}@cluster0.ypk2vbo.mongodb.net/${dbname}?retryWrites=true&w=majority'
try{
    console.log('CONNECTION SUCESSFUL')
    /* module.exports = () => */ moongose.connect(uri,{userNewUrlParser: true,useUnifiedTopology: true})
}catch(err){
    console.error(err)
}
