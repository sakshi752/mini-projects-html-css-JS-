const innerModal = document.getElementById('inner-modal');
const openBtn = document.getElementById('open-btn');
const closeBtn = document.getElementById('close-btn');
const modal = document.getElementById('modal'); 

const openModal = () => {
    innerModal.classList.add('show');
    modal.classList.add('active-bg');
}

const closeModal = () => {
    innerModal.classList.remove('show');
    modal.classList.remove('active-bg');
}

openBtn.addEventListener('click', openModal);

closeBtn.addEventListener('click', () => {
    closeModal();
});

// Add click event listener to the document to close modal if clicked outside
document.addEventListener('click', (e) => {
    if (!innerModal.contains(e.target) && e.target ===modal) {
        closeModal();
    }
});
