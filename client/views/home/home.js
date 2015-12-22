$(document)
    .ready(function() {
	console.log('fixedmenu');
  // fix menu when passed
  console.log( $('.masthead') );
  $('.masthead')
	.visibility({
	  once: false,
	  onBottomPassed: function() {
		$('.fixed.menu').transition('fade in');
	  },
	  onBottomPassedReverse: function() {
		$('.fixed.menu').transition('fade out');
	  }
	});
  

  // create sidebar and attach to menu open
  $('.ui.sidebar')
	.sidebar('attach events', '.toc.item');
    
});
