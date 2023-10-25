let fnameEl = document.getElementById("fname");
let lnameEl = document.getElementById("lname");
let emailEl = document.getElementById("email");
let contactEl = document.getElementById("contact");
let studentIdEl = document.getElementById("student_id");
let feedbackEl = document.getElementById("feedback");
let submitEl = document.getElementById("submit");
let formsEl = document.getElementById("forms");
let headEl = document.getElementById("head");
let another_feedbackEl = document.getElementById("another_feedback");
let errorMsgEl = document.getElementById("errorMsg");


let eFname = document.getElementById("e-fname");
let eLname = document.getElementById("e-lname");
let eEmail = document.getElementById("e-email");
let eContact = document.getElementById("e-contact");
let eStudentId = document.getElementById("e-studentId");

another_feedbackEl.style.display = "none";



function isEmpty(){
    if(fnameEl.value==="" || lnameEl.value==="" || emailEl.value==="" || contactEl.value==="" || studentIdEl.value===""){
        whichFieldIsEmpty();
        return true;
    }else{
        return false;
    }
}

function whichFieldIsEmpty(){
    if(fnameEl.value===""){
        eFname.style.display = "block"; 
    }else{
        eFname.style.display = "none"
    }

    if(lnameEl.value===""){
        eLname.style.display = "block";
    }else{
        eLname.style.display = "none";
    }

    if(emailEl.value===""){
        eEmail.style.display = "block";
    }else{
        eEmail.style.display = "none";
    }
    
    if(contactEl.value===""){
        eContact.style.display = "block";
    }else{
        eContact.style.display = "none";
    }
    
    if(studentIdEl.value===""){
        eStudentId.style.display = "block";
    }else{
        eStudentId.style.display = "none";
    }
}

function emptyEveryInput(){
    fnameEl.value = "";
    lnameEl.value = "";
    emailEl.value = "";
    contactEl.value = ""; 
    studentIdEl.value = ""; 
    feedbackEl.value = ""; 

    eFname.style.display = "none";
    eLname.style.display = "none";
    eEmail.style.display = "none";
    eContact.style.display = "none";
    eStudentId.style.display = "none";
    errorMsgEl.style.display = "none";
    
}


submitEl.addEventListener("click", function(){   
    if(isEmpty()){
        errorMsgEl.style.display = "block";
        formsEl.style.display = "block";
    }else{
        formsEl.style.display = "none";
        another_feedbackEl.style.display = "block";
        headEl.textContent = "Thank you for your Valuable feedback!";

        another_feedbackEl.addEventListener("click", function(){
            formsEl.style.display = "block";
            another_feedbackEl.style.display = "none";
            headEl.textContent = "Help us Improve";
            window.history.go(-1);

            emptyEveryInput();

        });
    }   
    
});
