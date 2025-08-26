import debounce from "lodash/debounce";
import { useCallback } from "react";
import type { ChangeEvent } from "react";


interface SearchProps {
  setSearch: (value: string) => void;
  setCurrentPage: (page: number) => void;
}

function Search({ setSearch, setCurrentPage }: SearchProps) {
  const debouncedSetSearch = useCallback(
    debounce((value:string) => {
      setSearch(value);
      setCurrentPage(1);
    }, 300),
    [setSearch, setCurrentPage]
  );

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    debouncedSetSearch(e.target.value.trim());
  };
  return (
    <div className="flex justify-center m-8">
      <input
        type="text"
        onChange={handleSearch}
        placeholder="Search"
        className="input input-bordered text-center"
      />
    </div>
  );
}

export default Search;
