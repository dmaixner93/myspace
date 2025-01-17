import ContactBox from './ContactBox/index'
import Interests from './Interests/index'
import './styles.css'

export default function Profile() {
  return (
    <div className="master-container">

    <header className="main-header">
      <nav className="search-bar">

        <ul className="topnav home">
          <li><a href="#">MySpace.com</a></li>
          <li><a href="#">Home</a></li>
        </ul>

        <form>
          <label>
            The Web
            <input type="radio" name="search-type" value="the-web" />
          </label>

          <label>
            MySpace
            <input type="radio" name="search-type" value="myspace"/>
          </label>

          <label>
            <input type="text" name="search"/>
          </label>

          <input className="submit-btn" type="submit" name="submit-button" value="Search" />
        </form>

        <ul className="topnav signup">
          <li><a href="#">Help</a></li>
          <li><a href="#">SignUp</a></li>
        </ul>
      </nav>

      <nav className="navbar">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Browse</a></li>
          <li><a href="#">Search</a></li>
          <li><a href="#">Invite</a></li>
          <li><a href="#">Film</a></li>
          <li><a href="#">Mail</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Favorites</a></li>
          <li><a href="#">Forum</a></li>
          <li><a href="#">Groups</a></li>
          <li><a href="#">Events</a></li>
          <li><a href="#">Videos</a></li>
          <li><a href="#">Music</a></li>
          <li><a href="#">Classifieds</a></li>
        </ul>
      </nav>

    </header>

    <div className="page-content-container">
      <aside className="profile-sidebar">

        <header>
          <h1>Tom</h1>
        </header>

        <div className="profile-picture-container">
          <img className="profile-pic" src={require('../pictures/tom-pic.jpg')} alt="A profile picture of Tom, the creator of MySpace." />

          <p className="personal-msg"><b>":-)"</b></p>

          <ul className="gender-age">
            <li>Male</li>
            <li>30 years old</li>
            <li>Santa Monica,</li>
            <li>CALIFORNIA</li>
            <li>United States</li>
          </ul>

          <div className="online-now">
            <img src={require('../pictures/online.gif')}/>
          </div>

          <ul className="last-login">
            <li>Last Login:</li>
            <li>4/22/2006</li>
          </ul>

          <p className="pics-videos">View My: <a href="#"><b>Pics</b></a> | <a href="#"><b>Videos</b></a></p>
        </div>

        <section className="contact-box">
          <h2>Contacting Tom</h2>
          <ContactBox />

        </section>

        <section className="myspace-url-box">
          <h3><b>MySpace URL:</b></h3>
          <p>http://www.myspace.com/tom</p>
        </section>

        <section className="interests">
          <Interests />
        </section>

        <section className="details">
          <table className="sidebar-table">

            <caption>
              <h2 className="sidebar-table-h2">Tom's Details</h2>
            </caption>

            <tbody>
              <tr>
                <th className="sidebar-table-header" scope="row">Status:</th>
                <td className="sidebar-table-data">Single</td>
              </tr>

              <tr>
                <th className="sidebar-table-header" scope="row">Here For:</th>
                <td className="sidebar-table-data">Networking, Dating, Serious Relationships, Friends</td>
              </tr>

              <tr>
                <th className="sidebar-table-header" scope="row">Hometown:</th>
                <td className="sidebar-table-data">San Diego</td>
              </tr>

              <tr>
                <th className="sidebar-table-header" scope="row">Ethnicity:</th>
                <td className="sidebar-table-data">White / Caucasian</td>
              </tr>

              <tr>
                <th className="sidebar-table-header" scope="row">Zodiac Sign:</th>
                <td className="sidebar-table-data">Libra</td>
              </tr>

              <tr>
                <th className="sidebar-table-header" scope="row">Smoke / Drink:</th>
                <td className="sidebar-table-data">No / No</td>
              </tr>

              <tr>
                <th className="sidebar-table-header" scope="row">Occupation:</th>
                <td className="sidebar-table-data">MySpace</td>
              </tr>

            </tbody>
          </table>
        </section>

        <section className="schools">
          <table className="sidebar-table">

            <caption>
              <h2 className="sidebar-table-h2">Tom's Schools</h2>
            </caption>

            <tbody>
              <tr>
                <th className="sidebar-table-header" scope="row">
                  <ul>
                    <li><a href="#">University Of California-Los Angeles</a></li>
                    <li>Los Angeles, CALIFORNIA</li>
                    <li>Graduated: <a href="#">2000</a></li>
                    <li>Degree: Master's Degree</li>
                    <li>Major: Film - Critical Studies</li>
                  </ul>
                </th>
                <td className="sidebar-table-data">1999 to 2000</td>
              </tr>

              <tr>
                <th className="sidebar-table-header" scope="row">
                  <ul>
                    <li><a href="#">University Of California-Berkeley</a></li>
                    <li>Berkeley, CALIFORNIA</li>
                    <li>Graduated: <a href="#">1997</a></li>
                    <li>Student status: Alumni</li>
                    <li>Degree: Bachelor's Degree</li>
                    <li>Major: English & Rhetoric</li>
                    <li>Clubs: DECAL: Literary Theory</li>
                  </ul>
                </th>
                <td className="sidebar-table-data">1993 to 1996</td>
              </tr>

            </tbody>
          </table>

        </section>
      </aside>

      <main>

        <section className="user-network">
          <header>
            <h2>Tom is in your extended network</h2>
          </header>
        </section>

        <section className="blog">
          <p><b>Tom's Latest Blog Entry</b> [<a href="#">Subscribe to this Blog</a>]</p>
          <p>MySpace Concert & Parties -Georgia, Orlando, Miami! (<a href="#">view more</a>) </p>
          <p>In Stores Today - MySpace Records Vol. 1 ! (<a href="#">view more</a>) </p>
          <p>MySpace Records - get more photos for your profile! (<a href="#">view more</a>) </p>
          <p>October 29th - MySpace 2-Year Anniversary Concert! (<a href="#">view more</a>) </p>
          <p>NIN, QOTSA, Acoustic and Punk Tours (!) (<a href="#">view more</a>)</p>
          <p>[<a href="#">View All Blog Entries</a>]</p>
        </section>

        <section className="blurbs">
          <header className="main-section-header">
            <h2 className="main-section-h2">Tom's Blurbs</h2>
          </header>

          <h3>About me:</h3>
          <p>I'm here to help you with <b>MySpace</b>. Send me a message if you're confused by anything. <span
              className="info">Before asking me a question, please check the <a href="#">FAQ</a> to see if your question has
              already been answered.</span></p>

          <p>I may have been on your friend list when you signed up. If you don't want me to be, click "Edit Friends"
            and remove me!</p>

          <p><strong>Also, feel free to tell me what features you want to see on MySpace and if I think it's cool, we'll
              do it!</strong></p>

          <p>If you want a tutorial on HTML/designing your page, check this out: <a href="#">Mack</a>!!</p>

          <p>Note: If you try to view my friends list you won't see all 24,000,000 million people. This was bogging down
            the system, so we made it only show 40 people. So you wont be able to see the friends on my list.</p>

          <h3>Who I'd like to meet:</h3>
          <p>I'd like to meet people who educate, inspire or entertain me... I have a few close friends I've known all
            my life. I'd like to make more. </p>
        </section>

        <section className="friends">
          <header className="main-section-header">
            <h2 className="main-section-h2">Tom's Friend Space</h2>
          </header>

          <p><b>Tom has <span className="focus-highlight">73090713</span> Friends.</b></p>

          <div className="friend-pic-container">
            <figure>
              <figcaption><a href="#">MySpace<br/>Records</a></figcaption>
              <img src={require('../pictures/myspace-records.jpg')} />
            </figure>

            <figure>
              <figcaption><a href="#">Andi</a></figcaption>
                <img src={require('../pictures/andi.jpg')} />
            </figure>

            <figure>
              <figcaption><a href="#">abraham</a></figcaption>
                <img src={require('../pictures/abraham.jpg')} />
            </figure>

            <figure>
              <figcaption><a href="#">tanner</a></figcaption>
                <img src={require('../pictures/tanner.jpg')} />
            </figure>

            <figure>
              <figcaption><a href="#">Tams</a></figcaption>
                <img src={require('../pictures/tams.jpg')} />
            </figure>

            <figure>
              <figcaption><a href="#">MySpace<br/>Records</a></figcaption>
              <img src={require('../pictures/myspace-records-2.jpg')} />
            </figure>

            <figure>
              <figcaption><a href="#">J-e-n-n-i</a></figcaption>
              <img src={require('../pictures/jenni.jpg')} />
          </figure>

            <figure>
              <figcaption><a href="#">MySpace<br/>Records</a></figcaption>
              <img src={require('../pictures/myspace-records-3.jpg')} />
            </figure>
          </div>

          <p className="friends-list-link"><a href="#">View All of Tom's Friends</a></p>
        </section>

        <section className="comment-wall">
          <header className="main-section-header">
            <h2 className="main-section-h2">Tom's Friends Comments</h2>
          </header>

          <p id="comment-counter"><b>Displaying <span className="focus-highlight">10</span> of <span
                className="focus-highlight">780610</span> comments (<a href="#">View/Edit All Comments</a>)</b></p>

          <table>
            <tr>
              <th scope="row">
                <figure>
                  <figcaption><a href="#">Gram</a></figcaption>
                  <img src={require('../pictures/gram.jpg')} />
                </figure>
              </th>
              <td>
                <h3>4/22/2006 6:54 PM</h3>
                <p>Dude, Appetite for Destruction Rocks, same with Alice Cooper and KISS</p>
              </td>
            </tr>

            <tr>
              <th scope="row">
                <figure>
                  <figcaption><a href="#">Amanda Lepore</a></figcaption>
                  <img src={require('../pictures/amanda.jpg')} />
                </figure>
              </th>
              <td>
                <h3>4/22/2006 6:51 PM</h3>
                <p>tom=new money. ;D congrats darling</p>
              </td>
            </tr>

            <tr>
              <th scope="row">
                <figure>
                  <figcaption><a href="#">SLACKER</a></figcaption>
                    <img src={require('../pictures/slacker.jpg')} />
                </figure>
              </th>
              <td>
                <h3>4/22/2006 12:37 PM</h3>
                <p>dont listen to those girls, they don't know what they're talking about!! I LOVE YOUR DISPLAY PIC,
                  seeing it makes my day a little better!!!</p>
              </td>
            </tr>

            <tr>
              <th scope="row">
                <figure>
                  <figcaption><a href="#">Brian</a></figcaption>
                  <img src={require('../pictures/eric.jpg')} />
                </figure>
              </th>
              <td>
                <h3>4/22/2006 12:13 PM</h3>
                <p>Myspace prevented another potential Columbine.You must be very proud!</p>
              </td>
            </tr>

            <tr>
              <th scope="row">
                <figure>
                  <figcaption><a href="#">Nnenna</a></figcaption>
                  <img src={require('../pictures/nnenna.jpg')} />
                </figure>
              </th>
              <td>
                <h3>4/22/2006 12:08 PM</h3>
                <p>Whats up tom...it would be really cool if poets and spoken word artists had a way to display their
                  talent. Its really hard to find spoken word in the music section.</p>
              </td>
            </tr>

            <tr>
              <th scope="row">
                <figure>
                  <figcaption><a href="#">Woodrow Wilson</a></figcaption>
                  <img src={require('../pictures/grant.jpg')} />
                </figure>
              </th>
              <td>
                <h3>4/22/2006 12:06 PM</h3>
                <p>Despite all the controversy, myspace proved to be useful in saving people today. Good press Mr.
                  Anderson!</p>
              </td>
            </tr>

            <tr>
              <th scope="row">
                <figure>
                  <figcaption><a href="#">Vicky</a></figcaption>
                  <img src="pictures/missing.jpg" />
                </figure>
              </th>
              <td>
                <h3>4/22/2006 12:05 PM</h3>
                <p>Just wanna say tks to you :p Everything seems so wonderful, i can change my skin myself :p</p>
              </td>
            </tr>

            <tr>
              <th scope="row">
                <figure>
                  <figcaption><a href="#">Camy</a></figcaption>
                  <img src="pictures/missing.jpg" />
                </figure>
              </th>
              <td>
                <h3>4/22/2006 12:04 PM</h3>
                <p>come on!!! A*teen and radiohead together on the same list ???</p>
              </td>
            </tr>

            <tr>
              <th scope="row">
                <figure>
                  <figcaption><a href="#">James Dean</a></figcaption>
                  <img src={require('../pictures/james.jpg')} />
                </figure>
              </th>
              <td>
                <h3>4/22/2006 12:04 PM</h3>
                <p>Kundera and Orwell are great.. Do you know Arthur Koestler? Have you read Hommage to Catalonia?</p>
              </td>
            </tr>
          </table>

          <p id="add-comment"><a href="#">Add Comment</a></p>

        </section>
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