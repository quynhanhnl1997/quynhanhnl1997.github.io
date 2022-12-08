import { createRef, RefObject, useEffect, useRef } from "react";

type Props = {
  show: boolean;
  onClose: Function;
  nodeRef: RefObject<any>;
}

export default function SearchModal({ show, onClose, nodeRef }: Props) {

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
          className="fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto h-modal md:h-full flex items-center justify-center bg-slate-500 bg-opacity-25 backdrop-blur-sm"
          
        >
          <div className="relative w-full max-w-2xl">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700 justify-content"
              ref={nodeRef}>
              <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      Terms of Service
                  </h3>
              </div>
              <div className="p-6 space-y-6">
                  <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                      With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.
                  </p>
                  <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                      The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.
                  </p>
              </div>
          </div>
        </div>
      </div>
      ) : null
    }
    </>
  )
}