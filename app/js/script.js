const darkButton = document.getElementById('dark');
const lightButton = document.getElementById('light');

const setColorMode = () => {
    if (localStorage.getItem('colorMode') == 'dark') {
        setDarkMode();
        darkButton.checked = true;
    } else if (localStorage.getItem('colorMode') == 'light') {
        setLightMode();
        lightButton.checked = true;
    }
}
const checkMode = () => {
    if (localStorage.getItem('colorMode') == null) {
        if (window.matchMedia("(prefers-color-scheme:light)").matches) {
            lightButton.checked = true;
        } else if (window.matchMedia("(prefers-color-scheme:dark)").matches) {
            darkButton.checked = true;
        }
    }

}
const checkModeChange = () => {
    window.matchMedia("(prefers-color-scheme:light)").addEventListener('change', event => {
        checkMode();
    })
}

const setLightMode = () => {
    document.querySelector('body').classList = 'light';
}
const setDarkMode = () => {
    document.querySelector('body').classList = 'dark';
}
setColorMode();
checkModeChange();
const radioButtons = document.querySelectorAll('.toggle__wrapper input');
for (let i = 0; i < radioButtons.length; i++) {
    radioButtons[i].addEventListener('click', (event) => {
        if (darkButton.checked) {
            localStorage.setItem('colorMode', 'dark');
            setDarkMode();
        } else {
            localStorage.setItem('colorMode', 'light');
            setLightMode();
        }
    })
}

