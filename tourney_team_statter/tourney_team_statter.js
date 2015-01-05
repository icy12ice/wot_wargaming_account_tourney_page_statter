// ==UserScript==
// @name       World Of Tanks Tourney Lookup NA
// @namespace  World_Of_Tanks
// @version    1.0
// @description  Adds stats to everyone on tournament team's page
// @match      http://worldoftanks.com/uc/teams/*
// @require    http://code.jquery.com/jquery-latest.js
// @copyright  icy12ice
// ==/UserScript==

var $j = jQuery.noConflict();

$j( document ).ready(function() {
    
    $j("div.l-sidebar").html("");
    
    $j("td.b-user").each(function(index) {
        try {
			var name = $j(this).find("a").text();
			var sigLink = "http://wotlabs.net/sig_dark/na/" + name + "/signature.png";
			var temp = $j(this).find("a").html();
			$j(this).find("a").html(temp + '<div class="wotstats"><img src="' + sigLink + '"></div>');
        } catch(err) {
        }
    });
    $j(".wotstats").css("overflow", "hidden");
});