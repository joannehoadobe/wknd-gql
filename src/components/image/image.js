import React from "react";
import Img from "@renditions/react-img";

const Image = (props) => {
  const renditions = [
      { name:"thumbnail", width: 319 }, 
      { name:"web", width: 1280 }
    ];

    // CUSTOM - remove
  const myImage = props.src ? (props.src._publishUrl || props.src) : null;
    // const myImage = props.src._publishUrl || props.src;

  const getSrc = (filename, rendition) => {
    
    // const url = myImage.substr(myImage.lastIndexOf('\\') + 1).split('.');
    // CUSTOM
    const url = myImage ? myImage.substr(myImage.lastIndexOf('\\') + 1).split('.') : '';
    let ext = url.length > 1? url[url.length-1]:"jpeg";
    if(ext === "JPG" || ext === "jpg") ext = "jpeg";
    // CUSTOM for Blackrock
    if(ext === "png" && (rendition.width === '1280' || rendition.width > 320)) ext = "jpeg";
    // end CUSTOM for Blackrock
    return `${myImage}/_jcr_content/renditions/cq5dam.${rendition.name}.${rendition.width}.${rendition.width}.${ext}`;
  };

  return (
    <Img
      renditions={renditions}
      getSrc={getSrc.bind(null, "")}
      className={props.className}
    />
  );
}

export default Image;
