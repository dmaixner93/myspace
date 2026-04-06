import sendMailIcon from "./imgs/sendMailIcon.gif";
import forwardMailIcon from "./imgs/forwardMailIcon.gif";
import addFriendIcon from "./imgs/addFriendIcon.gif";
import addFavoritesIcon from "./imgs/addFavoritesIcon.gif";
import messageFriendIcon from "./imgs/messagefriend.gif";
import blockUserIcon from "./imgs/blockUser.gif";
import addToFriendGroupIcon from "./imgs/addToGroupIcon.gif";
import rankUserIcon from "./imgs/rankUserIcon.gif";

export default function CommentBox() {
  return (
    <section className="contact-box">
      <h2>Contacting Tom</h2>
      <div className="grid grid-cols-2 py-1.5 px-2.5">
        <img src={sendMailIcon} alt="Send Message" />
        <img src={forwardMailIcon} alt="Forward to Friend" />
        <img src={addFriendIcon} alt="Add to Friends" />
        <img src={addFavoritesIcon} alt="Add to Favorites" />
        <img src={messageFriendIcon} alt="Instant Message" />
        <img src={blockUserIcon} alt="Block User" />
        <img src={addToFriendGroupIcon} alt="Add to Group" />
        <img src={rankUserIcon} alt="Rank User" />
      </div>
    </section>
  );
}
