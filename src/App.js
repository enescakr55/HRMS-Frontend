import './App.css';
import Dashboard from '../src/layouts/Dashboard'
import { Container } from 'semantic-ui-react';
import Navi from './layouts/Navi';
function App() {
  return (
    <div className="App">
      <Navi></Navi>
      <Container className="main" style={{minHeight:"100%"}}>
      <Dashboard name="qwe"/>
      </Container>
      
    </div>
  );
}

export default App;
