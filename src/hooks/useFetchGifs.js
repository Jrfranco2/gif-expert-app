import { useEffect, useState } from "react";
import { getGifts } from "../helpers/getGifs";

export const useFetchGifts = (category) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    getGifts(category).then((imgs) =>
      setTimeout(() => {
        setState({ data: imgs, loading: false });
      }, 3000)
    );
  }, [category]);

  return state;
};
