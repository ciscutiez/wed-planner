import PinkLayout from '@/components/Layout/PinkLayout';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof PinkLayout> = {
  title: 'Layout/PinkLayout',
  component: PinkLayout,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  // args: { onClick: fn() },
} satisfies Meta<typeof PinkLayout>;
export default meta;
type Story = StoryObj<typeof PinkLayout>;
export const Layout: Story = {
  args: {},
};
