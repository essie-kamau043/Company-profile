document.addEventListener('DOMContentLoaded', function(){



const contactForm = document.getElementById('contact-form');
//add event listener to form submission
contactForm.addEventListener('submit', function(event){
    event.preventDefault();//prevent the default from submission

    //Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    //simple form validation
    if(!name || !email || !message){
        alert('Please fill out all fields before submitting.');
        return;//stop execution if fields are empty
    }
    //if validation passes display success message
    alert('Thank you for contacting us, '+name+'! We will get back to you shortly.');
    //Reset the form fields
    contactForm.reset();
});
});