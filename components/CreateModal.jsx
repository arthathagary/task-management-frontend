"use client";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import axios from "axios";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
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

  const handleClick = async (e) => {
    e.preventDefault();
    console.log(info, "info");
    const dataToSend = {
      start: info.startStr,
      end: info.endStr,
      title: data,
      id: uuid(),
    };
    console.log(dataToSend, "data");
    setEvents([
      ...events,
      {
        start: info.start,
        end: info.end,
        title: data,
        id: uuid(),
      },
    ]);
    const res = await axios.post(
      "http://localhost:8080/api/v1/events",
      dataToSend
    );
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
              <button
                onClick={() => {
                  setIsOpen(false);
                  setData("");
                }}
              >
                Cancel
              </button>
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
