const countdown = document.getElementById("countdown");
const deadline = new Date("July 22, 2023 00:00:00 GMT-03:00").getTime();

const x = setInterval(() => {
  const now = new Date().getTime();
  const diff = deadline - now;
  const d = Math.floor(diff / (1000 * 60 * 60 * 24));
  const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  countdown.innerHTML = `${d} dias, ${h} horas e ${m} minutos`;
  // upon reaching the deadline
  if (diff <= 0) {
    clearInterval(x);
    countdown.innerHTML = "Tempo esgotado!";
  }
}, 1000);
