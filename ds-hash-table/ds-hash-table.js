var makeHashTable = function() {
  //Do not change the max!
  var max = 4;

  return {
    _storage: [],
    retrieve: function(key) {
      //your code is here


    },

    insert: function(key, value) {
      //var index=hashFn(key,max)
      var bucket=[];
      var index=hashFn(bucket,max);
      _storage[index]=bucket;
      var index=hashFn(key,max);
      _storage[index]=[key,max];

  };
};

// This is a "hashing function". You don't need to worry about it, just use it to turn any key into a pseudo-random key
var hashFn = function(str, max) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    var letter = str[i];
    hash = (hash << 5) + letter.charCodeAt(0);
    hash = (hash & hash) % max;
  }
  return hash;
};