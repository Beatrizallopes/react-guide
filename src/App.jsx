import './global.css'
import { Menu } from './components/Menu';
import { Content } from './pages/Content';

function App() {

  return (
    <div style={{display:'flex', flexDirection:'row'}}>
    <Menu></Menu>
    <Content></Content>
    </div>
  )
}

export default App
