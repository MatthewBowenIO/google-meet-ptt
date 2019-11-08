let load = () => {
	chrome.storage.local.get({'pttKey': 'Control'}, results => {
        document.addEventListener("keydown", event => {
            if (event.key !== results.pttKey) return;

            document.querySelectorAll('[data-tooltip]').forEach(el => el.dataset.tooltip === 'Turn on microphone' && el.click());
        });

        document.addEventListener("keyup", event => {
            if (event.key !== results.pttKey) return;

            document.querySelectorAll('[data-tooltip]').forEach(el => el.dataset.tooltip === 'Turn off microphone' && el.click());
        });
	});
}

load();