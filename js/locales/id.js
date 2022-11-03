(function (factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    } else if (typeof module === 'object' && typeof module.exports === 'object') {
        factory(require('jquery'));
    } else {
        factory(window.jQuery);
    }
}(function ($) {
    "use strict";
    $.fn.ratingLocales['id'] = {
        defaultCaption: '{rating} Bintang',
        starCaptions: {
            0.5: 'Setengah Bintang',
            1: 'Satu Bintang',
            1.5: 'Satu Setengah Bintang',
            2: 'Dua Bintang',
            2.5: 'Dua Setengah Bintang',
            3: 'Tiga Bintang',
            3.5: 'Tiga Setangah Bintang',
            4: 'Empat Bintang',
            4.5: 'Empat Setangah Bintang',
            5: 'Lima Bintang'
        },
        clearButtonTitle: 'Bersihkan',
        clearCaption: 'Belum ada penilaian'
    };
}));
