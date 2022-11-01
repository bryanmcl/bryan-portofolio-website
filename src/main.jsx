import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// const observer = new IntersectionObserver((entries) =>{
//   entries.forEach((entry) => {
//     console.log(entry)
//     if(entry.isIntersecting){
//       entry.classList.add('show')
//     }
//     else {
//       entry.classList.remove('show')
//     }
//   })
// })
// const hiddenElements  = document.querySelectorAll('.hid')
// hiddenElements.forEach((el)=> observer.observe(el))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
