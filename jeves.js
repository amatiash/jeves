(function(root, factory){

    if(typeof define === 'function' && define.amd)
        define(['jquery'], factory);

    else if(typeof module === 'object' && module.exports)
        module.exports = factory(require('jquery'));

    else
        root.JEves = factory(root.jQuery);

}(this, function($){


    'use strict';

    // ----------------------------------------------------

    var globalJEves = $({});

    // ----------------------------------------------------

    /**
     * @type {jQuery}
     */
    var JEves = function(){
        this.$JEves = $({});
    };

    // ----------------------------------------------------

    JEves.prototype.one = function(){
        this.$JEves.one.apply(this.$JEves, arguments);
    };

    JEves.prototype.on = function(){
        this.$JEves.on.apply(this.$JEves, arguments);
    };

    JEves.prototype.off = function(){
        this.$JEves.off.apply(this.$JEves, arguments);
    };

    JEves.prototype.trigger = function(){
        this.$JEves.trigger.apply(this.$JEves, arguments);
    };

    // ----------------------------------------------------

    JEves.one = function(){
        globalJEves.one.apply(globalJEves, arguments);
    };

    JEves.on = function(){
        globalJEves.on.apply(globalJEves, arguments);
    };

    JEves.off = function(){
        globalJEves.off.apply(globalJEves, arguments);
    };

    JEves.trigger = function(){
        globalJEves.trigger.apply(globalJEves, arguments);
    };

    // ----------------------------------------------------

    return JEves;

}));
