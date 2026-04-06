export default function Header() {
  return (
    <header className="main-header flex flex-col justify-center h-36">
      <nav className="search-bar flex flex-col sm:flex-row items-start sm:justify-between px-4">
        <ul className="mt-2 space-x-1">
          <li>
            <a href="#">MySpace.com</a>
          </li>
        </ul>

        <form className="flex items-center gap-2">
          <label className="flex items-center gap-1">
            The Web
            <input type="radio" name="search-type" value="the-web" />
          </label>

          <label className="flex items-center gap-1">
            MySpace
            <input type="radio" name="search-type" value="myspace" />
          </label>

          <label>
            <input type="text" name="search" className="bg-white w-40" />
          </label>

          <input
            className="submit-btn text-black"
            type="submit"
            name="submit-button"
            value="Search"
          />
        </form>

        <ul className="mt-2 space-x-1">
          <li>
            <a href="#">Help</a>
          </li>
          <li>
            <a href="#">SignUp</a>
          </li>
        </ul>
      </nav>

      <nav className="navbar overflow-x-scroll pl-3 sm:pl-0">
        <ul className="flex mx-auto">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Browse</a>
          </li>
          <li>
            <a href="#">Search</a>
          </li>
          <li>
            <a href="#">Invite</a>
          </li>
          <li>
            <a href="#">Film</a>
          </li>
          <li>
            <a href="#">Mail</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Favorites</a>
          </li>
          <li>
            <a href="#">Forum</a>
          </li>
          <li>
            <a href="#">Groups</a>
          </li>
          <li>
            <a href="#">Events</a>
          </li>
          <li>
            <a href="#">Videos</a>
          </li>
          <li>
            <a href="#">Music</a>
          </li>
          <li>
            <a href="#">Classifieds</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
