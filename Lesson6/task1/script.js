// Script  


// ********** ВЕРСТКА******


// содздаем основной тег
var wrapper = document.createElement('div');
wrapper.className ='wrapper';
document.body.appendChild(wrapper);

// добавляем 3 картинки
for (var i=0; i<3;i++) {
    var picture = document.createElement('img');
    picture.src = 'img/pic'+(i+1)+'.jpg'
    wrapper.appendChild(picture);
}
//создаем доп тег где будет отображаться большая картинка. 
var wrapper_big = document.createElement('div');
wrapper_big.className = 'wrapper_big';
document.body.appendChild(wrapper_big)
var big_img  = document.createElement('img');

//  наполняю массив всеми элементами с тегом img
var img = document.querySelectorAll('img'); 

// ********** ВЕРСТКА******


//*** Оносвной код *** 

for (var i = 0 ; i < img.length; i++){ // 
        img[i].addEventListener('mouseover',show); // каждой картинке добавляю  EventListener, при наведении вызывается функция .
        img[i].addEventListener('mouseout', nottoshow); // каждой картинке добавляю  EventListener, при убирании мышки функция .
    } 
       
// функция отображения большой картинки.        
function show(){ 
    var temp_mas = this.src.split('/');
    var file_name = temp_mas[temp_mas.length - 1];
    wrapper_big.appendChild(big_img);
    big_img.src = 'img_big/'+file_name;
    var test = big_img
    test.onerror = function(){
        alert('Ошибка, картинка не найдена') // 
    }
}

// функция удаления большой картинки.  
function nottoshow(){
    wrapper_big.removeChild(big_img);
}






