(function () {
    'use strict';

    return angular
        .module('kio.util.bowserclasses', [])
        .directive('bowserClasses', bowserClasses);


    /** @ngInject */
    function bowserClasses (bowser) {

        var directive = {
            restrict: 'A',
            link: linkFunc
        };

        return directive;


        function linkFunc (scope, el) {

            var classes = [];


            // browsers

            if (bowser.msie) {
                classes.push('msie');
            }

            if (bowser.chrome) {
                classes.push('chrome');
            }

            if (bowser.firefox) {
                classes.push('firefox');
            }

            if (bowser.msedge) {
                classes.push('msedge');
            }

            if (bowser.safari) {
                classes.push('safari');
            }

            if (bowser.opera) {
                classes.push('opera');
            }


            // os

            if (bowser.mac) {
                classes.push('mac');
            }

            if (bowser.linux) {
                classes.push('linux');
            }

            if (bowser.chromeos) {
                classes.push('chromeos');
            }

            if (bowser.android) {
                classes.push('android');
            }

            if (bowser.ios) {
                classes.push('ios');
            }

            if (bowser.firefoxos) {
                classes.push('firefoxos');
            }

            var osVersion = bowser.osversion ? bowser.osversion.replace('.', '-') : '';


            // browser names and version

            var browserName = bowser.name.replace(' ', '_').toLowerCase();
            var browserVersion = bowser.version.replace('.', '_');


            // add all those classes

            el.addClass(classes.join(', '))
                .addClass(browserName)
                .addClass('ver-' + browserVersion);

            if (osVersion !== '') {
                el.addClass('os-' + osVersion);
            }
        }
    }
})();
