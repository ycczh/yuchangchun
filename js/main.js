$(document).ready(function(){
	var height=$(window).height();
	var level=$('.outer').find('level')
	$('.level').css('height',height);
	$('.level2').css('margin-top',height)
	$(window).scroll(function(){
		var scrollHeight=$(window).scrollTop();
		if(scrollHeight>50){
			$('.level1-zhezhao').css('display','block')
		
		}else{
			$('.level1-zhezhao').css('display','none')
		}
	})
	setTimeout(function(){
		var bullet=$('.swiper-pagination').find('.swiper-pagination-bullet');
		bullet.eq(0).text('中国创新大会PC端');
		bullet.eq(1).text('中国创新大会移动端');
		bullet.eq(2).text('爱伙响应式官网');
		bullet.eq(3).text('爱伙招商网站');
		bullet.eq(4).text('SPA单页应用');
	},500)

	$('.level4-spa-btn').click(function(){
		var Img=$('.level4-spa').find('img');
		Img.attr('src','img/test3.gif');
		Img.css('width','320px')
		$('.zhezhao').css('display','none');
		$('.level4_project_text').css('display','none');
	})
})