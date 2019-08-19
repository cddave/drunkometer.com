var finalScore;
var weight;
var age;
var gener;

//---------//

var waitingDialog = waitingDialog || (function ($) {
    'use strict';

	// Creating modal dialog's DOM
	var $dialog = $(
		'<div class="modal fade" data-backdrop="static" data-keyboard="false" tabindex="-1" role="dialog" aria-hidden="true" style="padding-top:15%; overflow-y:visible;">' +
		'<div class="modal-dialog modal-m">' +
		'<div class="modal-content">' +
			'<div class="modal-header"><h3 style="margin:0;"></h3></div>' +
			'<div class="modal-body">' +
				'<div class="progress progress-striped active" style="margin-bottom:0;"><div class="progress-bar" style="width: 100%"></div></div>' +
			'</div>' +
		'</div></div></div>');

	return {
		/**
		 * Opens our dialog
		 * @param message Custom message
		 * @param options Custom options:
		 * 				  options.dialogSize - bootstrap postfix for dialog size, e.g. "sm", "m";
		 * 				  options.progressType - bootstrap postfix for progress bar type, e.g. "success", "warning".
		 */
		show: function (message, options) {
			// Assigning defaults
			if (typeof options === 'undefined') {
				options = {};
			}
			if (typeof message === 'undefined') {
				message = 'Loading';
			}
			var settings = $.extend({
				dialogSize: 'm',
				progressType: '',
				onHide: null // This callback runs after the dialog was hidden
			}, options);

			// Configuring dialog
			$dialog.find('.modal-dialog').attr('class', 'modal-dialog').addClass('modal-' + settings.dialogSize);
			$dialog.find('.progress-bar').attr('class', 'progress-bar');
			if (settings.progressType) {
				$dialog.find('.progress-bar').addClass('progress-bar-' + settings.progressType);
			}
			$dialog.find('h3').text(message);
			// Adding callbacks
			if (typeof settings.onHide === 'function') {
				$dialog.off('hidden.bs.modal').on('hidden.bs.modal', function (e) {
					settings.onHide.call($dialog);
				});
			}
			// Opening dialog
			$dialog.modal();
		},
		/**
		 * Closes dialog
		 */
		hide: function () {
			$dialog.modal('hide');
		}
	};

})(jQuery);


calculateResult();
//---------//












function calculateResult() {
	waitingDialog.show('Please wait while we calculate result');

	setTimeout(
			function(){
				waitingDialog.hide();
			},2000);
	finalScore = parseInt(sessionStorage.getItem("score"));
	weight = parseInt(sessionStorage.getItem("weight"));
	age = parseInt(sessionStorage.getItem("age"));
	gener = parseInt(sessionStorage.getItem("gener"));

	if(weight < 50)
		finalScore = finalScore - finalScore * 5/100;
	else if(weight >75)
		finalScore = finalScore + finalScore * 5/100;

	if(age > 30 && age < 40)
		finalScore = finalScore - finalScore * 5/100;
	else if( age > 40 && age < 50)
		finalScore = finalScore - finalScore * 10/100;


	if(gener == 2)
		finalScore = finalScore - finalScore * 5/100;


	//COM
	if(finalScore < 30)
	{
		document.getElementById("state").innerHTML = "Coma";
		document.getElementById("bac").innerHTML = "0.35–0.45 %";
		document.getElementById("time").innerHTML = "10 Hours / Maybe 10 months";
		document.getElementById("drive").innerHTML = "Do you know WHATS a CAR?!";
		document.getElementById("feel").innerHTML = "our body functions will slow so much that you will fall into a coma, putting you at risk of death. Emergency medical attention is critical at this stage.";
		document.getElementById("bot").style.transform = "rotate(25.5deg)";
	}
	else if(finalScore > 30 && finalScore <50)
	{
		document.getElementById("state").innerHTML = "Stupor";
		document.getElementById("bac").innerHTML = "0.25–0.4 %";
		document.getElementById("time").innerHTML = "8 Hours";
		document.getElementById("drive").innerHTML = "No, Don't even think about it";
		document.getElementById("feel").innerHTML = "At this stage, you will no longer respond to what’s happening around or to you. You won’t be able to stand or walk.";
		document.getElementById("bot").style.transform = "rotate(45.5deg)";


	}
	else if(finalScore > 50 && finalScore < 60)
	{
		document.getElementById("state").innerHTML = "Confusion";
		document.getElementById("bac").innerHTML = "0.18–0.30 %";
		document.getElementById("time").innerHTML = "6 Hours";
		document.getElementById("drive").innerHTML = "A Straight NO!";
		document.getElementById("feel").innerHTML = "You might have emotional outbursts and a major loss of coordination.";
		document.getElementById("bot").style.transform = "rotate(10.5deg)";
	}

	else if(finalScore > 60 && finalScore < 70)
	{
		document.getElementById("state").innerHTML = "Drunk";
		document.getElementById("bac").innerHTML = " 0.09–0.25 %";
		document.getElementById("time").innerHTML = "4 Hours";
		document.getElementById("drive").innerHTML = "No No!! No NO!!!";
		document.getElementById("feel").innerHTML = "You might lose your coordination and have trouble making judgment calls and remembering things.";
		document.getElementById("bot").style.transform = "rotate(-25.5deg)";
	}
	else if (finalScore > 70 && finalScore < 80)
	{

		document.getElementById("state").innerHTML = "Tipsy ";
		document.getElementById("bac").innerHTML = "0.03–0.12 %";
		document.getElementById("time").innerHTML = "2 Hours";
		document.getElementById("drive").innerHTML = "Only if it's in your Backyard!";
		document.getElementById("feel").innerHTML = "This is the tipsy stage. You might feel more confident and chatty. You might have a slower reaction time and lowered inhibitions.";
		document.getElementById("bot").style.transform = "rotate(-50.5deg)";
	}
	else
	{

		document.getElementById("state").innerHTML = "Sober ";
		document.getElementById("bac").innerHTML = "0.01–0.05 %";
		document.getElementById("time").innerHTML = "1 Hour";
		document.getElementById("drive").innerHTML = "You can, but cab is better dnwkenfwlj coencln lanlnl";
		document.getElementById("feel").innerHTML = "A person is sober or low-level intoxicated if they have consumed one or fewer alcoholic drinks per hour. At this stage, a person should feel like their normal self.";
		document.getElementById("bot").style.transform = "rotate(-75.5deg)";
	}

}
