import { Fragment } from "react";
import Navbar from "./Navbar";

const CustomMainLayout = ({ children }) => {
  return (
    <Fragment>
      <Navbar />
      <div>{children}</div>
    </Fragment>
  );
};

export default CustomMainLayout;
