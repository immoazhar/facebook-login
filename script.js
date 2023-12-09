const forms = document.querySelector(".forms"),
  pwshowhide = document.querySelectorAll(".eye-icon"),
  links = document.querySelectorAll(".link");

pwshowhide.forEach((eyeicon) => {
  eyeicon.addEventListener("click", () => {
    let pwfields =
      eyeicon.parentElement.parentElement.querySelectorAll(".password");

    pwfields.forEach((password) => {
      if (password.type === "password") {
        password.type = "text";
        eyeicon.classList.replace("bx-hide", "bx-show");
      } else if (password.type === "text") {
        password.type = "password";
        eyeicon.classList.replace("bx-show", "bx-hide");
      }
    });
  });
});

links.forEach((links) => {
  links.addEventListener("click", (e) => {
    e.preventDefault(); //preventing form submit
    forms.classList.toggle("show-signup");
  });
});
