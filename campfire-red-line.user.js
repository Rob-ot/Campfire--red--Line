// ==UserScript== 
// @name           Campfire 'red' Line
// @author         Rob Middleton
// @description    Adds a red line by the last read message.
// @version        1.0.0
// @license        MIT
// @include        http://*.campfirenow.com*
// @exclude        https://*.campfirenow.com*
// ==/UserScript==

;(function () {
var currentNewest = null

function setMessageHighlighted (msg, highlighted) {
  msg.style.borderBottom = highlighted ? "2px solid red" : ""
}

function resetLine () {
  if (currentNewest) setMessageHighlighted(currentNewest, false)
  var newest = findNewest()
  setMessageHighlighted(newest, true)
  currentNewest = newest
}

function findNewest () {
  var msgs = document.querySelectorAll(".chat .message")
  return msgs[msgs.length - 1]
}

window.addEventListener("blur", function () {
  resetLine()
}, false)
}())
