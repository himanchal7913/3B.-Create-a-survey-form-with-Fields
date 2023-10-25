function resetForm() {
    document.getElementById("survey-form").reset();
}

function submitForm() {
    const form = document.getElementById("survey-form");
    if (form.checkValidity()) {
        const popup = document.getElementById("popup");
        const popupContent = document.getElementById("popup-content");

        const firstName = document.getElementById("first-name").value;
        const lastName = document.getElementById("last-name").value;
        const dob = document.getElementById("dob").value;
        const country = document.getElementById("country").value;
        const gender = Array.from(document.querySelectorAll('input[name="gender"]:checked')).map(el => el.value);
        const profession = document.getElementById("profession").value;
        const email = document.getElementById("email").value;
        const mobile = document.getElementById("mobile").value;

        const popupText = `
            First Name: ${firstName}<br>
            Last Name: ${lastName}<br>
            Date of Birth: ${dob}<br>
            Country: ${country}<br>
            Gender: ${gender.join(", ")}<br>
            Profession: ${profession}<br>
            Email: ${email}<br>
            Mobile Number: ${mobile}
        `;

        popupContent.innerHTML = popupText;
        popup.style.display = "block";
    } 
    else {
        alert("Please fill in all required fields.");
    }
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
    resetForm();
}
