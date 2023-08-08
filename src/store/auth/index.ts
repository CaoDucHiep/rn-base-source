import { createSlice } from '@reduxjs/toolkit'

type DarkProps<T> = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  [K in keyof T]: K extends `${infer Prefix}_dark` ? K : never
}[keyof T]

type PropsWithoutDark<T> = Omit<T, DarkProps<T>>

export type AuthState = {
  username: string
  password: string
}

type AuthPayload = {
  payload: Partial<AuthState>
}

const slice: any = createSlice({
  name: 'auth',
  initialState: { username: '', password: '' } as AuthState,
  reducers: {
    login: (state, { payload: { username, password } }: AuthPayload) => {
      if (username) {
        state.username = username
      }
      if (password) {
        state.password = password
      }
    },
    logout: (state, { payload: { username, password } }: AuthPayload) => {
      if (username) {
        state.username = username
      }
      if (password) {
        state.password = password
      }
    }
  }
})

export const { login, logout } = slice.actions

export default slice.reducer
