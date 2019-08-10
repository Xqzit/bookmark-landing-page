const hamBtn = document.querySelector('.ham-btn')
const tabTitles = document.querySelectorAll('.tab-titles a');
const tabs = document.querySelectorAll('.tab-container');
const question = document.querySelectorAll('.question a');
const answer = document.querySelectorAll('.answer');
const email = document.querySelector('#email');
const re = /^[A-Za-z0-9._+%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
const contactBtn = document.querySelector('.contact-btn')
console.log();
hamBtn.addEventListener('click', function (e) {
    hamBtn.parentElement.parentElement.classList.toggle('overlay');
    if (hamBtn.parentElement.parentElement.className == 'overlay') {
        e.target.src = './images/icon-close.svg';
        hamBtn.previousElementSibling.style.fill = "white";
        hamBtn.parentElement.nextElementSibling.style.display = 'flex';
    } else {
        e.target.src = './images/icon-hamburger.svg';
        hamBtn.previousElementSibling.style.fill = "black";
        hamBtn.parentElement.nextElementSibling.style.display = 'none';
    }
    e.preventDefault();
});


// Tab Section
tabTitles.forEach(title => title.addEventListener('click', function (e) {
    let elems = document.querySelector('.current');
    if (elems !== null) {
        elems.classList.remove("current");
    }
    e.target.classList.add('current');
    tabs.forEach(el => {
        if (title['hash'] == `#${el['id']}`) {
            document.getElementById(el['id']).style.display = 'flex';
        } else {
            document.getElementById(el['id']).style.display = 'none';
        }

    });
    e.preventDefault();
}));
// for tablet and above resolutions
if (window.innerWidth > 600) {
    document.getElementById('tab-1').style.display = 'flex';
    document.querySelector('.tab-titles').firstElementChild.classList.add('current');
}
// faq
question.forEach(ele => ele.addEventListener('click', function (e) {
    let elem = document.querySelector('.active');
    if (elem !== null) {
        elem.classList.remove('active')
    }
    e.target.classList.add('active');
    answer.forEach(el => {
        if (ele['hash'] == `#${el['id']}`) {
            document.getElementById(el['id']).style.display = 'flex';
        } else {
            document.getElementById(el['id']).style.display = 'none';
        }
    });
    e.preventDefault();
}));

// Contact us

contactBtn.addEventListener('click', function (e) {
    if (email.value !== '' || email.value !== null) {
        if (!re.test(email.value)) {
            email.placeholder = 'email@example.com';
            email.style.background = "url(./images/icon-error.svg) no-repeat 95% 35%";
            email.style.backgroundColor = 'white';
            email.style.border = '1px solid hsl(0, 94%, 66%)';
            email.nextElementSibling.style.display = 'flex';
        } else {
            email.style.border = '1px solid #00cc66';
            email.nextElementSibling.style.backgroundColor = '#00cc66';
            email.nextElementSibling.textContent = "Thank you!";
            email.nextElementSibling.style.display = 'flex';
            email.style.backgroundImage = 'none';
            email.style.color = 'black';
        }
    }
});