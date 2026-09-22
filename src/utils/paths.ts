/** Keep assets and internal links inside the GitHub Pages repository path. */
export function localPath(path = ''): string {
  return `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${path.replace(/^\//, '')}`;
}
