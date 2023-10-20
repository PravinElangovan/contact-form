const tagButtons = document.querySelectorAll('.tags button');
var tag;
function toggleActiveClass(event) {
    tagButtons.forEach((button) => {
        button.classList.remove('active');
    });
    event.target.classList.add('active');
    tag = event.target.innerText;
    console.log(tag);
}
console.log(tag);
tagButtons.forEach((button) => {
    button.addEventListener('click', toggleActiveClass);
});

function sendEmail(){
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "pravinelangovan20@gmail.com",
        Password : "0E53F12F7358905F91F2B57019D5573DCE65",
        To : 'pravinelangovan20@gmail.com',
        From : "pravinelangovan20@gmail.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}