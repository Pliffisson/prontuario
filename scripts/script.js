const cards = document.querySelectorAll(".items-grid li")

for(const card of cards){
    card.addEventListener("click", cardSelected)
}

let selectedCards = []

function cardSelected(event) {
    const cardLi = event.target
    const cardId = cardLi.dataset.id

    cardLi.classList.toggle("selected")
} 

