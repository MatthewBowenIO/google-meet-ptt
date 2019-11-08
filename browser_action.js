function load() {
    chrome.storage.local.get({'pttKey': 'Control'}, function (results) {
        console.log(results);
        document.getElementById('pttKey').innerHTML = results.pttKey;
    });
}

load();
