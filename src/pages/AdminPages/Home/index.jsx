import React from "react";
import Header from "../../../components/AdminComponents/Header";
import Sidebar from "../../../components/AdminComponents/Sidebar";
import MainBar from "../../../components/AdminComponents/HomePageEdit";

const Home = () => {
  return (
    <div>
      <Header />

      <div className="flex">
        <Sidebar />

        <MainBar />
      </div>
    </div>
  );
};

export default Home;
