function About() {
  return (
    <div className="w-screen h-96 bg-accent flex flex-col py-28">
      <span>
        <h1 className="text-textColor px-6 text-4xl ">
          Fullstack web developer and{" "}
          <h1 className="text-finalAccent">educator.</h1>
        </h1>
      </span>
      <div className="grid grid-cols-2">
        <span className="my-4 mx-4 flex flex-col justify-center items-center text-center">
          <a
            className="hover:scale-105 transition-all"
            target="_blank"
            href="https://drive.google.com/file/d/1PYM-dillFHdcStMO5MukmxGJR9lrch6l/view?usp=sharing"
            rel="noreferrer"
          >
            <img
              className="rounded-3xl border-solid border-2 border-finalAccent"
              src="src/images/Screen Shot 2023-12-30 at 2.02.19 PM.png"
              alt="resume image"
            />

            <h3 className="text-2xl text-finalAccent">Resume</h3>
          </a>
        </span>
      </div>
    </div>
  );
}

export default About;
