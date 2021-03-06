/**
 * YIKES Full Page Search Scripts
 * @since 1.0.0
 */
jQuery(function () {
	/**
	 * When clicking on an <li> OR <a> tag with the class 'yikes-full-page-search-toggle', toggle the container
	 * This means users can define there own links.
	 * Example: <a href="#" class="yikes-full-page-search-toggle">Open Search Container</a>
	 */
	jQuery('li[class*="yikes-full-page-search-toggle"], a[class*="yikes-full-page-search-toggle"]').on('click', function(event) {
		event.preventDefault();
		jQuery('#search').addClass( 'open' );
		jQuery('#search > form > input[type="search"]').focus();
	});

	jQuery('#search, #search button.close').on('click keyup', function(event) {
		if (event.target == this || event.target.className == 'close' || event.keyCode == 27) {
			jQuery(this).removeClass('open');
		}
	});
});
