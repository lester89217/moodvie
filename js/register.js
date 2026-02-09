$(document).ready(function () {
	// Toggle Password Visibility
	$(".toggle-password").click(function () {
		const targetId = $(this).data("target");
		const passwordInput = $("#" + targetId);
		const icon = $(this).find("i");

		if (passwordInput.attr("type") === "password") {
			passwordInput.attr("type", "text");
			icon.removeClass("fa-eye-slash").addClass("fa-eye");
		} else {
			passwordInput.attr("type", "password");
			icon.removeClass("fa-eye").addClass("fa-eye-slash");
		}
	});

	// Form Submission (Basic feedback)
	$(".register-form").submit(function (e) {
		e.preventDefault();
		const password = $("#password").val();
		const confirmPassword = $("#confirm-password").val();

		if (password !== confirmPassword) {
			alert("密碼與再次確認密碼不符，請重新輸入。");
			return;
		}
	});
});
