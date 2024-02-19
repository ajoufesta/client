import React from "react";

interface pagePropTypes {
  dayId: string;
}

const page = (props: pagePropTypes) => {
  return <div>{props.dayId}번째날의 공연순서페이지입니다</div>;
};

export default page;
