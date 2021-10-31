import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'
//Escolha o tema que desejar
import 'primereact/resources/themes/bootstrap4-light-blue/theme.css'
import 'primeflex/primeflex.css'
import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  return (
    <div>
      Modelo Inicial PrimeFlex/PrimeReact
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
)

