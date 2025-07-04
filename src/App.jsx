
import { Header } from './components/Header'
import Footer from "./components/Footer";
import { Section } from './components/section';
import './App.css'
import ferreteria from './EjemploFerreteria';

function App() {
return (
  <>
  <Header title="Creando y usando props" show={true}>
  </Header>

  <section>
    <Section />
  </section>
  



  <ferreteria />

  <Footer/>
  </>
  )
}
export default App
