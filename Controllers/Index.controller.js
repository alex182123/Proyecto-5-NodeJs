const connection = require('../DBConection/Connection')

const controller = {}
controller.index = async (req,res)=>{
    try{
        await connection()
        console.log('CONNECTION SUCESSFUL')
    }catch(err){
        console.error(err)
    }
    
}

module.exports = controller