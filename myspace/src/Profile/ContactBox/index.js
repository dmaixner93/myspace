export default function ContactBox() {
  return (
    <div className="contact-images">
      <img src={require('../../pictures/sendMailIcon.gif')} alt="Send Message" />
      <img src={require('../../pictures/forwardMailIcon.gif')} alt="Forward to Friend" />
      <img src={require('../../pictures/addFriendIcon.gif')} alt="Add to Friends" />
      <img src={require('../../pictures/addFavoritesIcon.gif')} alt="Add to Favorites" />
      <img src={require('../../pictures/messagefriend.gif')} alt="Instant Message" />
      <img src={require('../../pictures/blockUser.gif')} alt="Block User" />
      <img src={require('../../pictures/addToGroupIcon.gif')} alt="Add to Group" />
      <img src={require('../../pictures/rankUserIcon.gif')} alt="Rank User" />
    </div>
  )
}