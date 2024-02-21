import type { Meta, StoryObj } from "@storybook/react";

import { Box, BoxProps } from "@ignite-ui/react";

export default {
  title: "Surfaces/box",
  component: Box,
  args: {
    children: (
      <>
        <p>Testando box</p>
      </>
    ),
  },
} as Meta<BoxProps>;

export const Primary: StoryObj<BoxProps> = {};
