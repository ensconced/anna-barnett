const sections: Record<string, string> = import.meta.glob(
  "../site/sections/*.md",
  {
    eager: true,
    as: "raw",
  }
);

const sectionsMarkdown = Object.entries(sections).map(([path, markdown]) => {
  const title = path.match(/\/([^/]+)\.md$/)![1]!;
  return { title, link: `/${encodeURIComponent(title)}`, markdown };
});

// The first entry is used for the homepage so doesn't need to be in the nav
sectionsMarkdown.shift();
export default sectionsMarkdown;
