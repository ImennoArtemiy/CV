const languagesBodyBlock = document.querySelector('.languages-body')

const drawLanguageCard = (array) => {
    languagesBodyBlock.innerHTML = array.map(item => {
        return (
            `<div class="language-card">
                <img class="languages-flag" src="./img/flags/${item.name}.png" alt="${item.name} flag">
                <h3 class="languages-title">${item.name}</h3>
                <p class="languages-level">${item.level}</p>
            </div>`
        )
    }).join('')
}

export default drawLanguageCard
