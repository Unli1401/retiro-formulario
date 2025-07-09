import FormularioRetiro from './components/FormularioRetiro';
//import 'bootstrap/dist/css/bootstrap.min.css';
//import "/css/bootstrap.min.css";  // Ruta relativa desde public/
import './styles/bootstrap.min.css';


function App() {
  return (
    <div className="container mt-5">
      <h1 className="mb-4">Solicitud de Retiro de Equipos</h1>
      <FormularioRetiro />
    </div>
  );
}

export default App;