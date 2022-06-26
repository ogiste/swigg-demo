
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
const polygonTestNetProvider = "https://matic-testnet-archive-rpc.bwarelabs.com";
// const polygonTestNetProvider = "https://matic-mumbai.chainstacklabs.com";

const {chains, provider} = configureChains(
  [chain.polygon, chain.polygonMumbai],
  [
    jsonRpcProvider({
      rpc: (chain) => {
        console.log(chain);
        return ({http: polygonTestNetProvider});
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
    onError: () => {
      toast.error(
        "Network Error: Ensure Metamask is connected to the same network that your contract is deployed to."
      );
    },
  }),
});