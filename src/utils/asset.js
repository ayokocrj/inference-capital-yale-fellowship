/**
 * Utility to resolve asset paths reliably across different deployment bases
 * (e.g., custom root domain, subpath on GitHub Pages, Google Cloud Run, Coolify)
 */
export const getAssetUrl = (path) => {
  if (!path) return '';
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  const base = import.meta.env.BASE_URL || '/';
  const cleanBase = base.endsWith('/') ? base : `${base}/`;
  return `${cleanBase}${cleanPath}`;
};
