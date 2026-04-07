import './index.css';
import tomProfilePic from '@/assets/imgs/tom-pic.jpg';
import onlineNow from '@/assets/imgs/online.gif';
import FriendSpace from '@/components/Profile/FriendsSpace';
import CommentWall from '@/components/Profile/CommentWall';
import ContactBox from '@/components/Profile/ContactBox';
import Interests from '@/components/Profile/Interests';
import Blurbs from '@/components/Profile/Blurbs';
import { Details } from '@/components/Profile/Details';
import Schools from '@/components/Profile/Schools';
import Header from '@/components/Header';

export default function Profile() {
  return (
    <div className="bg-white mx-auto w-full sm:w-200 overflow-x-hidden">

    <Header />

    <div className="sm:flex gap-5 px-7">
      <aside className="w-full sm:w-75 shrink-0">

        <header>
          <h1 className="text-base font-bold mt-4">Tom</h1>
        </header>

        <div className="flex items-start justify-start gap-4">
          <img className="my-2.5" src={tomProfilePic} alt="A profile picture of Tom, the creator of MySpace." />

          <div>
            <p><b>":-)"</b></p>
    
            <ul className="mt-7">
              <li>Male</li>
              <li>30 years old</li>
              <li>Santa Monica,</li>
              <li>CALIFORNIA</li>
              <li>United States</li>
              <li>
                <img src={onlineNow}/>
              </li>
            </ul>
    
    
            <ul className="last-login">
              <li>Last Login:</li>
              <li>4/22/2006</li>
            </ul>
          </div>
        </div>
        <div className="mb-2">
          <p className="ml-4">View My: <a href="#"><b>Pics</b></a> | <a href="#"><b>Videos</b></a></p>
        </div>

        <ContactBox />

        <section className="myspace-url-box my-6">
          <h3 className="pl-0.5"><b>MySpace URL:</b></h3>
          <p className="pl-1.5">http://www.myspace.com/tom</p>
        </section>

        <Interests />

        <Details />

        <Schools />

      </aside>

      <main className="w-full">

        <section className="user-network h-18.75 mt-3">
          <header>
            <h2 className="text-base">Tom is in your extended network</h2>
          </header>
        </section>

        <section className="mt-3 ml-3 mb-4 space-y-4">
          <p><b>Tom's Latest Blog Entry</b> [<a href="#">Subscribe to this Blog</a>]</p>
          <p>MySpace Concert & Parties -Georgia, Orlando, Miami! (<a href="#">view more</a>) </p>
          <p>In Stores Today - MySpace Records Vol. 1 ! (<a href="#">view more</a>) </p>
          <p>MySpace Records - get more photos for your profile! (<a href="#">view more</a>) </p>
          <p>October 29th - MySpace 2-Year Anniversary Concert! (<a href="#">view more</a>) </p>
          <p>NIN, QOTSA, Acoustic and Punk Tours (!) (<a href="#">view more</a>)</p>
          <p>[<a href="#">View All Blog Entries</a>]</p>
        </section>

        <Blurbs />

        <FriendSpace />

        <CommentWall />
      </main>


    </div>

    <footer className="footer">

      <nav>
        <ul>
          <li><a href="#">About</a></li>
          <li><a href="#">FAQ</a></li>
          <li><a href="#">Terms</a></li>
          <li><a href="#">Privacy</a></li>
          <li><a href="#">Safety Tips</a></li>
          <li><a href="#">Contact Myspace</a></li>
          <li><a href="#">Report Inappropriate Content</a></li>
          <li><a href="#">Promote!</a></li>
          <li><a href="#">Advertise</a></li>
          <li id="last"><a href="#">MySpace International</a></li>
        </ul>
      </nav>

      <small>©2003-2006 MySpace.com. All Rights Reserved.</small>
    </footer>
  </div>
  )
}