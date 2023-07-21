"use client";
import Image from "next/image";
import React from "react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

import { useToast } from "@/components/ui/use-toast";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

import Map from "./map/page";

export default function Home() {
  const [alert, setAlert] = React.useState(false);
  const { toast } = useToast();

  const mapValue = {
    center: {
      lat: 50.99835602,
      lng: 95.01502627,
    },
    zoom: 11,
  };

  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    //   <div onClick={() => setAlert(!alert)}>click</div>
    //   {alert ? (
    //     <Alert>
    //       <AlertTitle>Heads up!</AlertTitle>
    //       <AlertDescription>
    //         You can add components and dependencies to your app using the cli.
    //       </AlertDescription>
    //     </Alert>
    //   ) : null}
    //   <div>
    //     <AlertDialog>
    //       <AlertDialogTrigger>Open</AlertDialogTrigger>
    //       <AlertDialogContent>
    //         <AlertDialogHeader>
    //           <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
    //           <AlertDialogDescription>
    //             This action cannot be undone. This will permanently delete your
    //             account and remove your data from our servers.
    //           </AlertDialogDescription>
    //         </AlertDialogHeader>
    //         <AlertDialogFooter>
    //           <AlertDialogCancel>Cancel</AlertDialogCancel>
    //           <AlertDialogAction>Continue</AlertDialogAction>
    //         </AlertDialogFooter>
    //       </AlertDialogContent>
    //     </AlertDialog>
    //   </div>
    //   <div>
    //     <Dialog>
    //       <DialogTrigger asChild>
    //         <Button variant="outline">Edit Profile</Button>
    //       </DialogTrigger>
    //       <DialogContent className="sm:max-w-[425px]">
    //         <DialogHeader>
    //           <DialogTitle>Edit profile</DialogTitle>
    //           <DialogDescription>
    //             Make changes to your profile here. Click save when you're done.
    //           </DialogDescription>
    //         </DialogHeader>
    //         <div className="grid gap-4 py-4">
    //           <div className="grid grid-cols-4 items-center gap-4">
    //             <Label htmlFor="name" className="text-right">
    //               Name
    //             </Label>
    //             <Input id="name" value="Pedro Duarte" className="col-span-3" />
    //           </div>
    //           <div className="grid grid-cols-4 items-center gap-4">
    //             <Label htmlFor="username" className="text-right">
    //               Username
    //             </Label>
    //             <Input id="username" value="@peduarte" className="col-span-3" />
    //           </div>
    //         </div>
    //         <DialogFooter>
    //           <Button type="submit">Save changes</Button>
    //         </DialogFooter>
    //       </DialogContent>
    //     </Dialog>
    //   </div>
    //   <div>
    //     <Button
    //       onClick={() => {
    //         toast({
    //           title: "Scheduled: Catch up",
    //           description: "Friday, February 10, 2023 at 5:57 PM",
    //         });
    //       }}
    //     >
    //       Show Toast
    //     </Button>
    //   </div>
    //   <div className="w-[90vw] h-[500px]">
    //     <GoogleMapReact
    //       bootstrapURLKeys={{ key: "" }}
    //       defaultCenter={mapValue?.center}
    //       defaultZoom={mapValue?.zoom}
    //     >
    //       <AnyReactComponent lat={80.955413} lng={50.337844} text="My Marker" />
    //     </GoogleMapReact>
    //   </div>
    // </main>
    <>
      <Map />
    </>
  );
}
