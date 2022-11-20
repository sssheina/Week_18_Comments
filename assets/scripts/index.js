let comments = [];


function addComment() {
    let name = document.getElementById("newComment").value;
    comments.push(checkSpam(name));
    generateComments();
    document.getElementById("newComment").value = '';
}


function generateComments() {
    let optionsString = "";
    for (let comment of comments) {
        optionsString += `<div><fieldset><p>${comment}</p></fieldset></div>`;
    }
        document.getElementById("container").innerHTML = optionsString;
}

document.addEventListener("DOMContentLoaded",
function () {
    generateComments();
});

function checkSpam(name) {
    name = document.getElementById("newComment").value;
    let lowerStr = name.toLowerCase();

while (lowerStr.indexOf("viagra") > -1) {
    x = lowerStr.indexOf("viagra");
    lowerStr = lowerStr.substring(0, x) + "***" + lowerStr.substring(x+6, lowerStr.length); 
    name = name.substring(0, x) + "***" + name.substring(x+6, name.length);
}
while (lowerStr.indexOf("xxx") > -1) {
    x = lowerStr.indexOf("xxx");
    lowerStr = lowerStr.substring(0, x) + "***" + lowerStr.substring(x+3, lowerStr.length); 
    name = name.substring(0, x) + "***" + name.substring(x+3, name.length);
}
return name;

}


