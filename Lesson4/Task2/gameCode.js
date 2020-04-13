var event, ok;
var step = 0;
var memory = [];
var f_unser;




// Функция проверки ответа и записи результатов.
function select(question, answer1, answer2,max) {
    event = +prompt(question + answer1 + answer2 + '-1 - Выход из игры');
    if (event == -1) {
        return ok = true;
    } 
    else {
        ok = isAnswer(max, event);
        f_unser =returnUserChoice(answer1,answer2,event);
        memory[step] = {
            m_qeustion: question,
            user_answer: f_unser
            }
        step++;
    }
    
}

// Проверка какой ответ выбрал для записи 
function returnUserChoice(answer1,answer2,event) {
    if (event == 1){
       return answer1;
    }
    else {
       return answer2;
    }
}

// Функция прсомотра ответов данных пользователем
function answer(){
var length = memory.length;
while(1) {
    var choice = +prompt('Если хотите посомтреть свои ответы впишите цифру хода ( до '+ length+'-х)' + 'или введите неверное число для окончания') ;
    if (choice <= 3) {
        alert('Вопрос: \n'+ memory[choice-1].m_qeustion +'\n' + 'Ваш Ответ: \n' + memory[choice-1].user_answer)
    } 
    else{
        alert('Вы вышли из режима просмотра ответов.');
        break;
    }
}
}



do { //Выводим первый вопрос
    ok = false;
    select(works.a00,works.a1,works.a2,works.a0);
} while (!ok);
switch (event) {
    case 1: // Первое действие  - если в первом окне ввели 1 то открываем серию окон - окно 2
        do {
            ok = false;
            select(works.b00,works.b1,works.b2,works.b0);
        } while (!ok);
        switch (event) {
            case 1: // Второе действие, если во 2 окне ввели 1 то переходим на 4 окно
                do {
                    ok = false;
                    select(works.d00, works.d1,works.d2,works.d0);
                } while (!ok);
                break;
            case 2: // Второе действие   Если ввели 2 то также переходим на 4 окно
                do {
                    ok = false;
                    select(works.d00, works.d1,works.d2,works.d0);
                } while (!ok);
                break;
            case -1: // Второе действие
                break;
            default:
                alert('Ошибка');
        }
        answer();
        break;
    case 2: // Первое действие    Если в 1 окне ввели 2 то переходим к 3 окну
        do {
            ok = false;
            select(works.c00,works.c1,works.c2,works.c0);
        } while (!ok);
        switch (event) {
            case 1: // Второе действие
                do {
                    ok = false;
                    select(works.d00, works.d1,works.d2,works.d0);
                } while (!ok);
                break;
            case 2: // Второе действие
                do {
                    ok = false;
                    select(works.d00, works.d1,works.d2,works.d0);
                } while (!ok);

                break;
            case -1: // Второе действие
                break;
            default:
                alert('Ошибка');
        }
        answer();
        break;
    case -1: // Первое действие
        break;
    default:
        alert('Ошибка');
}
console.log(memory);



alert('Спасибо за игру');

//------------------------------------------
function isAnswer(q, event) {
    if (isNaN(event) || !isFinite(event)) {
        alert('Вы ввели недопустимый символ');
        return false;
    } else if (event < 1 || event > q) {
        alert('Ваше число выходит из допустимого диапозона');
        return false;
    }
    return true;

}
