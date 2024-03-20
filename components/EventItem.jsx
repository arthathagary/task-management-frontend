"use client";
import React, { useState } from "react";
import DeleteModal from "./DeleteModal";
import EditModal from "./EditModal";

export default function EventItem({ info, onDelete, onEdit }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenEdit, setIsOpenEdit] = useState(false);
  const { event } = info;
  return (
    <>
      <div className="flex justify-between items-center w-full">
        <div>
          <p>{event.title}</p>
        </div>

        <div className="flex items-center gap-1">
          <button onClick={() => setIsOpenEdit(true)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-square-pen"
            >
              <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
              <path d="M18.375 2.625a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4Z" />
            </svg>
          </button>

          {/* <button onClick={() => onDelete(event)}> */}
          <button onClick={() => setIsOpen(true)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-trash text-red-600"
            >
              <path d="M3 6h18" />
              <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
              <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
            </svg>
          </button>
        </div>
      </div>
      <DeleteModal
        isOpen={isOpen}
        onDelete={onDelete}
        event={event}
        setIsOpen={setIsOpen}
      />

      <EditModal
        isOpen={isOpenEdit}
        onEdit={onEdit}
        event={event}
        setIsOpen={setIsOpenEdit}
      />
    </>
  );
}
