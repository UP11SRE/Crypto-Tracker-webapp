import React , { Suspense } from "react";
import Banner from "../components/Banner/Banner";

const CoinsTable = React.lazy(()=>import("../components/CoinsTable"));

const Homepage = () => {
  return (
    <div>
      <Banner />
      <Suspense fallback={<div>Loading...</div>}>
      <CoinsTable />
      </Suspense>
    </div>
  );
};

export default Homepage;
