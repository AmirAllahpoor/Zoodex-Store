let $ = document
const overlay= $.querySelector('.overlay-page')
const iconnavbarmobile = $.querySelector('.bxmenu')
const navbarmobile = $.querySelector('.navbar-Mobile')
const iconbacknavbar = $.querySelector('.iconback')

// Navbar Mobile 

const OpenNavbarMenu = () => {
    overlay.classList.add('active')
    navbarmobile.classList.add('active')
}

const CloseNavbarMenu = () => {
    navbarmobile.classList.remove('active')
    setTimeout(() => {
        overlay.classList.remove('active')
    }, 300);
}

iconnavbarmobile.addEventListener('click' , OpenNavbarMenu)
iconbacknavbar.addEventListener('click' , CloseNavbarMenu)

// SearchBox

let suggestions = [
    "پیتزا مینی",
    "همبرگر",
    "اسنک",
    "پاستا",
    "ناگت",
    "سیب زمینی سرخ کرده",
    "مرغ سوخاری",
    "هات داگ",
    "ساندویچ مرغ",
    "ساندویچ بندری",
    "پیتزا مخلوط",
    "چیز برگر",
    "سالاد یونانی",
    "سالاد سزار",
    "سوشی",
    "توت فرنگی",
    "تمشک",
    "کیوی",
    "شیرینی زبان",
    "شیرینی نون خامه ای",
    "شیرینی نخودچی",
    "خورشت قرمه سبزی",
    "خورشت قیمه",
    "برنج با مرغ",
    "ماکارانی",
    "خوراک لوبیا",
    "نان سنگک",
    "نان لواش",
    "نان بربری",
    "نان باگت جو",
    "نان باگت شکلاتی",
]

let autoCompleteWrapper = $.querySelector('.search-input')
let searchInpueElem = $.querySelector('input')
let autoCompleteBox = $.querySelector('.autocom-box')
let searchbtn = $.querySelector('.searchbutton')
let searchbox = $.querySelector('.searchbox')
let iconbacksearchbox = $.querySelector('.searchbox .bx-x')
let bottomnavbarsearch = $.querySelector('.bottomnavbarsearch')

searchInpueElem.addEventListener('keyup', function () {
    let searchValue = searchInpueElem.value

    if (searchValue) {
        autoCompleteWrapper.classList.add('active')
        let filteredWords = suggestions.filter(function (word) {
            // return word.toLowerCase().includes(searchValue.toLowerCase())
            return word.toLowerCase().startsWith(searchValue.toLowerCase())
        })
 
       suggestionWordsGenerator(filteredWords)

    } else {
        autoCompleteWrapper.classList.remove('active')
    }
})


function suggestionWordsGenerator(wordsArray) {
    let listItemsArray = wordsArray.map(function (word) {
        return '<li>' + word + '</li>'
    })
    
    console.log(listItemsArray)

    let customListItem
    if (!listItemsArray.length) {
        customListItem = '<li>' + searchInpueElem.value + '</li>'
    } else {
        customListItem = listItemsArray.join('')
    }

    autoCompleteBox.innerHTML = customListItem
    select()
}

function select () {
    let allListItems = autoCompleteBox.querySelectorAll('li')
    allListItems.forEach(function (wordItem) {
        wordItem.addEventListener('click', function (event) {
            searchInpueElem.value = event.target.textContent
            autoCompleteWrapper.classList.remove('active')
        })
    })

}

const RunSearchBox = () => {
    overlay.classList.add('active')
    searchbox.classList.add('active')
}

const StopSearchBox = () => {
    setTimeout(() => {
        overlay.classList.remove('active')
    }, 300);
    searchbox.classList.remove('active')
}

searchbtn.addEventListener('click' , RunSearchBox)
bottomnavbarsearch.addEventListener('click' , RunSearchBox)
iconbacksearchbox.addEventListener('click' , StopSearchBox)

// LoginPanel

let iconbacklogin = $.querySelector('.loginpanel form .bx-x')
let loginpanel = $.querySelector('.loginpanel')
let loginbtn = $.querySelector('.loginbutton')
let bottomloginbtn = $.querySelector('.bottomnavbarlogin') 

const RunLoginPanel = () => {
    overlay.classList.add('active')
    loginpanel.classList.add('active')
}
const StopLoginPanel = () => {
    setTimeout(() => {
        overlay.classList.remove('active')
    }, 300);
    loginpanel.classList.remove('active')
}

loginbtn.addEventListener('click' , RunLoginPanel)
bottomloginbtn.addEventListener('click' , RunLoginPanel)
iconbacklogin.addEventListener('click' , StopLoginPanel)

// Product Cart

let iconopenproduct = $.querySelector('.cartbutton')
let iconopenproductbottom = $.querySelector('.bottomnavbarcart')
let iconbackproduct = $.querySelector('.ProductCart .rowbox .bxs-chevron-left')
let productcart = $.querySelector('.ProductCart')

const OpenProductCart = () => {
    overlay.classList.add('active')
    productcart.classList.add('active')
}

const CloseProductCart = () => {
    setTimeout(() => {
        overlay.classList.remove('active')
    }, 300);
    productcart.classList.remove('active')
}

iconopenproduct.addEventListener('click' , OpenProductCart)
iconopenproductbottom.addEventListener('click' , OpenProductCart)
iconbackproduct.addEventListener('click' , CloseProductCart)
