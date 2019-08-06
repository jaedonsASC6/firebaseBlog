const blogTitleElement = document.getElementById("userTitle")
const blogContentElement = document.getElementById("userBlog")
const submitButton = document.getElementById("submitButton")
const database = firebase.database().ref()
const messageBoard = document.getElementById('blogDisplay')
database.on("child_added",addBlog)

function addBlog(rowData){
    const row = rowData.val()
    console.log(row)
    const blogDiv  =document.createElement("div")
    blogDiv.classList.add("blogPost")
    const hElement = document.createElement('h2')
    const pElement = document.createElement('p')
    hElement.innerHTML = `${row.TITLE}`
    pElement.innerHTML = `${row.BLOGCONTENT}`
    messageBoard.appendChild(blogDiv)
    blogDiv.appendChild(hElement)
    blogDiv.appendChild(pElement)
} 