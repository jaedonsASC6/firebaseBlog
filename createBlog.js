const blogTitleElement = document.getElementById("userTitle")
const blogContentElement = document.getElementById("userBlog")
const submitButton = document.getElementById("submitButton")
const database = firebase.database().ref()
submitButton.addEventListener("click",updateDB);

function updateDB(event){
    event.preventDefault();

    const title        = blogTitleElement.value;
    const blogContent  = blogContentElement.value;
    
    if(title == "" && blogContent == ""){
        alert("Please Enter A Title And Content For Your Post")
    }else if(title == ""){
        alert("Please Enter A title For your Blog")
    }else if (blogContent == ""){
        alert("Please Enter Content For Your Blog")
    }else{
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
}
