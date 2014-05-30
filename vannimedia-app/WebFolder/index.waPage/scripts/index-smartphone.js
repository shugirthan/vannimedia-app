
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var row1 = {};	// @container
// @endregion// @endlock

// eventHandlers// @lock

	row1.click = function row1_click (event)// @startlock
	{// @endlock
		// Add your code here
		$$("navigationView1").goToNextView();
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("row1", "click", row1.click, "WAF");
// @endregion
};// @endlock
