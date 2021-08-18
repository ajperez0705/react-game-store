import { useEffect } from "react";
import { withRouter } from "react-router-dom";

const ScrollToTop = ({ history, location }) => {
  const dontScrollIntoViewOnPaths = ["/platforms/"];

  useEffect(() => {
    if (history.action === "POP") {
      return;
    }

    let { hash, pathname } = location;
    if (hash) {
      let element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ block: "start", behavior: "smooth" });
      }
    } else if (!dontScrollIntoViewOnPaths.includes(pathname)) {
      window.scrollTo(0, 0);
    }
  });

  return null;
};

export default withRouter(ScrollToTop);

// function ScrollToTop({ history }) {
//   useEffect(() => {
//     const unlisten = history.listen(() => {
//       window.scrollTo(0, 0);
//     });
//     return () => {
//       unlisten();
//     };
//   }, []);

//   return null;
// }

// export default withRouter(ScrollToTop);
