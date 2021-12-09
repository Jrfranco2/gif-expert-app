import { shallow } from "enzyme";
import GifGrid from "../../components/GifGrid";
import { useFetchGifts } from "../../hooks/useFetchGifs";
jest.mock("../../hooks/useFetchGifs");

describe("Pruebas en <GifGrid/>", () => {
  const category = "Goku";

  test("debe de mostrarse correctamente", () => {
    useFetchGifts.mockReturnValue({
      data: [],
      loading: true,
    });
    const wrapper = shallow(<GifGrid category={category} />);
    expect(wrapper).toMatchSnapshot();
  });

  test("debe de mostrar items cuando se cargan imagenes useFetchGifts", () => {
    const gifs = [
      {
        id: "ABC",
        url: "https://prueba1",
        title: "ABC Title",
      },
      {
        id: "BCD",
        url: "https://2",
        title: "BCD Title",
      },
    ];
    useFetchGifts.mockReturnValue({
      data: gifs,
      loading: false,
    });
    const wrapper = shallow(<GifGrid category={category} />);
    expect(wrapper.find("p").exists()).toBe(false);
    expect(wrapper.find("GifGridItem").length).toBe(gifs.length);
  });
});
