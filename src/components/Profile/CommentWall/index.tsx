import { useState, useCallback } from 'react';
import api from '@/api/axios';
import Table from './Table';
import useComments from '@/hooks/useComments';
import CommentCounter from './CommentCounter';
import AddComment from './AddComment';

export default function CommentWall() {
  const { comments, totalComments, getComments } = useComments();
  const [isAddComment, setIsAddComment] = useState<boolean>(false);
  const [newComment, setNewComment] = useState<string>('');
  const [userName, setUserName] = useState<string>('Guest');

  const handlePostComment = useCallback(async () => {
    await api.post('/comments', {
      user: userName,
      profilePic: 'missing.jpg',
      datePosted: new Date(),
      content: newComment,
    });

    getComments();

    // Reset UI
    setUserName('Guest');
    setNewComment('');
    setIsAddComment(false);
  }, [userName, newComment, getComments]);

  return (
    <section className="comment-wall">
      <header className="py-0.5 bg-orange-200 mb-1">
        <h2 className="text-orange-500">Tom's Friends Comments</h2>
      </header>

      <CommentCounter
        numberOfCommentsDisplayed={comments.length}
        totalComments={totalComments}
      />

      <Table comments={comments} />

      <div className="text-right mr-2.5 mb-1">
        <AddComment
          isAddComment={isAddComment}
          userName={userName}
          newComment={newComment}
          setUserName={setUserName}
          setNewComment={setNewComment}
          setIsAddComment={setIsAddComment}
          handlePostComment={handlePostComment}
        />
      </div>
    </section>
  );
}
