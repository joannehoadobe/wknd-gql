import React from "react";
import { useParams } from "react-router-dom";
import "./breadcrumb.css";

const Breadcrumb = () => {
  const props = useParams();
  // CUSTOM for Blackrock
  const hasValue = props.parent || props.screen;
  if(hasValue) {
  return <nav className="breadcrumb">
        <ol className="breadcrumb-list">
          <li className="breadcrumb-list-item">{props.parent}</li>
          <li className="breadcrumb-list-item">{props.screen}</li>
        </ol>
      </nav>;
  }
  return null;
}

export default Breadcrumb;
  