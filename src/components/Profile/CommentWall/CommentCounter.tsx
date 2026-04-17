import { Link } from "react-router-dom";

export default function CommentCounter({ numberOfCommentsDisplayed, totalComments }: { numberOfCommentsDisplayed: number; totalComments: number }) {
  return (
    <p id="comment-counter" className="ml-3.5 mb-1">
      <b>
        Displaying <span className="focus-highlight">{numberOfCommentsDisplayed}</span> of{' '}
        <span className="focus-highlight">{totalComments}</span> comments (
        <Link className="text-blue-800 font-bold hover:underline visited:text-red-800" to="/comments">View/Edit All Comments</Link>)
      </b>
    </p>
  )
}