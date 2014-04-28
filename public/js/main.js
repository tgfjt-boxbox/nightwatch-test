(function(d) {
	'use strict';

	if (!d.addEventListener) {
		return 'かなしみ';
	}

	d.addEventListener('DOMContentLoaded', function() {
		var $btn = d.getElementById('js-button');
		var $panel = d.getElementById('js-panel');
		var disp;

		$btn.addEventListener('click', function () {
			disp = $panel.style.display;

			if (disp === 'none' || disp === '') {
				$panel.style.display = 'block';
				$btn.innerHTML = '閉じる';
			} else {
				$panel.style.display = '';
				$btn.innerHTML = '開く';
			}
		});
	});

})(document); 
