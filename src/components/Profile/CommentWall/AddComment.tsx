export default function AddComment({
  isAddComment,
  userName,
  newComment,
  setUserName,
  setNewComment,
  setIsAddComment,
  handlePostComment,
}: {
  isAddComment: boolean;
  userName: string;
  newComment: string;
  setUserName: (name: string) => void;
  setNewComment: (comment: string) => void;
  setIsAddComment: (isAdding: boolean) => void;
  handlePostComment: () => void;
}) {
  return (
    <>
      {isAddComment ? (
        <div className="flex gap-1.5 justify-end">
          <div className="flex flex-col grow gap-1">
            <input
              id="user-name"
              type="text"
              className="border border-zinc-300"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            <textarea
              id="add-comment"
              className="border border-zinc-300 h-20 resize-none"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
            />
          </div>
          <button className="font-bold" onClick={handlePostComment}>
            Post
          </button>
          <button className="font-bold" onClick={() => setIsAddComment(false)}>
            Cancel
          </button>
        </div>
      ) : (
        <button
          className="text-blue-800 ml-auto text-right font-bold cursor-pointer hover:underline"
          onClick={() => setIsAddComment(true)}
        >
          Add Comment
        </button>
      )}
    </>
  );
}
