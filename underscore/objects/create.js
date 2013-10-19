/**
 * Lo-Dash 2.2.1 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize underscore exports="amd" -o ./underscore/`
 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
define(['./assign', './isObject', '../internals/noop', '../internals/reNative'], function(assign, isObject, noop, reNative) {

  /* Native method shortcuts for methods with the same name as other `lodash` methods */
  var nativeCreate = reNative.test(nativeCreate = Object.create) && nativeCreate;

  /**
   * Creates an object that inherits from the given `prototype` object. If a
   * `properties` object is provided its own enumerable properties are assigned
   * to the created object.
   *
   * @static
   * @memberOf _
   * @category Objects
   * @param {Object} prototype The object to inherit from.
   * @param {Object} [properties] The properties to assign to the object.
   * @returns {Object} Returns the new object.
   * @example
   *
   * function Shape() {
   *   this.x = 0;
   *   this.y = 0;
   * }
   *
   * function Circle() {
   *   Shape.call(this);
   * }
   *
   * Circle.prototype = _.create(Shape.prototype, { 'constructor': Circle });
   *
   * var circle = new Circle;
   * circle instanceof Circle
   * // => true
   *
   * circle instanceof Shape
   * // => true
   */
  function create(prototype, properties) {
    var result = isObject(prototype) ? nativeCreate(prototype) : {};
    return properties ? assign(result, properties) : result;
  }
  // fallback for browsers without `Object.create`
  if (!nativeCreate) {
    create = function(prototype) {
      if (isObject(prototype)) {
        noop.prototype = prototype;
        var result = new noop;
        noop.prototype = null;
      }
      result || (result = {});
      return properties ? assign(result, properties) : result;
    };
  }

  return create;
});
