angular.module('kissClock')

.factory('DBA', function($state, $cordovaSQLite, $q, $ionicPlatform) {

    var self = this;

    self.init = function() {
        if (ionic.Platform.isAndroid() || ionic.Platform.isIOS() ){
            try {
                db = $cordovaSQLite.openDB({ name: "kissClock.db" });
            } catch (error) {
                alert(error);
            }
        } else {
            db = window.openDatabase('kissClock.db', '1.0', 'kissClock.db', 100 * 1024 * 1024);
        }

    };

    self.prepareTables = function() {

        var q = $q.defer();

        // self.query("DROP TABLE Config;");

        self.query("CREATE TABLE IF NOT EXISTS Config (key TEXT NOT NULL, obj BLOB);")
            .then(function() {
                return self.query("SELECT COUNT(key) AS result FROM Config;");
            })
            .then(function(result){
                q.resolve(self.getCount(result));
            })

        return q.promise;

    }

    // Handle query's and potential errors
    self.query = function (query, parameters) {
        parameters = parameters || [];
        var q = $q.defer();

        $cordovaSQLite.execute(db, query, parameters)
            .then(function (result) {
                q.resolve(result);
            }, function (err) {
                console.error(err);
            });

        return q.promise;

    }

    // Proces a result set
    self.getAll = function(result) {
        var output = [];
        for (var i = 0; i < result.rows.length; i++) {
            output.push(result.rows.item(i).name);
        }
        return output;
    }

    // Proces a result set
    self.getAllPlain = function(result) {
        var output = [];
        for (var i = 0; i < result.rows.length; i++) {
            output.push(result.rows.item(i));
        }
        return output;
    }

    // Proces first result
    self.getFirst = function(result) {
        output = self.getAllPlain(result);
        return output[0];
    }

    // Proces a single result
    self.getById = function(result) {
        var output = null;
        output = angular.copy(result.rows.item(0).name);
        return output;
    }

    // Proces a single object result
    self.getObjectByName = function(result) {
        var output = null;
        output = result.rows.item(0).name;
        return output;
    }

    // Proces a single result
    self.getCount = function(result) {
        var output = 0;
        output = result.rows.item(0).result;
        return output;
    }





    return self;
})