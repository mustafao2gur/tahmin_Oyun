let secNumber = Math.trunc(Math.random() * 1000) + 1;
console.log(secNumber);
let sum = 0;
let score = 10;
let bod = document.querySelector("body");
const tahmin = document.querySelector(".tahmin");
const massage = function (tahmin) {
  document.querySelector(".tahmin").textContent = tahmin;
};
document.querySelector(".check").addEventListener("click", () => {
  const guess = +document.querySelector(".guess").value;
  if (guess < 1 || guess > 1000) {
    alert("1-1000 arasında bir sayi giriniz");
  } else if (!guess) {
    massage("lütfen tahminde bulununuz");
  } else if (guess === secNumber) {
    massage("Tebrikler");
          document.querySelector(".check").disabled = true;
  } else if (guess !== secNumber) {
    if (score > 1) {
      massage(
        guess > secNumber
          ? "düşük bir tahminde bulunmak ister misin"
          : "bence tahminini yükseltmelisin"
      );
      sum++;
      score--;
      document.querySelector(".score").textContent = score;
      document.querySelector(".attempt").textContent = sum;
      if (sum === 9) {
        document.querySelector(".last").classList.remove("hidden");
      }
    }else {
      bod.style.backgroundImage =
        "url(https://img.piri.net/mnresize/840/-/resim/imagecrop/2021/10/12/03/27/resized_faf62-a879e5513.jpg)";
      massage("Kaybettiniz");
      document.querySelector(".score").textContent = 0;
      document.querySelector(".attempt").textContent = 10;
      document.querySelector(".last").classList.add("hidden");
      document.querySelector(".check").disabled = true;
      document.querySelector(".again").classList.toggle("hidden");
      document.querySelector(".again").addEventListener("click", () => {
        window.location.reload();
      } );
    }
  }
});



// const git = document.querySelector(".div1");
// git.addEventListener("click",()=>{

// document.querySelector(".div1").classList.add("hidden")
// // document.querySelector(".div1").classList.add(".Bg")

// })