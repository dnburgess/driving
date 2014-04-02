jQuery(document).ready(function() {
            
            // build <select> dropdown
            jQuery("<select />").appendTo("header .main-nav .row .navbar");

            //Create deafult option "Go to..."
            jQuery("<option />", {
                "selected": "selected",
                "value": "",
                "text": "Main Menu"  
            }).appendTo("header .main-nav .row .navbar select");

            //Populate
            jQuery("header .main-nav .row .navbar ul li a").each(function() {
                var el = jQuery(this);
                    if(el.parents('header .main-nav .row .navbar ul ul').length) {
                        // if there are ul in li
                        jQuery('<option />', {
                        'value': el.attr('href'),
                        'text':  '- ' + el.text()
                    }).appendTo('header .main-nav .row .navbar select');
                    } else { // if no ul in li
                        jQuery('<option />', {
                        'value': el.attr('href'),
                        'text': el.text()
                    }).appendTo('header .main-nav .row .navbar select');
                }
            });

            //make links work 
            jQuery("header .main-nav .row .navbar select").change(function() {
                window.location = jQuery(this).find("option:selected").val();
            });
    });

jQuery(document).ready(function() {
            
            // build <select> dropdown
            jQuery("<select />").appendTo("header .top-nav .row .navbar");

            //Create deafult option "Go to..."
            jQuery("<option />", {
                "selected": "selected",
                "value": "",
                "text": "Top Menu"  
            }).appendTo("header .top-nav .row .navbar select");

            //Populate
            jQuery("header .top-nav .row .navbar ul li a").each(function() {
                var el = jQuery(this);
                    if(el.parents('header .top-nav .row .navbar ul ul').length) {
                        // if there are ul in li
                        jQuery('<option />', {
                        'value': el.attr('href'),
                        'text':  '- ' + el.text()
                    }).appendTo('header .top-nav .row .navbar select');
                    } else { // if no ul in li
                        jQuery('<option />', {
                        'value': el.attr('href'),
                        'text': el.text()
                    }).appendTo('header .top-nav .row .navbar select');
                }
            });

            //make links work 
            jQuery("header .top-nav .row .navbar select").change(function() {
                window.location = jQuery(this).find("option:selected").val();
            });
    });