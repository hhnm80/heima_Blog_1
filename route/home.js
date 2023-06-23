// 引用express框架,,,,
// const express=require("express");

const my_express_1=require("express");
//末尾可以要分号结束,,,也可以不要分号结束,,,为了层次更显眼,,,,我们还是用分号接上去,,,,,,,,,用分号来代表语句的结尾,,,,

//创建博客展示页面路由,,,,
// const home=express.Router();

//路由就是浏览器的地址,其实在后端语言比如java里面也可以设置路由,,,,
// const home=my_express_1.Router();
const my_home=my_express_1.Router();

//在当前的代码里面,自始至终没有出现home这个变量,,,,



my_home.get("/",(req,res)=>{

    res.send("欢迎来到博客首页!!!!!!!!!!!!!!")
});

//将路由对象作为模块成员进行导出,,,,,上面我们已经写过不但可以引入系统模块,用户可以自定义一个模块,这个模块可以被其他源文件引入并且使用里面的功能.....


///
// module.exports=home;
// 但是再这里我们不适用home这个名字,而是使用my_home这个名字,这样会有什么影响呢????到底我们使用exports导出语句,是导出
module.exports=my_home;
