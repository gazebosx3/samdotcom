import Typography from "@mui/material/Typography";

export default function About() {
  return (
    <>
      <Typography variant="h5" gutterBottom>
        Is it too cliche to say "I've always been bad at this stuff" ?
      </Typography>
      <Typography variant="h5" gutterBottom>
        👋
      </Typography>
      <Typography align="left" variant="body1" gutterBottom>
        I'm Sam. I'm a software engineer with six years of professional
        experience, the majority of which at Bloomberg L.P., but I've also been
        a part of a small consulting firm, where my favorite project was
        updating the legacy codebase of one of America's largest barge
        transportation solutions.
        <br />
        <br />
        <Typography align="center" variant="h6" gutterBottom>
          🚢
        </Typography>
        <br /> Like many developers, I love finding simple but elegent solutions
        to problems in the service of making software that is performant,
        intuitive, and error-free. Unlike many developers, I had a whole
        previous life editing books at HarperCollins and W.W. Norton following a
        B.A. (graduated a year early!) in English Literature and Medieval and
        Early Modern Studies from Tulane University.
        <br />
        <br />{" "}
        <Typography align="center" variant="h6" gutterBottom>
          🏰
        </Typography>
        <br />I got bit by the coding bug in 2017 and didn't look back. I'm an
        incredibly driven and disciplined person, so when I discovered the
        almost infinite ecosystem of online (and occasionally analog) resources
        available to learn anything and everything about programming software, I
        dove right in. My recent work has been on clientside application
        development and performance, but I love learning about computers all the
        way up and down the stack: microcontrollers, CPU architecture, operating
        systems, abstract syntax trees, browsers, the whole shebang.*
        <br />
        <br />
        <Typography align="center" variant="h6" gutterBottom>
          ✨
        </Typography>
        <br />
        There's not much else, I suppose. I love learning, I love building, and
        I love people. If you'd like to drop me a line, my email is
        samuelglass@gmail.com. Looking forward to hearing from you.
        <br />
        <br />
        <Typography variant="caption">
          *little scripting joke for you
        </Typography>
      </Typography>
    </>
  );
}
