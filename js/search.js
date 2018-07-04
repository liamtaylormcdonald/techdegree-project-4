$('[data-search]').on('keyup', function() {
	var searchVal = $(this).val();
	var filterGallery = $('[data-filter-item]');
	if ( searchVal != '' ) {
		filterGallery.addClass('hidden');
		$('[data-filter-item][data-filter-name*="' + searchVal.toLowerCase() + '"]').removeClass('hidden');
	} else {
		filterGallery.removeClass('hidden');
	}
});
