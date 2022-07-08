import React, { FC } from "react";
import { Comment } from "../typings";

const Comment: FC<{ comment: Comment }> = ({ comment }) => {
  return (
    <div key={comment._id}>
      <p>
        <span className="text-yellow-500">{comment.name}: </span>{" "}
        {comment.comment}
      </p>
    </div>
  );
};

export default Comment;
