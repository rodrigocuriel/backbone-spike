window.HomeView = Backbone.View.extend({
	className: "frame",
	tagName: "div",

	createElements: function(whatKind) {
		var numbers = {
			_actualType: 'fibonacci',
			_pointer: 0,
			fibonacci: ['0', '1', '2', '3', '5', '8', '13', '21', '&#x221E;']
		}

		var colorList = {
			index: 0,
			items: ['#A50026', '#7A0177', '#F46D43', '#FDAE61', '#1A9850', '#4575B4', '#C51B7D', '#D73027', '#07A017'],
			getColor: function() {
				return this.items[this.index++]
			}
		}

		numbers._actualType = whatKind;
		var total = numbers[whatKind].length;
		for (var i = 0; i < total; i++) {
			$('#content').append('<div class="item" x-blackberry-focusable="true"><p>' + numbers[whatKind][i] + '</p></div>');
			$('.item:last-child').animate({
				backgroundColor: colorList.getColor()
			}, 500);
		}
	},

	resizeFont: function(displayHeight, displayWidth) {
		var preferredHeight = 120;
		var percentage = preferredHeight / displayHeight;
		var newFontSize = Math.floor(displayHeight * .5) - 1;

		if (newFontSize >= displayWidth) {
			newFontSize = displayWidth;
		}

		debug.log('resizeFont', newFontSize, debug.info);
		return newFontSize;
	},

	resizeElements: function() {
		var preferredElementsHeight = 3;
		var preferredElementsWidth = 3;
		var displayHeight = $(window).height() - 60;
		var displayWidth = $(window).width() - 60;

		if (typeof blackberry != "undefined") {
			displayHeight = screen.availHeight - 60;
			displayWidth = screen.availWidth - 60;
		}
		$('body').css('height', screen.availHeight);

		var newElementHeight = displayHeight / preferredElementsHeight;
		var newElementWidth = displayWidth / preferredElementsWidth;
		$('.item, .item p').css('height', newElementHeight + 'px');
		$('.item, .item p').css('width', newElementWidth + 'px');

		$('#selection, #selection p').css('height', (displayHeight + 60) + 'px');
		$('#selection, #selection p').css('width', (displayWidth + 60) + 'px');

		//var newWidth = (newElementWidth * 3) + 40  + 'px';
		//$('.item:last-child, .item:last-child p').css('width', newWidth);
		$('.item p').css('font-size', this.resizeFont(newElementHeight, newElementWidth) + 'px');
		$('#selection p').css('font-size', this.resizeFont(displayHeight, displayWidth) + 'px');

		debug.log("Screen resolution width x height -- ", displayWidth + 'x' + displayHeight, debug.info);
		debug.log("resizeElements", 'newElementSize' + ':' + newElementHeight + 'x' + newElementWidth, debug.info);
		this.resizeFont(newElementHeight, newElementWidth);
	},

	initialize: function() {
		this.render();
		this.init();
	},

	init: function(){
		$(window).bind("resize.app", _.bind(this.resizeElements, this));
	},

	render: function() {
		$(this.el).html(this.template(), function(){
			debug.log('done loading home', debug.info);
		});
		return this;
	}

});