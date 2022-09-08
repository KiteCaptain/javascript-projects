
/**
const body = document.body
body.append("Hello Kit")

const div = document.createElement("div")
div.innerText = "Nice warm summer."
div.textContent = "I love this part"
body.append(div)

console.log(div.textContent)
console.log(div.innerText)
 */

/**
const body = document.body
const div = document.createElement("div")
const em = document.createElement("em")
em.innerText = "very important matter"
// div.innerHTML = "This is a <em>very important</em> matter" // not secure
div.append("This is a ", em)
body.append(div)
*/

const body  = document.body
const div = document.querySelector("div");
const spanTitle = document.querySelector("#blog-title");
const spanContent = document.querySelector("#blog-content");
// div.removeChild(spanTitle)
spanTitle.setAttribute('id', 'tilte')
spanContent.id = "tencote"
spanContent.classList.add("new-class", "another-class")
spanContent.classList.remove("another-class")
spanContent.classList.toggle("toggle-class", true)
spanContent.style.color = "#00f6f4"
