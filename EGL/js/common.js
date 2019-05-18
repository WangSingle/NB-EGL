(function () {
  // 折叠导航栏按钮代码
  var ul = document.getElementById("nav-ul");
  btn.onclick = function () {
    console.log("触发事件");
    var orc = btn.getAttribute("data-orc");
    if (orc === "close") {
      ul.className = "ul-show";
      btn.setAttribute("data-orc", "open");
      // nav.className="under-line";
    } else {
      ul.className = "ul-hidden";
      btn.setAttribute("data-orc", "close");
    }
  }
  //置顶图标显示
  $('#top-back').hide()
  $(window).scroll(function () {
    if ($(this).scrollTop() > 350) {
      $("#top-back").fadeIn();
    } else {
      $("#top-back").fadeOut();
    }
  })

  // 导航栏在鼠标向下滚动时置顶显示
  $(window).scroll(function () {
    if ($(this).scrollTop() > 350) {
      $("#nav").addClass("scroll");
    } else {
      $("#nav").removeClass("scroll");
    }
  })

  
})()