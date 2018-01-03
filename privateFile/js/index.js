//使用面向对象进行开发的话，得有一个类,在js当中，构造函数就相当于是后端语言中的类
function Tab(tab) {
  // 获取数据
  this.tab = document.getElementById(tab);
  this.btns = this.tab.getElementsByTagName('input')
  this.divs = this.tab.getElementsByTagName('div')
  this.nowIndex = 0
}

Tab.prototype.init = function () {
  // 首个按钮背景要变成红色，第一个盒子要显示出来
  this.btns[0].style.backgroundColor = 'red';
  this.divs[0].style.display = 'block';
  var _this = this;//
  for (var i = 0; i < this.btns.length; i++) {
    this.btns[i].index = i
    //这层的this 是构造函数创建出来的实例
    this.btns[i].onclick = function () {
      _this.change(this) // 传入 当前被点击的那个按钮对象
    }
  }

  this.autoPlay()
}

Tab.prototype.change = function (obj) {
  //如果在这个函数内部使用this,this是构造函数创建出来的实例对象
  for (var j = 0; j < this.btns.length; j++) {
    this.btns[j].style.backgroundColor = ''
    this.divs[j].style.display = 'none'
  }
  //此时的this表示谁 被点击的当前的按钮
  obj.style.backgroundColor = 'red'
  this.divs[obj.index].style.display = 'block'
}

Tab.prototype.autoPlay = function(){
  var _this = this
  setInterval(function(){
    // this是window
    if(_this.nowIndex==2){
      _this.nowIndex =0
    }else {
      _this.nowIndex++
    }
    var btn = _this.btns[_this.nowIndex]
    _this.change(btn)
  },1000)
}