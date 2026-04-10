import { useState, useEffect, useCallback } from "react";
import api from '@/api/axios';
import "./index.css";
import dayjs from 'dayjs';

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

  const handlePostComment = useCallback(async () => {
    await api.post('/comments', {
      user: userName,
      profilePic: 'missing.jpg',
      datePosted: new Date(),
      content: newComment
    });

    const res = await api.get('/comments');
    setComments(res.data);

    // Reset UI
    setUserName('Guest');
    setNewComment('');
    setIsAddComment(false);
  }, [setComments, setUserName, setNewComment, setIsAddComment]);

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
                  <img className="mx-auto w-22.5" src={`src/assets/imgs/profilePics/${comment.profilePic}`} />
                </figure>
              </th>
              <td className="pb-0.5 pl-0.5 align-top">
                <h3 className="text-xs mb-3">{dayjs(comment.datePosted).format('MM-DD-YYYY h:mm A')}</h3>
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
