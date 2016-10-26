(function($) {
    var $window = $(window);
    var $document = $(document);

    $document.on('flatdoc:ready', function() {

        $("a.active").closest("ul.level-2").slideToggle("slow");

        //Introduction navigation
        var introi = $("li#introduction-item");
        var introl = $("ul#introduction-list");

        introi.prepend( $("<div class='toggle-menu'></div>") );
        introl.hide();
        var introe = $("#introduction-item > div.toggle-menu");

        introe.click(function(){
            $(this).toggleClass("expand");
            introl.slideToggle("slow");

        });

        //Downloads navigation
        var dli = $("li#downloads-item");
        var dll = $("ul#downloads-list");

        dli.prepend( $("<div class='toggle-menu'></div>") );
        dll.hide();
        var dle = $("#downloads-item > div.toggle-menu");

        dle.click(function(){
            $(this).toggleClass("expand");
            dll.slideToggle("slow");

        });

        //Getting Started navigation
        var gsi = $("li#getting-started-item");
        var gsl = $("ul#getting-started-list");

        gsi.prepend( $("<div class='toggle-menu'></div>") );
        gsl.hide();
        var gse = $("#getting-started-item > div.toggle-menu");

        gse.click(function(){
            $(this).toggleClass("expand");
            gsl.slideToggle("slow");

        });

        //Features navigation
        var fei = $("li#features-item");
        var fel = $("ul#features-list");

        fei.prepend( $("<div class='toggle-menu'></div>") );
        fel.hide();
        var fee = $("#features-item > div.toggle-menu");

        fee.click(function(){
            $(this).toggleClass("expand");
            fel.slideToggle("slow");

        });


        //Custom Widgets navigation
        var cwi = $("li#custom-widgets-item");
        var cwl = $("ul#custom-widgets-list");

        cwi.prepend( $("<div class='toggle-menu'></div>") );
        cwl.hide();
        var cwe = $("#custom-widgets-item > div.toggle-menu");

        cwe.click(function(){
            $(this).toggleClass("expand");
            cwl.slideToggle("slow");

        });

        //Sketch Files navigation
        var sfi = $("li#sketch-files-item");
        var sfl = $("ul#sketch-files-list");

        sfi.prepend( $("<div class='toggle-menu'></div>") );
        sfl.hide();
        var sfe = $("#sketch-files-item > div.toggle-menu");

        sfe.click(function(){
            $(this).toggleClass("expand");
            sfl.slideToggle("slow");

        });

        //Supported Hardware navigation
        var shi = $("li#supported-hardware-item");
        var shl = $("ul#supported-hardware-list");

        shi.prepend( $("<div class='toggle-menu'></div>") );
        shl.hide();
        var she = $("#supported-hardware-item > div.toggle-menu");

        she.click(function(){
            $(this).toggleClass("expand");
            shl.slideToggle("slow");

        });

        //APIs navigation
        var api = $("li#bring-your-own-thing-api-item");
        var apl = $("ul#bring-your-own-thing-api-list");

        api.prepend( $("<div class='toggle-menu'></div>") );
        apl.hide();
        var ape = $("#bring-your-own-thing-api-item > div.toggle-menu");

        ape.click(function(){
            $(this).toggleClass("expand");
            apl.slideToggle("slow");

        });

        //Security navigation
        var sci = $("li#security-item");
        var scl = $("ul#security-list");

        sci.prepend( $("<div class='toggle-menu'></div>") );
        scl.hide();
        var sce = $("#security-item > div.toggle-menu");

        sce.click(function(){
            $(this).toggleClass("expand");
            scl.slideToggle("slow");

        });

        //LoRa navigation
        var loraItem = $("li#lora-item");
        var loraList = $("ul#lora-list");

        loraItem.prepend( $("<div class='toggle-menu'></div>") );
        loraList.hide();
        var loraE = $("#lora-item > div.toggle-menu");

        loraE.click(function(){
            $(this).toggleClass("expand");
            loraList.slideToggle("slow");

        });

        //MQTT API navigation
        var mqttItem = $("li#bring-your-own-thing-api-item");
        var mqttList = $("ul#bring-your-own-thing-api-list");

        mqttItem.prepend( $("<div class='toggle-menu'></div>") );
        mqttList.hide();
        var mqttE = $("bring-your-own-thing-api-item > div.toggle-menu");

        mqttE.click(function(){
            $(this).toggleClass("expand");
            mqttList.slideToggle("slow");

        });

        // $window.resize(function () {
        //     var viewportWidth = $window.width();
        //     if (viewportWidth < 1) {
        //         $("img").css('height', 'auto');
        //     }
        // });



    });



    $document.scroll(function(){
        if( $("a#downloads-link").hasClass("active") ){
            if( $("ul#downloads-list:hidden") ){
                $("ul#downloads-list").css("display", "block");
                $("#downloads-item > div.toggle-menu").addClass("expand");
                $("ul#introduction-list").css("display", "none");
                $("#introduction-item > div.toggle-menu").removeClass("expand");
            }
        }
        else if( $("a#introduction-link").hasClass("active") ){
            if( $("ul#introduction-list:hidden") ){
                $("ul#introduction-list").css("display", "block");
                $("#introduction-item > div.toggle-menu").addClass("expand");
            }
        }
        else if( $("a#getting-started-link").hasClass("active") ){
            if( $("ul#getting-started-list:hidden") ){
                $("ul#getting-started-list").css("display", "block");
                $("#getting-started-item > div.toggle-menu").addClass("expand");
                $("ul#downloads-list").css("display", "none");
                $("#downloads-item > div.toggle-menu").removeClass("expand");
            }
        }
        else if( $("a#features-link").hasClass("active") ){
            if( $("ul#features-list:hidden") ){
                $("ul#features-list").css("display", "block");
                $("#features-item > div.toggle-menu").addClass("expand");
                $("ul#getting-started-list").css("display", "none");
                $("#getting-started-item > div.toggle-menu").removeClass("expand");
            }
        }
        else if( $("a#custom-widgets-link").hasClass("active") ){
            if( $("ul#custom-widgets-list:hidden") ){
                $("ul#custom-widgets-list").css("display", "block");
                $("#custom-widgets-item > div.toggle-menu").addClass("expand");
                $("ul#features-list").css("display", "none");
                $("#features-item > div.toggle-menu").removeClass("expand");
            }
        }
        else if( $("a#sketch-files-link").hasClass("active") ){
            if( $("ul#sketch-files-list:hidden") ){
                $("ul#sketch-files-list").css("display", "block");
                $("#sketch-files-item > div.toggle-menu").addClass("expand");
                $("ul#custom-widgets-list").css("display", "none");
                $("#custom-widgets-item > div.toggle-menu").removeClass("expand");
            }
        }
        else if( $("a#lora-link").hasClass("active") ){
            if( $("ul#lora-list:hidden") ){
                $("ul#lora-list").css("display", "block");
                $("#lora-item > div.toggle-menu").addClass("expand");
                $("ul#sketch-files-list").css("display", "none");
                $("#sketch-files-item > div.toggle-menu").removeClass("expand");
            }
        }
        else if( $("a#supported-hardware-link").hasClass("active") ){
            if( $("ul#supported-hardware-list:hidden") ){
                $("ul#supported-hardware-list").css("display", "block");
                $("#supported-hardware-item > div.toggle-menu").addClass("expand");
                $("ul#sketch-files-list").css("display", "none");
                $("#sketch-files-item > div.toggle-menu").removeClass("expand");
            }
        }
        else if( $("a#mqtt-api-link").hasClass("active") ){
            if( $("ul#mqtt-api-list:hidden") ){
                $("ul#mqtt-api-list").css("display", "block");
                $("#mqtt-api-item > div.toggle-menu").addClass("expand");
                $("ul#supported-hardware-list").css("display", "none");
                $("#supported-hardware-item > div.toggle-menu").removeClass("expand");
            }
        }
        else if( $("a#security-link").hasClass("active") ){
            if( $("ul#security-list:hidden") ){
                $("ul#security-list").css("display", "block");
                $("#security-item > div.toggle-menu").addClass("expand");
                $("ul#apis-list").css("display", "none");
                $("#apis-item > div.toggle-menu").removeClass("expand");
            }
        }
    })

})(jQuery);

