import React from "react";
import "./QuickInfo.css";
const QuickInfo = () => {
  return (
    <div className="nv-cn-main">
      <div className="nv-cn">
        <div className="nv-cn-01">
          <div className="nv-cn-con">
            <span className="material-symbols-outlined">mail</span>{" "}
            <p>greatsohis@gmail.com</p>
          </div>
          <div className="nv-cn-con">
            <span className="material-symbols-outlined">call</span>
            <p>+233 24 273 2224</p>
          </div>
        </div>
        <div className="nv-cn-02">
          <a href="#" className="fa fa-facebook"></a>
          <a href="#" className="fa fa-twitter"></a>
          <a href="#" className="fa fa-instagram"></a>
          <a href="#" className="fa fa-whatsapp"></a>
        </div>
      </div>
    </div>
  );
};

export default QuickInfo;
