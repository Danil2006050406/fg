let goal = document.querySelectorAll('.goal');
let ball = document.querySelector('img');
let field = document.querySelector('.field');
let counters = document.querySelectorAll('.counter span');
let goalsTeam1 = 0;
let goalsTeam2 = 0;

goal.forEach(item => {
    item.addEventListener('dragover', prevent);
    item.addEventListener('drop', dropElement);
    item.addEventListener('dragstart', startToDrag);

});

field.addEventListener('dragover', prevent);
field.addEventListener('drop', dropElement);
field.addEventListener('dragstart', startToDrag);


function dropElement(e){
    centerDrop(e);
    this.appendChild(ball);
    if(e.target == goal[0]){
        goalsTeam1++;
        counters[0].innerText = goalsTeam1 / 2;
    }else if(e.target == goal[1]){
        goalsTeam2++;
        counters[1].innerText = goalsTeam2 / 2;
    }
}

function prevent(e){
    e.preventDefault();
}

function startToDrag(e){
        ball.style.left = e.pageX - ball.offsetWidth / 2 + 'px';
        ball.style.top = e.pageY - ball.offsetHeight / 2 + 'px';
}

function centerDrop(e){
    console.log(goalsTeam1);
    ball.style.left = e.pageX - ball.offsetWidth / 2 + 'px';
    ball.style.top = e.pageY - ball.offsetHeight / 2 + 'px';
}