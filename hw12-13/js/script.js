let data;
const block = document.querySelector('.block');

fetch('https://jsonplaceholder.typicode.com/posts')
.then(response => response.json())
.then(json => data = json);




setTimeout(function(){
    for (let i = 0; i < 30; i++) {
        let html = `
        <div class="item__wrapper">
        <img src="https://otkritkis.com/wp-content/uploads/2022/06/ra8je.jpg">
        <div class="info__wrapper">
        Це елемент номер - <b>${i + 1}</b>
        <div class='item__title'> <b>Це title</b> - ${data[i].title}</div>
        <div class='item__body'> <b>Це body</b> - ${data[i].body}</div>
        </div>
        </div>`
        block.insertAdjacentHTML('beforeend', html);
    }
},1000);