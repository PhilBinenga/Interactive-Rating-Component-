const mainContainer = document.querySelector(".main-container")
const thanksContainer = document.querySelector(".thank-you")
const submitButton = document.getElementById("submit")
const rateAgain = document.getElementById("rate-again")
const rating = document.getElementById("rating")
const rates = document.querySelectorAll(".btn")

submitButton.addEventListener("click", () => {
  mainContainer.style.display = "none"
  thanksContainer.classList.remove("hidden")
})

rateAgain.addEventListener("click", () => {
  mainContainer.style.display = "block"
  thanksContainer.classList.add("hidden")
})

rates.forEach((rate) => {
    rate.addEventListener("click", () => {
      rating.innerHTML = rate.innerHTML
  })
})