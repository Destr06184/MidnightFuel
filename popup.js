// popup.js (Финальная стабильная версия)

const globalToggle = document.getElementById('globalToggle');
const siteToggle = document.getElementById('siteToggle');
const modeToggle = document.getElementById('modeToggle');
const modeSwitcherRow = document.getElementById('mode-switcher-row');

chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    if (!tabs[0] || !tabs[0].url || !tabs[0].url.startsWith('http')) {
        globalToggle.disabled = true;
        siteToggle.disabled = true;
        modeToggle.disabled = true;
        return;
    }

    const hostname = new URL(tabs[0].url).hostname.replace('www.', '');

    function updatePopupState(settings) {
        const detailedSites = settings.detailedSites || [];
        const isGlobalEnabled = settings.isGlobalEnabled ?? true;
        const disabledSites = settings.disabledSites || [];

        const isSiteDisabled = disabledSites.includes(hostname);
        
        globalToggle.checked = isGlobalEnabled;
        siteToggle.checked = isSiteDisabled;
        
        if (isGlobalEnabled && !isSiteDisabled) {
            modeSwitcherRow.style.display = 'flex';
            modeToggle.checked = detailedSites.includes(hostname);
        } else {
            modeSwitcherRow.style.display = 'none';
        }
    }
    
    chrome.storage.sync.get(['isGlobalEnabled', 'disabledSites', 'detailedSites'], (result) => {
        updatePopupState(result);
    });

    globalToggle.addEventListener('change', () => {
        const isEnabled = globalToggle.checked;
        chrome.storage.sync.set({ isGlobalEnabled: isEnabled }, () => {
            chrome.runtime.sendMessage({ command: 'update' });
        });
    });

    siteToggle.addEventListener('change', () => {
        chrome.storage.sync.get({ disabledSites: [] }, (result) => {
            let disabledSites = result.disabledSites;
            if (siteToggle.checked) {
                if (!disabledSites.includes(hostname)) {
                    disabledSites.push(hostname);
                }
            } else {
                disabledSites = disabledSites.filter(site => site !== hostname);
            }
            chrome.storage.sync.set({ disabledSites: disabledSites }, () => {
                chrome.runtime.sendMessage({ command: 'update' });
            });
        });
    });

    modeToggle.addEventListener('change', () => {
        chrome.storage.sync.get({ detailedSites: [] }, (result) => {
            let detailedSites = result.detailedSites;
            if (modeToggle.checked) {
                if (!detailedSites.includes(hostname)) {
                    detailedSites.push(hostname);
                }
            } else {
                detailedSites = detailedSites.filter(site => site !== hostname);
            }
            chrome.storage.sync.set({ detailedSites: detailedSites }, () => {
                chrome.runtime.sendMessage({ command: 'update' });
            });
        });
    });

    chrome.storage.onChanged.addListener((changes, area) => {
        if (area === 'sync') {
            chrome.storage.sync.get(['isGlobalEnabled', 'disabledSites', 'detailedSites'], (result) => {
                updatePopupState(result);
            });
        }
    });
});