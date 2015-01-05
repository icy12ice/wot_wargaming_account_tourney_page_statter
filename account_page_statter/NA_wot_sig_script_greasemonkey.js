// ==UserScript==
// @name       World Of Tanks Wargaming Account Page Statter
// @namespace   World_Of_Tanks
// @description Looks up user's stats on wotlabs
// @version     1.0
// @grant       none
// @match      http://worldoftanks.com/community/accounts/*
// @require    http://code.jquery.com/jquery-latest.js
// @copyright   icy12ice
// ==/UserScript==

var $j = jQuery.noConflict();

$j( document ).ready(function() {

    try {
		// get the user's name
		var name = $j(this).find("#js-profile-name").text();
		// build signature link for sig
		var sigLink = "http://wotlabs.net/sig_dark/na/" + name + "/signature.png";
        // replace account created html with sig
		$j(this).find(".b-profile-name").find("p").html('<div class="wotstats"><img src="' + sigLink + '"></div>');
        
    } catch(err) {
    }
});