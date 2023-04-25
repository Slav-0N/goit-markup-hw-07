(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-m-open]"),
    closeModalBtn: document.querySelector("[data-m-close]"),
    modal: document.querySelector("[data-m]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();