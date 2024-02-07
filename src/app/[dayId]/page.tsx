import React from "react";
import Footer from "../_commons/Footer";

const page = ({ params }: { params: { dayId: string } }) => {
  return (
    <div className="h-whole_height w-whole_width border border-black">
      {/* <div className="box-content h-footer w-375rem border border-black d-flex justify-content-end align-items-end"></div> */}
      {params.dayId}번째날의 공연순서페이지입니다
      <Footer />
    </div>
  );
};

export default page;
