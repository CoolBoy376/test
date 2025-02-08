var test = window.document;
test.addEventListener("DOMContentLoaded", function () {
    console.log("DOM fully loaded, all scripts executed.");
console.log(document.getElementsByTagName("body"));
var div = document.getElementById("groups/0/button");
var btn = div.firstChild;
btn.setAttribute("style", `${btn.getAttribute("style")} --color-main: green !important;`);
});
