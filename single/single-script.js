const materi        = document.querySelectorAll('.materi');
const asideBox      = document.querySelector('.aside');
const showAside     = document.querySelector('.show-aside');
const asideBtn      = document.querySelectorAll('.aside-content button');
const mainBox       = document.querySelector('.main');
const mainLogo      = document.querySelector('.main-content .logo');
const hiddenCodeBox = document.querySelectorAll('.hiddenCode');
const hiddenCodeBtn = document.querySelectorAll('button[name=hiddenCode]');
const hideCode      = document.querySelectorAll('.hide-code');
const codeBox       = document.querySelectorAll('.code-box');
const hiddenTextBtn = document.querySelectorAll('.hiddenTextBtn');
const hiddenText    = document.querySelectorAll('.hiddenText');
const resizeIcon    = document.querySelector('.resize-font');
const sizeOption    = document.querySelectorAll('.item-size');

// Window reload
window.addEventListener('resize', function() {
    this.window.location.reload();
});

// Show selected page
function showPage(pageNumber) {
    let index = pageNumber - 1;
    if (window.innerWidth <= 768) {
        asideBox.style.transform = 'translateX(-100vw)';
    }
    mainLogo.classList.add('hide');
    asideBtn.forEach((btn) => btn.style.removeProperty('background'));
    asideBtn[index].style.background = 'var(--grey1)';
    materi.forEach((box) => {
        box.classList.add('hide');
        box.removeAttribute('id');
    });
    materi[index].classList.remove('hide');
    materi[index].setAttribute('id', index);
    materi[index].scrollIntoView();
}

// Animate aside buttons, logo, and corner icons
window.addEventListener('load', () => {
    asideBtn.forEach((button, index) => {
        setTimeout(() => {
            button.style.transform = 'translateX(0)';
        }, index * 100);
    });
    setTimeout(() => {
        mainLogo.style.transform = 'scale(1)';
    }, 1000);
    setTimeout(() => {
        showAside.style.transform = 'translateX(0)';
        resizeIcon.style.transform = 'translateX(0)';
    }, 200);
});

// Show aside box
showAside.addEventListener('click', () => {
    if (window.innerWidth <= 768) {
        asideBox.style.transform = 'translateX(0)';
    }
});

// Show hidden code
hiddenCodeBtn.forEach((button, index) => {
    button.addEventListener('click', () => {
        hiddenCodeBtn.forEach((btn) => btn.classList.remove('btn-primary', 'text-white'));
        hiddenCodeBtn[index].classList.add('btn-primary', 'text-white');
        hiddenCodeBox.forEach((box) => box.classList.add('hide'));
        hiddenCodeBox[index].classList.remove('hide');
        setTimeout(() => {
            hiddenCodeBox[index].style.background = 'rgba(0, 0, 0, .5)';
        }, 200);
        setTimeout(() => {
            codeBox[index].style.transform = 'translate(-50%, -50%)';
        }, 400);
        setTimeout(() => {
            hideCode[index].style.transform = 'translateX(0)';
        }, 600);
    })
});

// Fullscreen code box
codeBox.forEach((box) => {
    box.addEventListener('dblclick', () => {
        box.classList.toggle('wide');
    });
});

// Hide hidden code
hideCode.forEach((button, index) => {
    button.addEventListener('click', () => {
        hideCode[index].style.transform = 'translateX(100vw)';
        setTimeout(() => {
            codeBox[index].style.transform = 'translate(-200%, -50%)';
        }, 200);
        setTimeout(() => {
            hiddenCodeBox[index].style.background = 'transparent';
        }, 400);
        setTimeout(() => {
            hiddenCodeBox.forEach((box) => box.classList.add('hide'));
            codeBox.forEach((box) => box.classList.remove('wide'));
        }, 600);
    })
});

// Show hidden Text
hiddenTextBtn.forEach((button, index) => {
    button.addEventListener('click', () => {
        hiddenTextBtn.forEach((btn) => btn.classList.remove('text-secondary'));
        if(hiddenText[index].classList.contains('hide')) {
            hiddenTextBtn[index].classList.add('text-secondary');
            hiddenText[index].classList.remove('hide');
            hiddenText[index].style.height = hiddenText[index].scrollHeight + 16 + 'px';
            hiddenText[index].style.padding = '.5rem 0';
            hiddenText.forEach((kotak) => {
                if(kotak !== hiddenText[index]) {
                    kotak.style.height = '0';
                    kotak.style.padding = '0';
                    setTimeout(() => {
                        kotak.classList.add('hide');
                    }, 500);
                }
            });
        } else {
            hiddenTextBtn[index].classList.remove('text-secondary');
            hiddenText[index].style.height = '0';
            hiddenText[index].style.padding = '0';
            setTimeout(() => {
                hiddenText[index].classList.add('hide');
            }, 500);
        }
    });
});

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
    document.querySelectorAll('dd').forEach((text) => text.style.fontSize = size + 'px');
    document.querySelectorAll('td').forEach((text) => text.style.fontSize = size + 'px');
    document.querySelectorAll('h6').forEach((text) => text.style.fontSize = size + 'px');
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
    }, 1000);
});

// Italic font style
document.querySelectorAll('h2').forEach((title) => {
    title.addEventListener('dblclick', () => {
        mainBox.classList.toggle('italic');
        if (mainBox.classList.contains('italic')) {
            document.querySelector('*').style.fontStyle = 'italic';
        } else {
            document.querySelector('*').style.fontStyle = 'normal';
        }
    });
});



