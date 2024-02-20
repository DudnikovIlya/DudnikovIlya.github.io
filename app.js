let tg = window.Telegram.WebApp;

tg.expand();

PAYMENT_TOKEN = '284685063:TEST:MjM0YjExZGZjMGU5';

tg.MainButton.textColor = '#FFFFFF';
tg.MainButton.color = '#2cab37';

let item = "";

let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let btn6 = document.getElementById("btn6");

btn1.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Вы выбрали товар 1!");
		item = "1";
		tg.MainButton.show();
	}
});

btn2.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Вы выбрали товар 2!");
		item = "2";
		tg.MainButton.show();
	}
});

btn3.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Вы выбрали товар 3!");
		item = "3";
		tg.MainButton.show();
	}
});

btn4.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Вы выбрали товар 4!");
		item = "4";
		tg.MainButton.show();
	}
});

btn5.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Вы выбрали товар 5!");
		item = "5";
		tg.MainButton.show();
	}
});

btn6.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Вы выбрали товар 6!");
		item = "6";
		tg.MainButton.show();
	}
});


// Telegram.WebApp.onEvent("mainButtonClicked", function(){
// 	tg.sendData('1');
// });


tg.MainButton.on('click', function() {
    // Отправляем запрос на открытие платежной формы Telegram
    tg.payments.open({
        // Здесь указываете данные о товаре и цене
        // Например:
        title: 'Ваш товар',
        description: 'Описание вашего товара',
        payload: 'custom_data', // Дополнительные данные, если нужно
        provider_token: PAYMENT_TOKEN, // Токен платежного провайдера
        currency: 'USD', // Валюта товара
        prices: [{ label: 'Цена товара', amount: 100 }], // Цена товара в минимальных единицах валюты (например, центы для USD)
        start_parameter: 'start_parameter' // Уникальный параметр запуска платежа
    }).then(function(response) {
        // Обработка ответа
        alert('1');
		tg.MainButton.setText("Всё хорошо!");
		retrn
    }).catch(function(error) {
        // Обработка ошибок
        alert('2');
		tg.MainButton.setText("Какая-то ошибка!");
		return
    });

	tg.MainButton.setText("Ничего не произошло!");
});



let usercard = document.getElementById("usercard");

let p = document.createElement("p");

p.innerText = `${tg.initDataUnsafe.user.first_name}
${tg.initDataUnsafe.user.last_name}`;

usercard.appendChild(p);