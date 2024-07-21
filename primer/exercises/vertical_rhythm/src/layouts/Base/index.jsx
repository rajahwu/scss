import { Header, Footer  } from "../../components";

export default function BaseLayout({ children }) {
  return (
    <div 
    id="container" 
    className="flex flex-col"
    >
      <Header /> 
      <main>{children}</main>
      <Footer />
    </div>
  );
}
