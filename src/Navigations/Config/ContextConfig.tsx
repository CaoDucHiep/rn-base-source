import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getLanguage, setLanguage } from '@/Language/action'
import { english } from '@/Language/eng'
import { vietnamese } from '@/Language/vie'
import { getTheme, setTheme } from '@/Theme/action'
import { dark } from '@/Theme/Dark'
import { light } from '@/Theme/Light'

export const AppContext = React.createContext({
  language: vietnamese,
  theme: light,
  changeToEn: () => {},
  changeToVi: () => {},
  changeToLight: () => {},
  changeToDark: () => {}
})

function AppContextProvider({ children, language, theme, onGetLanguage, onSetLanguage, onGetTheme, onSetTheme }: any) {
  const [userLanguage, setUserLanguage] = useState<any>(vietnamese)
  const [userTheme, setUserTheme] = useState<any>(light)

  useEffect(() => {
    onGetLanguage()
    onGetTheme()
  }, [])

  useEffect(() => {
    switch (language) {
      case 'vi':
        return setUserLanguage(vietnamese)
      case 'en':
        return setUserLanguage(english)
      default:
        return setUserLanguage(vietnamese)
    }
  }, [language])

  useEffect(() => {
    switch (theme) {
      case 'light':
        return setUserTheme(light)
      case 'dark':
        return setUserTheme(dark)
      default:
        return setUserTheme(light)
    }
  }, [theme])

  const _changeToVi = () => {
    setUserLanguage(vietnamese)
    onSetLanguage('vi')
  }

  const _changeToEn = () => {
    setUserLanguage(english)
    onSetLanguage('en')
  }

  const _changeToLight = () => {
    setUserTheme(light)
    onSetTheme('light')
  }

  const _changeToDark = () => {
    setUserTheme(dark)
    onSetTheme('dark')
  }

  return (
    <AppContext.Provider
      value={{
        language: userLanguage,
        theme: userTheme,
        changeToVi: _changeToVi,
        changeToEn: _changeToEn,
        changeToLight: _changeToLight,
        changeToDark: _changeToDark
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

const mapStateToProps = ({ languageStore, themeStore }: any) => {
  return {
    language: languageStore.language,
    theme: themeStore.theme
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    onGetLanguage: bindActionCreators(getLanguage, dispatch),
    onSetLanguage: bindActionCreators(setLanguage, dispatch),
    onGetTheme: bindActionCreators(getTheme, dispatch),
    onSetTheme: bindActionCreators(setTheme, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContextProvider)
