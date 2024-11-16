function validate(){
    console.log("1")
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let error = document.getElementById("error")

    if(!email.endsWith("@gmail.com")){
        error.innerHTML = "Email must end with '@gmail.com'!";
        setTimeout(resetError, 2000);
        return false;
    } else if(password == ""){
        error.innerHTML = "Password must be filled!";
        setTimeout(resetError, 2000);
        return false;
    } else{
        alert("Sign In Succesful!")
    }
}
function resetError(){
    error.innerText = "";

}
