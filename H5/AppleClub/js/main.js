/**Swiper 组件初始化**/
(function() {
  document.onreadystatechange = loading;

  function loading() {
    if (document.readyState == "complete") {
      $(".load").remove();
      $(".container").show();
      var mySwiper = new Swiper('.swiper-container', {
        speed: 1000,
        direction: 'vertical',
        loop: false,
        noSwiping: true,
        onInit: function(swiper) { //Swiper2.x的初始化是onFirstInit
          swiperAnimateCache(swiper); //隐藏动画元素 
          swiperAnimate(swiper); //初始化完成开始动画
        },
        onSlideChangeEnd: function(swiper) {
            swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
          }
      });
    }
  }
}());
