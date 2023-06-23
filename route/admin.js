// 引用express框架,,,,
// const express=require("express");

const my_express_1=require("express");
//末尾可以要分号结束,,,也可以不要分号结束,,,为了层次更显眼,,,,我们还是用分号接上去,,,,,,,,,用分号来代表语句的结尾,,,,

//创建博客展示页面路由,,,,
// const admin=express.Router();

//路由就是浏览器的地址,其实在后端语言比如java里面也可以设置路由,,,,
// const admin=my_express_1.Router();
const my_admin=my_express_1.Router();


my_admin.get("/login",(req,res)=>{

    // res.send("欢迎来到博客管理页面!!!!!!!!!!!!!!")
    res.render("admin/login")


});



//将路由对象作为模块成员进行导出,,,,,上面我们已经写过不但可以引入系统模块,用户可以自定义一个模块,这个模块可以被其他源文件引入并且使用里面的功能.....

// 创建用户列表路由,,,,,
my_admin.get("/user",(req,res)=>{

    // 为什么没有渲染成功呢??????
    res.render("admin/user")


})





///
// module.exports=admin;

// 注释掉了,就会报错,,,,那么这个my_admin到底是干嘛的呢????到底是干嘛的呢????
// module.exports=my_admin;
module.exports=my_admin;

// 在这里又要做什么事呢????