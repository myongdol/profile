import Nav from "./pages/Nav";
import { css } from "@emotion/css";


export default function App() {
  return (
   <section css={Container}>
   hello
   <Nav />
   </section>
  );
}

const Container = css`
width: 400px;
margin-right: 10px;
`