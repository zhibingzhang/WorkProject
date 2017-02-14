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
        preloadImages: false,
        onInit: function(swiper) { //Swiper2.x的初始化是onFirstInit
          swiperAnimateCache(swiper); //隐藏动画元素 
          swiperAnimate(swiper); //初始化完成开始动画
        },
        onSlideChangeEnd: function(swiper) {
            swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
            if(swiper.isEnd){
              $(".arrow").hide();
            }else{
              $(".arrow").show();
            }
          }
           // initialSlide :5
      });
    }
  }
}());
// 数据
var person = {
    0: [{
      "company": "VMware 技术有限公司",
      "position": "资深主管工程师",
      "introduction": "OPENO 技术委员会投票委员，OpenStack 开源社区的核心贡献者。主要技术领域在分布式计算的系统设计和性能优化，发表了13项国际专利，3篇工业白皮书和5篇高级国际会议／期刊文章。现任 VMware 技术有限公司资深主管工程师，带领开发团队提供云计算的相关产品。",
      "title": "Lean in, 我的十年技术之路",
      "imgurl": "images/li.png"
    }],
    1: [{
      "company": "微软（中国）有限公司",
      "position": "开发工具及平台事业部<br/>首席技术顾问",
      "introduction": "负责面向开发者和合作伙伴技术布道工作。加入微软后，技术方向重点在微软 Azure 云平台的和Windows 的企业解决方案的构建方面，帮助合作伙伴利用微软的云+端技术解决他们的技术和业务需求。",
      "title": "未来人工智能会怎样，微软女科学家告诉你",
      "imgurl": "images/liting.png"
    }],
    2: [{
      "company": "微软（中国）有限公司",
      "position": "开发工具及平台事业部<br/>用户体验顾问",
      "introduction": "负责微软设计语言、新技术在中国区的普及、商业实践与落地。与国内众多知名移动应用品牌进行 Windows 产品设计合作。曾负责200+移动端主流应用的质量提升项目。",
      "title": "HoloLens 带您走进不可思议的混合现实世界",
      "imgurl": "images/liuxinyu.png"
    }],
    3: [{
      "company": "VMware 技术有限公司",
      "position": "主任工程师",
      "introduction": "来自 Women Who Code 社区，从事一线研发工作多年，涉及电信，中间件，网络虚拟化等领域。拥有多项专利，目前在 VMware 技术有限公司任职主任工程师。",
      "title": "当 SDN 遇见跨云计算",
      "imgurl": "images/liuwenfeng.png"
    }],
  }
  // 函数入口
$(function() {
  // 关闭弹出
  $('.maskBox').on('click', '.close', function() {
    $('.maskBox').removeClass('show').addClass('hidden');
  });
  // 个人信息
  $('.person').click(function() {
    var index = $(this).index();
    var html = '<div class="maskContainer"><div class="personHead"><img src="' + person[index][0]["imgurl"] + '" alt="" /></div><div class="personTitle"><h2>' + person[index][0]["company"] + '</h2><p>' + person[index][0]["position"] + '</p></div><div class="conBox">' + person[index][0]["introduction"] + '</div><h2>演讲题目：</h2><div class="conBox">' + person[index][0]["title"] + '</div><div class="close textCenter"><img src="images/close.png"/></div></div>';
    $(".maskBox").html(html).removeClass('hidden').addClass('show');
  });
})