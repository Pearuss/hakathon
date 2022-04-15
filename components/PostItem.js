/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-props-no-spreading */
import { Switch } from "@mui/material";
import React, { useState } from "react";

// import Switch from "@material-ui/core/Switch";
// import { IconButton, Tooltip } from "@mui/material";
// import Image from "next/image";
// import Swal from "sweetalert2";

// import useFetch from "../../../hooks/use-fetch";
// import { formatDate, truncate } from "../../../utilities/helper";

function PostList() {
  return (
    <div className="grid grid-cols-9 gap-1 bg-red hover:bg- px-3 py-1 font-medium items-center">
      <span className="col-span-4 flex items-center w-[100%] py-1">
        <div className="relative w-[220px] max-w-[120px] mr-2 h-[68px] ">
          {/* <Image
            className="overflow-hidden rounded"
            loader={() => imgArticle}
            src={imgArticle}
            onError={() => {
              setImgArticle(
                `${process.env.NEXT_PUBLIC_IMAGE_URL}/uploads/static/images/cover-photo4.jpg`
              );
            }}
            alt="Article's image"
            layout="fill"
            objectFit="cover"
            priority
          /> */}
        </div>
        <div className="flex flex-col mt-[-5px] mb-auto">
          <h6 className="text-textAdmin text-base">{"title"}</h6>
        </div>
      </span>
      <span>12 Feb 2022</span>
      <span>Le Huynh Duc</span>
      <span>
        true
      </span>

      {/* <Link href={linkDetail}>
          <button className="flex-1 ml-6">
            <Image src="/images/edit.png" width={20} height={20} />
          </button>
        </Link> */}
      <span className="grid grid-cols-3 ml-[-40%]">
        {/* <button className="flex items-center">
          <Image
            loader={() =>
              `${process.env.NEXT_PUBLIC_IMAGE_URL}/uploads/static/images/target.png`
            }
            src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/uploads/static/images/target.png`}
            alt="Target"
            width={20}
            height={20}
          />
          <span className="ml-[10%]">{post.countInwork}</span>
        </button>
        <button className="flex items-center 2xl:ml-[18%]">
          <Image
            loader={() =>
              `${process.env.NEXT_PUBLIC_IMAGE_URL}/uploads/static/images/heart.png`
            }
            src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/uploads/static/images/heart.png`}
            alt="Like"
            width={20}
            height={20}
          />
          <span className="ml-[10%]">{post.countLike}</span>
        </button>
        <button className="flex items-center 2xl:ml-[38%]">
          <Image
            loader={() =>
              `${process.env.NEXT_PUBLIC_IMAGE_URL}/uploads/static/images/comment.png`
            }
            src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/uploads/static/images/comment.png`}
            alt="Comment"
            width={20}
            height={20}
          />
          <span className="ml-[10%]">{post.countComment}</span>
        </button> */}
      </span>
      <span className="ml-8">
        
          <Switch
            checked={true}
            // onChange={changeStatusHandler}
            // color="default"
            // className="text-red-400"
            // inputProps={{ "aria-label": "primary checkbox" }}
          />
      
      </span>
    </div>
  );
}

export default PostList;
