import UpdateProfileInformation from '@/components/Form/update-profile';

import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof UpdateProfileInformation> = {
  title: 'Forms/Update Profile Form',
  component: UpdateProfileInformation,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs']
};

export default meta;

type Story = StoryObj<typeof UpdateProfileInformation>;

export const UpdateProfile: Story = {
  args: {
    initialValues: {
      email: '',
      name: '',
    },
  },
  render: () => <UpdateProfileInformation />,
};
