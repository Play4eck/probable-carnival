function updateTimer() {
    // Целевая дата: 1 января 2026 года
    const targetDate = new Date('January 1, 2026 00:00:00').getTime();
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
        document.getElementById('timer').innerText = "С Новым 2026 Годом!";
        return;
    }

    // Расчет времени
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Вывод в HTML
    document.getElementById('days').innerText = days;
    document.getElementById('hours').innerText = hours.toString().padStart(2, '0');
    document.getElementById('minutes').innerText = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').innerText = seconds.toString().padStart(2, '0');
}

// Запуск каждую секунду
setInterval(updateTimer, 1000);
updateTimer(); // Инициализация при загрузке



$('#cracker').hover( function() {
  $('.hover-me-text').stop(true, true).fadeToggle(300, "linear");
});

