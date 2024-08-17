import { Card, Chip, Typography } from "@mui/material";
import { LogType } from "src/common/log.type";
type LogCardProps = {
  log: LogType;
}
export const LogCard = ({log}: LogCardProps) => {
  const getRating = (rating: string) => {
    switch(true) {
      case rating === 'high':
        return 'red';
      case rating === 'medium':
        return 'orange';
      case rating === 'low':
        return 'green';
    }
  };
  return (
    <Card elevation={12} raised variant='outlined'>
      <Typography>{log.title}</Typography>
      <Typography>{log.date}</Typography>
      <Typography>{log.summary}</Typography>
      <Chip label={log.rating} sx={{ backgroundColor: getRating(log.rating) }}/>
    </Card>
   )
};
