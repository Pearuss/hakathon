import React, { useEffect, useState } from "react";
// import HeaderAdmin from "../components/HeaderAdmin";
// import firebase from "../utils/firebase";
// import { messageListen } from "../utils/firebase";

// import MessageText from "./MessageText";
// import useToggle from "../hooks/useToggle";
import TextField from '@mui/material/TextField';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import PostItem from '../components/PostItem'

function Dashboard() {
  const [value, setValue] = React.useState(new Date());
  return (
    <div className="h-screen flex items-center text-white">
      <div className="w-[240px] bg-[#2F3136] h-full">
        <div className="flex justify-between my-5 px-3">
          <h4 className="text-[15px] font-[600]">Hybrid Technologies</h4>
          {/* <ChevronDownIcon className="h-4" /> */}
        </div>
        <div className="h-[1.5px] bg-black"></div>
        <div className="flex h-[48px] items-center justify-between my-auto px-3 text-[#dcddde] uppercase relative">
          <h4 className="text-[11.5px]  font-[600] uppercase">Text Channels</h4>
          {/* <PlusSmIcon className="h-4" onClick={setShowInputAddGroup} /> */}
        </div>
        <div
          className={`flex h-[42px] items-center px-2 mx-2 mt-2 text-[#dcddde] bg-[#40444B] cursor-pointer  rounded`}
        >
          {/* <HashtagIcon className="h-5 text-[rgb(142,146,151)]" /> */}
          <div className="font-[500] text-[13px] mr-auto mt-[2px] ml-2">
            Dashboard
          </div>
        </div>
        <div
          className={`flex h-[42px] items-center px-2 mx-2 mt-2 text-[#dcddde] bg-[#40444B] cursor-pointer  rounded`}
        >
          {/* <HashtagIcon className="h-5 text-[rgb(142,146,151)]" /> */}
          <div className="font-[500] text-[13px] mr-auto mt-[2px] ml-2">
            Dashboard
          </div>
        </div>
      </div>
      <div className="flex flex-1 flex-col w-full h-full">
        {/* <HeaderAdmin /> */}
        <div className="bg-white w-full rounded h-200px p-4 px-6 mb-4">
          <h4 className="pb-4 mb-4 border-b-2 border-gray-500">
            Advanced search
          </h4>
          <div className="flex items-center gap-10">
            <div className="flex flex-col">
              <span className="mb-2 font-medium text-gray-700 tracking-wide">
                Keyword
              </span>
              <input
                // value={keyword}
                // onChange={(e) => setKeyword(e.target.value)}
                className="border border-grayBorder rounded w-[220px] py-[9px] px-3 outline-none"
                type="text"
                placeholder="Author, title articles..."
              />
            </div>
            <div className="flex flex-col">
              <span className="mb-2 font-medium text-gray-700 tracking-wide">
                Public at
              </span>
              <LocalizationProvider dateAdapter={AdapterMoment}>
                <DatePicker
                  label="Basic example"
                  value={value}
                  size="small"
                  onChange={(newValue) => {
                    setValue(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
            </div>
            <div className="flex items-center mt-6">
              <button
                // onClick={handleClickSearch}
                className="bg-[#EDF1F7] py-[9px] px-6 mr-4 rounded-sm font-medium tracking-wider text-gray-600"
              >
                Search
              </button>
              <button
                // onClick={handleCancleSearch}
                className="bg-[#EDF1F7] py-[9px] px-6 mr-4 rounded font-medium tracking-wider text-gray-600"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>

        {/* table */}
        <div className=" w-full h-full rounded p-4 px-6 text-gray-600">
        <div className="flex pb-4 mb-4 border-b-2 border-gray-500 items-center">
          <h4>All articles</h4>
          <span className="text-sm mt-2 ml-2">Total 4</span>
          <div className="flex gap-4 ml-auto mt-2 pr-3 cursor-pointer">
            {/* <button onClick={handleClickExport}>
              <Image src="/images/share.png" width={20} height={20} />
            </button> */}
          </div>
        </div>
        <div className="grid grid-cols-9 bg-[#EDF1F7] px-3 py-1 font-medium items-center">
          <span className="col-span-4">Title</span>
          <span>Published at</span>
          <span>Author</span>
          <span>Status</span>
          <span>Statistics</span>
          <span className="ml-8">Option</span>
        </div>
        {[1, 2, 3, 4, 5, 6, 7]?.map((_, index) => (<PostItem key={index}  />))}
      </div>
      </div>
    </div>
  );
}

export default Dashboard;
