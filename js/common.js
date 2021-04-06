// 공통 탭
$(".js-tab-wrap").each(function() {
  var tabWrap = $(this);

  tabWrap.find('> .js-tab-cont').hide().first().show();
  tabWrap.find("> .js-tab-list .js-btn-tab:first").addClass("active");

  tabWrap.find("> .js-tab-list").find('.js-btn-tab').click(function() {
    var $this = $(this);
    var tabIdx = $this.closest('li').index();

    $this.addClass("active").closest('li').siblings().find('.js-btn-tab').removeClass("active");
    var tabs = tabWrap.find('> .js-tab-cont');
    tabs.hide();
    tabs.eq(tabIdx).show();
    return false;
  });
});

// 커스텀 input file
$('.custom-file-input').on('change', function() {
  var fileName = $(this).val().split("\\").pop();
  $(this).siblings(".custom-file-label").addClass("selected").html(fileName);
});


/* 가이드 페이지 용 */
$('.sidebarCollapse').on('click', function () {
  $('#sidebar').toggleClass('active');
});


var mql = window.matchMedia("screen and (max-width: 768px)");
var isMobile = mql.matches;

if(isMobile) {
  $('#sidebar').toggleClass('active');
}else {
  // PC
}

mql.addListener(function(e) {
  if(e.matches) {
    // 768 이하로 넘어갈때
    $('#sidebar').removeClass('active');
  } else {
    // 768 이상으로 넘어갈때
  }
});