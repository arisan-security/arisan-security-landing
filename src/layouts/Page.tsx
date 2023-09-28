import {ReactNode} from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";

type PageProps = {
  children: ReactNode;
  title: String;
  path: String;
}

export default function Page(props: PageProps){
  return (
      <div className={""}>
        <Header
          path={props.path || '#'}
        />
        <main>
          {props.children}
        </main>
        <Footer />
      </div>
  )
}