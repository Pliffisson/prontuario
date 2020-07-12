const cards = document.querySelectorAll(".items-grid li")

for(const card of cards){
    card.addEventListener("click", cardSelected)
}

const collectedCards = document.querySelector("input[name=cards]")

let selectedCards = []

function cardSelected(event) {
    const cardLi = event.target
    const cardId = cardLi.dataset.id

    cardLi.classList.toggle("selected")

    const alreadySelected = selectedCards.findIndex( card => {
        const cardFound = card === cardId 
        return cardFound
    } )

    if(alreadySelected >= 0){
        const filteredCards = selectedCards.filter( card => {
            const cardIsDifferent = card != cardId
            return cardIsDifferent
        } )

        selectedCards = filteredCards
    } else {
        selectedCards.push(cardId)
    }

    collectedCards.value = selectedCards

} 

