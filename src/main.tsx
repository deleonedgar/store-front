import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google"


const container = document.getElementById("root")
const root = ReactDOM.createRoot(container!)

root.render(
  <GoogleOAuthProvider clientId='498659106695-5vm8qnapq8en9bjchm1140susq4p76qk.apps.googleusercontent.com'>
    <StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StrictMode>
  </GoogleOAuthProvider>
)

// reportWebVitals();
