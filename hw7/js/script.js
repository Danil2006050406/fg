const btn = document.querySelector('#btn');
const modal = document.querySelector('#modal');
const tabsItem = document.querySelectorAll(".tabs__item");
const tabsContent = document.querySelectorAll(".tabs__itemContent");

btn.addEventListener('click', showModal);
tabsItem[0].addEventListener('click', showSignUpContent);
tabsItem[1].addEventListener('click', removeSignUpContent);
for (i = 0; i < tabsItem.length; i++) {
    tabsItem[i].addEventListener('click', showTabContent);

}

function showModal() {
    modal.style.display = "block";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
function showSignUpContent(){
    this.parentElement.parentElement.parentElement.classList.remove('modal__contentSignIn');
    this.parentElement.parentElement.parentElement.classList.toggle('modal__contentSignIn');
}
function removeSignUpContent(){
    this.parentElement.parentElement.classList.remove('modal__contentSignIn');
}

function showTabContent() {
    for (i = 0; i < tabsContent.length; i++) {
        tabsContent[i].classList.remove('show');
        tabsItem[i].firstElementChild.classList.remove('chosen');
    }
    this.lastElementChild.classList.toggle('show');
    this.firstElementChild.classList.toggle('chosen');
}