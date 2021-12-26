import { unified } from "unified";
import rehypeParse from "rehype-parse";
import rehypeStringify from "rehype-stringify";

/**
 *
 * @returns {import("vite").Plugin}
 */
export default function vitePluginRehype(options = {}) {
  const rehypePlugins = options.plugins || [];
  const engine = unified()
    .use(rehypeParse)
    .use(rehypePlugins)
    .use(rehypeStringify);

  return {
    name: "rehype",
    transformIndexHtml: async (html) => {
      const processed = await engine.process(html);
      return String(processed);
    },
  };
}
