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
    <div className="flex w-full flex-col gap-4 rounded-lg border px-4 py-5 lg:gap-8 lg:px-6 lg:py-10">
      <div className="flex h-14 items-center gap-4 rounded-lg">
        <div className="relative size-10 overflow-hidden rounded-full lg:size-16">
          <Image src={image} alt={name} fill className="object-cover" />
        </div>
        <div className="flex flex-col lg:gap-1">
          <div className="font-semibold lg:text-xl lg:font-bold">{name}</div>
          <div className="text-sm text-slate-500 lg:text-base">
            {created_at}
          </div>
        </div>
      </div>
      <p className=" text-sm lg:text-lg">{question}</p>
      <Reaction toggleOpen={toggleOpen} />
      {isOpen && (
        <>
          <hr />
          {comments.map((comment) => (
            <div key={comment.name} className="flex flex-col gap-6">
              <div className="flex h-14 items-center gap-4 rounded-lg pl-1.5">
                <div className="relative size-10 overflow-hidden rounded-full lg:size-16">
                  <Image
                    src={comment.image}
                    alt={comment.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <div className="font-semibold lg:text-xl lg:font-bold">
                    {comment.name}
                  </div>
                  <div className="text-sm text-slate-500 lg:text-base">
                    {comment.comment}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
}
