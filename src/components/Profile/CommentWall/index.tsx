import gramProfilePic from "./imgs/gram.jpg";
import amandaProfilePic from "./imgs/amanda.jpg";
import slackerProfilePic from "./imgs/slacker.jpg";
import ericProfilePic from "./imgs/eric.jpg";
import nnennaProfilePic from "./imgs/nnenna.jpg";
import grantProfilePic from "./imgs/grant.jpg";
import jamesProfilePic from "./imgs/james.jpg";

const comments = [
  {
    user: "Gram",
    profilePic: gramProfilePic,
    datePosted: "4/22/2006 6:54 PM",
    content:
      "Dude, Appetite for Destruction Rocks, same with Alice Cooper and KISS",
  },
  {
    user: "Amanda Lepore",
    profilePic: amandaProfilePic,
    datePosted: "4/22/2006 6:51 PM",
    content: "tom=new money. ;D congrats darling",
  },
  {
    user: "SLACKER",
    profilePic: slackerProfilePic,
    datePosted: "4/22/2006 12:37 PM",
    content:
      "dont listen to those girls, they don't know what they're talking about!! I LOVE YOUR DISPLAY PIC, seeing it makes my day a little better!!!",
  },
  {
    user: "Brian",
    profilePic: ericProfilePic,
    datePosted: "4/22/2006 12:13 PM",
    content:
      "Myspace prevented another potential Columbine.You must be very proud!",
  },
  {
    user: "Nnenna",
    profilePic: nnennaProfilePic,
    datePosted: "4/22/2006 12:08 PM",
    content:
      "Whats up tom...it would be really cool if poets and spoken word artists had a way to display their talent. Its really hard to find spoken word in the music section.",
  },
  {
    user: "Woodrow Wilson",
    profilePic: grantProfilePic,
    datePosted: "4/22/2006 12:06 PM",
    content:
      "Despite all the controversy, myspace proved to be useful in saving people today. Good press Mr. Anderson!",
  },
  {
    user: "Klara",
    profilePic: "pictures/missing.jpg",
    datePosted: "4/22/2006 12:06 PM",
    content:
      "hi",
  },
  {
    user: "Vicky",
    profilePic: "pictures/missing.jpg",
    datePosted: "4/22/2006 12:05 PM",
    content:
      "Just wanna say tks to you :p Everything seems so wonderful, i can change my skin myself :p",
  },
  {
    user: "Camy",
    profilePic: "pictures/missing.jpg",
    datePosted: "4/22/2006 12:04 PM",
    content: "come on!!! A*teen and radiohead together on the same list ???",
  },
  {
    user: "James Dean",
    profilePic: jamesProfilePic,
    datePosted: "4/22/2006 12:04 PM",
    content:
      "Kundera and Orwell are great.. Do you know Arthur Koestler? Have you read Hommage to Catalonia?",
  },
];

export default function CommentWall() {
  return (
    <section className="comment-wall">
      <header className="main-section-header mb-1">
        <h2 className="main-section-h2">Tom's Friends Comments</h2>
      </header>

      <p id="comment-counter">
        <b>
          Displaying <span className="focus-highlight">{comments.length}</span> of{" "}
          <span className="focus-highlight">780610</span> comments (
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
                  <img className="mx-auto" src={comment.profilePic} />
                </figure>
              </th>
              <td className="pb-0.5 pl-0.5 align-top">
                <h3 className="text-xs mb-3">{comment.datePosted}</h3>
                <p>
                  {comment.content}
                </p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <p className="text-right mr-2.5 mb-1">
        <a href="#">Add Comment</a>
      </p>
    </section>
  );
}
