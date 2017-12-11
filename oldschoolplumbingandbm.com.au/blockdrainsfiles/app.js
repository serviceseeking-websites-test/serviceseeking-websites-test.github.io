$(document).ready(function(){

	var $portfolioClone = $(".portfolio").clone();
	$(".quicksand a").click(function(e) {
		e.preventDefault();
		$(".quicksand li").removeClass("current");
		var $filterClass = $(this).parent().attr("class");

		if ($filterClass == "all") {
			var $filteredPortfolio = $portfolioClone.find("li");
		} else {
			var $filteredPortfolio = $portfolioClone.find("li[data-type~="+$filterClass+"]");
		}

		$(".portfolio").quicksand( $filteredPortfolio, {
			duration: 800,
			easing: 'easeInOutQuad'
		});
		$(this).parent().addClass("current");
	});
  
   $(".quicksand-month a").click(function(e) {
		e.preventDefault();
		$(".quicksand-month li").removeClass("current");
		var $filterClass = $(this).parent().attr("class");

		if ($filterClass == "all") {
			var $filteredPortfolio = $portfolioClone.find("li");
		} else {
			var $filteredPortfolio = $portfolioClone.find("li[data-date~="+$filterClass+"]");
		}

		$(".portfolio").quicksand( $filteredPortfolio, {
			duration: 800,
			easing: 'easeInOutQuad'
		});
		$(this).parent().addClass("current");
	});

});