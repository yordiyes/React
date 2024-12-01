import { useState } from "react";
interface Props{
  items: String[]
  heading: String
}
function ListGroup({items, heading}: Props) {
  let [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>List item Not Found</p>}
      <ul className={"list-group"}>
        {items.map((item, index) => (
          <li
            key={index}
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => setSelectedIndex(index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </> 
  );
}

export default ListGroup;
