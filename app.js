const express = require('express');
const registerRouter=require("./routes/regist.js");
const loginRouter=require("./routes/loginRouter.js");
const adminRouter=require("./routes/adminRouter.js");
const drinkRouter=require("./routes/drinkRouter.js");
const detail_coffeRouter=require("./routes/detail_coffeRouter.js");
const bodyParser=require("body-parser");
var app = express();
app.listen(3000,()=>{
   console.log('服务器创建成功');
});
app.use(bodyParser.urlencoded({
   extended:false
}));
app.use(express.static("public"));
app.use("/user",registerRouter);
app.use("/userL",loginRouter);
app.use("/admin",adminRouter);
app.use("/drink",drinkRouter);
app.use("/detail",detail_coffeRouter);
