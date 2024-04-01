$(document).ready(() => {
	$(".feedback").click(() => {
		feedback_toggle(true)
		blackboardToggle(true)
	})
	
	$("#feedback_close").click(() => {
		feedback_toggle(false)
		blackboardToggle(false)
	})
}) 