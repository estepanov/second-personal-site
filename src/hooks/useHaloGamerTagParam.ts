import { useLocation} from "@reach/router";

const useHaloGamerTagParam = () => {
  const location = useLocation()
  const params = new URLSearchParams(location.search);
  let tag = params.get("tag");
  if(tag) {
    tag = tag.trim().toLowerCase()
  }
  return tag
}

export default useHaloGamerTagParam;
