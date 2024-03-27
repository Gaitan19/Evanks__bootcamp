document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modalImage");
  const buttons = document.querySelectorAll(".Button-modal");
  const closeModal = document.getElementById("closeModal");

  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      const imageSrc = this.parentNode.querySelector(".Gallery-image").src;
      modal.style.display = "flex";
      modalImg.src = imageSrc;
    });
  });

  closeModal.addEventListener("click", function () {
    modal.style.display = "none";
  });

  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});
