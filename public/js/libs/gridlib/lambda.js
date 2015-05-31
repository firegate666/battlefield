define('gridlib/lambda', [], function() {
	'use strict';

	var HxOverrides = function() {

	};

	HxOverrides.iter = function(a) {
		return {
			cur : 0,
			arr : a,
			hasNext : function() {
				return this.cur < this.arr.length;
			},
			next : function() {
				return this.arr[this.cur++];
			}
		};
	};

	var $fid = 0;

	function $bind(o,m) {
		if (m == null) {
			return null;
		}

		if (m.__id__ == null) {
			m.__id__ = $fid++;
		}

		var f;

		if (o.hx__closures__ == null) {
			o.hx__closures__ = {};
		} else {
			f = o.hx__closures__[m.__id__];
		}

		if (f == null) {
			f = function () {
				return f.method.apply(f.scope, arguments);
			};
			f.scope = o;
			f.method = m;
			o.hx__closures__[m.__id__] = f;
		}

		return f;
	}

	function $iterator(o) {
		if (o instanceof Array) {
			return function() {
				return HxOverrides.iter(o);
			};
		}

		return typeof(o.iterator) === 'function' ?
			$bind(o,o.iterator) :
			o.iterator;
	}

	var Lambda = function() {

	};

	Lambda.array = function(it) {
		var a = [];
		var $it0 = $iterator(it)();

		while ($it0.hasNext()) {
			var i = $it0.next();
			a.push(i);
		}

		return a;
	};

	return Lambda;
});