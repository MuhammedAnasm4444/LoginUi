
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Footer from './Footer';
import Form from './Form';
import Header from './Header';
 

function App() {

  return (
    <div className="App">
      <Header/>
     <div className="container">
       <div className="row">
       <Form className="mx-auto" />
       </div>
     </div>
     <Footer />
    </div>
  );
}

export default App;
