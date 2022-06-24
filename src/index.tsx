import ReactDOM from 'react-dom/client';
import './index.css';
import { Game } from "./components/Game";

const rootElement = document.getElementById("root");

if(rootElement !== null){ 
  const root = ReactDOM.createRoot(rootElement);
  root.render(<Game />);
}else{
  console.log("Error");
}