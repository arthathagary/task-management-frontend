"use client";
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
import { useState } from "react";
import { Input } from "./ui/input";
import axios from "axios";

export default function EditModal({ isOpen, onEdit, event, setIsOpen }) {
  const [data, setData] = useState();

  const handleOnChange = (e) => {
    setData(e.target.value);
  };

  const handleEdit = async () => {
    try {
      console.log(data);
      await axios.put(`http://localhost:8080/api/v1/event/${event.id}`, {
        data: data,
      });
    } catch (error) {
      console.log(error);
    }
    location.reload();
    setIsOpen(false);
  };

  return (
    <>
      <AlertDialog open={isOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              Are you absolutely sure to edit data?
            </AlertDialogTitle>
            <AlertDialogDescription>
              <Input
                placeholder="Enter new event name"
                onChange={handleOnChange}
                value={data}
              />
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>
              <button onClick={() => setIsOpen(false)}>Cancel</button>
            </AlertDialogCancel>
            <AlertDialogAction>
              <button onClick={handleEdit}>Continue</button>
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
