function fn_panelOpen() {
	if($('#menu').hasClass('on')){
		$('body').removeClass('dimm').removeAttr('style');
		$(window).scrollTop($('body').attr('data-scroll'));
		$('body').removeAttr('data-scroll');
		$('.ly_pop .dim').fadeOut();
		$('.panel').removeClass('mnshow');
		$('#menu').removeClass('on');
		/* 190430 추가 */
		if ($('#wrap').hasClass('main')){
			$.scrollify.enable();
		}
		/* //190430 추가 */
		setTimeout(function() {
			$('.ly_pop').empty();
		}, 200);
	}else{
		var e = $('#ly_pop');
		$(e).load('/kr/panel.html', function(responseTxt, statusTxt, xhr){
			if(statusTxt == 'success'){
				var currentTop = $(window).scrollTop();
				$('body').addClass('dimm').css('top',-currentTop).attr('data-scroll',currentTop);
				$('.ly_pop .dim').fadeIn();
				$('.panel').animate({scrollTop:0}, 0).addClass('mnshow');
				$('#menu').addClass('on');
				/* 190430 추가 */
				if ($('#wrap').hasClass('main')){
					$.scrollify.disable();
				}
				/* //190430 추가 */
			}
			if(statusTxt == 'error'){
				alert("Error: " + xhr.status + ": " + xhr.statusText);
			}
		});
	}
}
$(function(){
	//디바이스 체크
	var UserAgent = navigator.userAgent;
	if(UserAgent.match(/iPhone|iPod|iPad|iPad2|Android|Windows CE|BlackBerry|Symbian|Windows Phone|webOS|Opera Mini|Opera Mobi|POLARIS|IEMobile|lgtelecom|nokia|SonyEricsson/i) != null || UserAgent.match(/LG|SAMSUNG|Samsung/) != null) {
		top.location.href = "index.html";
	}
	//skrollr
	skrollr.init();
	//wow
	new WOW().init();
	//버튼 프레스 효과
	$('button, .btn_link').bind('touchstart',function(){
		$(this).addClass('press');
	});
	$('button, .btn_link').bind('touchend',function(){
		$(this).removeClass('press');
	});
	//select 선택 시 클래스 추가
	$('select').on('change', function(){
		$(this).addClass('on');
	});
	//페밀리사이트 *****************************************/
	//페밀리사이트 레이어 팝업 노출
	$('.ft_family .btn_family').click(function(){
		$('.family_lst').slideToggle(200);
		$(this).toggleClass('active');
	});
	//페밀리사이트 노출된 레어어 클릭시
	$('.ft_family .family_lst ul li a').click(function(){
		$('.family_lst').slideToggle(200);
		$('.ft_family .btn_family').toggleClass('active');
	});
	//페밀리사이트 마우스 아웃
	$('.ft_family').mouseleave(function(){
		$('.family_lst').slideUp(200);
		$('.ft_family .btn_family').removeClass('active');
	});
	//페밀리사이트 레이어 높이 변경
	$('.ft_family').css({
		'height' : $('.btn_family').outerHeight(true) + $('.family_lst').outerHeight(true),
		'margin-top': -$('.family_lst').outerHeight(true)+60
	})
	//페밀리사이트 버튼 위치 값 변경
	$('.btn_family').css('margin-top', $('.family_lst').outerHeight(true) );
	//페밀리사이트 *****************************************/
});
