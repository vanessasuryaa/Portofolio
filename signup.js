function validate(){
    console.log("1")
    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confpass = document.getElementById("conf-pass").value;
    let dob= document.getElementById("dob").value;
    let agree = document.getElementById("agree");
    let male = document.getElementById("male");
    let female = document.getElementById("female");

    let nowDate = new Date();
    let dobDate = new Date(dob);
    let age =  nowDate.getFullYear() - dobDate.getFullYear();
    console.log(typeof dob);

    let error = document.getElementById("error")

    if(username == ""){
        error.innerHTML = "Username must be filled!";
        setTimeout(resetError, 2000);
        return false;
    } else if(username.length < 3 || username.length > 15){
        error.innerHTML = "Username must be 3-15 characters!";
        setTimeout(resetError, 2000);
        return false;
    } else if(!email.endsWith("@gmail.com")){
        error.innerHTML = "Email must end with '@gmail.com'!";
        setTimeout(resetError, 2000);
        return false;
    } else if(password == ""){
        error.innerHTML = "Password must be filled!";
        setTimeout(resetError, 2000);
        return false;
    } else if(confpass == ""){
        error.innerHTML = "Confirm Password must be filled!";
        setTimeout(resetError, 2000);
        return false;
    } else if(confpass != password){
        error.innerHTML = "Confirm Password must be same with password!";
        setTimeout(resetError, 2000);
        return false;
    } else if(age < 18){
        error.innerHTML = "Minimum Age is 18!";
        setTimeout(resetError, 2000);
        return false;
    } else if(dob == ""){
        error.innerHTML = "Date must be filled!";
        setTimeout(resetError, 2000);
        return false;
    }else if(!agree.checked){
        error.innerHTML = "Please agree to terms & policy";
        setTimeout(resetError, 2000);
        return false;
    } else if(!male.checked && !female.checked){
        error.innerHTML = "You must choose gender!";
        setTimeout(resetError, 2000);
        return false;
    } else{
        alert("Sign Up Succesful!")
    }
}
function resetError(){
    error.innerText = "";

}
