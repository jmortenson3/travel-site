import $ from 'jquery';

class Modal {
  constructor() {
    this.btnOpenModal = $(".open-modal");
    this.modal = $(".modal");
    this.btnCloseModal = $(".modal__close");
    this.events();
  }

  events() {
    //Events
    // - clicking the open modal button
    // binding this causes the THIS keyword to keep 
    // referencing this class instead of the dom object
    // that was clicked on
    this.btnOpenModal.click(this.openModal.bind(this));
    // - clicking the x close modal button
    this.btnCloseModal.click(this.closeModal.bind(this));
    // - pushes any key
    $(document).keyup(this.keyPressHandler.bind(this));
  }

  keyPressHandler(e) {
    if (e.keyCode === 27) {
      this.closeModal();
    }
  }

  openModal() {
    this.modal.addClass("modal--is-visible");
    // return false to prevent default behavior 
    // of scrolling to top of page
    return false;
  }

  closeModal() {
    this.modal.removeClass("modal--is-visible");
  }

}

export default Modal;