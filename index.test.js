import plugin from "./index.js";

describe("Rehype Plugin for Rehype", () => {
  it("creates a Vite plugin when invoked", () => {
    expect(plugin()).toMatchInlineSnapshot(`
      Object {
        "name": "rehype",
        "transformIndexHtml": [Function],
      }
    `);
  });
});
