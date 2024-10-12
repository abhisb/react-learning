import Footer from "../component/footer.component";
import HeaderComponent from "../component/header.component";
import LeftPanel from "../component/left-panel.component";
import Overview from "../component/overview.component";

export default function DashboardPageComponent() {
  return (
    <>
      <HeaderComponent title={"Some title"} />
      <LeftPanel />
      <Overview />
      <Footer />
    </>
  );
}
