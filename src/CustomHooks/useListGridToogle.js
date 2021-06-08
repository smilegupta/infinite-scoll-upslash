import { views } from "../Utils/helpers";

const useListGridToogle = (viewType) => {
  if (viewType === "grid") return views.grid;
  else return views.list;
};

export default useListGridToogle;
