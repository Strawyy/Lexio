const homePage = document.getElementById('homePage')
const newFilePage = document.getElementById('newFilePage')
const searchPage = document.getElementById('searchPage')
const userPage = document.getElementById('userPage')

const menuBtn = document.getElementById('menuBtn')
const homeBtn = document.getElementById('homeBtn')
const newBtn = document.getElementById('newBtn')
const searchBtn = document.getElementById('searchBtn')
const userBtn = document.getElementById('userBtn')

const sidebar = document.getElementById('sidebar')
const openMenuText = document.getElementsByClassName('menuOpenedText')

const content = document.getElementById('content')

console.log(openMenuText)

let pagesName = ["homePage", "newFilePage", "searchPage", "userPage"]
let pages = [homePage, newFilePage, searchPage, userPage]

let menuState = false

function toNewFilePage() {
    newBtn.style.color = '#70A1D2'
    homeBtn.style.color = '#495C75'
    menuBtn.style.color = '#495C75'
    searchBtn.style.color = '#495C75'
    userBtn.style.color = '#495C75'

    content.style.paddingTop = "20px"

    for (let i = 0; i < pagesName.length; i++) {
        if (pagesName[i] == "newFilePage") {
            pages[i].style.display = "block"

        } else {
            pages[i].style.display = "none"
        }
    }
}

function toHomePage() {
    newBtn.style.color = '#495C75'
    homeBtn.style.color = '#70A1D2'
    menuBtn.style.color = '#495C75'
    searchBtn.style.color = '#495C75'
    userBtn.style.color = '#495C75'

    content.style.paddingTop = "60px"

    for (let i = 0; i < pagesName.length; i++) {
        if (pagesName[i] == "homePage") {
            pages[i].style.display = "block"
        } else {
            pages[i].style.display = "none"
        }
    }
}

function toSearchPage() {
    newBtn.style.color = '#495C75'
    homeBtn.style.color = '#495C75'
    menuBtn.style.color = '#495C75'
    searchBtn.style.color = '#70A1D2'
    userBtn.style.color = '#495C75'

    content.style.paddingTop = "60px"

    for (let i = 0; i < pagesName.length; i++) {
        if (pagesName[i] == "searchPage") {
            pages[i].style.display = "block"
        } else {
            pages[i].style.display = "none"
        }
    }
}

function toUserPage() {
    newBtn.style.color = '#495C75'
    homeBtn.style.color = '#495C75'
    menuBtn.style.color = '#495C75'
    searchBtn.style.color = '#495C75'
    userBtn.style.color = '#70A1D2'

    content.style.paddingTop = "60px"

    for (let i = 0; i < pagesName.length; i++) {
        if (pagesName[i] == "userPage") {
            pages[i].style.display = "block"
        } else {
            pages[i].style.display = "none"
        }
    }
}

function changeMenuState() {
    menuState = !menuState

    if (menuState) {
        sidebar.style.width = "560px"
        sidebar.style.alignItems = "start"
        sidebar.style.paddingLeft = "70px"

        menuBtn.style.color = '#70A1D2'

        for (let i = 0; i < openMenuText.length; i++) {
            openMenuText[i].style.display = "block"
        }
    } else {
        sidebar.style.width = "130px"
        sidebar.style.alignItems = "center"
        sidebar.style.paddingLeft = "0"

        menuBtn.style.color = '#495C75'

        for (let i = 0; i < openMenuText.length; i++) {
            openMenuText[i].style.display = "none"
        }
    }

    
}