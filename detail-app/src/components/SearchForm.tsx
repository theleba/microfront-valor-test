import { Search } from "lucide-react";

const SearchForm: React.FC<SearchFormProps> = ({ value, onChange, onSubmit }) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit} className="flex mb-6">
      <input
        type="text"
        placeholder="Digite o nome do Pokémon..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="flex-1 px-4 py-2 border rounded-l-lg focus:outline-none"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-[#f40c0c] text-white rounded-r-lg hover:bg-[#d93025] flex items-center gap-1"
      >
        <Search className="w-4 h-4" /> Search
      </button>
    </form>
  );
};

export default SearchForm;
