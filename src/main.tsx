import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { TonConnectUIProvider } from '@tonconnect/ui-react';
// import './index.css'

const manifestUrl = 'https://alverelt.github.io/first_contract_front_end/tonconnect-manifest.json';

createRoot(document.getElementById('root')!).render(
  // <StrictMode>
    <TonConnectUIProvider manifestUrl={manifestUrl}>
        <App />
    </TonConnectUIProvider>
  // </StrictMode>
)
