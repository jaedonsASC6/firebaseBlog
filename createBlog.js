const blogTitleElement = document.getElementById("userTitle")
const blogContentElement = document.getElementById("userBlog")
const submitButton = document.getElementById("submitButton")
const database = firebase.database().ref()
submitButton.addEventListener("click",updateDB);

function updateDB(event){
    event.preventDefault();
    const title        = blogTitleElement.value;
    const blogContent  = blogContentElement.value;

    blogTitleElement.value = "";
    blogContentElement.value  = "";

    console.log(title + " : " + blogContent);

    //Update database here

    const blogObj = {
        TITLE: title,
        BLOGCONTENT: blogContent
    }
    database.push(blogObj)
    alert("Blog Posted")
}
