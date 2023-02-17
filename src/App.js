
import './App.css';

import {Header,Container,Footer,Hero} from './components/index';

const App=()=> {
  return (
    <div className="App">
     
    <Header />
    <Container> 
      <Hero/> 
    </Container>
    <Footer/>

    </div>
  );
}

export default App;
