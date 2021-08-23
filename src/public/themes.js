const THEME = 'theme';
const THEME_LIGHT = 'theme-light';
const THEME_DARK = 'theme-dark';

function setTheme(themeName) {
    localStorage.setItem(THEME, themeName);
    document.documentElement.className = themeName;
}

function keepTheme() {
    if (localStorage.getItem(THEME)) {
        if (localStorage.getItem(THEME) === THEME_DARK) {
            setTheme(THEME_DARK);
        } else if (localStorage.getItem(THEME) === THEME_LIGHT) {
            setTheme(THEME_LIGHT);
        }
    } else {
        setTheme(THEME_DARK);
    }
}

function isDarkModeEnabled() {
    return localStorage.getItem(THEME) === THEME_DARK;
}

function toggleTheme() {
    if (localStorage.getItem(THEME) === THEME_DARK) {
        setTheme(THEME_LIGHT);
        return THEME_LIGHT;
    } else {
        setTheme(THEME_DARK);
        return THEME_DARK;
    }
}

module.exports = {
    setTheme,
    keepTheme,
    isDarkModeEnabled,
    toggleTheme,
    THEME_LIGHT,
    THEME_DARK
}
