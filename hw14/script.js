const grid = document.querySelector('.grid'),
      header = document.querySelector('.header'),
      select1 = document.querySelector('.select1'),
      inp = document.querySelector('#inp'),
      result = document.querySelector('.result'),
      toggle = document.querySelector('.toggle__img');
      

let firstCurr;
let secondCurr;

let data;

fetch('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json')
    .then(response => response.json())
    .then(json => data = json);

setTimeout(function(){
    [firstCurr,secondCurr] = [data[0].rate,data[0].rate];
    header.innerHTML = `Today: <b>${data[0].exchangedate}</b>`;
    data.forEach(el => {
        let html = `
        <div class="grid__item">
            <div class="grid__txt">
                ${el.txt}
            </div>
            <div class="grid__rate">
                ${el.rate}
            </div>
            <div class="grid__cc">
                ${el.cc}
            </div>
        </div>`;
        let option = document.createElement('option');
        option.innerText = `${el.cc}`;
        select1.insertAdjacentElement('beforeend', option);

        grid.insertAdjacentHTML('beforeend', html);
    });
    let select2 = select1.cloneNode(true);
    select2.id = 'sel2';
    inp.insertAdjacentElement('afterend', select2);

    select1.addEventListener('change', getFirstCurr);
    select2.addEventListener('change', getSecondCurr);
    inp.addEventListener('input', calcResult);

}, 1000);  

toggle.addEventListener('click', toggleCurr);

function calcResult(){
    if(firstCurr != undefined && secondCurr != undefined){
        result.innerText = (inp.value * firstCurr / secondCurr).toFixed(3);
    }
}

function getFirstCurr(){
    let value = this.options[this.selectedIndex].value;
    data.forEach(el => {
        if(value === el.cc){
            firstCurr = el.rate;
            console.log(firstCurr);
        }
    });
    calcResult();
}
function getSecondCurr(){
    let value = this.options[this.selectedIndex].value;
    data.forEach(el => {
        if(value === el.cc){
            secondCurr = el.rate;
            console.log(secondCurr);
        }
    });
    calcResult();
}

function toggleCurr(){
    this.classList.toggle('rotate');
    let select2 = document.querySelector('#sel2');
    [select1.selectedIndex,select2.selectedIndex] = [select2.selectedIndex,select1.selectedIndex];
    getFirstCurr.call(select1);
    getSecondCurr.call(select2);
    calcResult();
}