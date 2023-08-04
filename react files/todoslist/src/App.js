import './App.css';
import { Header } from './MyComponents/Header';
import {Footer} from './MyComponents/Footer';
import { Todos } from './MyComponents/Todos';

function App() {

  return (
    <>
    <Header title="My-Todo-List"/>
    <Todos/>
    <Footer searchBar={false} />
    </>
    );
};

export default App;
