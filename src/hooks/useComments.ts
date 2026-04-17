import { useCallback, useEffect, useState } from 'react';
import api from '@/api/axios';

export default function useComments() {
  const [page, setPage] = useState<number>(1);
  const [comments, setComments] = useState([]);
  const [totalComments, setTotalComments] = useState<number>(0);

  const getComments = useCallback(async () => {
    const commentsRes = await api.get('/comments', {
      params: {
        _limit: 10,
        start: (page - 1) * 10,
      }
    });
    setComments(commentsRes.data.comments);
    setTotalComments(commentsRes.data.total);
  }, [page]);

  useEffect(() => {
    const fetchComments = async () => {
      await getComments();
    };
    fetchComments();
  }, [getComments, page]);

  return { 
    getComments,
    comments,
    totalComments,
    setPage,
    page,
  };
}