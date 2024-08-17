import { Paper, Typography } from "@mui/material";
import { t } from "ttag";
import { mockLogs } from "src/common";
import { LogCard } from "./log-card";

/**
 * Home page Log Card container
 */
export const HomePageCard = () => {
  const b = '';
  return (
    <Paper elevation={4} sx={{
      flexGrow: 1,
      padding: '10px',
    }}>
      <Typography>{t`Your recent CYA Logs`}</Typography>
      {mockLogs.map(
        (l) => <LogCard log={l} />
      )}
    </Paper>
  )
};
