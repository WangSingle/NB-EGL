// 简化后的代码
//获得div.dstyle节点
var $divs = $("div[data-div]");
//找到ul节点，绑定子元素li的点击事件 0-1 2-5 6-7
$("ul.pagination").on("click", "li", function () {
  //找到当前点击的li位置
  var $li = $(this);
  //获取点击的li的下标
  var n = $li.index();
  //获取当前正在显示的div的下标2-5
  var count = parseInt($("div[data-div]:visible").attr("data-div"));
  //当点击的按钮li下标是2-5的时候
  if (n == 2 || n == 3 || n == 4 || n == 5) {
    count = n;
  } else if (n == 0) {
    count = 2;
  } else if (n == 1) {
    if (count > 2) {
      count -= 1;
    }
  } else if (n == 6) {
    if (count < 5) {
      count += 1;
    }
  } else {
    count = 5;
  }
  //根据最后的count来判断首页和尾页、上一页、下一页是否添加disabled
  $("ul.pagination>li").removeClass("disabled");
  if (count == 2) {
    $("ul.pagination>li:lt(2)").addClass("disabled");
  } else if (count == 5) {
    $("ul.pagination>li:gt(5)").addClass("disabled");
  }
  //根据改变后的count值来，将对应的div显示和隐藏
  $(`div[data-div=${count}]`).removeClass("d-none").siblings("div[data-div]").addClass("d-none");
  //讲对应的li的颜色改变
  $(`ul.pagination>li:eq(${count})`).addClass("active").siblings().removeClass("active");
})

// 未简化的原始代码
/* //找到分页符ul元素
var $ul=$("div.nynr ul");
//找到4个div图片的节点。
var $divs=$("div.part");
//利用冒泡事件将分页符的点击按钮绑定在父元素ul上面 
$ul.on("click","li",function(){
  var $li=$(this);
  // 点击1，2，3，4页面时
  if($li.is("li[data-li]")){
    var n=$li.attr("data-li");
    //
    if(n==1){
      $("ul.pagination>li:lt(2)").addClass("disabled");
      $("ul.pagination>li:gt(5)").removeClass("disabled");
    }else if(n==4){
      $("ul.pagination>li:gt(5)").addClass("disabled");
      $("ul.pagination>li:lt(2)").removeClass("disabled");
    }else(
      $("ul.pagination>li").removeClass("disabled")
    )
    //
    $li.addClass("active").siblings("[data-li]").removeClass("active");
    //切换对应的div
    $(`div[data-div=${n}]`).removeClass("d-none").siblings("[data-div]").addClass("d-none");
  } else if ($li.is("ul.pagination>li:eq(0)")){//点击首页
    //切换对应的div
    $("div[data-div=1]").removeClass("d-none").siblings("[data-div]").addClass("d-none");
    //1变色
    $("li[data-li=1]").addClass("active").siblings("[data-li]").removeClass("active");
    //首页和上一页disabled
    $("ul.pagination>li:lt(2)").addClass("disabled");
    $("ul.pagination>li:gt(5)").removeClass("disabled");
  } else if ($li.is("ul.pagination>li:eq(7)")){//点击尾页
    $("div[data-div=4]").removeClass("d-none").siblings("[data-div]").addClass("d-none");
    //1变色
    $("li[data-li=4]").addClass("active").siblings("[data-li]").removeClass("active");
    //首页和上一页disabled
    $("ul.pagination>li:lt(2)").removeClass("disabled");
    $("ul.pagination>li:gt(5)").addClass("disabled");
  } else if ($li.is("ul.pagination>li:eq(1)")) { //点击上一页
    var count=$("div.part:visible").attr("data-div");
    // console.log(count);
    
    //切换对应的div
    $(`div[data-div=${count-1}]`).removeClass("d-none").siblings("[data-div]").addClass("d-none");
    //1变色
    $(`li[data-li=${count-1}]`).addClass("active").siblings("[data-li]").removeClass("active");
    if(count==2){
      //首页和上一页disabled
      $("ul.pagination>li:lt(2)").addClass("disabled");
      $("ul.pagination>li:gt(5)").removeClass("disabled");
    } 
  } else if ($li.is("ul.pagination>li:eq(6)")) { //点击下一页
    var count = $("div.part:visible").attr("data-div");
    // console.log(count)
    //切换对应的div
    $(`div[data-div=${parseInt(count)+1}]`).removeClass("d-none").siblings("[data-div]").addClass("d-none");
    //1变色
    $(`li[data-li=${parseInt(count)+1}]`).addClass("active").siblings("[data-li]").removeClass("active");
    if (count == 3) {
      //首页和上一页disabled
      $("ul.pagination>li:lt(2)").removeClass("disabled");
      $("ul.pagination>li:gt(5)").addClass("disabled");
    }
  }
}); */