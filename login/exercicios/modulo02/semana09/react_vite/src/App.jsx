
import './App.css'
import Header from './components/header/Header'
import InformacoesPessoa from './components/informacoesPessoa/informacoesPessoa'

function App() {
  const pessoa = {
    nome: 'Reinaldo',
    idade: 34,
    hobbie: 'Beber Cerveja'
  }

  return (
    <div className='container-fluid'>
      <Header/>
      <InformacoesPessoa nome={pessoa.nome} idade={pessoa.idade} hobbie={pessoa.hobbie} />
    </div>
  )
}

export default App
