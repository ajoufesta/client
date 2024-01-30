import React from "react";

const page = ({ params }: { params: { dayId: string; sectionId: string } }) => {
  return (
    <div>
      {params.dayId}번째날의 {params.sectionId}섹션의 부스정보페이지입니다
    </div>
  );
};

export default page;
