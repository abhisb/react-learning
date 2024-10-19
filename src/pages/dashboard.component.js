import Footer from "../component/footer.component";
import HeaderComponent from "../component/header/header.component";
import LeftPanel from "../component/left-panel/left-panel.component";
import Overview from "../component/overview.component";
import { useEffect } from "react";
import { useContext } from "react";
import UserDetailsContext from "../provider/user-details.provider";

export default function DashboardPageComponent() {
  // The API endpoint URL
  const apiUrl =
    "https://gist.githubusercontent.com/diondree/92e4518ca7529e1f4d1300993e5cc287/raw/5e689bb33a11a2e55cb11e6f413ddea14c4be804/mock-data-10000.json"; // Example URL
  const { setUserDetails } = useContext(UserDetailsContext);

  useEffect(() => {
    // Function to fetch data
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl); // Make the fetch request
        if (!response.ok) {
          throw new Error("Network response was not ok"); // Handle non-200 responses
        }
        const result = await response.json(); // Parse JSON data from the response
        setUserDetails(result.splice(0, 10));
      } catch (err) {
        console.log("Fetch error");
      }
    };

    fetchData(); // Call the fetch function when the component mounts
  }, []); // Empty dependency array to run only once on component mount

  return (
    <>
      <HeaderComponent title={"Some title"} />
      <LeftPanel />
      <Overview />
      <Footer />
    </>
  );
}
