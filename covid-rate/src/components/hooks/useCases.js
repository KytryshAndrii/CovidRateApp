import {useMemo} from "react";


export const useCases = (cases, query) => {
  const sortedPosts = useMemo(()=>{
    if(cases === 0){
      return []
    }
    else if(query.value === "Up"){
      return [...cases].sort((a, b) => a.Date < b.Date);
    }
    else if(query.value === "Down"){
      return [...cases].sort((a, b) => a.Date > b.Date);
    }
  }, [cases, query])
  return sortedPosts;
}