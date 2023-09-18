import React from "react";
import styled from "styled-components";
import { DiagramProps } from "./Diagram.types";
import { Node } from "./Diagram.types";
import Rectangle from "../Rectangle/Rectangle";
const StyledButton = styled.button<DiagramProps>`
  border: 0;
  line-height: 1;
  font-size: 15px;
  cursor: pointer;
  font-weight: 700;
  font-weight: bold;
  border-radius: 3px;
  display: inline-block;
`;

const Diagram: React.FC<DiagramProps> = ({ nodes, edges, ...props }) => {
  return (
    <div>
      {nodes.map((node: Node) => (
        <Rectangle text={node.text} width={100} height={100}></Rectangle>
      ))}
    </div>
  );
};

export default Diagram;
