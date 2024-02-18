const hsHideCode        = document.querySelector('.hide-code');
const hsOptionIcon      = document.querySelector('.option-icon');
const hsOptionItem      = document.querySelectorAll('.option-item');
const hsHiddenCodeBox   = document.querySelector('.hiddenCodeBox');
const hsHiddenCode      = document.querySelectorAll('.hiddenCode');

// Animate icons on window load
window.addEventListener('load', () => {
    hsOptionIcon.style.transform = 'translateX(0)';
});

// Show option code link
hsOptionIcon.addEventListener('click', () => {
    const plusIcon = document.querySelector('.fa-plus');
    plusIcon.classList.toggle('rotate');
    hsOptionItem.forEach((item, index) => {
        setTimeout(() => {
            item.classList.toggle('tx-plus');
        }, 200 * index);
    });
});

// Show hidden code box
hsOptionItem.forEach((item, index) => {
    item.addEventListener('click', () => {
        hsOptionItem.forEach((element) => element.classList.remove('active'));
        hsOptionItem[index].classList.add('active');
        hsHiddenCodeBox.classList.remove('hide');
        hsHiddenCode.forEach((code) => code.classList.add('hide'));
        hsHiddenCode[index].classList.remove('hide');
        setTimeout(() => {
            hsHiddenCodeBox.style.background = 'rgba(0, 0, 0, .5)';
            hsHiddenCode[index].style.background = 'var(--white)';
            hsHiddenCode[index].style.color = 'var(--grey3)';
        }, 200);
        setTimeout(() => {
            hsHideCode.style.transform = 'translateX(0)';
        }, 400);
    });
});

// Hide hidden code box
hsHideCode.addEventListener('click', () => {
    hsOptionItem.forEach((element) => element.classList.remove('active'));
    hsHideCode.style.transform = 'translateX(100vw)';
    setTimeout(() => {
        hsHiddenCode.forEach((code) => {
            code.style.background = 'transparent';
            code.style.color = 'transparent';
        });
        hsHiddenCodeBox.style.background = 'transparent';
        hsOptionItem.forEach((item, index) => {
            setTimeout(() => {
                item.classList.add('tx-plus');
            }, 200 * index);
        });
    }, 200);
    setTimeout(() => {
        hsHiddenCode.forEach((code) => {
            code.classList.add('hide');
            code.classList.remove('wide');
        });
        hsHiddenCodeBox.classList.add('hide');
    }, 800);
});

// Fullscreen code box
hsHiddenCode.forEach((box) => {
    box.addEventListener('dblclick', () => {
        box.classList.toggle('wide');
    })
})



