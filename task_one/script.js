const learnMore = document.querySelector(".learn-more")
const hiddenText = document.querySelector(".hidden")

learnMore.addEventListener("click", () => {
    hiddenText.classList.toggle("active")
    learnMore.remove()
})