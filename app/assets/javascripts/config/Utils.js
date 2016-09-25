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

// Turn object in url param
function serialize(obj, prefix) {

  	var str = [];
  	for(var p in obj) {
    	if (obj.hasOwnProperty(p)) {
      		var k = prefix ? prefix + "[" + p + "]" : p, v = obj[p];
      		str.push(typeof v == "object" ?
        	serialize(v, k) :
        	encodeURIComponent(k) + "=" + encodeURIComponent(v));
    	}
  	}
  	return str.join("&");

 }
