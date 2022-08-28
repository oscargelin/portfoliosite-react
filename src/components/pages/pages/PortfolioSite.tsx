import { useMediaQuery } from "react-responsive";
import MobileView from "../mobileView/MobileView";
import TabletView from "../tabletView/TabletView";
import DesktopView from "../desktopView/DesktopView";

const PortfolioSite = () => {
  const isMobile = useMediaQuery({
    query: "(min-width: 320px) and (max-width: 599px)",
  });
  const isTablet = useMediaQuery({
    query: "(min-width: 600px) and (max-width: 899px)",
  });
  // const isDesktop = useMediaQuery({
  //   query: "(min-width: 900px)",
  // });

  return (
    <div>
      {isMobile ? <MobileView /> : isTablet ? <TabletView /> : <DesktopView />}
    </div>
  );
};
export default PortfolioSite;
