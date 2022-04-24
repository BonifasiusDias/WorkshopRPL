import Footer from "../Components/Common/Footer";
import Navbar from "../Components/Common/Navbar";
import DetailProduk from "../Components/Profile/DetailProduk";
import ProfileCard from "../Components/Profile/ProfileCard";

import React from "react";

const Profile = () => {
  return (
    <>
      <Navbar />
      <div className="my-36 mx-auto container flex justify-center h-full w-full font-nunito">
        <div className="flex w-full">
          <left className="flex w-full">
            <ProfileCard />
            <DetailProduk />
          </left>
          <right></right>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profile;