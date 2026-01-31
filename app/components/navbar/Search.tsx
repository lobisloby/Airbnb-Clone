"use client";

import useSearchModal from "@/app/hooks/useSearchModal";
import { BiSearch } from "react-icons/bi";

const Search = () => {
      const searchModal = useSearchModal()
  return (
    <div
      onClick={searchModal.onOpen}
      className="
        border
        w-full
        md:w-auto
        py-2
        rounded-full
        shadow-sm
        hover:shadow-md
        transition
        cursor-pointer
        border-gray-300
    "
    >
      <div
        className="
            flex
            flex-row
            items-center
            justify-between
        "
      >
        <div
          className="
                text-sm
                font-semibold
                px-6
            "
        >
          AnyWhere
        </div>
        <div
          className="
                hidden
                sm:block
                text-sm
                border-x
                font-semibold
                px-6
                flex-1
                text-center
                border-gray-300
            "
        >
          AnyWeek
        </div>
        <div
          className="
                    flex
                    text-sm
                    pl-6
                    pr-2
                    items-center
                    text-gray-600
                    gap-3
                    flex-row
                "
        >
          <div
            className="
                    hidden
                    sm:block
                "
          >
            Add Guests
          </div>
          <div
            className="
                    p-2
                    bg-rose-500
                    rounded-full
                "
          >
            <BiSearch size={18} className="text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Search;
