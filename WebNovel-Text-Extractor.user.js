// ==UserScript==
// @name            WebNovel Text Extractor
// @description     Extracts and formats novel text from WebNovel
// @description:de  Extractiert und formatiert Romantext von WebNovel
// @description:fr  Extrait et formate le texte du roman de WebNovel
// @description:es  Extrae y formatea el texto de la novela de WebNovel
// @version         1.0
// @author          https://github.com/5ynchrogazer
// @namespace       https://5ynchro.net/projects.php?id=WebNovel-Text-Extractor
// @supportURL      https://discord.5ynchro.net
// @updateURL       https://github.com/5ynchrogazer/WebNovel-Text-Extractor/raw/master/WebNovel-Text-Extractor.user.js
// @license         GNU General Public License v3.0
// @match           *://*.webnovel.com/book/*/*
// @contributionURL https://ko-fi.com/aetherwellen
// @grant           none
// ==/UserScript==

(function () {
  "use strict";

  // Select the parent div with the class "cha-content"
  const chaContent = document.querySelector(".cha-content");

  // Check if the element exists to avoid errors
  if (!chaContent) {
    console.log('Element with class "cha-content" not found.');
    return;
  }

  // Find all <p> elements within the specified nested structure
  const paragraphs = chaContent.querySelectorAll(".cha-words > div > div > p");

  // Collect the text content of each paragraph
  let novelText = "";
  paragraphs.forEach((p, index) => {
    novelText += p.textContent.trim(); // Get text and remove extra spaces

    // Add two line breaks after each paragraph except the last one
    if (index < paragraphs.length - 1) {
      novelText += "\n\n";
    }
  });

  // Open the formatted novel text in a new tab
  const newTab = window.open("", "_blank");
  if (newTab) {
    newTab.document.write("<pre>" + novelText + "</pre>");
    newTab.document.close();
  } else {
    alert("Unable to open a new tab. Please check your browser settings.");
  }
})();
