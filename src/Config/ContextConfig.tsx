import React from 'react'

export const AppContext = React.createContext({
  changeToEn: () => {},
  changeToVi: () => {},
  changeToLight: () => {},
  changeToDark: () => {}
})

function AppContextProvider({ children }: any) {
  return (
    <AppContextProvider
      value={{
        theme: undefined,
        changeToEn: undefined,
        changeToLight: undefined,
        changeToDark: undefined
      }}
    >
      {children}
    </AppContextProvider>
  )
}

export default AppContextProvider
