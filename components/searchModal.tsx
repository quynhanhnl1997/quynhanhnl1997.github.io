import { ChangeEvent, RefObject, useCallback, useEffect, useState } from "react";
import type Post from "../interfaces/post";
import PostSearchResult from "./postSearchResult";
import PostSearchResultList from "./postSearchResultList";

type Props = {
  show: boolean;
  onClose: Function;
  nodeRef: RefObject<any>;
  allPosts: Post[];
}

export default function SearchModal({ show, onClose, nodeRef, allPosts }: Props) {
  const [ query, setQuery ] = useState("");
  const [ results, setResults ] = useState<Post[]>([]);

  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    const results: Post[] = [];
    setQuery(query);
    if (query.length != 0) {
      allPosts.forEach(post => {
        if (post.title.toLowerCase().includes(query.toLowerCase()) 
          || post.content.toLowerCase().includes(query.toLowerCase())) results.push(post);
      })
      setResults(results);
    }
  }, [])

  useEffect(() => {
    const handleCloseKeyboard = (e: KeyboardEvent) => {
      if(e.key == "Escape") {
        onClose();
      }
    }
    show ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'unset';
    window.addEventListener('keydown', handleCloseKeyboard);
    return () => {
      window.removeEventListener('keydown', handleCloseKeyboard);
    }
  }, [show])

  return (
    <>
      {
      show ? (
        <div 
          className="fixed inset-0 z-50 w-full p-4 overflow-x-hidden overflow-y-hidden h-modal h-screen flex items-center justify-center bg-slate-500 bg-opacity-25 backdrop-blur-sm"   
        >
            <div className="relative bg-white w-full max-w-2xl rounded-lg max-h-full overflow-y-hidden flex flex-col"
              ref={nodeRef}>
              <div className="flex items-start justify-between">
                <form className="w-full">   
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-5 pointer-events-none">
                      <svg aria-hidden="true" className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    </div>
                  <input 
                    autoFocus 
                    type="search" 
                    className="block w-full p-5 pl-14 text-base text-gray-900 border border-white border-b-pink rounded-t-lg focus:outline-transparent" 
                    placeholder="Search Blogs..." 
                    value={query} 
                    onChange={onChange} />
                </div>
                </form>
              </div>
              {query != "" && results.length > 0 
                ? (
                  <div className="overflow-y-auto h-fit">
                    <PostSearchResultList posts={results} query={query} />
                  </div>
                  ) 
                : null
              }
          </div>
        </div>
      ) : null
    }
    </>
  )
}
