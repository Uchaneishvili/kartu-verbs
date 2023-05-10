import { useState } from "react";
import ctx from "../DetailsPageCtx/detailsPageCtx";
const DetailsPageCtxProvider = (props) => {
  const [sWord, setSearchWord] = useState();

  const detailsPageCtx = {
    searchWord: `${sWord}`,
    setSearchWord: (word) => setSearchWord(word),
  };
  return <ctx.Provider value={detailsPageCtx}>{props.children}</ctx.Provider>;
};

export default DetailsPageCtxProvider;
