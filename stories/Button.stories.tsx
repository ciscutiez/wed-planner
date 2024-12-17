import { Button } from '@/components/ui/button';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { HeartCrack, Loader } from 'lucide-react';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof Button> = {
  title: 'Example/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: [
        'default',
        'outline',
        'destructive',
        'secondary',
        'link',
        'pink',
        'white',
      ],
      description: 'Different variant of the button.',
      defaultValue: 'default',
    },
    size: {
      control: { type: 'select' },
      options: ['default', 'sm', 'lg', 'icon'],
      description: 'The size of the button.',
      defaultValue: 'default',
    },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    variant: 'default',
    children: 'Button',
  },
};
export const Destructive: Story = {
  args: {
    variant: 'destructive',
    children: 'Button',
  },
};

export const Link: Story = {
  args: {
    variant: 'link',
    children: 'Button',
  },
};
export const Ghost: Story = {
  args: {
    variant: 'ghost',
    children: 'Button',
  },
};
export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Button',
  },
};
export const Pink: Story = {
  args: {
    variant: 'pink',
    children: 'Button',
  },
};
export const PinkOutline: Story = {
  args: {
    variant: 'white',
    children: 'Button',
  },
};
export const Icon: Story = {
  args: {
    variant: 'pink',
    children: (
      <div>
        <HeartCrack />
      </div>
    ),
  },
};
export const TextWithIcon: Story = {
  args: {
    variant: 'pink',
    children: (
      <>
        Add me
        <HeartCrack />
      </>
    ),
  },
};

export const Loading: Story = {
  args: {
    children: (
      <>
        <Loader className='size-4 animate-spin' />
      </>
    ),
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    children: 'Button',
  },
};

export const Small: Story = {
  args: {
    size: 'lg',
    children: 'Button',
  },
};
