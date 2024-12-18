
import Signup from '@/app/auth/signup/page';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Signup> = {
  title: 'Page/Signup Page',
  component: Signup,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Signup>
export default meta

type Story = StoryObj<typeof Signup>
export const SignupPage: Story = {
    render: () => <Signup />,
  };
  
