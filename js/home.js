// Menu font color
var colour = ['purple','red', 'blue', 'green', 'yellow'];
$('.menu li a').each(function(index) {
	$(this).css('color',colour[index]);
});

//Photo effect
var degree = ['rotate(10deg)','rotate(-13deg)','rotate(8deg)'];
$('.row1').each(function(idx) {
	$(this).css({transform: degree[idx]
});
});
$('.row2').each(function(idx) {
	$(this).css('transform',degree[idx+1]);
});

//several page
$('.menu a:first').addClass('beActive');
$('.content').hide();
$('#p1').show();
$('.menu a').click(function() {
	$('.menu a').removeClass('beActive');
	$('.content').hide();
	$(this).addClass('beActive');
	var object = $(this).attr('href');
	$(object).show();
});