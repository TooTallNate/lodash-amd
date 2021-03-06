/**
 * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize underscore exports="amd" -o ./underscore/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.6.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
define(['./collections/contains', './collections/countBy', './collections/every', './collections/filter', './collections/find', './collections/findWhere', './collections/forEach', './collections/groupBy', './collections/indexBy', './collections/invoke', './collections/map', './collections/max', './collections/min', './collections/partition', './collections/pluck', './collections/reduce', './collections/reduceRight', './collections/reject', './collections/sample', './collections/shuffle', './collections/size', './collections/some', './collections/sortBy', './collections/toArray', './collections/where'], function(contains, countBy, every, filter, find, findWhere, forEach, groupBy, indexBy, invoke, map, max, min, partition, pluck, reduce, reduceRight, reject, sample, shuffle, size, some, sortBy, toArray, where) {

  return {
    'all': every,
    'any': some,
    'collect': map,
    'contains': contains,
    'countBy': countBy,
    'detect': find,
    'each': forEach,
    'every': every,
    'filter': filter,
    'find': find,
    'findWhere': findWhere,
    'foldl': reduce,
    'foldr': reduceRight,
    'forEach': forEach,
    'groupBy': groupBy,
    'include': contains,
    'indexBy': indexBy,
    'inject': reduce,
    'invoke': invoke,
    'map': map,
    'max': max,
    'min': min,
    'partition': partition,
    'pluck': pluck,
    'reduce': reduce,
    'reduceRight': reduceRight,
    'reject': reject,
    'sample': sample,
    'select': filter,
    'shuffle': shuffle,
    'size': size,
    'some': some,
    'sortBy': sortBy,
    'toArray': toArray,
    'where': where
  };
});
