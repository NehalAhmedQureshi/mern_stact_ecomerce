import { Settings } from "@mui/icons-material";
import { Button, Stack, Typography } from "@mui/material";

export default function page() {
  return (
    <Stack>

     {/* header  */}
      <Stack direction={"row"} justifyContent={"space-between"}>
        <Typography variant="h4" fontWeight={"bold"}>
          Dashboard
        </Typography>
        <Button variant="outlined">
          Manage
        </Button>
      </Stack>

      {/* cards */}
      <StatsCard />
    </Stack>
  );
}
