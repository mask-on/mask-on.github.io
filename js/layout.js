let coll = document.getElementsByClassName("collapse");
let i;

for (let i = 0; i < coll.length; i += 1) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}

document
    .getElementById("before")
    .scrollIntoView({ behavior: "smooth" });

document
    .getElementById("during")
    .scrollIntoView({ behavior: "smooth" });

document
    .getElementById("after")
    .scrollIntoView({ behavior: "smooth" });