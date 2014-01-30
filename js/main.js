$(function() {
	$('body, html').animate({scrollTop: 0, scrollLeft: 0}, 100);

	var contentWidth = $('#content').width() 
	var contentHeight = $('#content').height()
	var windowWidth = $(window).width()
	var windowHeight = $(window).height()
	var leftOffset = Math.floor((contentWidth - windowWidth) / 2);
	var topOffset = Math.floor((contentHeight - windowHeight) / 2);

	positionElement('#above', contentWidth, topOffset, {position: 'absolute', left: 0, top: 0})
	positionElement('#right', leftOffset, contentHeight, {position: 'absolute', left: windowWidth + leftOffset, top: 0})
	positionElement('#below', contentWidth, topOffset, {position: 'absolute', left: 0, top: windowHeight + topOffset})
	positionElement('#left', leftOffset, contentHeight, {position: 'absolute', left: 0, top: 0})
	positionElement('#in', windowWidth, windowHeight, {position: 'absolute', left: leftOffset, top: topOffset})

	$('body, html').animate({scrollLeft: contentWidth}, 750);
	$('body, html').animate({scrollTop: contentHeight}, 750);
	$('body, html').animate({scrollLeft: 0}, 750);
	$('body, html').animate({scrollTop: 0}, 750);
	$('body, html').animate({scrollTop: topOffset, scrollLeft: leftOffset}, 750);
});

function positionElement(elementId, width, height, cssOptions) {
	$(elementId).width(width);
	$(elementId).height(height);
	$(elementId).css(cssOptions);	
}