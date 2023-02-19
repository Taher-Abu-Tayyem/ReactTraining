
import './App.css';

import {Container} from './components/index';
import {Header,Hero,Footer,MostPopular} from './sections/index';

const App=()=> {
  return (
    <div className="App">
     
    <Header />
    <Container> 
      <Hero/> 
      <MostPopular/>
    </Container>
    <Footer/>

    </div>
  );
}

export default App;
