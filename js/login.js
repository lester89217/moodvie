$(document).ready(function () {
	$(".eye-icon-open, .eye-icon-close").click(function () {
		$(this).toggleClass("hidden");

		$(this).siblings(".eye-icon-open, .eye-icon-close").toggleClass("hidden");

		const input = $("#password");

		const isPassword = input.attr("type") === "password";
		input.attr("type", isPassword ? "text" : "password");
	});
});
