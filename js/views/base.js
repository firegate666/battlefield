define('view/base', [
	'backbone',
	'd3'
], function(
	Backbone,
	d3
) {
	return Backbone.View.extend({
		controller : null,
		d3 : null,

		initialize : function(options) {
			this.controller = options.controller;
			this.d3 = d3.select(this.el);

			this.render();
		},

		_destroy : function() {
			this.destroy();
		}
	});
});