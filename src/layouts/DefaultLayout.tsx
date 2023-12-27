import Header from "components/base/Header";
import LeftBar from "components/base/LeftBar";

interface IDefaultLayoutProps {
  children: React.ReactNode;
}

function DefaultLayout(props: IDefaultLayoutProps) {
  const { children } = props;

  return (
    <div className="layout">
      <Header />
      <main>
        <LeftBar />
        {children}
      </main>
    </div>
  );
}

export default DefaultLayout;
