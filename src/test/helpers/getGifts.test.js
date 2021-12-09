import { getGifts } from "../../helpers/getGifs";

describe("Pruebas en getGifts.js", () => {
  test("debe traer 10 elementos", async () => {
    const gifts = await getGifts("Goku");
    expect(gifts.length).toBe(10);
  });

  test("debe retonar 0 si no se manda", async () => {
    const gifts = await getGifts("");
    expect(gifts.length).toBe(0);
  });
});
