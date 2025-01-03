import UpdatePasswordForm from '@/components/Form/update-password';


import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof UpdatePasswordForm> = {
  title: 'Forms/Update Password Form',
  component: UpdatePasswordForm,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs']
};

export default meta;

type Story = StoryObj<typeof UpdatePasswordForm>;

export const UpdatePassword: Story = {
  args: {
    initialValues: {
      email: '',
    },
  },
  render: () => <UpdatePasswordForm />,
};
