import { useFetchGifts } from "../../hooks/useFetchGifs";
import { renderHook } from "@testing-library/react-hooks";

describe("Pruebas en el hook useFetchGifts", () => {
  test("debe retornar el estado inicial", () => {
    const { result } = renderHook(() => useFetchGifts("Dragon ball"));
    const { data, loading } = result.current;
    expect(data).toEqual([]);
    expect(loading).toBe(true);
  });
});
