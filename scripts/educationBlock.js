const educationBodyEl = document.querySelector('.education-body')

export const drawEducationPost = (array) => {
    educationBodyEl.innerHTML = array.map(item => {
        return (
            `<div class="education-post">
                <h3>${item.nameOfTheOrganization}</h3>
                <p class="date -gray-color">${item.date}</p>
                <p class="post-text -gray-color">${item.description}</p>
            </div>`
        )
    }).join('')
}
