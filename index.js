let formData = document.querySelector('.form');
let submitButton = document.querySelector('.button');
let errorMessages = document.querySelectorAll(".error-message");
let emptyfieldMessages = document.querySelectorAll(".empty-field");
let showPasswordbtn = document.querySelector(".btn");
let fnflag, lnflag, emailflag, pwdflag;
let fisrtName, lastName, email, password;
let fntarget, lntarget, emailtarget, pwdtarget;
let field;


let nameRagex = /^[a-z]+$/i;
let emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
let passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/

for(let errorMessage of errorMessages){
    errorMessage.classList.add("d-none");
}

for(let emptyfieldMessage of emptyfieldMessages){
    emptyfieldMessage.classList.add("d-none");
}


formData.addEventListener("keyup", (event) => {
    event.preventDefault();
    field = event.target.dataset.key;
    switch(field){
        case "firstName" :
            fisrtName = event.target.value;
            fntarget = event.target;
            break;
        case "lastName" :
            lastName = event.target.value;
            lntarget = event.target;
            break;
        case "email" :
            email = event.target.value;
            emailtarget = event.target;
        case "password" :
            password = event.target.value;
            pwdtarget = event.target;
            break;
        default:
            fisrtName = lastName = email = password = " ";
            break;
    }
})

submitButton.addEventListener("click", (event) => {
    event.preventDefault();
    console.log(fisrtName, lastName, email, password)
    if(fisrtName){
        emptyfieldMessages[0].classList.add("d-none")
        if(!nameRagex.test(fisrtName)){
            fntarget.classList.add("error")
            errorMessages[0].classList.remove("d-none")
            fnflag = false;
        } else {
            fntarget.classList.remove("error")
            errorMessages[0].classList.add("d-none")
            fnflag = true;
        }
    } else {
        emptyfieldMessages[0].classList.remove("d-none")
    }
    if(lastName){
        emptyfieldMessages[1].classList.add("d-none")
        if(!nameRagex.test(lastName)){
            lntarget.classList.add("error")
            errorMessages[1].classList.remove("d-none")
            lnflag = false;
        } else {
            lntarget.classList.remove("error")
            errorMessages[1].classList.add("d-none")
            lnflag = true;
        }
    } else {
        emptyfieldMessages[1].classList.remove("d-none")
    }
    if(email){
        emptyfieldMessages[2].classList.add("d-none")
        if(!emailRegex.test(email)){
            emailtarget.classList.add("error")
            errorMessages[2].classList.remove("d-none")
            emailflag = false;
        } else {
            emailtarget.classList.remove("error")
            errorMessages[2].classList.add("d-none")
            emailflag = true;
        }
    } else {
        emptyfieldMessages[2].classList.remove("d-none")
    }
    if(password){
        emptyfieldMessages[3].classList.add("d-none")
        if(!passwordRegex.test(password)){
            pwdtarget.classList.add("error")
            errorMessages[3].classList.remove("d-none")
            pwdflag = false;
        } else {
            pwdtarget.classList.remove("error")
            errorMessages[3].classList.add("d-none")
            pwdflag = true;
        }
    } else {
        emptyfieldMessages[3].classList.remove("d-none")
    }

    if(fnflag && lnflag && emailflag && pwdflag){
        fntarget.value = lntarget.value = emailtarget.value = pwdtarget.value = "";
        window.location.href = "success.html";
    }
});

showPasswordbtn.addEventListener("click", (event) =>{
    event.preventDefault();
    if (pwdtarget.getAttribute("type") === "text") {
        pwdtarget.setAttribute("type", "password");
    } else {
        pwdtarget.setAttribute("type", "text");
    }
})
