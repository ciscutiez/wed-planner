'use client'

import { useState } from 'react'

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import UpdateProfileInformation from '@/components/Form/update-profile'
import UpdatePasswordForm from '@/components/Form/update-password'
import DeleteUserForm from '@/components/Form/delete-user'



export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState('account')

  return (
    // <AuthenticatedLayout className="">
    //   <Head title="Profile" />
     
      <Card>
        <CardHeader>
          <CardTitle>Manage Your Account</CardTitle>
          <CardDescription>
            Update your profile information, change your password, or delete your account.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs value={activeTab} onValueChange={setActiveTab} className="">
            <TabsList className="">
              <TabsTrigger value="account">Account</TabsTrigger>
              <TabsTrigger value="password">Password</TabsTrigger>
              <TabsTrigger value="delete">Delete Account</TabsTrigger>
            </TabsList>
            <div className="mt-6">
              <TabsContent value="account">
                <UpdateProfileInformation
                  // mustVerifyEmail={mustVerifyEmail}
                  // status={status}
                />
              </TabsContent>
              <TabsContent value="password">
                <UpdatePasswordForm />
              </TabsContent>
              <TabsContent value="delete">
                <DeleteUserForm />
              </TabsContent>
            </div>
          </Tabs>
        </CardContent>
      </Card>
    // </AuthenticatedLayout>
  )
}

