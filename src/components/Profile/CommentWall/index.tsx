import { useState, useEffect } from "react";
import api from '@/api/axios';
import "./index.css";

type Comment = {
  user: string;
  profilePic: string;
  datePosted: string;
  content: string;
}

export default function CommentWall() {
  const [isAddComment, setIsAddComment] = useState(false);
  const [newComment, setNewComment] = useState("");
  const [comments, setComments] = useState<[] | Comment[]>([]);
  const [userName, setUserName] = useState('Guest');

  const handlePostComment = () => {
    setComments([
      ...comments,
      {
        user: userName,
        profilePic: "pictures/missing.jpg",
        datePosted: new Date().toLocaleString(),
        content: newComment,
      },
    ]);
    setUserName('Guest');
    setNewComment('');
    setIsAddComment(false);
  };

  useEffect(() => {
    async function getComments() {
      const res = await api.get('/comments');
      setComments(res.data);
    }
    getComments();
  }, []);

  return (
    <section className="comment-wall">
      <header className="main-section-header mb-1">
        <h2 className="main-section-h2">Tom's Friends Comments</h2>
      </header>

      <p id="comment-counter" className="ml-3.5 mb-1">
        <b>
          Displaying <span className="focus-highlight">{comments.length}</span>{" "}
          of <span className="focus-highlight">780610</span> comments (
          <a href="#">View/Edit All Comments</a>)
        </b>
      </p>

      <table className="mb-1">
        <tbody>
          {comments.map((comment, index) => (
            <tr key={index}>
              <th scope="row" className="w-40 shrink-0 grow-0 pb-0.5 align-top">
                <figure className="mb-12">
                  <figcaption className="mb-2.5">
                    <a href="#">{comment.user}</a>
                  </figcaption>
                  <img className="mx-auto" src={`src/assets/imgs/profilePics/${comment.profilePic}`} />
                </figure>
              </th>
              <td className="pb-0.5 pl-0.5 align-top">
                <h3 className="text-xs mb-3">{comment.datePosted}</h3>
                <p>{comment.content}</p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="text-right mr-2.5 mb-1">
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
            <button
              className="font-bold"
              onClick={() => setIsAddComment(false)}
            >
              Cancel
            </button>
          </div>
        ) : (
          <button
            className="ml-auto text-right font-bold cursor-pointer hover:underline"
            onClick={() => setIsAddComment(true)}
          >
            Add Comment
          </button>
        )}
      </div>
    </section>
  );
}
