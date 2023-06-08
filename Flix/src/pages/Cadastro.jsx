import './Cadastro.css'
import { Link } from 'react-router-dom'

function Cadastro() {
  return (
    <main>
      <div className="cadastro">
        <h1>Bem vindo(a) ao Flix</h1>
        <div className="cadastro_inputs">
          <div>
            <label htmlFor="">Como podemos chamar você?</label>
            <input type="text" name="" id="" placeholder='ex: Neymar, Marcia, Einstein' />
          </div>
          <div>
            <label htmlFor="">Definir uma senha</label>
            <input type="text" name="" id="" placeholder='Nova senha' />
          </div>
        </div>
        <Link to='/'><button>Cadastrar</button></Link>
        <p>Se não pretende criar uma nova conta, você pode <Link to='/'>fazer login com outro e-mail.</Link></p>
      </div>

    </main>
  )
}

export default Cadastro