import React, { useState } from "react";

const Alert = () => {
  const [isAlertButtonClick, setIsDeleteButtonClick] = useState(false);
  const showAlerHendler = () => {
    setIsDeleteButtonClick(true);
  };
  const showProcedHendler = () => {
    setIsDeleteButtonClick(false);
  };
  return (
    <>
      {isAlertButtonClick && (
        <div
          id="alert"
          className="fixed right-0 left-0 top-0 bottom-0 z-[1055] w-full h-full bg-black bg-opacity-50 flex"
        >
          <div className="relative w-3/12 m-auto">
            <div className="bg-white rounded-lg shadow dark:bg-gray-700">
              <div className="relative flex-auto p-4">
                <h3 className="text-2xl font-bold leading-7 text-gray-900">
                  Are you sure?
                </h3>
                <p>These changes can't be reverted.</p>
              </div>

              <div className="flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-t-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
                <button
                  type="button"
                  onClick={showProcedHendler}
                  className="inline-block rounded bg-blue-600 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white"
                >
                  Proced
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <button
        type="button"
        onClick={showAlerHendler}
        className="inline-block rounded bg-blue-600 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white"
      >
        Delete
      </button>
    </>
  );
};

export default Alert;
