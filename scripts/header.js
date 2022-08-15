const headerListBlock = document.querySelector('.header-list')
export const burgerBtn = document.querySelector('.burger-menu')

export const drawNavigationElements = (array) => {
    headerListBlock.innerHTML = array.map(item => {
        return (
            `<li class="header-list-item">
                <a class="navLink" href="#${item.id}">${item.name}</a>
            </li>`
        )
    }).join('')
}

export const mobileNavigationBlock = document.getElementById('mobile-navigation')

export const drawMobileNavigationElements = (array) => {
    mobileNavigationBlock.innerHTML = array.map(item => {
        return (
            `<li>
                <a class="navLink" href="#${item.id}">${item.name}</a>
            </li>`
        )
    }).join('')
}

export const setOnClickBurgerBtn = () => {
    return burgerBtn.addEventListener('click', () => {
        burgerBtn.classList.toggle('active')
        mobileNavigationBlock.classList.toggle('visible')
    })
}
