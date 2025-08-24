import { useGetApi } from "../../hooks/useGetApi";
import type { Character } from "../../types/character";

function Filter() {
  const { getCharacters } = useGetApi();
  return (
    <div className="flex flex-col bg-base-200 px-8 w-100 p-4 mx-12">
      <div className="flex flex-col space-y-4 p-4">
        <div className="color">
          <label htmlFor="color" id="color" className="font-semibold">
            Status
          </label>
          {getCharacters &&
            Array.from(
              new Set(getCharacters.map(({ status }: Character) => status))
            ).map((status) => {
              return (
                <div className="flex gap-2">
                  <input type="checkbox" /> {status}
                </div>
              );
            })}
        </div>

        <div className="gender">
          <label htmlFor="gender" id="gender" className="font-semibold">
            Species
          </label>
          {getCharacters &&
            Array.from(
              new Set(getCharacters.map(({ species }: Character) => species))
            ).map((species) => {
              return (
                <div className="flex gap-2">
                  <input type="checkbox" />
                  {species}
                </div>
              );
            })}
        </div>

        <div className="price">
          <label htmlFor="price" id="price" className="font-semibold">
            Gender
          </label>
          {getCharacters &&
            Array.from(
              new Set(getCharacters.map(({ gender }: Character) => gender))
            ).map((gender) => {
              return (
                <div className="flex gap-2">
                  <input
                    type="checkbox"
                    //   key={}
                    //   onChange={}
                    //   checked={}
                  />
                  {gender}
                </div>
              );
            })}
        </div>
        <button className="bg-red-400 text-white p-2 rounded">
          Clear Filters
        </button>
      </div>
    </div>
  );
}

export default Filter;
