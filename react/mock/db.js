// 用mockjs模拟生成数据
var Mock = require('mockjs');

let mr = Mock.Random;//提取mock的随机对象

//随机id和图片
let mapData = (n) => {
  var data = [];

  for (var i = 1; i <= n; i++) {

    data.push({
      id: i,
      title: "@ctitle(8,12)",
      number:Mock.mock({ "number|1-100": 100}),
      icon:mr.image('90x90', mr.color(), mr.cword(1,2)),//icon不变
      banner:mr.image('180x150',mr.color(), mr.cword(1,2)),
      detail:{
        auth:"@cname()",
        content:"@cparagraph(10,40)",
        auth_icon:mr.image('50x50', mr.color(), mr.cword(1))
      }
    })
  }
  return data
};

//json-server 要对象||函数(返回mock后的数据)
module.exports = {
  ...Mock.mock({
    'home': mapData(24),//解决 auth_icon 不随机
    'product': mapData(26),
    'service': mapData(28),
    'banner|3': [
      {
        // 属性 id 是一个自增数，起始值为 1，每次增 1
        'id|+1': 1,
        title: "@ctitle(4,8)",
        sub_title: "@ctitle(6,12)",
        banner: mr.image('375x200', mr.color(), mr.cword(4,10)),//banner不变
        time: "@integer(1553425967486,1553475967486)",
        detail:{
          icon:mr.image('20x20', mr.color(), mr.cword(1,2)),//icon不变
          auth:"@cname()",
          content:"@cparagraph(10,40)"
        }
      }
    ]
  })
};
