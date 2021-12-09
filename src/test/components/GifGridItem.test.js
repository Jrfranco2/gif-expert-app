import { shallow } from "enzyme";
import GifGridItem from "../../components/GifGridItem";

describe("Pruebas en GifGridItem", () => {
  const titulo = "Un titulo";
  const url =
    "https://app.zeplin.io/project/60f880ef2b7547159f248a4b/dashboard?sid=61b127c6712c9d4b5791ab42";
  const wrapper = shallow(<GifGridItem title={titulo} url={url} />);

  test("debe mostrar el componente correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("debe de tener un parrafo con el title", () => {
    const p = wrapper.find("p");
    expect(p.text().trim()).toBe(titulo);
  });

  test("debe de tener la imagen igual al url y alt de los props", () => {
    const img = wrapper.find("img");
    expect(img.props().src).toBe(url);
    expect(img.prop("alt")).toBe(titulo);
  });

  test("debe de tener animate__fadeIn", () => {
    const div = wrapper.find("div");
    const className = div.props().className;
    expect(className.includes("animate__fadeIn")).toBe(true);
  });
});
