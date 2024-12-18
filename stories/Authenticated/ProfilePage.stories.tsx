
import ProfilePage from '@/app/(protected)/profile/page';

import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ProfilePage> = {
  title: 'Page/Profile Page',
  component: ProfilePage,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ProfilePage>
export default meta

type Story = StoryObj<typeof ProfilePage>
export const Profile: Story = {
    render: () => <ProfilePage />,
  };
  
