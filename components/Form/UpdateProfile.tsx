import { Alert, AlertDescription } from "../ui/alert";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";





export default function UpdateProfileInformation() {



    // const { data, setData, patch, errors, processing, recentlySuccessful } =
    //     useForm({
    //         name: user.name,
    //         email: user.email,
    //     });

    // const submit = (e) => {
    //     e.preventDefault();

    //     patch(route("profile.update"));
    // };

    return (
        <form  className="space-y-6">
            <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                    id="name"
                    // value={data.name}
                    // onChange={(e) => setData("name", e.target.value)}
                    required
                    // isFocused
                />
                {/* {errors.name && (
                    <p className="text-sm text-red-500">{errors.name}</p>
                )} */}
            </div>

            <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                    id="email"
                    type="email"
                    // value={data.email}
                    // onChange={(e) => setData("email", e.target.value)}
                    required
                />
                {/* {errors.email && (
                    <p className="text-sm text-red-500">{errors.email}</p>
                )} */}
            </div>

            {/* {mustVerifyEmail && user.email_verified_at === null && ( */}
                <Alert>
                    <AlertDescription>
                        Your email address is unverified.
                        <Button
                            variant="link"
                            className="font-normal underline"
                            // onClick={() => route("verification.send")}
                        >
                            Click here to re-send the verification email.
                        </Button>
                    </AlertDescription>
                </Alert>
            {/* )} */}

            {status === "verification-link-sent" && (
                <Alert>
                    <AlertDescription>
                        A new verification link has been sent to your email
                        address.
                    </AlertDescription>
                </Alert>
            )}

            <Button type="submit" className="bg-stone-800" >
                Save Changes
            </Button>

        </form>
    );
}