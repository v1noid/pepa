"use strict";

(function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    console.log("Getting storage...");
    chrome.storage.local.get("preference", function (result) {
      document.querySelectorAll(".option").forEach((option) => {
        if (result.preference === option.innerText) {
          option.classList.add("active");
        } else {
          option.classList.remove("active");
        }
        option.addEventListener("click", function () {
          chrome.tabs.sendMessage(
            tabs[0].id,
            {
              action: "store:preference",
              data: this.innerText,
            },
            function (response) {
              console.log("Response from content script:", response);
            }
          );
        });
      });
    });
  });

  chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action === "update:preference") {
      document.querySelectorAll(".option").forEach((option) => {
        if (request.data === option.innerText) {
          option.classList.add("active");
        } else {
          option.classList.remove("active");
        }
      });
    }
  });
})();
