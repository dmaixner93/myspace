import { useCallback, useEffect, useState } from 'react';
import Table from "@/components/Profile/CommentWall/Table";
import useComments from "@/hooks/useComments";
import Paginator from '@/components/Profile/CommentWall/Paginator';

export default function Comments() {
  const { comments, totalComments, page, setPage } = useComments();
  const [pages, setPages] = useState<number>(0);

  useEffect(() => {
    setPages(Math.ceil(totalComments / 10));
  }, [totalComments]);

  const onPageChange = useCallback((newPage: number) => {
    setPage(newPage);
  }, [setPage]);

  return (
    <main className="comments-page bg-white px-7 mx-auto w-full sm:w-200 overflow-x-hidden">
      <h1 className="main-header text-base pl-3">Comments</h1>
      <Table comments={comments} />
      <Paginator
        currentPage={page}
        pages={pages}
        onPageChange={onPageChange}
      />
    </main>
  );
}