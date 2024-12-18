import Signin from '@/app/auth/signin/page';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Signin> = {
  title: 'Page/Signin Page',
  component: Signin,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Signin>
export default meta

type Story = StoryObj<typeof Signin>
export const SigninPage: Story = {
    render: () => <Signin />,
  };
  
