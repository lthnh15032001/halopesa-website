import React, { useEffect } from 'react'
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./data/en";
import vi from "./data/vi";
// import { getCurrentLocale } from '../utils/localize';

export const resources = {
    en,
    vi
};
const defaultLanguage = 'en'
const Localize = ({ children, lng }) => {
    i18n
        .use(initReactI18next) // passes i18n down to react-i18next
        .init({
            resources,
            lng: lng, // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
            // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
            // if you're using a language detector, do not define the lng option

            interpolation: {
                escapeValue: false // react already safes from xss
            }
        });
    useEffect(() => {
        checkLocalizeStorage();
    }, [])
    const checkLocalizeStorage = () => {
        const lng = localStorage.getItem('lng')
        if (lng) {
            console.log(lng)
        } else {
            localStorage.setItem('lng', defaultLanguage)
        }
    }

    return (
        <>
            {children && children}
        </>
    )
}

export default Localize;