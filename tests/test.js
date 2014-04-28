// @see {http://nightwatchjs.org/api}
module.exports = {
	'step1: Server Start': function(browser) {
		browser
			.url('http://localhost:8080/')
			.waitForElementVisible('body', 1000)
			.assert.title('Nightwatchのテスト')
			.assert.visible('h2')
			.assert.containsText('h1', 'Nightwatchのテストです!')
			.assert.containsText('h2', '')
	},

	'step2: JavaScript': function(browser) {
		browser
			.click('#js-button')
			.pause(100)
			.assert.containsText('h2', '影のタイトル')
			.assert.visible('h2')
			.assert.cssProperty('#js-panel', 'display', 'block')
			.click('#js-button')
			.pause(100)
			.assert.cssProperty('#js-panel', 'display', 'none')
			.end();
	}
};
