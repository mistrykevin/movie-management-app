import { useState } from 'react';
import { addMovie } from '../services/movieService';

const AddMovie = ({ onAdd }) => {
  const [form, setForm] = useState({
    name: '',
    casting: '',
    releaseDate: '',
    director: '',
    producer: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addMovie(form);
    onAdd();
    setForm({ name: '', casting: '', releaseDate: '', director: '', producer: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="p-3 border mb-4">
      <h4>Add Movie</h4>
      {['name', 'casting', 'releaseDate', 'director', 'producer'].map(field => (
        <div className="mb-2" key={field}>
          <input
            type={field === 'releaseDate' ? 'date' : 'text'}
            name={field}
            value={form[field]}
            onChange={handleChange}
            placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
            className="form-control"
            required
          />
        </div>
      ))}
      <button className="btn btn-primary">Submit</button>
    </form>
  );
};

export default AddMovie;
