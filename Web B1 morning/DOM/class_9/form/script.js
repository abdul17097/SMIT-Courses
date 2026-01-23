// Extract form data using new FormData API

let form = document.getElementById("admissionForm");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  let formData = new FormData(form);
  console.log(formData);

  formData.get("fname");

  formData.get("phone");
  formData.get("address");
  formData.get("city");
  formData.get("cv");
  formData.get("confirmation");
  formData.get("gender");
  formData.get("profile");
  formData.get("dob");
  formData.get("age");
  let data = Object.fromEntries(formData.entries());

  console.log(data);
});

{
}
