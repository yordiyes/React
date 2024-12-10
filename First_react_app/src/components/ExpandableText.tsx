  import { useState } from "react";
  import styled from "styled-components";

  interface Props {
    children: string;
    maxChars?: number;
  }

  export default function ExpandableText({ children, maxChars = 100 }: Props) {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleClick = () => {
      setIsExpanded((prev) => !prev); // Toggle the expanded state
    };
    return (
      <Container >
        {isExpanded ? children: children.slice(0, maxChars) + "..."}
        <button className="btn" onClick={handleClick}>
          {!isExpanded ? "More" : "Less"}
        </button>
      </Container>
    );
  }

  const Container = styled.div`
    background-color: #333333;
    font-size: 1.5rem;
    color: #889fdd;
    
    .btn{
      background-color: #dd4433;
      color: white;
      font-size: 1.4rem;
      border-radius: 10px;
      border: none
    }
  `;
