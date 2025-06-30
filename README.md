# MidnightFuel 

**Give your eyes a rest. MidnightFuel intelligently applies a dark theme to websites, reducing eye strain and improving your browsing experience at night.**

Tired of bright white websites burning your eyes out late at night? MidnightFuel is a lightweight, powerful, and highly configurable browser extension that transforms your web browsing into a comfortable, dark-themed experience.

 
## Key Features

*   **One-Click Dark Mode:** Instantly enable or disable the dark theme across all websites with a single click.
*   **Smart Dual-Mode Engine:** MidnightFuel uses two different engines to ensure the best possible result on any website:
    *   **Gentle Mode (Default):** A sophisticated, non-destructive mode that applies a dark theme without breaking site layouts or altering image colors. This is the default mode and works great on 99% of websites, including complex dynamic ones.
    *   **Detailed Mode:** A powerful, in-depth mode that meticulously restyles website elements for a pixel-perfect dark theme. Perfect for text-heavy sites like Wikipedia or documentation pages.
*   **Per-Site Configuration:** You have full control over how MidnightFuel behaves on each website.
    *   **Disable on this page:** Don't like the dark theme on a specific site? Turn it off for that domain, and MidnightFuel will remember your choice.
    *   **Switch to Detailed Mode:** If the default "Gentle Mode" isn't perfect, switch to "Detailed Mode" with a single click to get a more aggressive restyling.
*   **Lightweight & Fast:** Built with performance in mind, MidnightFuel won't slow down your browser.
*   **Privacy-Focused:** MidnightFuel does not collect or store any of your personal data or browsing history. All settings are stored locally in your browser.

## How to Use

1.  **Install** the extension from the Chrome Web Store (or load it manually).
2.  Click the **MidnightFuel icon** in your browser's toolbar to open the control panel.
3.  Use the toggles to configure the extension:

    *   **Enable globally:** The main switch to turn the extension on or off everywhere.
    *   **Disable for this page:** Whitelists the current website, disabling the dark theme only for it.
    *   **Enable Detailed Mode:** Switches from the default "Gentle Mode" to the more powerful "Detailed Mode" for the current site.

## How It Works: The Dual-Mode Engine

Understanding the two modes helps you get the most out of MidnightFuel:

### Gentle Mode (Default)
This mode is a hybrid marvel. It creates a dark, filtered "backdrop" behind a website's content and then makes the site's main containers transparent. This allows the dark backdrop to show through without altering the color or quality of images and videos. It's the safest and most compatible option.

*   **Pros:** Preserves original image colors, rarely breaks site layouts.
*   **Cons:** On very rare occasions, some site elements might not become fully transparent.

### Detailed Mode
This mode dives deep into the website's CSS, directly changing the background colors and text colors of individual elements like `divs`, `paragraphs`, and `headers`. It's incredibly effective but can sometimes conflict with a website's own complex styles.

*   **Pros:** Offers a very clean, high-contrast, and "native" dark theme look.
*   **Cons:** May occasionally hide or misstyle elements on very complex websites.

## Installation

### From the Chrome Web Store
*(Link will be here once published)*

### Manual Installation (for Developers)
1.  Clone or download this repository as a ZIP file.
2.  Unzip the file.
3.  Open Google Chrome and navigate to `chrome://extensions`.
4.  Enable **"Developer mode"** in the top-right corner.
5.  Click **"Load unpacked"** and select the unzipped `midnightfuel` directory.
6.  Enjoy!
