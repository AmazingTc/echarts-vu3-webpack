let fiveData = require('../mock/five.json')
let express=require("express")
let router=express.Router()
router.get('/data',(req,res)=>{
    res.send({
        msg:"第五个图表的数据",
        data:fiveData
    })
})
module.exports=router