var myTpl = require("../tpl/my.string");
//创建子视图
SPA.defineView("my",{
  //将模版写在body里
  html:myTpl
});
