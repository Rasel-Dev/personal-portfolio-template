$(document).ready(function () {
	$('#sub').click(function () {
		$(this).toggleClass('active-sub');

		if ($(this).hasClass('active-sub')) {
			$('#toggleIcon').html(
				'<i class="fa fa-angle-up" aria-hidden="true"></i>',
			);
		} else {
			$('#toggleIcon').html(
				'<i class="fa fa-angle-down" aria-hidden="true"></i>',
			);
		}
	});

	$(window).bind('scroll', function () {
		if ($(window).scrollTop() > 200) {
			$('#header').addClass('header-scrolled');
		} else {
			$('#header').removeClass('header-scrolled');
		}
	});

	$('a').on('click', function (evt) {
		if (this.hash !== '') {
			evt.preventDefault();
			let location = this.hash;
			$('html, body').animate(
				{
					scrollTop: $(location).offset().top,
				},
				800,
				function () {
					window.location.hash = location;
				},
			);
		}
	});
});
