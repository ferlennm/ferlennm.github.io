
const buttonReg = document.querySelector('.head_link_1');
const modalReg = document.querySelector('.modal');


modalReg.style.cssText = `
    display: flex;
    visibility: hidden;
    opacity: 0;
    transition: opacity 200ms ease-in-out;
`;

const closeModal = event => {
    const target = event.target;

    if (target === modalReg || target.closest('.modal_close')) {
        
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





const buttonLog = document.querySelector('.head_link_2');
const fodalLog = document.querySelector('.fodal');


fodalLog.style.cssText = `
    display: flex;
    visibility: hidden;
    opacity: 0;
    transition: opacity 200ms ease-in-out;
`;

const closeFodal = event => {
    const target = event.target;

    if (target === fodalLog || target.closest('.fodal_close')) {
        
        fodalLog.style.opacity = 0;

        setTimeout(() => {
            fodalLog.style.visibility = 'hidden';
        }, 200)
    }
}

const openFodal = () => {
    fodalLog.style.visibility = 'visible';
    fodalLog.style.opacity = 1;
};

buttonLog.addEventListener('click', openFodal);
fodalLog.addEventListener('click', closeFodal);















