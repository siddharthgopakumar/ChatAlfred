import withStyles from '@material-ui/core/styles/withStyles';
import Header from "./components/Header";
import ChatWindow from "./components/ChatWindow";

function App() { 
 
  return (
    <div className="App">
      <Header />
      <ChatWindow></ChatWindow>
    </div>
  );
}

export default App;
