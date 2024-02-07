import React from "react";
import Footer from "../_commons/Footer";

const page = ({ params }: { params: { dayId: string } }) => {
  return (
    <div>
      {params.dayId}번째날의 공연순서페이지입니다
      <Footer />
    </div>
  );
};

export default page;
