import React, { useState } from "react"
import { Icon } from "@iconify/react"
import SingleList from "./SingleList"
import PopupCategory from "./PopupCategory"
import useComponentVisible from "../../hooks/useComponentVisible"

function CategorySidebar({ cats }) {
  const [activeCat, setActiveCat] = useState("")
  const { ref, isComponentVisible, setIsComponentVisible } =
    useComponentVisible(false)

  const togglePopup = () => {
    setIsComponentVisible(!isComponentVisible)
    console.log(isComponentVisible)
  }

  const onPopupClick = () => {
    setIsComponentVisible(!isComponentVisible)
  }

  return (
    <>
      <div
        className="hidden md:block w-full bg-white text-neutral-700 text-b-lg font-medium rounded-md
    "
      >
        <div className="px-10 pb-4 md:px-6 md:pb-2 mb-1 text-b-md font-bold flex items-center md:pl-0">
          <Icon icon="ic:outline-menu-open" className="w-6 h-6" />
          <p className="pl-1">KATEGORI</p>
        </div>
        <ul>
          {cats.map((c, idx) =>
            c.show ? (
              <div
                key={c._id}
                style={{
                  animationDuration: `${300 + idx * 50}ms`,
                }}
                className="fade"
                onClick={() => setActiveCat(c.category)}
              >
                <SingleList
                  value={c.category}
                  to={`/?cat=${c.category}`}
                  isActive={c.category === activeCat}
                />
              </div>
            ) : null
          )}
        </ul>
      </div>
      <div className="flex flex-row w-full md:hidden">
        <button
          className="px-5 md:hidden flex items-center py-4 text-b-xl w-full border-b md:border-b-0 border-neutral-300"
          onClick={togglePopup}
        >
          <span className="text-h-md">
            <Icon icon="material-symbols:chevron-right-rounded" />
          </span>
          {activeCat ? (
            <h4 className="font-bold">{activeCat}</h4>
          ) : (
            <h4 className="font-bold">Pilih Kategori</h4>
          )}
        </button>
        <div
          ref={ref}
          className={`md:hidden absolute z-10 w-full left-0 drop-shadow-[0_0_35px_rgba(0,0,0,0.15)] top-16 transition-all  ${
            isComponentVisible ? "visible opacity-100" : "invisible opacity-0"
          }`}
        >
          <PopupCategory
            cats={cats}
            onClick={onPopupClick}
            setActive={setActiveCat}
          />
        </div>
      </div>
    </>
  )
}

export default CategorySidebar
