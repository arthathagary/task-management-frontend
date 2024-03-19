"use client";
import { useState } from "react";
import { v4 as uuid } from "uuid";

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
} from "./ui/alert-dialog";

import { Input } from "./ui/input";

export default function CreateModal({
  isOpen,
  setIsOpen,
  setEvents,
  events,
  info,
}) {
  const [data, setData] = useState();

  const handleOnChange = (e) => {
    setData(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    console.log(data, "preseed");
    setEvents([
      ...events,
      {
        start: info.start,
        end: info.end,
        title: data,
        id: uuid(),
      },
    ]);
    setIsOpen(false);
    setData("");
  };
  return (
    <>
      <AlertDialog open={isOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              <form>
                <Input
                  placeholder="Enter event name"
                  onChange={handleOnChange}
                  value={data}
                />
              </form>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>
              <button onClick={() => setIsOpen(false)}>Cancel</button>
            </AlertDialogCancel>
            <AlertDialogAction>
              <button onClick={handleClick}>Continue</button>
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
