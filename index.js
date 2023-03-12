const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
const createTimerAnimator = () => {
  let intervalId; // хранилище значения интервала для дальнейшего использования
  return (seconds) => {
    clearInterval(intervalId); // Очищеаем предыдщуий интервал чтобы предотвратить переписывание анимации
    let remainingSeconds = seconds;
    intervalId = setInterval(() => {
      remainingSeconds--;
      if (remainingSeconds >= 0) {
        const hours = Math.floor(remainingSeconds / 3600); //  вычисляем оставшиеся часы
        const minutes = Math.floor((remainingSeconds % 3600) / 60); //  вычисляем оставшиеся минуты
        const seconds = remainingSeconds % 60; //  вычисляем оставшиеся секунды
        const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`; // приводим в нужный формат
        timerEl.textContent = formattedTime; // обновляем элемент на нужный формат
      } else {
        clearInterval(intervalId); // очищаем интервал по достижению 0
      }
    }, 1000); 
  };
};


const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', () => {
  // Очистите input так, чтобы в значении
  // оставались только числа
  inputEl.value = inputEl.value.replace(/\D/g, '');  //оставляем только цифры в инпут
});

buttonEl.addEventListener('click', () => {
  const seconds = Number(inputEl.value);

  animateTimer(seconds);

  inputEl.value = '';
});
