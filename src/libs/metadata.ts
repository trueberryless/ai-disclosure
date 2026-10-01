export const OPEN_GRAPH_IMAGE = {
  alt: "AI Disclosure: A practical guide to disclosing AI usage.",
  height: 630,
  path: "/og-image.png",
  width: 1200,
};

export function getCanonicalUrl(pathname: string, site: URL) {
  return new URL(pathname, site);
}

export function getOpenGraphImageUrl(site: URL) {
  return new URL(OPEN_GRAPH_IMAGE.path, site);
}
