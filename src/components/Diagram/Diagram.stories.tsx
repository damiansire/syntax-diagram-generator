import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Diagram from "./Diagram";
import { DiagramProps } from "./Diagram.types";

const meta: Meta<typeof Diagram> = {
  component: Diagram,
  title: "Marbella/Diagram",
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Diagram>;

export const Primary: Story = (args: DiagramProps) => {
  return <Diagram data-testId="InputField-id" {...args} />;
};

const whileSyntaxDiagram = {
  nodes: [
    { id: 1, text: "while" },
    { id: 2, text: "(" },
    { id: 3, text: "expression" },
    { id: 4, text: ")" },
  ],
  edges: [
    { from: 1, to: 2 },
    { from: 2, to: 3 },
    { from: 3, to: 4 },
  ],
};

Primary.args = {
  nodes: whileSyntaxDiagram.nodes,
  edges: whileSyntaxDiagram.edges,
};
