const tagButtons = document.querySelectorAll('.tags button');
const name = document.getElementById("name").value;
const email = document.getElementById("email").value;
const message = document.getElementById("message").value;
var tagDom;
var tag;
function toggleActiveClass(event) {
    tagButtons.forEach((button) => {
        button.classList.remove('active');
    });
    event.target.classList.add('active');
    tag = event.target.innerText;
    tagDom=event.target;
    console.log(tag);
}
console.log(tag);
tagButtons.forEach((button) => {
    button.addEventListener('click', toggleActiveClass);
});

function sendEmail(){
    Email.send({
        secureToken : "e9f66688-4c55-43f9-844d-d0f297e98628",
        Host : "smtp.elasticemail.com",
        Username : "pravinelangovan20@gmail.com",
        Password : "0E53F12F7358905F91F2B57019D5573DCE65",
        To : 'drawleadofficial@gmail.com',
        From : document.getElementById("email").value,
        Subject : "Course Enquiry",
        Body :"Name : " + document.getElementById("name").value 
         + "<br> Email: "+ document.getElementById("email").value
         + "<br> Course : "+ tag
         + "<br> Message : " + document.getElementById("message").value
    }).then(
      message => alert("Message Send Successfully")
    );
   tagDom.classList.remove('active');
}