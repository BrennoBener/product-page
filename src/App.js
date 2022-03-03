import './App.css';
import Main from './components/Main';
import background from './assets/background.jpg';
import beach1 from './assets/beach1.jpg'
import wear2 from './assets/wear2.jpg'
import Slider from './components/Slider';
import Navbar from './components/Navbar';

function App() {

  const navbarLinks = [
    { url: "https://www.instagram.com/sartherw/", title: "Instagram" },
    { url: "https://web.whatsapp.com/send?phone=5585992196007", title: "Fale com a gente" },
  ];

  return (
    <div className="App">
      <Navbar navbarLinks={navbarLinks} />
      <Main imageSrc={background} />
      <Slider 
        imageSrc={beach1}
        title={"Bem vindo!"}
        subtitle={"Quem somos:"}
        text={"Nascida em areias nordestinas, buscamos inspiração nas nossa praias exóticas e nas cores da nossa natureza para criar tramas, texturas e um novo olhar para as nossas peças. Nosso propósito é trazer para você roupas clássicas, alinhadas, leves e sofisticadas."}
      />
      <Slider 
        imageSrc={wear2}
        title={"Linho"}
        subtitle={"Elegância, versatilidade e uma linguagem universal."}
        text={"Temos a proposta incrível de trazer peças atemporais, com frescor, textura leve, conforto e elegânia."}
        flipped={true}
      />
    </div>
  );
}

export default App;
