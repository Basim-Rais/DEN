const form = document.getElementById("form");
const firstName = document.getElementById("userfname");
const lastName = document.getElementById("userlname");
const email = document.getElementById("email");
const pass = document.getElementById("password");


const errorMsg = (input, message) => {
    const formControl = input.parentElement; 
    const small = formControl.querySelector("p");

    
    formControl.className = "form-control error";

    
    small.innerText = message;
    small.style.display = "block"; 
}


const successMsg = (input) => {
    const formControl = input.parentElement;

  
    formControl.className = "form-control success";
}

const checkLetters = (input) => {
    const re = /^[A-Za-z]+$/;
    return re.test(input.value.trim());
}


const checkEmail = (input) => {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    const value = input.value.trim();
    
    if (!value.includes("@")) {
        return "Email must contain @";
    } else if (!re.test(value)) {
        return "Email is not valid";
    }
    
    return ""; 
}


const checkRequired = (inputArr) => {
    let isRequired = true; 

    inputArr.forEach(input => {
        if (input.value.trim() === "") {
            errorMsg(input, `${input.placeholder} is required`);
            isRequired = false;
        } else {
            successMsg(input);
        }
    });

    return isRequired; 
}

const clearErrors = () => {
    const formControls = document.querySelectorAll(".form-control");
    formControls.forEach(formControl => {
        const small = formControl.querySelector("p");
        small.style.display = "none";
        formControl.className = "form-control"; 
    });
}

// Form submit event listener
form.addEventListener("submit", (e) => {
    e.preventDefault();

    const areAllFieldsFilled = checkRequired([firstName, lastName, email, pass]);

    let isValid = areAllFieldsFilled; 


    if (!checkLetters(firstName)) {
        errorMsg(firstName, "please enter first name");
        isValid = false;
    }

  
    if (!checkLetters(lastName)) {
        errorMsg(lastName, "please enter last name");
        isValid = false;
    }

 
    const emailError = checkEmail(email);
    if (emailError) {
        errorMsg(email, emailError);
        isValid = false;
    }

  
    if (pass.value.length < 6) {
        errorMsg(pass, "Password must be at least 6 characters");
        isValid = false;
    }

    
    if (isValid) {
        alert("Form submitted successfully!");


        firstName.value = "";
        lastName.value = "";
        email.value = "";
        pass.value = "";

       
        clearErrors();
    }
});
