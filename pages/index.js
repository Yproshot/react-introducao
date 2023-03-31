import 'bootstrap/dist/css/bootstrap.min.css';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Cabecalho from '../components/Cabecalho';
import Rodape from '../components/Rodape';
import Pagina from '../components/Pagina';
import Container from 'react-bootstrap/esm/Container';


export default function Home() {
  return (
<>

<Pagina/>
<Container>
  <p>texto abc</p>
  <p>texto abc</p>
  <p>texto abc</p>
  <p>texto abc</p>
</Container>
<Rodape/>
</>
)
}
