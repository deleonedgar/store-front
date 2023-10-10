import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google"
import { Provider } from 'react-redux';
import { store } from './store';


const container = document.getElementById("root")
const root = ReactDOM.createRoot(container!)

root.render(
  <GoogleOAuthProvider clientId='498659106695-5vm8qnapq8en9bjchm1140susq4p76qk.apps.googleusercontent.com'>
    <StrictMode>
      <Provider store={ store }>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </StrictMode>
  </GoogleOAuthProvider>
)

// reportWebVitals();
