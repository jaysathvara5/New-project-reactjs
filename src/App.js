import logo from './logo.svg';
import './App.css';


function Mybutton(){
  return(
    <button className='btn'>CLick Here</button>
  );
}

function Header(){
  return(
    <h1 className="h1">This Title</h1>
  )
}
 
function App() {
  return (
    <div className="App">
      <h1>hello world!</h1>
      <Mybutton />
      <Header />
    </div>
  );
}

export default App;
