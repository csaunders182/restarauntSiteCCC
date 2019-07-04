const contactForm = document.getElementById("contactForm");

//contactForm.addEventListener("submit", onSubmit);

function onSubmit(e) {
  e.preventDefault();

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;

  if (name !== "") {
    if (email !== "") {
      if (phone !== "") {
        alert(
          `Thank you for reaching out to us ${name}. We will be in contact with you shortly. Please be well until then!`
        );
      } else {
        alert("Please Enter Phone");
      }
    } else {
      alert("Please Enter Email");
    }
  } else {
    alert("Please Enter Name");
  }
}
