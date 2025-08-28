import { ArrowDownAZ, ArrowUpZA } from "lucide-react";

interface StatusCategory {
  key: string;
  status: string;
}

interface SpeciesCategory {
  key: string;
  specie: string;
}

type SortOrderType = "" | "asc" | "desc";

interface FilterProps {
  statusFilter: string;
  setStatusFilter: (status: string) => void;
  speciesFilter: string;
  setSpeciesFilter: (specie: string) => void;
  showFavOnly: boolean;
  setShowFavOnly: (value: boolean) => void;
  sortOrder: SortOrderType;
  setSortOrder: (order: SortOrderType) => void;
  setCurrentPage: (page: number) => void;
}

function Filter({
  statusFilter,
  setStatusFilter,
  speciesFilter,
  setSpeciesFilter,
  showFavOnly,
  setShowFavOnly,
  sortOrder,
  setSortOrder,
  setCurrentPage,
}: FilterProps) {
  const statusCategory: StatusCategory[] = [
    { key: "001", status: "Alive" },
    { key: "002", status: "unknown" },
    { key: "003", status: "Dead" },
  ];
  const speciesCategory: SpeciesCategory[] = [
    { key: "004", specie: "Human" },
    { key: "005", specie: "Alien" },
  ];

  function handleStatusChange(status: string) {
    if (statusFilter === status) {
      setStatusFilter("");
    } else {
      setStatusFilter(status);
    }
    setCurrentPage(1);
  }

  function handleSpeciesChange(specie: string) {
    if (speciesFilter === specie) {
      setSpeciesFilter("");
    } else {
      setSpeciesFilter(specie);
    }
    setCurrentPage(1);
  }

  function handleFavChange() {
    setShowFavOnly(!showFavOnly);
    setCurrentPage(1);
  }

  function handleAscending() {
    setSortOrder(sortOrder === "asc" ? "" : "asc");
  }

  function handleDescending() {
    setSortOrder(sortOrder === "desc" ? "" : "desc");
  }

  return (
    <div className="flex flex-col bg-base-200 px-8 w-100 p-4 mx-12">
      <div className="flex flex-col space-y-4 p-4">
        <div className="color">
          <label htmlFor="color" id="color" className="font-semibold">
            Status
          </label>
          {statusCategory.map(({ status, key }) => {
            return (
              <div className="flex gap-2" key={key}>
                <input
                  type="checkbox"
                  checked={statusFilter === status}
                  onChange={() => handleStatusChange(status)}
                />
                {status}
              </div>
            );
          })}
        </div>

        <div className="gender">
          <label htmlFor="gender" id="gender" className="font-semibold">
            Species
          </label>
          {speciesCategory.map(({ specie, key }) => {
            return (
              <div className="flex gap-2" key={key}>
                <input
                  type="checkbox"
                  checked={speciesFilter === specie}
                  onChange={() => handleSpeciesChange(specie)}
                />
                {specie}
              </div>
            );
          })}
        </div>

        <div className="favourite">
          <label htmlFor="favourite" id="favourite" className="font-semibold">
            Favourite
          </label>
          <div className="flex gap-2">
            <input
              type="checkbox"
              checked={showFavOnly}
              onChange={handleFavChange}
            />
            Favourite
          </div>
        </div>

        <div>
          <label htmlFor="sorting" id="sorting" className="font-semibold">
            Sort By Name
          </label>
          <div
            className={`sorting flex gap-2 cursor-pointer
            ${sortOrder === "asc" ? "text-blue-500 font-bold" : ""}`}
            onClick={handleAscending}
          >
            <ArrowDownAZ size={18} />
            Ascending
          </div>
          <div
            className={`sorting flex gap-2 cursor-pointer
            ${sortOrder === "desc" ? "text-blue-500 font-bold" : ""}`}
            onClick={handleDescending}
          >
            <ArrowUpZA size={18} />
            Descending
          </div>
        </div>
        <button className="bg-red-400 text-white p-2 rounded">
          Clear Filters
        </button>
      </div>
    </div>
  );
}

export default Filter;
