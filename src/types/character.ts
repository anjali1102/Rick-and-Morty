export type LocationType = {
  name: string;
  url: string;
};

export type Character = {
  id: number;
  image: string;
  name: string;
  status: string;
  species: string;
  gender: string;
  origin: LocationType;
  location: LocationType;
};
