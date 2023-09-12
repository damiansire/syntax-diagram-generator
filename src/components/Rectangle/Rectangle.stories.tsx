import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Rectangle from "./Rectangle";
import { RectangleProps } from "./Rectangle.types";

const meta: Meta<typeof Rectangle> = {
  component: Rectangle,
  title: "Marbella/Rectangle",
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Rectangle>;

export const Primary: Story = (args: RectangleProps) => (
  <Rectangle data-testId="InputField-id" {...args} />
);
Primary.args = {
  width: 200,
  height: 200,
  text: "Prueba de texto",
};
