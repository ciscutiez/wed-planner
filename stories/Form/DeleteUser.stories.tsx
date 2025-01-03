import DeleteUserForm from '@/components/Form/delete-user';
import { Card } from '@/components/ui/card';

import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof DeleteUserForm> = {
  title: 'Forms/Delete User Form',
  component: DeleteUserForm,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs']
};

export default meta;

type Story = StoryObj<typeof DeleteUserForm>;

export const DeleteUser: Story = {
  // args: {
  //   initialValues: {
  //     email: '',
  //   },
  // },
  render: () => (
    <Card className=''>
      <DeleteUserForm />
    </Card>
  ),
};
