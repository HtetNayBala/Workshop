import './App.scss';
import Footer from './Component/Footer/Footer';
import Home from './Component/Home/Home';
import Nav from './Component/Nav/Nav';

const App = () => {


  return (
    <div className='w-[90%] sm:w-[80%] mx-auto my-5'>
        <Nav/>
        <Home/>
        <Footer/>
    </div>
  )
}

export default App