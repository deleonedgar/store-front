import 'tailwindcss/tailwind.css';
import { Router } from './router';
// Tailwind
import './theme/tailwind.css';
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'


const App = () => {

  return (
    <LocalizationProvider dateAdapter={ AdapterDayjs }>
      <div className="light">
        <Router />
      </div>
    </LocalizationProvider>
  )
}


export default App