import { toast } from 'react-toastify';

function SearchForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const search = e.target.elements.search.value;

    if (!search) {
      toast.error('Please add a search word or phrase!!');
    }
  };

  return (
    <section>
      <h1 className="title">unsplash images</h1>
      <form onSubmit={handleSubmit} className="search-form">
        <input
          type="text"
          className="form-input search-input"
          placeholder="cat"
          name="search"
        />
        <button className="btn" type="submit">
          search
        </button>
      </form>
    </section>
  );
}
export default SearchForm;