export default function Modal() {

    const modalWrapper = document.querySelector('.modal-wrapper');
    const cancelButton = document.querySelector('.button.cancel');

    cancelButton.addEventListener("click", close);

    function open() {
        //functionality that active modal
        modalWrapper.classList.add("active")
    };

    function close() {
        //functionality that disable modal
        modalWrapper.classList.remove("active")
    };

    return {open, close};
}