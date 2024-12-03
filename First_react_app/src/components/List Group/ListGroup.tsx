import { useState } from "react";
import styles from "./ListGroup.module.css"

interface Props{
  items: string[]
  heading: string
  onSelectItem: (item: string) => void
}
function ListGroup({items, heading, onSelectItem}: Props) {
  let [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>List item Not Found</p>}
      <ul className={[styles.listGroup, styles.container].join(" ")}>
        {items.map((item, index) => (
          <li
            key={item}
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => {
              setSelectedIndex(index)
              onSelectItem(item)
            }
            }
          >
            {item}
          </li>
        ))}
      </ul>
    </> 
  );
}

export default ListGroup;
