
import { useState } from "react";
import { BiLike , BiSolidLike} from "react-icons/bi";

interface Props {
  onClick: () => void;
}

export default function Like({ onClick }: Props) {
  const [clicked, setClicked] = useState(false);

  if(clicked)
    return (
      <BiLike 
        size="40"
        onClick={() => {
          setClicked(!clicked)
          onClick();
        }}
      />
    );

    return (
    <BiSolidLike 
        size="40"
        onClick={() => {
          setClicked(!clicked)
          onClick(); 
        }}
      />
    );
}
