// background.js (Финальная стабильная версия)

async function applyThemeForTab(tab) {
    if (!tab || !tab.id || !tab.url || !tab.url.startsWith('http')) {
        return;
    }

    const { id: tabId, url } = tab;
    const hostname = new URL(url).hostname.replace('www.', '');

    const { isGlobalEnabled, disabledSites, detailedSites } = await chrome.storage.sync.get({
        isGlobalEnabled: true,
        disabledSites: [],
        detailedSites: [] 
    });

    const isSiteDisabled = disabledSites.includes(hostname);
    
    await chrome.scripting.executeScript({
        target: { tabId: tabId },
        func: () => { document.documentElement.classList.remove('midnightfuel-gentle-mode', 'midnightfuel-detailed-mode'); }
    }).catch(e => {});

    if (!isGlobalEnabled || isSiteDisabled) {
        return;
    }

    const mode = detailedSites.some(site => hostname.includes(site)) 
        ? 'midnightfuel-detailed-mode'
        : 'midnightfuel-gentle-mode';

    await chrome.scripting.insertCSS({
        target: { tabId: tabId },
        files: ['dark_theme.css']
    });

    await chrome.scripting.executeScript({
        target: { tabId: tabId },
        func: (modeToApply) => { document.documentElement.classList.add(modeToApply); },
        args: [mode]
    });
}

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === 'complete' && tab.url) {
        applyThemeForTab(tab);
    }
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.command === 'update') {
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            if (tabs[0]) {
                applyThemeForTab(tabs[0]);
            }
        });
        return true;
    }
});