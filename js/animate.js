$(document).ready(function(){
	var levelBtn=$('.level1_list').find('li');
	var levels=$(".outer").find('.level-dis');
	levelBtn.each(function(index){
		levelBtn.eq(index).click(function(){
			var n=index;
			var height=levels.eq(n).offset().top;
			$('html,body').animate({
				scrollTop:height
			},800)
		})
	})

	//技能树加载 

	$(window).scroll(function(){
		var jinduwidth=$('.level3_list_circle-inner1').css('width');

		var scrollHeight=$(window).scrollTop();
		var height1=$('.level3').offset().top;
		if(scrollHeight>=120){
			$('.level2_you').addClass('animated bounceInLeft');
			$('.level2_introduce').addClass('animated bounceInDown');
			$('.level2_lifeshow').addClass('animated fadeInDown');
			}
		if(scrollHeight>=780){
			setTimeout(function(){
				$(".level3_list_circle-inner1").animate({
					width:600
				},1500)
			},300)
		}
		if(scrollHeight>=840){
			setTimeout(function(){
				$(".level3_list_circle-inner2").animate({
					width:800
				},1500)
			},300)
		}
		if(scrollHeight>=900){
			setTimeout(function(){
				$(".level3_list_circle-inner3").animate({
					width:600
				},1500)
			},300)
		}
		if(scrollHeight>=960){
			setTimeout(function(){
				$(".level3_list_circle-inner4").animate({
					width:700
				},1500)
			},300)
		}
		if(scrollHeight>=1020){
			setTimeout(function(){
				$(".level3_list_circle-inner5").animate({
					width:600
				},1500)
			},300)
		}
		if(scrollHeight>=1080){
			setTimeout(function(){
				$(".level3_list_circle-inner6").animate({
					width:600
				},1500)
			},300)
		}
		if(scrollHeight>=1140){
			setTimeout(function(){
				$(".level3_list_circle-inner7").animate({
					width:400
				},1500)
			},300)
		}
	})

	//项目展示动画
	var Project=$('.level4_content').find('.level4_zuopin');
	Project.each(function(index){
		Project.eq(index).mouseover(function(){
			$(this).find('.zhezhao').addClass('animated bounceInDown opa8');
			$(this).find('.level4_project_text').addClass('animated bounceInDown opa1');
		})
		Project.eq(index).mouseleave(function(){
			$(this).find('.zhezhao').removeClass('animated bounceInDown opa8');
			$(this).find('.level4_project_text').removeClass('animated bounceInDown opa1');
		})
	})



	
})