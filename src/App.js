import './App.css';
import P from './Profile/P';

function App() {
  let prof =[
    {
      fullName : " jandoubi chaima " ,
        Bio : "lllllllllllllllllllllllll",
        profession :"student",
    },
  ]
  return (
    <div className="App">
      <P prof={prof} />
    </div>
  );
}

export default App;
