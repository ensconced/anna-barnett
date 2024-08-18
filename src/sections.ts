const markdownFiles: string[] = Object.values(
  import.meta.glob("../site/sections/*.md", {
    eager: true,
    as: "raw",
  })
);

const sectionsMarkdown = markdownFiles.map((markdown) => {
  const [fullMatch, frontMatter] = markdown.match(/^---\n([\s\S]+?)\n---\n/)!;
  const title = frontMatter!.match(/file: (.+)/)![1]!;
  return {
    title,
    link: `/${encodeURIComponent(title)}`,
    markdown: markdown.slice(fullMatch!.length),
  };
});

export default {
  homepage: sectionsMarkdown[0]!,
  sections: sectionsMarkdown.slice(1),
};
