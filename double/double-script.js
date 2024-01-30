const materi            = document.querySelectorAll('.materi');
const asideBox          = document.querySelector('.aside');
const showAside         = document.querySelector('.show-aside');
const asideSubBtn       = document.querySelectorAll('.aside-content .pilih-daftar li button');
const asideLiBtn        = document.querySelectorAll('.aside-content .daftar li button');
const asideExitBtn      = document.querySelectorAll('.aside-content .exit');
const mainBox           = document.querySelector('.main');
const mainLogo          = document.querySelector('.main-content .logo');
const hiddenCodeBox     = document.querySelectorAll('.hiddenCode');
const hiddenCodeBtn     = document.querySelectorAll('button[name=hiddenCode]');
const hideCode          = document.querySelectorAll('.hide-code');
const hiddenTextBtn     = document.querySelectorAll('.hiddenTextBtn');
const hiddenText        = document.querySelectorAll('.hiddenText');
const kotakPilihDaftar  = document.querySelector('.aside-content .pilih-daftar');
const kotakDaftar       = document.querySelectorAll('.aside-content .daftar');
const resizeIcon        = document.querySelector('.resize-font');
const sizeOption        = document.querySelectorAll('.item-size');

// Window reload
window.addEventListener('resize', function() {
    this.window.location.reload();
});

// Show selected page
function showPage(pageNumber) {
    if (window.innerWidth <= 768) {
        asideBox.style.transform = 'translateX(-100vw)';
    }
    mainLogo.classList.add('hide');
    materi.forEach((e) => e.classList.add('hide'));
    materi[pageNumber-1].classList.remove('hide');
    asideLiBtn.forEach((e) => e.style.background = 'var(--grey3)');
    asideLiBtn[pageNumber-1].style.background = 'var(--grey1)';
}

// Animate aside buttons, logo, and corner icons
window.addEventListener('load', () => {
    asideLiBtn.forEach((button) => button.style.transform = 'translateX(0)');
    asideExitBtn.forEach((button) => button.style.transform = 'translateX(0)');
    asideSubBtn.forEach((button, index) => {
        setTimeout(() => {
            button.style.transform = 'translateX(0)';
        }, index * 100);
    });
    setTimeout(() => {
        mainLogo.style.transform = 'translateX(0)';
    }, 1000);
    setTimeout(() => {
        showAside.style.transform = 'translateX(0)';
        resizeIcon.style.transform = 'translateX(0)';
    }, 200);
});

// Show aside box
showAside.addEventListener('click', () => {
    asideBox.style.transform = 'translateX(0)';
})

// Show hidden code
hiddenCodeBtn.forEach((button, index) => {
    button.addEventListener('click', () => {
        hiddenCodeBtn.forEach((btn) => btn.classList.remove('btn-primary', 'text-white'));
        hiddenCodeBtn[index].classList.add('btn-primary', 'text-white');
        hiddenCodeBox.forEach((box) => box.classList.add('hide'));
        hiddenCodeBox[index].classList.remove('hide');
        setTimeout(() => {
            hideCode[index].style.transform = 'translateX(0)';
        }, 200);
    })
});

// Hide hidden code
hideCode.forEach((button) => {
    button.addEventListener('click', () => {
        hideCode.forEach((icon) => icon.style.transform = 'translateX(100vw)');
        hiddenCodeBox.forEach((box) => box.classList.add('hide'));
    })
});

// Show hidden Text
hiddenTextBtn.forEach((button, index) => {
    button.addEventListener('click', () => {
        if (hiddenText[index].classList.contains('hide')) {
            hiddenText.forEach((box) => box.classList.add('hide'));
            hiddenTextBtn.forEach((btn) => {
                btn.classList.remove('text-secondary');
                btn.innerHTML = 'baca selengkapnya';
            });
            hiddenText[index].classList.remove('hide');
            hiddenTextBtn[index].classList.add('text-secondary');
            hiddenTextBtn[index].innerHTML = 'sembunyikan';
        } else {
            hiddenText[index].classList.add('hide');
            hiddenTextBtn[index].classList.remove('text-secondary');
            hiddenTextBtn[index].innerHTML = 'baca selengkapnya';
        }
    })
})

// Pilih daftar
function pilihDaftar(daftarKe) {
    kotakDaftar.forEach((daftar) => {
        daftar.classList.add('hide');
    })
    kotakDaftar[daftarKe-1].classList.remove('hide');
    kotakPilihDaftar.classList.add('hide');
}

// Tutup Daftar
function closeDaftar() {
    window.location.reload();
}

// Resize icon
resizeIcon.addEventListener('click', () => {
    sizeOption.forEach((option, index) => {
        setTimeout(() => {
            option.classList.toggle('translateX');
        }, 200 * index);
    });
});

// Resize font
function resizeFont(size) {
    document.querySelectorAll('p').forEach((text) => text.style.fontSize = size + 'px');
    document.querySelectorAll('li').forEach((text) => text.style.fontSize = size + 'px');
    document.querySelectorAll('pre').forEach((text) => text.style.fontSize = (size - 2) + 'px');
}

sizeOption.forEach((option, index) => {
    option.addEventListener('click', () => {
        sizeOption.forEach((e) => e.classList.remove('active-size'));
        sizeOption[index].classList.add('active-size');
    });
});

// Animate hiding corner icon on window scroll
mainBox.addEventListener('scroll', () => {
    showAside.style.transform = 'translateX(-100vw)';
    resizeIcon.style.transform = 'translateX(100vw)';
    setTimeout(() => {
        showAside.style.transform = 'translateX(0)';
        resizeIcon.style.transform = 'translateX(0)';
    }, 2000);
});



