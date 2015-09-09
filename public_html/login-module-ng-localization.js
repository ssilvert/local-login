angular.module('messageApp', ['ngLocalize', 'ngLocalize.InstalledLanguages'])
        .controller('messageCtrl',['$scope', 'locale', MessageCtrl])
        .value('localeSupported', ['en-US', 'fr-FR']);
            
function MessageCtrl($scope, locale) {
    $scope.realm = "Master";
    locale.setLocale('fr-FR');
    
    $scope.setLocale = function (loc) {
        locale.setLocale(loc);
    };
}


