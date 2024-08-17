import { Typography } from "@mui/material";
import { PageLayoutMain } from "../page-layout/page-layout";
import { WELCOME_MESSAGE } from "src/common/constants";
import { HomePageCard } from "./components/home-page-card";

/**
 * Landing Page Layout
 */
export const HomePage = () => {
  const b = '';
  return(
    <PageLayoutMain sx={{
      display: 'flex',
      flexDirection: 'column',
      gap: 2,
      minHeight: '500px',
    }}>
      <HomePageCard />
    </PageLayoutMain>
  )
};
