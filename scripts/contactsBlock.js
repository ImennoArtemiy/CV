const contactItemsBlock = document.querySelector('.contacts-items')
const contactLinksBlock = document.querySelector('.contact-links')

export const drawContactItem = (array) => {
    contactItemsBlock.innerHTML = array.map(item => {
        return (
            `<div class="contact-item">
                <p class="contact-item-name">${item.name}</p>
                <a class="contact-item-link" href="${item.href}">${item.value}</a>
             </div>
`
        )
    }).join('')
}

export const drawContactLink = (array) => {
    contactLinksBlock.innerHTML = array.map(item => {
        return (
            `<a href=${item.link} target="_blank">
                <img class="contact-link-img" src=${item.img} alt=${item.alt}>
            </a>`
        )
    }).join('')
}
