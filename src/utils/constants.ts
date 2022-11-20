import moment from "moment-timezone";

export const SETTINGS_KEY = 'swiggUserSettings'


export enum AUTH_TYPES {
  google = 'google',
  metamask = 'metamask',
  guest = 'anonymous'
}
export interface UserSettings {
  id: string
  userWalletAddress?: string
  username: string
  avatar?: string
  email?: string
  bio?: string
  authType: string
  lastLoggedIn: string | Date | moment.Moment
  [key: string]: any
}
export interface UserAuthProviderValue {

  login: (type: string) => any
  logout: () => any
  signMessage: () => any
  saveSettings: (settings: any) => any
  resetSettings: () => any
  loading?: boolean
  settings?: UserSettings,
  walletAddress?: string,
  username?: string,
  id?: string,
  email?: string,
  isAuth: boolean,
  bio?: string
  authType: string
}