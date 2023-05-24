import {useMemo} from "react";


export const useCases = (cases, query) => {
  const sortedPosts = useMemo(()=>{
    if(cases === 0){
      return []
    }
    else if(query.value === "Up"){
      return [...cases].sort((a, b) => a.last_updated_at < b.last_updated_at);
    }
    else if(query.value === "Down"){
      return [...cases].sort((a, b) => a.last_updated_at > b.last_updated_at);
    }
  }, [cases, query])
  return sortedPosts;
}