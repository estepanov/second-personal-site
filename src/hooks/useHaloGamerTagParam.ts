const useHaloGamerTagParam = () => {
  const location = {}
  const params = new URLSearchParams(location.search);
  let tag = params.get("tag");
  if (tag) {
    tag = tag.trim().toLowerCase()
  }
  return tag
}

export default useHaloGamerTagParam;
