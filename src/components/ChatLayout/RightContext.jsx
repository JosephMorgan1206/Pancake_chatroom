import React, { useState, useEffect } from "react";
import { ContextMenu } from "../styles/styles";
import Menu from "./Menu";
const MenuContext = ({ data }) => {
  const [clicked, setClicked] = useState(false);
  const [points, setPoints] = useState({
    x: 0,
    y: 0,
  });
  useEffect(() => {
    const handleClick = () => setClicked(false);
    window.addEventListener("click", handleClick);
    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, []);
  return (
    <div>
      {data.map((item) => (
        <div
          onContextMenu={(e) => {
            e.preventDefault();
            setClicked(true);
            setPoints({
              x: e.pageX,
              y: e.pageY,
            });
            console.log("Right Click", e.pageX, e.pageY);
          }}
        >
          
        </div>
      ))}
      {clicked && (
        <ContextMenu top={points.y} left={points.x}>
          <ul>
            <li>Edit</li>
            <li>Copy</li>
            <li>Delete</li>
          </ul>
        </ContextMenu>
      )}
    </div>
  );
};
export default MenuContext;

const ContextMenu = styled.div`
  .contextContainer {
    z-index: 1;
    width: 100%;
    height: 500px;
    background: #673ab7;
  }
  .rightClick {
    z-index: 12;
    position: fixed;
    background: rgb(240, 200, 1);
  }
  .menuElement {
    color: #222222;
    cursor: pointer;
    padding: 17px 36px;
  }
  .menuElement:hover {
    color: #fff;
    background: #009688;
  }
`;