
$(document).ready(function () {
    $('.slider').slick({
        autoplay: true,
        autoplaySpeed: 4000,
        infinite: true,
        fade: true,
        arrows: true,
        pauseOnFocus: false,
        pauseOnHover: false
    }
    );
});

const popupLinks = document.querySelectorAll('.popup-link');
const body = document.querySelector('body');
const lockPadding = document.querySelectorAll("lock-padding");

let unlock = true;

const timeout = 800;

if (popupLinks.length > 0) {
    for (let index = 0; index < popupLinks.length; index++) {
        const popuplink = popuLinks[index];
        popupLink.addEventListener("click", function (e) {
            const popupName = popupLink.getAttribute('href').replace('#', '');
            const curentPopup = document.getElementById(popupName);
            popupOpen(curentPopup);
            e.preventDefault();

        });

    }

}

const popupCloseIcon = document.querySelectorAll('.close-popup');
if (popupCloseIcon.length > 0) {
    for (let index = 0; index < popupCloseIcon; index++) {
        const el = popupCloseIcon[index];
        el.addEventListener('click', function (e) {
            popupClose(el.closest('.popup'));
            e.preventDefault();
        });

    }
}

function popupOpen(curentPopup) {
    if (curentPopup && unlock) {
        const PopupActive = document.querySelector('.popup.open');
        if (PopupActive) {
            popupClose(PopupActive, false);
        }
        else {
            bodyLock();
        }
        curentPopup.classList.add('open');
        curentPopup.classList.addEventListener("click", function (e) {
            if (!e.target.closest('.popup-content')) {
                popupClose(e.target.closest('.popup'));
            }
        })
    }
}

function bodyLock() {
    const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
    for (let index = 0; index < lockPadding.length; index++) {
        const el = lockPadding[index];
        el.style.paddingRight = lockPaddingValue;
    }
    body.style.paddingRight = lockPaddingValue;
    body.classList.add('lock');
    unlock = false;
    setTimeout(function () {
        unlock = true;
    }, timeout);

}
function bodyUnlock() {
    setTimeout(function () {
        for (let index = 0; index < lockPadding.length; index++) {
            const el = lockPadding[index];
            el.style.paddingRight = '0px';
        }
        body.style.paddingRight = '0px';
        body.classList.remove('lock');
    }, timeout);
    unlock = false;
    setTimeout(function () {
        unlock = true;
    }, timeout);
}

// const openPopUp = document.getElementById('.open');
// const closePopUp = document.getElementById('close-popup');
// const popUp = document.getElementById('pop_up');

// openPopUp.addEventListener('click', function (e) {
//     e.preventDefault();
//     popUp.classList.add('active');
// })
// closePopUp.addEventListener('click', () => {
//     popUp.classList.remove('active');
// });

