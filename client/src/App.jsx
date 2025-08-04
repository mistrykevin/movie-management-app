import AddMovie from './components/AddMovie';
import MovieList from './components/MovieList';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="container mt-5">
      <AddMovie onAdd={() => window.location.reload()} />
      <MovieList />
    </div>
  );
}

export default App;
