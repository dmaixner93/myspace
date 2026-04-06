import myspaceRecords from './imgs/myspace-records.jpg';
import myspaceRecords2 from './imgs/myspace-records-2.jpg';
import myspaceRecords3 from './imgs/myspace-records-3.jpg';
import andiProfilePic from './imgs/andi.jpg';
import abrahamProfilePic from './imgs/abraham.jpg';
import tannerProfilePic from './imgs/tanner.jpg';
import tamsProfilePic from './imgs/tams.jpg';
import jenniProfilePic from './imgs/jenni.jpg';

const friends = [
  {
    name: 'MySpace records',
    img: myspaceRecords,
  },
  {
    name: 'Andi',
    img: andiProfilePic,
  },
  {
    name: 'abraham',
    img: abrahamProfilePic,
  },
  {
    name: 'tanner',
    img: tannerProfilePic,
  },
  {
    name: 'Tams',
    img: tamsProfilePic,
  },
  {
    name: 'MySpace records',
    img: myspaceRecords2,
  },
  {
    name: 'J-e-n-n-i',
    img: jenniProfilePic,
  },
  {
    name: 'MySpace records',
    img: myspaceRecords3,
  },
]

export default function FriendSpace() {
  return (
    <section className="friends">
      <header className="main-section-header mb-1.5">
        <h2 className="main-section-h2 ml-5">Tom's Friend Space</h2>
      </header>

      <p className="ml-3.5">
        <b>
          Tom has <span className="focus-highlight">73090713</span> Friends.
        </b>
      </p>

      <div className="grid grid-cols-4 grid-rows-2">
        {friends.map((info, index) => (
          <figure key={index}>
            <figcaption className="text-center text-wrap w-20">
              <a href="#">
                {info.name}
              </a>
            </figcaption>
            <img src={info.img} />
          </figure>
        ))}
      </div>

      <p className="friends-list-link mt-1.5 mr-2 mb-7">
        <a href="#">View All of Tom's Friends</a>
      </p>
    </section>
  );
}
