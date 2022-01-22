
$(document).ready(function(){

    // Bright Mode Secondary Color
    var $brightSecond = $("#navbar-base, #file-btn-base, #edit-btn-base, #layer-btn-base, #widget-btn-base, #help-btn-base");
    // Bright Mode Main Color      
    var $brightMain = $("#file-dropdown-theme, #blank-dropdown-theme-a, #pdfDownload, #pngDownload, #jpgDownload, #blank-dropdown-theme-b, #edit-dropdown-theme, #bright-theme, #dark-theme, #settings-dropdown-theme, #font-dropdown-theme, #cork-bg, #wood-bg, #metal-bg, #blank-dropdown-theme-c, #notes-dropdown-theme, #note1, #note2, #note3, #note4, #note5, #note6, #media-dropdown-theme, #media7, #media8, #media9, #media10, #media11, #media12, #list-dropdown-theme, #spotify-dropdown-theme, #counter23, #list13, #list14, #list15, #list16, #list17, #list18, #blank-dropdown-theme-d, #weather-dropdown-theme, #counter21, #twitter-dropdown-theme, #counter20, #calendar-dropdown-theme, #counter22, #counter-dropdown-theme, #counter19, #blank-dropdown-theme-e, #help-button, #manual-button, #about-button, #feedback-button");


    // Light Mode    
    $("#bright-theme").click(function() {

        $("#navbar-base").removeClass("bg-gray-main-dark-a");

        $("#helpscreen, #helpscreen-txt").addClass("bg-gray-main");
        $("#helpscreen, #helpscreen-txt").removeClass("bg-gray-main-dark-a");

        $("#help-header-theme").addClass("bg-gray-second");
        $("#help-header-theme").removeClass("bg-gray-second-dark-a");

        $brightSecond.removeClass("bg-gray-second-dark");

        $brightMain.removeClass("bg-gray-main-dark");

        $brightSecond.addClass("bg-gray-second-bright");

        $brightMain.addClass("bg-gray-main");
        /*
        $("#file-dropdown-theme").removeClass("bg-gray-main-dark");
        $("#blank-dropdown-theme-a").removeClass("bg-gray-main-dark");
        $("#pdfDownload").removeClass("bg-gray-main-dark");
        $("#pngDownload").removeClass("bg-gray-main-dark");
        $("#jpgDownload").removeClass("bg-gray-main-dark");
        $("#blank-dropdown-theme-b").removeClass("bg-gray-main-dark");
        $("#edit-dropdown-theme").removeClass("bg-gray-main-dark");

        $("#file-btn-base").removeClass("bg-gray-second-dark");
        $("#edit-btn-base").removeClass("bg-gray-second-dark");
        $("#layer-btn-base").removeClass("bg-gray-second-dark");
        $("#widget-btn-base").removeClass("bg-gray-second-dark");
        $("#help-btn-base").removeClass("bg-gray-second-dark");

        $("#navbar-base").addClass("bg-gray-second-bright");
        $("#file-btn-base").addClass("bg-gray-second-bright");
        $("#edit-btn-base").addClass("bg-gray-second-bright");
        $("#layer-btn-base").addClass("bg-gray-second-bright");
        $("#widget-btn-base").addClass("bg-gray-second-bright");
        $("#help-btn-base").addClass("bg-gray-second-bright");

        $("#file-dropdown-theme").addClass("bg-gray-main");
        $("#blank-dropdown-theme-a").addClass("bg-gray-main");
        $("#pdfDownload").addClass("bg-gray-main");
        $("#pngDownload").addClass("bg-gray-main");
        $("#jpgDownload").addClass("bg-gray-main");
        $("#blank-dropdown-theme-b").addClass("bg-gray-main")
        $("#edit-dropdown-theme").addClass("bg-gray-main");
        */
    
    });
    
});
