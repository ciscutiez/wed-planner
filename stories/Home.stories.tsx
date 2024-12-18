
import Home from '@/app/page';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Home> = {
  title: 'Page/Home Page',
  component: Home,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Home>
export default meta

type Story = StoryObj<typeof Home>
export const SigninPage: Story = {
    render: () => <Home />,
  };
  
