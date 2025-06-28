import { client } from "../../tina/__generated__/client";
import LandingPage from "./components/LandingPage";

export default async function Home() {
  const { data } = await client.queries.landingPage({
    relativePath: "landing-page.md",
  });

  return <LandingPage data={data} />;
}

