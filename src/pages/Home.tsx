import Navbar from "../component/navbar/Navbar";
import Filter from "../component/filter/Filter";
import CharacterList from "./CharacterList";
import Pagination from "../component/pagination/Pagination";
import { useGetApi } from "../hooks/useGetApi";
import { useEffect, useState } from "react";
import Search from "../component/search/Search";
import { useFavourites } from "../hooks/useFavourites";

type SortOrderType = "" | "asc" | "desc";

function Home() {
  const { getCharacters, getCharacterList, getCharacterByFilter, totalPages } =
    useGetApi();
  const { fav, isFav, toggleFav } = useFavourites();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [search, setSearch] = useState<string>("");
  const [statusFilter, setStatusFilter] = useState<string>("");
  const [speciesFilter, setSpeciesFilter] = useState<string>("");
  const [showFavOnly, setShowFavOnly] = useState<boolean>(false);
  const [sortOrder, setSortOrder] = useState<SortOrderType>("");

  useEffect(() => {
    if (showFavOnly) return;
    if (search || statusFilter || speciesFilter) {
      getCharacterByFilter(search, statusFilter, speciesFilter, currentPage);
    } else {
      getCharacterList(currentPage);
    }
  }, [currentPage, search, statusFilter, speciesFilter, showFavOnly]);

  return (
    <div>
      <Navbar />
      <Search setSearch={setSearch} setCurrentPage={setCurrentPage} />
      <div className="flex gap-12">
        <Filter
          statusFilter={statusFilter}
          setStatusFilter={setStatusFilter}
          speciesFilter={speciesFilter}
          setSpeciesFilter={setSpeciesFilter}
          showFavOnly={showFavOnly}
          setShowFavOnly={setShowFavOnly}
          sortOrder={sortOrder}
          setSortOrder={setSortOrder}
          setCurrentPage={setCurrentPage}
        />
        <CharacterList
          getCharacters={getCharacters}
          sortOrder={sortOrder}
          isFav={isFav}
          toggleFav={toggleFav}
          showFavOnly={showFavOnly}
          fav={fav}
        />
      </div>
      {!showFavOnly && (
        <div>
          <Pagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            totalPages={totalPages}
          />
        </div>
      )}
    </div>
  );
}

export default Home;
