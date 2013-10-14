$(function() {

	// Cette ligne retire l'attribut style du body ajouté par jquery

	$('body').removeAttr('style');


	// Cette fonction permet l'ouverture du menu au clic sur le bouton #bouton-menu

	$('#button-menu').click( function() {

		if($('#chevron').hasClass('icon-chevron-sign-up') == true)
		{
			$('#chevron')
			.removeClass('icon-chevron-sign-up')
			.addClass('icon-chevron-sign-down');
		}
		else
		{
			$('#chevron')
			.removeClass('icon-chevron-sign-down')
			.addClass('icon-chevron-sign-up');
		};

		if ($('nav').hasClass('nav-open'))
		{
			$('nav').removeClass('nav-open');
		}
		else
		{
			$('nav').addClass('nav-open');
		}
	});


	// Cette fonction permet de n'afficher que les entetes du menu

	$('.li-menu').hide();
	$('.li-menu:first-child').show();

	// On affiche le sous-menu dans lequel on se trouve

	var actualPage = '.submenu:contains("' + $('.section-title').text() + '")';

	$(actualPage)
	.addClass('submenu-actual')
	.removeClass('submenu');

	$('.submenu-actual > .li-menu').show();

	// A chaque clic sur un sous menu, tout les li-menu sont cachés sauf l'entete

	$('.submenu').click( function() {
		$('.submenu > .li-menu').hide();
		$('.submenu > .li-menu:first-child').show();
	});

	// Le sous menu qui a été cliqué afiche ses propres li-menu

	$('.submenu:eq(0)').click( function() {
		$('.submenu:eq(0) > .li-menu').show();
	});

	$('.submenu:eq(1)').click( function() {
		$('.submenu:eq(1) > .li-menu').show();
	});

	$('.submenu:eq(2)').click( function() {
		$('.submenu:eq(2) > .li-menu').show();
	});

	$('.submenu:eq(3)').click( function() {
		$('.submenu:eq(3) > .li-menu').show();
	});

	$('.submenu:eq(4)').click( function() {
		$('.submenu:eq(4) > .li-menu').show();
	});

	$('.submenu:eq(5)').click( function() {
		$('.submenu:eq(5) > .li-menu').show();
	});



	// Cette fonction bloque la section lors du scroll du menu 

	$('nav').mouseenter( function() {

		var actualScroll = window.scrollY;
		var top = '-' + actualScroll + 'px';

		$('section').css('position', 'fixed');
		$('section').css('top', top);

		$('nav').mouseleave( function() {

			$('section').removeAttr('style');
			window.scrollTo(0, actualScroll);
		});
	});

});
