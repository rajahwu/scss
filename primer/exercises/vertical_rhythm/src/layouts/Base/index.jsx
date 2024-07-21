import { Header, Footer  } from "../../components";

export default function BaseLayout({ children }) {
  return (
    <div 
    id="container" 
    className="flex flex-col border-black border-4 p-5 mx-auto mt-[10vh] w-[75vw] h-[65vh]"
    >
      <Header /> 
      <main>{children}</main>
      <Footer />
    </div>
  );
}
