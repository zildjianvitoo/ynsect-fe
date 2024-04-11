import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Pencil, Trash2 } from "lucide-react";
import React, { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import EditCommentInput from "./EditCommentInput";
import { formatDistanceToNow } from "date-fns";

type Props = {
  commentId: number;
  username: string;
  createdAt: Date;
  content: string;
  forumId: string;
};

export default function CommentBox({
  commentId,
  username,
  createdAt,
  content,
}: Props) {
  const [isEditing, setIsEditing] = useState(false);
  const dateConvert = formatDistanceToNow(new Date(createdAt), {
    addSuffix: true,
  });
  const handleEditing = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div key={commentId} className="flex w-full flex-col gap-3">
      <div className="flex h-14 items-center gap-4 rounded-lg pl-1.5">
        <div className="flex w-full flex-col gap-1">
          <div className="flex w-full gap-6">
            <div className="flex items-center gap-2">
              <span className="text-sm font-semibold lg:text-xl lg:font-bold">
                {username}
              </span>
              <span className="text-xs lg:text-sm">- {dateConvert}</span>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <BsThreeDots className="text-xl text-slate-500" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="px-4">
                <div
                  onClick={handleEditing}
                  className="flex cursor-pointer gap-3 text-xs lg:text-sm"
                >
                  <Pencil size={20} strokeWidth={1.5} /> Edit komentar
                </div>
                <DropdownMenuSeparator />
                <div className="flex cursor-pointer gap-3 text-sm text-red-500">
                  <Trash2 size={20} strokeWidth={1.5} /> Hapus komentar
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          {isEditing ? (
            <div className="mt-2 w-full">
              <EditCommentInput
                oldContent={content}
                handleEditing={handleEditing}
                commentId={commentId}
              />
            </div>
          ) : (
            <div className="text-sm text-slate-500 lg:text-base">{content}</div>
          )}
        </div>
      </div>
    </div>
  );
}
