const messages = [
    "Are you sure vre mwro?",
    "Really sure vre kako mwro??",
    "Are you positive mwraki?",
    "Please tha exeis ametrita mouaa...",
    "Just think about the mouaaaa!",
    "If you say no, I will be really sad kai tha kano pniki...",
    "I will be very sad kai glwssaki ...",
    "I will be very very very sad kai pethama ...",
    "Ok fine, I will stop asking bye ...",
    "Just kidding, say yes please! ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}