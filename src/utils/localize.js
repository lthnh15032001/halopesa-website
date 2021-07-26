import i18next from 'i18next'


export const changeLocalize = (lang) => {
    if (lang) {
        i18next.changeLanguage(lang, (err, t) => {
            if (err) return console.log('something went wrong loading', err);
            typeof window !== 'undefined' && localStorage.setItem('lng', lang)
        });
    } else {
        if (getCurrentLocale() === "en") {
            i18next.changeLanguage("vi", (err, t) => {
                if (err) return console.log('something went wrong loading', err);
                typeof window !== 'undefined' && localStorage.setItem('lng', "vi")
            });
        } else {
            i18next.changeLanguage("en", (err, t) => {
                if (err) return console.log('something went wrong loading', err);
                typeof window !== 'undefined' && localStorage.setItem('lng', "en")
            });
        }
    }
}

export const getCurrentLocale = () => {
    return typeof window !== 'undefined' && localStorage.getItem('lng')
}