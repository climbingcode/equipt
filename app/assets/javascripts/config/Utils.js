// under_case
String.prototype.toUnderCase = function() {
	return this.replace(/([A-Z])/g, function($1){return "_"+$1.toLowerCase();});
}

// camelCase
String.prototype.toCamelCase = function(){
	return this.replace(/(\_\w)/g, function(m){return m[1].toUpperCase();});
};

// capitalize 
String.prototype.capitalize = function(){
    return this.charAt(0).toUpperCase() + this.slice(1);
}
	
// to underCase
function formatKeys(oldObj, changeTo) {

	var newObj = {};
		
	for (var key in oldObj) {
		
		switch(changeTo) {
			case 'UNDER_CASE':
				var newKey = key.toUnderCase();
			break;
			case 'CAMEL_CASE':
				var newKey = key.toCamelCase();
			break;
		}

    	newObj[newKey] = oldObj[key];

	}

	return newObj;

};
