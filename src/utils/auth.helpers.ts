
import {chain, configureChains, createClient} from "wagmi";
import {CoinbaseWalletConnector} from 'wagmi/connectors/coinbaseWallet'
import {InjectedConnector} from 'wagmi/connectors/injected'
import {MetaMaskConnector} from 'wagmi/connectors/metaMask'
import {WalletConnectConnector} from 'wagmi/connectors/walletConnect'
import {jsonRpcProvider} from "wagmi/providers/jsonRpc";
import {toast} from "react-hot-toast";
import {QueryCache, QueryClient} from "react-query";

const localTestNetProvider = "http://localhost:8545";
// Provider that will be used when no wallet is connected
const polygonTestNetProvider = "https://matic-mumbai.chainstacklabs.com";
const polygonTestNetProvider2 = "https://rpc-mumbai.maticvigil.com";
const polygonTestNetProvider3 = "https://matic-testnet-archive-rpc.bwarelabs.com";

export const {chains, provider} = configureChains(
  [chain.polygonMumbai, chain.polygon],
  [
    jsonRpcProvider({
      rpc: (chain) => {
        console.count('chain');
        return ({http: polygonTestNetProvider});
      },
    }),
    jsonRpcProvider({
      rpc: (chain) => {
        console.count('chain');
        return ({http: polygonTestNetProvider2});
      },
    }),
    jsonRpcProvider({
      rpc: (chain) => {
        console.count('chain');
        return ({http: polygonTestNetProvider3});
      },
    }),
  ],
)
export const wagmiClient = createClient({
  autoConnect: true,
  connectors: [
    new MetaMaskConnector({chains}),
    new CoinbaseWalletConnector({
      chains,
      options: {
        appName: 'wagmi',
      },
    }),
    new WalletConnectConnector({
      chains,
      options: {
        qrcode: true,
      },
    }),
    new InjectedConnector({
      chains,
      options: {
        name: 'Injected',
        shimDisconnect: true,
      },
    }),
  ],
  provider
});
// Create a react-query client
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
  queryCache: new QueryCache({
    onError: (err) => {
      console.log(err);
      toast.error(
        "Network Error: Ensure Metamask is connected to the same network that your contract is deployed to."
      );
    },
  }),
});