/* eslint-disable @typescript-eslint/no-unused-vars */



import { useRef, useState } from 'react';
import { Alert, AlertDescription } from '../ui/alert';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog';
import { Button } from '../ui/button';
import { Label } from '../ui/label';
import { Input } from '../ui/input';

export default function DeleteUserForm() {
    const [confirmingUserDeletion, setConfirmingUserDeletion] = useState(false);
    // const passwordInput = useRef();

    // const {
    //     data,
    //     setData,
    //     delete: destroy,
    //     processing,
    //     reset,
    //     errors,
    //     clearErrors,
    // } = useForm({
    //     password: '',
    // });

    // const confirmUserDeletion = () => {
    //     setConfirmingUserDeletion(true);
    // };

    // const deleteUser = (e) => {
    //     e.preventDefault();

    //     destroy(route('profile.destroy'), {
    //         preserveScroll: true,
    //         onSuccess: () => closeModal(),
    //         onError: () => passwordInput.current.focus(),
    //         onFinish: () => reset(),
    //     });
    // };

    // const closeModal = () => {
    //     setConfirmingUserDeletion(false);

    //     clearErrors();
    //     reset();
    // };

    return (
        <div className="space-y-6">
        <Alert variant="destructive">
          <AlertDescription>
            Once your account is deleted, all of its resources and data will be permanently deleted. 
            Before deleting your account, please download any data or information that you wish to retain.
          </AlertDescription>
        </Alert>
  
        <Dialog open={confirmingUserDeletion}   onOpenChange={(isOpen) => setConfirmingUserDeletion(isOpen)}>
        <DialogTrigger asChild>
            <Button className="bg-red-600">Delete Account</Button>
          </DialogTrigger>
          <DialogContent>
            <form>
              <DialogHeader>
                <DialogTitle>Are you sure you want to delete your account?</DialogTitle>
                <DialogDescription>
                  This action cannot be undone. Please enter your password to confirm you would like to permanently delete your account.
                </DialogDescription>
              </DialogHeader>
              <div className="my-6">
                <Label htmlFor="password" className="sr-only">
                  Password
                </Label>
                <Input
                  id="password"
                  type="password"
                  // ref={passwordInput}
                  // value={data.password}
                  // onChange={(e) => setData('password', e.target.value)}
                  placeholder="Password"
                  required
                />
                {/* {errors.password && (
                  <p className="mt-2 text-sm text-red-500">{errors.password}</p>
                )} */}
              </div>
              <DialogFooter>
                <Button type="button"  >
                  Cancel
                </Button>
                {/* <Button type="submit"  disabled={processing}>
                  {processing && <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />}
                  Delete Account
                </Button> */}
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    );
}
