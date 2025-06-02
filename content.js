function getCmd(preference) {
  return preference === "bun"
    ? "bun add"
    : preference === "pnpm"
    ? "pnpm add"
    : preference === "yarn"
    ? "yarn add"
    : "npm i";
}

function initialize(pre) {
  try {
    if (window.top === window) {
      const code = document.querySelector("#top svg + p > code");
      chrome.storage.local.get("preference", function (result) {
        code.innerText = code.innerText.replace(
          pre || "npm i",
          getCmd(result.preference)
        );
      });
    }
  } catch (error) {
    console.error("Error in content script:", error);
  }
}

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === "store:preference") {
    chrome.storage.local.get("preference", function (prev) {
      chrome.storage.local.set({ preference: request.data }, function () {
        chrome.runtime.sendMessage({
          action: "update:preference",
          data: request.data
        });
        initialize(getCmd(prev.preference));
        sendResponse({ success: true });
      });
    });
  }
  return true;
});

initialize();


