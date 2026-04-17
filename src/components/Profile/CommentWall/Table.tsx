import dayjs from 'dayjs';
import type { Comment } from './index.d';

export default function Table({ comments }: { comments: [] | Comment[] }) {
  return (
    <table className="mb-1">
      <tbody>
        {comments.map((comment, index) => (
          <tr key={index}>
            <th scope="row" className="w-40 shrink-0 grow-0 pb-0.5 align-top bg-orange-400">
              <figure className="mb-12">
                <figcaption className="mb-2.5">
                  <a className="text-blue-800 font-bold hover:underline visited:text-red-800" href="#">{comment.user}</a>
                </figcaption>
                <img
                  className="mx-auto w-22.5"
                  src={`src/assets/imgs/profilePics/${comment.profilePic}`}
                />
              </figure>
            </th>
            <td className="pb-0.5 pl-0.5 align-top bg-orange-200">
              <h3 className="text-xs mb-3">
                {dayjs(comment.datePosted).format('MM-DD-YYYY h:mm A')}
              </h3>
              <p>{comment.content}</p>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
