import Link from 'next/link';
import { useState } from 'react';
import useDetectClickOut from '../utils/hook/useDetectClickOut';
import SearchModal from './searchModal';

export default function Navbar() {
  const [showSearchModal, setShowSearchModal] = useState(false);
  const { triggerRef, nodeRef } = useDetectClickOut(() => setShowSearchModal(false));
  return (
    <div className="container flex flex-wrap items-center justify-between mx-auto">
      <h1 className="flex items-center px-6 py-4 font-black text-2xl md:text-3xl">
        <Link href="/">thi nguyen</Link>
      </h1>
      <ul className="flex flex-row px-6">
        <li className="block px-6 pt-1 m-auto">
          <button onClick={() => setShowSearchModal(true)} ref={triggerRef}>
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" className="w-4 bg-white transition duration-300 hover:invert" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
            </svg>
          </button>
        </li>
        <li className="block text-xl transition duration-300 hover:bg-black hover:text-white"><Link href="/about">about me</Link></li>
      </ul>
      <SearchModal 
        nodeRef={nodeRef}
        onClose={() => setShowSearchModal(false)}
        show={showSearchModal}
      />
    </div>
  )
}