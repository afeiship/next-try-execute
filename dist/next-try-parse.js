(function () {

  var global = global || this || self || window;
  var nx = global.nx || require('next-js-core2');
  var parse = nx.parse || require('next-json').parse;

  // "true"  => true
  // "false" => false
  // "null"  => null
  // "42"    => 42
  // "42.5"  => 42.5
  // "08"    => "08"
  // JSON    => parse if valid
  // String  => self

  nx.tryParse = function (inValue) {
    try {
      return inValue ?
        inValue == 'true' ||
        (inValue == 'false' ? false :
          inValue == 'null' ? null :
            +inValue + '' == inValue ? +inValue :
              /^[\[\{]/.test(inValue) ? parse(inValue) :
                inValue) :
        inValue;
    } catch (e) {
      return inValue;
    }
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.tryParse;
  }

}());
