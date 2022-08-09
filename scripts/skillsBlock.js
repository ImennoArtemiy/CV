import {skillsData} from "./data.js";

export const skillsBodyBlock = document.querySelector('.skills-body')
const arrowDownBtn = document.querySelector('.arrow-down-link')
let openSkills = false;

export const drawSkillCard = (array) => {
    skillsBodyBlock.innerHTML = array.map(item => {
        return (
            `<div class="skills-card">
                <img class="skills-icon" src="./img/icons/${item.imgUrl}.png" alt="${item.name}">
                <p class="skills-name">${item.name}</p>
            </div>`
        )
    }).join('')
}

const handleClickArrow = () => {
    !openSkills ? arrowDownBtn.classList.add('rotate-180') : arrowDownBtn.classList.remove('rotate-180')
    !openSkills ? openSkills = true : openSkills = false
    !openSkills ? drawSkillCard(skillsData.slice(0, 6)) : drawSkillCard(skillsData)
    skillsBodyBlock.classList.toggle('-showAll')
    skillsBodyBlock.scrollTop = skillsBodyBlock.scrollHeight
    !openSkills
        ?
        arrowDownBtn.setAttribute('href', '#skills')
        :
        arrowDownBtn.setAttribute('href', '#skills-title')
}

export const setOnClickArrowBtn = () => {
    return arrowDownBtn.addEventListener('click', handleClickArrow)
}
