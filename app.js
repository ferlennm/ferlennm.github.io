const modalController = ({modal, btnOpen, btnClose}) => {
    const buttonReg = document.querySelector(btnOpen);
    const modalReg = document.querySelector(modal);

    modalReg.style.cssText = `
        display: flex;
        visibility: hidden;
        opacity: 0;
        transition: opacity 200ms ease-in-out;
    `;

    const closeModal = event => {
        const target = event.target;

        if (target === modalReg || target.closest(btnClose)) {
            
            modalReg.style.opacity = 0;

            setTimeout(() => {
                modalReg.style.visibility = 'hidden';
            },200)
        }
    }

    const openModal = () => {
        modalReg.style.visibility = 'visible';
        modalReg.style.opacity = 1;
    };

    buttonReg.addEventListener('click', openModal);
    modalReg.addEventListener('click', closeModal);
}

modalController({
    modal: '.modal',
    btnOpen: '.head_link_1',
    btnClose: '.modal_close'
});

modalController({
    modal: '.fodal',
    btnOpen: '.head_link_2',
    btnClose: '.fodal_close'
});
