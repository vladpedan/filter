function Users(list) {
  if (!list instanceof Array) {
    throw 'I need an array!'
  }

  this.getList = function () {
    return list;
  }
}

Users.prototype = {
  constructor: Users,

  getLength: function () {
    return this.getList().length;
  },

  getElementByIndex: function (index) {
    return this.getList()[index];
  },

  sortBy: function (key){
    var copy = this.getList().slice();
    copy.sort(function(prev,next) {
      if (prev[key] < next[key]) return -1;
      if (prev[key] > next[key]) return 1;
    });
    return copy;
  },

  filterBy: function(key, value, sort) { 
    var array = this.getList();
    if(typeof key === 'string') {
      array = array.filter(function(item) { 
        return item[key] == value; 
      }); 
      if(sort !== undefined) {
        sortBy(sort);
      };
    } else if(Array.isArray(key)) {
      for (i = 0; i < key.length; i++) {
        var arr = Object.keys(key[i]);
        array = array.filter(function(item) {
          return item[arr[0]] == key[i][arr[0]]; 
        });
      };

      if(value !== undefined) {
        sortBy(value);
      };
    }

    return array;
  },

  findByValue: function(key, value){
    var array = this.getList();
    if (value.length >= 2){
      var pattern = new RegExp(value);
       return array = array.filter(function(item) { 
        return pattern.test(item[key]); 
      }); 
    } else {
      throw 'The search string should have at least two characters'
    }
    
  },
  
  deepCopy: function(){
    var copy = JSON.parse(JSON.stringify(this.getList()));
    return copy;
  },

};
   

Users.checkFieldInCollection = function (array, key){
  for (i = 0; i < array.length; i++) {
    if(!array[i].hasOwnProperty(key)) return false; 
  }

  return true;
}

Users.getCreator = function(collection){
  if (collection instanceof Users) {
    return 'Users';
  } else if(collection instanceof Array) {
    return 'Array'
  } else {
    throw 'its not an array'
  }
}

Users.createCollection = function (array){
  return new Users(array);
}

