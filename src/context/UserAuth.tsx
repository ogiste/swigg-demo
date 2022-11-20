import React, {
  createContext,
  ReactElement,
  ReactNode,
  useContext,
  useEffect,
  useRef,
  useState
} from 'react'
import firebase from "firebase/compat/app";
import {signInWithGoogle, signOut} from "../firebaseConfig";
import {useAccount, useConnect, useDisconnect} from "wagmi";
import moment from "moment-timezone";
import {AUTH_TYPES, SETTINGS_KEY, UserAuthProviderValue, UserSettings} from "../utils/constants";
import authButton from "../components/AuthButton";
import {envConfig} from "../environment/dev";



const UserAuthContext = createContext({} as UserAuthProviderValue)

function UserAuthProvider({children}){

  const {
    activeConnector,
    connect,
    data: connectData,
    connectors,
    error: connectError,
    isConnecting,
    isConnected,
    pendingConnector,
  } = useConnect();
  // useAccount makes it easy to access user account data and information from the preferred user wallet
  const { data, isError, isLoading, error: userError} = useAccount()

  const [settings, setSettings] = useState<UserSettings>(envConfig.defaultSettings)
  const [walletAddress, setWalletAddress] = useState<string>()
  const [username, setUsername] = useState<string>()
  const [email, setEmail] = useState<string>()
  const [avatar, setAvatar] = useState<string>()
  const [bio, setBio] = useState<string>()
  const [id, setId] = useState<string>()
  const [authType, setAuthType] = useState<string>(envConfig.defaultSettings.authType)
  const [loading, setLoading] = useState<boolean>()
  const [isAuth, setIsAuth] = useState<boolean>(false)
  const { disconnect } = useDisconnect()

  const signMessage  = () => {

  }

  const login = async ( selectedAuth?: string) => {
    let type = selectedAuth ? selectedAuth : 'metamask'
    // Update authType to current auth option
    if(type === 'google') {
      console.log('Sign in with web2 - google')
      return await signInWithGoogle()
    }

    if(type === 'metamask'){
      console.log('Sign in with web3 - metamask')
      connect(connectors[0]);
    }
    // Update the authType to the current auth method web2 or web3
    saveSettings({...settings, authType: type})
  }
  const saveSettings = (user: UserSettings) => {
    console.log(user)
    let updatedSettings: UserSettings = {...user}
    if(authType !== updatedSettings.authType && updatedSettings?.authType){
      setAuthType(updatedSettings.authType)
    }
    if (walletAddress !== updatedSettings.userWalletAddress) {
      updatedSettings = {...updatedSettings, userWalletAddress: walletAddress}
    }

    setSettings((prevSettings) => ({...prevSettings, ...updatedSettings}))
    localStorage.setItem(SETTINGS_KEY, JSON.stringify(updatedSettings))
  }
  const resetSettings = async () => {
    setSettings({...envConfig.defaultSettings})
    localStorage.removeItem(SETTINGS_KEY)
    await signOut()
    setIsAuth(false)
  }
  const logout = () => {
    resetSettings()
    disconnect()
  }


  useEffect(() => {
    // If we are login in with google
    // Set the firebase login details if we use Google Auth
    firebase.auth().onAuthStateChanged(user => {
      if(!user) return
      const userSettings: UserSettings = {
        email: user.email,
        username: user.displayName,
        id: user.email,
        authType: AUTH_TYPES.google,
        lastLoggedIn: moment.tz(new Date(), "Africa/Nairobi").format()
      }
      saveSettings(userSettings)
      setIsAuth(true)
    })
    // Save user settings to local to persist
    const userPreferences = localStorage.getItem(SETTINGS_KEY);
    if (userPreferences){
      const prefs = {...JSON.parse(userPreferences)} as UserSettings
      setSettings(prefs)
      setAuthType(prefs.authType)
    }

    if(isConnected && authType === AUTH_TYPES.metamask){
      setIsAuth(true)
    }
  }, [])

  // We need to update the authType when the user changes it and also when it updates from local preferences
  useEffect(() => {
    if(authType && settings.authType !== authType){
      saveSettings({...settings, authType})
    }
    // We are successfully signed in with web3 i.e metamask
    if(isConnected && authType === AUTH_TYPES.metamask){
      saveSettings({...settings, authType, walletAddress: data.address, username: data.address.substring(0,6)+'...'})
      setIsAuth(true)
    }
  }, [isConnected, authType])

  useEffect(() => {
  }, [settings])
  return (<UserAuthContext.Provider value={
    {
      logout,
      login,
      saveSettings,
      resetSettings,
      settings,
      loading,
      authType,
      isAuth
    } as UserAuthProviderValue
  }>
    {children}
  </UserAuthContext.Provider>)
}

const useAuthContext = (): UserAuthProviderValue => useContext(UserAuthContext)

export { useAuthContext, UserAuthContext, UserAuthProvider}