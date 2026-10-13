//your JS code here. If required.
window.addEventListener("load", (event) => {
  // event.preventDefault();
  let msgTab = document.querySelector(".msgTab")
  let pTag = document.createElement("p");
  pTag.textContent = "DOM load success";
  msgTab.appendChild(pTag);
});