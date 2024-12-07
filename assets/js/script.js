const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
  navLinks.classList.toggle('active');

  burger.querySelector('.line1').classList.toggle('rotate1');
  burger.querySelector('.line2').classList.toggle('hidden');
  burger.querySelector('.line3').classList.toggle('rotate2');
});


function downloadCV() {
  const cvUrl = "/assets/Charles.pdf"; 
  const link = document.createElement("a");
  link.href = cvUrl;
  link.download = "Charles_CV.pdf"; 
  link.click();
  console.log("CV download initiated.");
}


function openModal(modalId) {
  document.getElementById(modalId).style.display = "block";
}

function closeModal(modalId) {
  document.getElementById(modalId).style.display = "none";
}

window.onclick = function (event) {
  const modals = document.querySelectorAll(".modal");
  modals.forEach(modal => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
};