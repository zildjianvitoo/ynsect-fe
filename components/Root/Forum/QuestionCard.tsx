"use client";
import Image from "next/image";
import Reaction from "./Reaction";
import { useState } from "react";

type Props = {
  name: string;
  created_at: string;
  image: string;
  question: string;
  comments: Comment[];
};

type Comment = {
  name: string;
  comment: string;
  image: string;
};

export default function QuestionCard({
  name,
  created_at,
  comments,
  image,
  question,
}: Props) {
  const [isOpen, setIsOpen] = useState(false);

  function toggleOpen() {
    setIsOpen(!isOpen);
  }
  return (
    <div className="flex w-full flex-col gap-8 rounded-lg border px-6 py-10">
      <div className="flex h-14 items-center gap-4 rounded-lg">
        <div className="relative h-16 w-16 overflow-hidden rounded-full">
          <Image src={image} alt={name} fill className="object-cover" />
        </div>
        <div className="flex flex-col gap-1">
          <div className="text-xl font-bold">{name}</div>
          <div className="text-slate-500">{created_at}</div>
        </div>
      </div>
      <p className="text-lg">{question}</p>
      <Reaction toggleOpen={toggleOpen} />
      {isOpen && (
        <>
          <hr />
          {comments.map((comment) => (
            <div key={comment.name} className="flex flex-col gap-6">
              <div className="flex h-14 items-center gap-4 rounded-lg pl-1.5">
                <div className="relative h-16 w-16 overflow-hidden rounded-full">
                  <Image
                    src={comment.image}
                    alt={comment.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <div className="text-xl font-bold">{comment.name}</div>
                  <div className="text-slate-500">{comment.comment}</div>
                </div>
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
}
