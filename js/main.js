// Hmaburger & NavbarMobile
$(document).ready(function() {
	$('.hamburger').click(function() {

		$mobileNav = $('.menu');
        $mobileLink = $('.menu_links');

		if ($(this).hasClass('open')) {
			$mobileNav.css({"width": "0"});
            $mobileNav.css({"opacity": "0"});
            $mobileNav.css({"visibility": "hidden"});
		}
		else {
			$mobileNav.css({"width": "52%"});
            $mobileNav.css({"opacity": "1"});
            $mobileNav.css({"visibility": "visible"});
		}

		$(this).toggleClass('open');
	});
});