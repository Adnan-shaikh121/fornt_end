import TextForm from './components/textForm';
import './App.css';
import Navbar from './components/navbar';
function App() {
  return (
    <>
    {/* <Navbar title="STUDY SONIC" aboutText="About" thisIsCheck="just Cheking" /> */}
    <Navbar/>
    <TextForm heading="text from props"/>
    
    </>
  );
}
export default App;
