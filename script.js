let timeInput = document.getElementById('time'),
    buttonStart = document.getElementById('button'),
    timerShow = document.getElementById('timer');

buttonStart.addEventListener( 'click',  function() {
        
    let timeMinute = parseInt(timeInput.value) * 60;
    console.log(timeMinute)

        
    let timer = setInterval(() => {
        let seconds = Math.trunc(timeMinute%60); // Получаем секунды
         seconds = String(seconds);
        let minutes = Math.trunc(timeMinute/60%60); // Получаем минуты
         minutes = String(minutes);
        let hours = Math.trunc(timeMinute/60/60%60); // Получаем часы
        hours = String(hours);
        hours.length == 1 ? hours = ('0' + hours) : hours;
        minutes.length == 1 ? minutes = ('0' + minutes) : minutes;
        seconds.length == 1 ? seconds = ('0' + seconds) : seconds;
        // Условие если время закончилось то...
        if (timeMinute <= 0) {
            // Таймер удаляется
            clearInterval(timer);
            // Выводит сообщение что время закончилось
            alert("Время закончилось");
        } 
        else { // Иначе
            // Создаём строку с выводом времени
            let strTimer = `${hours}:${minutes}:${seconds}`;
            // Выводим строку в блок для показа таймера
            timerShow.innerHTML = strTimer;
        }
        --timeMinute; // Уменьшаем таймер
    }, 1000)
    // clearInterval(timer);
    
});
