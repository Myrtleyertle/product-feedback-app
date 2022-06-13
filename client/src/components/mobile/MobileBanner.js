import React, { useState } from "react";
import classes from "./MobileNavbar.module.css";
import Button from "react-bootstrap/esm/Button";
import Offcanvas from "react-bootstrap/esm/Offcanvas";
import Banner from "../Banner";
import Sidebar from "../Sidebar";

const MobileBanner = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const OffCanvas = ({ name, ...props }) => {
    return (
      <>
        <Button variant="primary" onClick={handleShow} className="me-2">
          menu
        </Button>
        <Offcanvas show={show} onHide={handleClose} {...props}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>{''}</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Sidebar />
          </Offcanvas.Body>
        </Offcanvas>
      </>
    );
  };
  return (
    <div className={classes.mobilebanner}>
      <div className={classes.info}>
        <h3 className={classes.mobiletitle}>FrontEnd Mentor</h3>
        <h4 className={classes.mobilesubtitle}>Feedback Board</h4>
        <img
          src="../../assets/suggestions/desktop/background-header.png"
          className={classes.mobilebannerimg}
          alt="banner"
        />
      </div>
      <div className={classes.sidebar}>
        <OffCanvas  placement="end" />
      </div>
    </div>
  );
};

export default MobileBanner;
