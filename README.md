# Pepa - Package Manager Switcher

A Chrome browser extension that allows you to change the default package manager snippets on npmjs.com from npm to your preferred package manager (yarn, pnpm, or bun).

## 🚀 Features

- **Switch Package Managers**: Change npm install commands to use yarn, pnpm, or bun
- **Persistent Settings**: Your preference is saved and applied across all npmjs.com package pages
- **Real-time Updates**: Changes are applied immediately without page refresh
- **Clean Interface**: Simple popup interface to select your preferred package manager

## 📦 Supported Package Managers

- **npm** (default)
- **yarn**
- **pnpm**
- **bun**

## 🛠️ How It Works

1. **Install the extension** in your Chrome browser
2. **Visit any package page** on npmjs.com (e.g., `https://www.npmjs.com/package/react`)
3. **Click the extension icon** in your browser toolbar
4. **Select your preferred package manager** from the popup
5. **The install command** on the package page will automatically update to use your selected package manager

## 📋 Example

**Before (default npm):**

```bash
npm i react
```

**After selecting yarn:**

```bash
yarn add react
```

**After selecting pnpm:**

```bash
pnpm add react
```

**After selecting bun:**

```bash
bun add react
```

## 🔧 Installation

1. Download or clone this repository
2. Open Chrome and navigate to `chrome://extensions/`
3. Enable "Developer mode" in the top right
4. Click "Load unpacked" and select the extension folder
5. The extension will be installed and ready to use

## 🎯 Usage

1. Navigate to any package page on npmjs.com
2. Click the Pepa extension icon in your browser toolbar
3. Select your preferred package manager (npm, yarn, pnpm, or bun)
4. The install command on the page will update automatically
5. Copy and paste the command into your terminal

## 🔒 Permissions

- **activeTab**: To interact with the current npmjs.com tab
- **storage**: To save your package manager preference
- **Host permissions**: Limited to `https://*.npmjs.com/package/*` for security

## 🛡️ Privacy

This extension:

- Only works on npmjs.com package pages
- Stores your preference locally in your browser
- Does not collect or transmit any personal data
- Does not track your browsing activity

## 🐛 Troubleshooting

If the extension isn't working:

1. Make sure you're on an npmjs.com package page
2. Refresh the page after changing your preference
3. Check that the extension is enabled in `chrome://extensions/`
4. Try disabling and re-enabling the extension

## 📝 Version

Current version: 1.0.1

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
