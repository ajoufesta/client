import React from "react";

const page = ({ params }: { params: { dayId: string } }) => {
  return <div>{params.dayId}번째날의 공연순서페이지입니다</div>;
};

export default page;
