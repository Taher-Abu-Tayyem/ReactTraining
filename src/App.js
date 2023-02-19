
import './App.css';

import {Container} from './components/index';
import {Header,Hero,Footer,MostPopular,GamingLibrary} from './sections/index';

const App=()=> {
  return (
    <div className="App">
     
    <Header />
    <Container> 
    <Hero/> 
    <MostPopular/>
    <GamingLibrary/>
    </Container>
    <Footer/>

    </div>
  );
}

export default App;
