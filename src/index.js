(function () {
  var global = typeof window !== 'undefined' ? window : this || Function('return this')();
  var nx = global.nx || require('@jswork/next');
  var NO_METHOD = {};
  nx.NO_METHOD = NO_METHOD;

  nx.tryExecute = function (inContext, inArgs, inMethods) {
    for (var i = 0; i < inMethods.length; i++) {
      var method = inMethods[i];
      var hasMethod = typeof inContext[method] === 'function';
      if (hasMethod) return inContext[method].apply(inContext, inArgs);
    }
    return NO_METHOD;
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.tryExecute;
  }
})();
