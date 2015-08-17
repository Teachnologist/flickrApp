angular.module('NamezService', []).factory('Namez', ['$http', function($http) {

    return {
        // call to get all nerds
        get : function() {
            return $http.get('/api/bull');
        },
		 get2 : function() {
            return $http.get('/api/images');
        },


                // these will work when more API routes are defined on the Node side of things
        // call to POST and create a new nerd
        create : function(nerdData) {
            return $http.post('/api/nerds', nerdData);
        },

        // call to DELETE a nerd
        delete : function(id) {
            return $http.delete('/api/nerds/' + id);
        },
		
		test:function(num){
			
			return "you entered "+num;
		}
    }       

}]);