import { useSelector } from "react-redux";

import { selectOnThemeCustom } from "_redux/modules/app/selector";
import Header from "components/base/Header";
import LeftBar from "components/base/LeftBar";
import ThemeCustom from "components/base/ThemeCustom";

interface IDefaultLayoutProps {
  children: React.ReactNode;
}

function DefaultLayout(props: IDefaultLayoutProps) {
  const { children } = props;

  const onThemeCustom = useSelector(selectOnThemeCustom);

  return (
    <div className="layout">
      <Header />
      <main>
        <LeftBar />
        {onThemeCustom && <ThemeCustom />}
        {children}
      </main>
    </div>
  );
}

export default DefaultLayout;
