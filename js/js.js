// JavaScript Document

$(function(){
	var num=0
	var timer=null;
	// 头部注册区域效果
	$('.top_r .right').mouseover(function(){
		$('.right .hidden_r').show();
	})
	$('.top_r .right').mouseout(function(){
		$('.right .hidden_r').hide();
	})

	$('.left').mouseover(function(){
		$('.hidden_l').show();
	})
	$('.left').mouseout(function(){
		$('.hidden_l').hide();
	})
	$('.hidden_l p .l_1').mouseover(function(){
		$(this).css('border-bottom','2px solid #249FF1').siblings('.l_2').css('border-bottom','none');
	})
	$('.hidden_l p .l_2').mouseover(function(){
		$(this).css('border-bottom','2px solid #249FF1').siblings('.l_1').css('border-bottom','none');
	})
//头部搜索区域
	$('.top_sosuo .text').focus(function(){
		$(this).css('border','1px solid #4EB7FE');
		$(this).val('');
	})
	$('.top_sosuo .text').blur(function(){
		$(this).val('烽火佳人');
//		$(this).css('border','none');
	})
//轮播区域开始
	$('#lunbo .lunbo_c .lunbo_b li').mouseover(function(){
		clearInterval(timer);
		var bk=$(this).find('img').attr('bk');
		var background='url('+bk+') '+' no-repeat'+' center';
		$('#lunbo').css('background',background)
		$(this).addClass('biankuang').siblings('li').removeClass('biankuang');
		num=$(this).index();
		$('#lunbo .lunbo_c h3 ').eq(num).css('display','block').siblings('h3').css('display','none');
	})
	
	timer=setInterval(huantu,2000);
	function huantu(){

		num++;
		if(num>11){
			num=0;
		}
		var bk=$('#lunbo .lunbo_c .lunbo_b li').eq(num).find('img').attr('bk');
		var background='url('+bk+') '+' no-repeat center';
		$('#lunbo').css('background',background);
		$('#lunbo .lunbo_c .lunbo_b li').eq(num).addClass('biankuang').siblings('li').removeClass('biankuang');
		$('#lunbo .lunbo_c h3').eq(num).css('display','block').siblings('h3').css('display','none');


	}

	$('#lunbo .lunbo_c .lunbo_b li').mouseout(function(){
		timer=setInterval(huantu,2000)
	})
	//轮播区右侧选项卡区域
	$('.lunbo_r .r_nav li ').mouseover(function(){
		$(this).addClass('r_nav_a').siblings('li').removeClass('r_nav_a');
		num=$(this).index();
		$('.lunbo_r .dingwei .b_naw').eq(num).css('display','block').siblings('ul').css('display','none');
	})
	//轮播区右侧选项卡区域结束
//轮播区域结束

//今日热播选项卡区域
	$('.hot .hot_left .hot_t a').mouseover(function(){
		$(this).addClass('hot_s').siblings('a').removeClass('hot_s');
		num=$(this).index();
		$('.hot .hot_ul').eq(num).css('display','block').siblings('ul').css('display','none');
	})


	//大电影区域选项卡
	$('.bigMovie .hot_t a').mouseover(function(){
		$(this).addClass('hot_s').siblings('a').removeClass('hot_s');
		num=$(this).index();
		$('.dddw .movie_ul').eq(num).css('display','block').siblings('ul').css('display','none');
	})
//今日热播选项卡区域结束

//电视区域选项卡开始
	$('.dianshiju .tv_left .hot_t a').mouseover(function(){
		$(this).addClass('hot_s').siblings('a').removeClass('hot_s');
		num=$(this).index();
		$('.tvdw .dsj_ul').eq(num).css('display','block').siblings('.dsj_ul').css('display','none');
	})

	//电视剧排行榜区域
	$('.ph_ul02 .phb').mouseover(function(){
		$(this).addClass('ph_ul02_li').siblings('li').removeClass('ph_ul02_li');
		num=$(this).index();
		$('.phb_dw').eq(num).css('display','block').siblings('div').css('display','none');
	})
	// 电视剧排行榜区域结束
//电视区域选项卡结束

//猜你喜欢区域轮播图开始
	var i=0;
	
	
	$('.xihuan .like_left .like_a').click(function(){
		i++
		if(i==4){
			
			$('.gundong .like_ul').css('left','0px')
			i=1;
		}
		var left_i=i*-954;
		$('.gundong .like_ul').stop().animate({'left':left_i+'px'},500);
	})
		
	
//猜你喜欢区域轮播图结束



//电影区域选项卡开始
	$('.dingy .mov_left .hot_t a').mouseover(function(){
		$(this).addClass('hot_s').siblings('a').removeClass('hot_s');
		num=$(this).index();
		$('.dingy .mov_left .mov_ul').eq(num).css('display','block').siblings('ul').css('display','none');
	})
	//右侧电影排行榜
	$('.ph_ul02 .mov_li').mouseover(function(){
		$(this).addClass('ph_ul02_li').siblings('li').removeClass('ph_ul02_li');
		num=$(this).index();
		$('.mov .ph .phb_dw').eq(num).css('display','block').siblings('div').css('display','none');
	})

//电影区域选项卡结束

//影视VIp区域开始
	$('.like_2 .like_left .hot_t a').mouseover(function(){
		$(this).addClass('hot_s').siblings('a').removeClass('hot_s');
		num=$(this).index();
		$('.like_2 .like_ul').eq(num).css('display','block').siblings('ul').css('display','none');
	})
	//排行榜区域
	$('.like_2 .like_right .ph_ul02 li').mouseover(function(){
		$(this).addClass('ph_ul02_li').siblings('li').removeClass('ph_ul02_li');
		num=$(this).index();
		$('.like_2 .like_right .phb_dw').eq(num).css('display','block').siblings('div').css('display','none');
	})
//影视VIP区域结束
//综艺区域开始
	$('.zongyi .tv_left .hot_t a').mouseover(function(){
		$(this).addClass('hot_s').siblings('a').removeClass('hot_s');
		num=$(this).index();
		$('.zongyi .tvdw .zyi').eq(num).css('display','block').siblings('.zyi').css('display','none');
		
	})
	//右侧区域
	$('.zongyi .ph_ul02 .mov_li').mouseover(function(){
		$(this).addClass('ph_ul02_li').siblings('li').removeClass('ph_ul02_li');
		num=$(this).index();
		$('.zongyi .ph .phb_dw').eq(num).css('display','block').siblings('div').css('display','none');
	})


//综艺区域结束

//动漫区域开始
	$('.tv_left .hot_t a').mouseover(function(){
		$(this).addClass('hot_s').siblings('a').removeClass('hot_s');
		num=$(this).index();
		$(this).parents('.tv_left').find('ul.youxi').eq(num).show().siblings('ul.youxi').hide();
		
	})
	// 右侧区域
	$('.cartoon .ph_ul02 li').mouseover(function(){
		$(this).addClass('ph_ul02_li').siblings('li').removeClass('ph_ul02_li');
		num=$(this).index();
		$('.cartoon .ph .phb_dw').eq(num).css('display','block').siblings('div').css('display','none');
	})

//动漫区域结束













})