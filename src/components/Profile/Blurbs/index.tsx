export default function Blurbs() {
  return (
    <section className="blurbs">
      <header className="bg-orange-200 py-0.5 mb-2">
        <h2 className="text-orange-500 ml-5">Tom's Blurbs</h2>
      </header>

      <h3 className="text-xs ml-3.5 text-orange-500">About me:</h3>
      <p className="m-3.5 mt-0 mr-2.5">
        I'm here to help you with <b>MySpace</b>. Send me a message if you're
        confused by anything.{" "}
        <span className="text-green-700 font-bold">
          Before asking me a question, please check the <a href="#">FAQ</a> to
          see if your question has already been answered.
        </span>
      </p>

      <p className="m-3.5 mt-0 mr-2.5">
        I may have been on your friend list when you signed up. If you don't
        want me to be, click "Edit Friends" and remove me!
      </p>

      <p className="m-3.5 mt-0 mr-2.5">
        <strong>
          Also, feel free to tell me what features you want to see on MySpace
          and if I think it's cool, we'll do it!
        </strong>
      </p>

      <p className="m-3.5 mt-0 mr-2.5">
        If you want a tutorial on HTML/designing your page, check this out:{" "}
        <a href="#">Mack</a>!!
      </p>

      <p className="ml-3.5 mt-0 mr-2.5 mb-5">
        Note: If you try to view my friends list you won't see all 24,000,000
        million people. This was bogging down the system, so we made it only
        show 40 people. So you wont be able to see the friends on my list.
      </p>

      <h3 className="text-xs ml-3.5 text-orange-500">Who I'd like to meet:</h3>
      <p className="m-3.5 mt-0 mr-2.5">
        I'd like to meet people who educate, inspire or entertain me... I have a
        few close friends I've known all my life. I'd like to make more.{" "}
      </p>
    </section>
  );
}
