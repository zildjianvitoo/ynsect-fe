"use client";

import { Comment } from "@/types/comment";
import { useState } from "react";
import CommentInput from "./CommentInput";
import { PiFlagPennant } from "react-icons/pi";
import { LiaComment } from "react-icons/lia";
import Link from "next/link";
import { Bookmark } from "lucide-react";
import CommentBox from "./CommentBox";

type Props = {
  name: string;
  createdAt: string;
  question: string;
  comments: Comment[];
  forumId: string;
  userId?: number;
  isDetail?: boolean;
};

export default function QuestionCard({
  name,
  createdAt,
  question,
  comments,
  forumId,
  isDetail,
}: Props) {
  const [isHelped, setIsHelped] = useState(false);
  const [isMarked, setIsMarked] = useState(false);

  return (
    <div className="flex w-full flex-col gap-4 rounded-lg border px-4 py-5 lg:gap-8 lg:px-6 lg:py-10">
      <div className="flex h-14 justify-between gap-4 rounded-lg">
        <div className="flex flex-col lg:gap-1">
          <div className="font-semibold lg:text-xl lg:font-bold">{name}</div>

          <div className="text-sm text-slate-500 lg:text-base">{createdAt}</div>
        </div>
        <div className="flex items-center gap-3 ">
          <Bookmark
            onClick={() => setIsMarked((prev) => !prev)}
            className={`cursor-pointer ${isMarked ? " text-green-600" : "text-slate-500"} `}
          />
        </div>
      </div>

      <p className="text-sm lg:text-lg">{question}</p>

      <div className="flex gap-4 lg:gap-8">
        <div
          onClick={() => setIsHelped((prev) => !prev)}
          className={`flex cursor-pointer items-center gap-3 ${isHelped ? "text-green-600" : "text-slate-500"} `}
        >
          <PiFlagPennant className="text-lg lg:text-2xl " />
          <div className="hidden text-lg lg:block">Membantu?</div>
        </div>
        {isDetail ? (
          <div className="flex cursor-pointer items-center gap-3 text-slate-500">
            <LiaComment className="text-lg lg:text-2xl " />
            <div className="flex gap-1 lg:text-lg">
              {comments?.length}
              <span className="hidden text-lg lg:block">Komentar</span>
            </div>
          </div>
        ) : (
          <Link
            href={"/forum/" + forumId}
            className="flex cursor-pointer items-center gap-3 text-slate-500"
          >
            <LiaComment className="text-lg lg:text-2xl " />
            <div className="flex gap-1 lg:text-lg">
              {comments?.length}
              <span className="hidden text-lg lg:block">Komentar</span>
            </div>
          </Link>
        )}
      </div>

      {isDetail && (
        <>
          <hr />
          <CommentInput forumId={forumId} />
          {comments.map((comment) => {
            return (
              <>
                <CommentBox
                  commentId={comment.id!}
                  forumId={forumId}
                  content={comment.content}
                  createdAt={comment.createdAt!}
                  username={comment.user!.name}
                />
                <hr />
              </>
            );
          })}
        </>
      )}
    </div>
  );
}
