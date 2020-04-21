
var cart = {
      'chair': 100,
      'clock': 200,
      'sofa': 300,
  }
  


  var basket ={}
  

  
 // Делаем массив всех кнопок на странице с классом buy_button.
  var buttons = document.getElementsByClassName('buy_button')
 // Для каждоый кнпоки добавляем EventListener
  for (var i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener('click',myfunction);
  }
// получаем название позиции в обьекте "cart" в зависимости от id кнопки. 
function myfunction(event) {
    changefunction(event.target.dataset.id);
    
}

// функция добавления позицию в объект корзина
function changefunction(id){
        if (!basket.hasOwnProperty(id)){
            basket[id] = cart[id]
            addline(id, basket[id]);
        }
    }

// функция добавления строки в корзину в бразуере.
function addline(name,cost){
var div = document.createElement('div')
div.className ='position'


var div1 = document.createElement('div')
    div1.className = 'name'
    div1.innerHTML = name
    
    var div2 = document.createElement('div')
    div2.className = 'qty'

    var b1 = document.createElement('button')
    b1.className = 'button '+ name
    
    b1.id = 'plus'
    b1.innerHTML = '+'

    var b2 = document.createElement('button')
    b2.className = 'button '+ name
    b2.id = 'minus'
    b2.innerHTML = '-'
    
    var b3 = document.createElement('button')
    b3.className = 'button '+ name
    b3.id = 'delete_row'
    b3.innerHTML = 'X'
    
    div2.appendChild(b1);
    div2.appendChild(b2);
    div2.appendChild(b3);
    
    var div4 = document.createElement('div');
    div4.className = 'pcs';
    div4.innerHTML = 1;
    div4.id = name
   
    
    
    var div3 = document.createElement('div');
    div3.className = 'total' 
    div3.innerHTML = cost 
    div3.id = name;
    var test = document.getElementById('basket1');
    
    test.appendChild(div)
    div.appendChild(div1);
    div.appendChild(div2);
    div.appendChild(div4);
    div.appendChild(div3);
    
    // вешаем события на кнопки "+" "-" "delete"
    
    b1.addEventListener('click',plus); 
    b2.addEventListener('click',minus);
    b3.addEventListener('click',delete_row);
    sum_basket(basket);
    
}

// добавление элемента в корзину ( увеличение на 1 позицию)
function plus(){
   var temp = this.className.split(' ');
   var goods = temp[temp.length-1]
   basket[goods] = basket[goods] + cart[goods]
   var total = document.querySelector('div.total#'+goods)
   total.innerHTML = basket[goods]
   sum_basket(basket);
   document.querySelector('div.pcs#'+goods).innerHTML++
    
   
}
// уадление элемента из корзины.
function delete_row(){
    var tempDel = this.id;
    var temp = this.className.split(' ');
    var goods = temp[temp.length-1]
    var a = document.getElementById(goods)
    a.parentNode.remove();
    
    delete basket[goods];
    sum_basket(basket);
    
}

// функция уменьшения кол-ва
function minus(){
    var temp = this.className.split(' ');
    var goods = temp[temp.length-1]
    // проверяем если позиция последняя, то удаляем если нет то онимаем
    if (basket[goods] > cart[goods]){
      basket[goods] = basket[goods] - cart[goods]
      var total = document.querySelector('div.total#'+goods)
      total.innerHTML = basket[goods]
      sum_basket(basket);
      document.querySelector('div.pcs#'+goods).innerHTML--
    }
    else {
        document.getElementById(goods).parentNode.remove();
        delete basket[goods];
        sum_basket(basket);

    }
}

function sum_basket(obj){
    var sum = 0; 
    for (var el in obj) {
        sum += obj[el];
    }   
    var a = document.getElementById('sum1')
    a.innerHTML = 'Ваша сумма ='+sum;
    
}



