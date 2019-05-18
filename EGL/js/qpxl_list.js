//汽配系列详细列表图片，鼠标放上去时，图片的位置会随着鼠标的位置变化
$(function(){
  //获取中图片的元素节点
  var $mImg=$("#m-img");
  //获取大图片div-lg元素节点
  var $divLg=$("div#div-lg");
  //先设置背景图
  $divLg.css("background-image", "url(../images/qpxl/1.jpg)")
  //获取小图片绑定单击事件
  $("div.pic-small").on("click","img",function(){
    //获取点击时的img
    var $img=$(this);
    // 获得图片的src
    var src=$img.attr("src");
    //将路径赋值给中图片
    $mImg.attr({src});
    //点击的按钮透明色变为1,其他的按钮小于1
    $img.addClass("img-click")
    .siblings().removeClass("img-click");
    //再将图片路径赋值给大的div
    $divLg.css("background-image","url("+src+")");
  })
  //给super-mask添加事件，鼠标进入时
  $("#super-mask").mouseenter(function(){
    $("#mask").removeClass("d-none");
    $divLg.removeClass("d-none");
  }).mouseleave(function(){
    $("#mask").addClass("d-none");
    $divLg.addClass("d-none");
  })
  .mousemove(function(e){
    var left=e.offsetX-12.5;
    var top=e.offsetY-12.5;
    $("#mask").css({left,top});
    $divLg.css("background-position",`${-left*2}px ${-top*2}px`);
  })
})

























//找到大图片img
/* var $big=$("div.pic-big>a>img");
//找到小图片img
var $smalls=$("div.pic-small>img");
// console.log($big,$smalls);
//为小图片绑定click事件
$smalls.click(function(){
  //找到路径
  var src=$(this).attr("src");
  //将路径传给大图
  $big.attr({src});
  // 同时为小图添加类img-click
  $(this).addClass("img-click");
  //切换时，其他小图片去掉类img-click
  $(this).siblings().removeClass("img-click")
})
 */
// 在大图中。鼠标移动时，图片位置会随之改变
/* $big.mouseover(function(e){
  var $big=$(this);
  $big.css({
    width:"100%",
    position:"relative",
    top:e.offsetY,
    left:e.offsetX
  });
})
// 
$big.mouseout(function(){
  $(this).css("");
}) */