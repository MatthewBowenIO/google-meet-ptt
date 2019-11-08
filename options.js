window.onkeydown = keydown;
window.onkeyup = keyup;

var inputTextValue;

function keydown(e) {
    e.target.value = '';
    chrome.storage.local.set({'pttKey': e.key}, function() {
        window.console.log('Settings saved');
    });
}

function keyup(e) {
    e.target.value = e.key;
}

function load() {
	chrome.storage.local.get({'pttKey': 'Control'}, function (results) {
        document.getElementById('pttButton').value = results.pttKey;
	});
}

load();