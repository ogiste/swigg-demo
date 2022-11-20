import {AUTH_TYPES, UserSettings} from "../../src/utils/constants";
import moment from "moment-timezone";

export interface EnvSwigg {
  apiUrl?: string
  defaultSettings?: UserSettings,
  isAuth: boolean
}

export const envConfig: EnvSwigg = {
  defaultSettings: {
    id: 'guestId',
    username: 'Anonymous',
    authType: undefined,
    lastLoggedIn: moment.tz(new Date(), 'Africa/Nairobi')
  },
  isAuth: false
}