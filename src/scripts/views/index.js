
var indexTpl = require("../tpl/index.string");

SPA.defineView("index",{
  //将模版写在body里
  html:indexTpl,

  plugins: [
      'delegated'
    ],
    // 定义子视图
  modules: [{
    name: 'content',
    views: ['home', 'forum', 'my'],
    container: '.m-index-container',
    defaultTag: 'home'
  }],

  bindActions: {
    'tap.exit': function () {
      // 关闭视图
      this.hide();
    },
    // 切换子视图
    'tap.switch': function (e, data) {
      // 切换：launch方法里传入视图的名字
      this.modules.content.launch(data.tag);
      $(e.el).addClass('active').siblings().removeClass('active');
    }
  }

});
