export const extractCfsValues = (url: string) => {
  const regex = /\/veremail\/([^/]+)\/([^/]+)/;
  const match = url.match(regex);
  if (match && match.length === 3) {
    return { cfskey: match[1], cfstoken: match[2] };
  }
  return { cfskey: '', cfstoken: '' };
};
