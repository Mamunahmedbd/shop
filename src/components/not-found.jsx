import React from "react";
import Layout from "./Shared/layout";

const NotFoundPage = () => {
  const style = {
    fontWeight: "bold",
    textAlign: "center",
  };
  return (
    <Layout>
      <div style={style}>
        <h2>Unfortunotly This is 404 page! We Can't find that Page</h2>
      </div>
    </Layout>
  );
};

export default NotFoundPage;
