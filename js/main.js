function mychat(){
    console.log("working");
    let name= document.getElementById("name");
    let email= document.getElementById("email");
    if(name.value === "" || email.value === ""){
        alert("Plese fill out Form");
    }
    else{
        let message ="My Name is "+name.value+". \n"+"My Email Address is "+email.value+".";
        let chaturl =  "https://wa.me/+918080690973?text="+message;
        window.location.href=chaturl
    }
}