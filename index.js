import {
    contactsLinksData, contactsData,
    educationData,
    languages,
    navigationData,
    skillsData,
    workExperienceData
} from "./scripts/data.js";
import {drawMobileNavigationElements, drawNavigationElements, setOnClickBurgerBtn} from "./scripts/header.js";
import {drawSkillCard, setOnClickArrowBtn} from "./scripts/skillsBlock.js";
import {drawWorkExperiencePost} from "./scripts/workExpBlock.js";
import {drawEducationPost} from "./scripts/educationBlock.js";
import drawLanguageCard from "./scripts/languagesBlock.js";
import {drawContactItem, drawContactLink} from "./scripts/contactsBlock.js";

$('.single-slide').slick({
    infinite: true,
    dots: true,
    arrows: false
});

// Header
drawNavigationElements(navigationData)

const navigationElements = Array.from(document.getElementsByClassName('navLink'))
const addActiveClassInNavigation = (i) => {
    navigationElements[i].classList.add('-activeLink')
}
const removeActiveClassInNavigation = () => {
    navigationElements.map(i => i.classList.remove('-activeLink'))
}

addActiveClassInNavigation(0)

window.addEventListener('scroll', function () {
    const headerH = document.getElementById('header').clientHeight
    const aboutH = document.getElementById('about').clientHeight
    const skillsH = document.getElementById('skills').clientHeight
    const workExH = document.getElementById('work-experience').clientHeight
    const projectH = document.getElementById('projects').clientHeight
    const educationH = document.getElementById('education').clientHeight
    const languageH = document.getElementById('languages').clientHeight

    if (pageYOffset < (aboutH + headerH)) {
        removeActiveClassInNavigation()
        addActiveClassInNavigation(0)
    }
    if (pageYOffset > aboutH - headerH) {
        removeActiveClassInNavigation()
        addActiveClassInNavigation(1)
    }
    if (pageYOffset > aboutH + skillsH - headerH) {
        removeActiveClassInNavigation()
        addActiveClassInNavigation(2)
    }
    if (pageYOffset > aboutH + skillsH + workExH - headerH) {
        removeActiveClassInNavigation()
        addActiveClassInNavigation(3)
    }
    if (pageYOffset > aboutH + skillsH + workExH + projectH - headerH) {
        removeActiveClassInNavigation()
        addActiveClassInNavigation(4)
    }
    if (pageYOffset > aboutH + skillsH + workExH + projectH + educationH - headerH) {
        removeActiveClassInNavigation()
        addActiveClassInNavigation(5)
    }
    if (pageYOffset > aboutH + skillsH + workExH + projectH + educationH + languageH - headerH) {
        removeActiveClassInNavigation()
        addActiveClassInNavigation(6)
    }
});

setOnClickBurgerBtn()
drawMobileNavigationElements(navigationData)
//Skills
drawSkillCard(skillsData.slice(0, 6))
setOnClickArrowBtn()
// WorkExperience
drawWorkExperiencePost(workExperienceData)
//Education
drawEducationPost(educationData)
// Languages
drawLanguageCard(languages)
// Contacts
drawContactItem(contactsData)
drawContactLink(contactsLinksData)
