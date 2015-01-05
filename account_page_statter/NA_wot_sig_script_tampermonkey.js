// ==UserScript==
// @name       World Of Tanks Wargaming Account Page Statter
// @namespace  World_Of_Tanks
// @version    1.0
// @description  Adds a relevant stats to every Account Page on the Main Site
// @match      http://worldoftanks.com/community/accounts/*
// @require    http://code.jquery.com/jquery-latest.js
// @copyright  icy12ice
// ==/UserScript==

var $j = jQuery.noConflict();

$j( document ).ready(function() {

    try {
		var name = $j(this).find("#js-profile-name").text();
		var sigLink = "http://wotlabs.net/sig_dark/na/" + name + "/signature.png";
        
		$j(this).find(".b-profile-name").find("p").html('<div class="wotstats"><img src="' + sigLink + '"></div>');
        
    } catch(err) {
    }
	
    $j(".wotstats").css("overflow", "hidden");
});