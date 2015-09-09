angular.module('login', ['pascalprecht.translate', 'ngCookies', 'ngSanitize'])
        .controller('messageCtrl-translate', ['$scope', '$translate', MessageCtrl])
        .config(function($translateProvider, $translatePartialLoaderProvider) {
            $translateProvider.useLocalStorage();
            $translateProvider.useSanitizeValueStrategy('sanitize');
            $translatePartialLoaderProvider.addPart('login');
            $translateProvider.useLoader('$translatePartialLoader', {
                urlTemplate: 'i18n/{part}/{lang}.json'
            });
            $translateProvider.preferredLanguage('fr');
        });
        /*
        .config(['$translateProvider', function($translateProvider) {
            $translateProvider.translations('en', {
                "title": "Log in to {{realm}}",
                "loginMsg": "LOG IN TO <strong>{{realm}}</strong>",
                "userOrEmail": "Username or email",
                "password": "Password",
                "login": "Log In",
                "cancel": "Cancel"
            });

            $translateProvider.translations('fr', {
                "title": "Se connecter a {{realm}}",
                "loginMsg": "SE CONNECTER A <strong>{{realm}}</strong>",
                "userOrEmail": "nom d'utilisateur ou email",
                "password": "mot de passe",
                "login": "se connecter",
                "cancel": "annuler"
            });

            $translateProvider.useLocalStorage();
            $translateProvider.useSanitizeValueStrategy('sanitize');
            $translateProvider.preferredLanguage('fr');
        }]);*/

function MessageCtrl($scope, $translate) {
    $scope.realm = "Master";
    
    $scope.translationData = {
        realm: "Master"
    };
    
    $scope.setLocale = function(loc) {
        $translate.use(loc);
    };
}


