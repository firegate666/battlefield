define('helper/animate', [], function() {
	var timers = {};




	function animate(myRectangle, canvas, context, startTime) {
		// update
		var time = (new Date()).getTime() - startTime;

		var linearSpeed = 100;
		// pixels / second
		var newX = linearSpeed * time / 1000;

		if(newX < canvas.width - myRectangle.width - myRectangle.borderWidth / 2) {
			myRectangle.x = newX;
		}

		// clear
		context.clearRect(0, 0, canvas.width, canvas.height);

		drawRectangle(myRectangle, context);


	}
	return {
		animateUnit : function(view, unit, ctx) {
			var animation_type = 'mouseover_active';
			var sprite_data = unit.getSpriteData(),
				cube = unit.getCube(),
				position = view.grid.hexToCenter(cube);

			var steps = sprite_data.states[animation_type],
				step_count = steps.length;


			var img = document.createElement('img');
			img.src = sprite_data.url;

			var counter = 0;

			var animate = function() {
				var img_width = sprite_data.width,
					img_height = sprite_data.height;

				img.width = img_width * step_count;
				img.height = img_height;

				ctx.clearRect(0, 0, 800, 556);

				ctx.drawImage(
					img,
					img_width * (steps[counter] - 1),
					0,
					img_width,
					img_height,
					view.OFFSET_X + position.x - sprite_data.legs_x,
					view.OFFSET_Y + position.y - sprite_data.legs_y,
					img_width,
					img_height
				);

				counter++;

				if(counter === step_count) {
					counter = 0;
				}

				setTimeout(function() {
					window.requestAnimationFrame(function() {
						animate();
					});
				}, 100);
			};

			img.onload = function() {
				animate();
			}.bind(this);
		}
	};
});