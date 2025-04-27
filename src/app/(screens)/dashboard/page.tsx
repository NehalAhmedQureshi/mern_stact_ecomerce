import StatsCard from "@/components/dashboard/StatsCard";
import { AttachMoney, KeyboardArrowUp, Settings } from "@mui/icons-material";
import { Button, Stack, Typography, Grid } from "@mui/material";

export default function page() {
  return (
    <Stack>
      {/* header  */}
      <Stack direction={"row"} justifyContent={"space-between"}>
        <Typography variant="h4" fontWeight={"bold"}>
          Dashboard
        </Typography>
        <Button variant="outlined">Manage</Button>
      </Stack>

      {/* cards */}
      <Grid container mt={3} spacing={2} justifyContent={"center"} sx={{width:'100%'}}>
        {/* card 1 */}
        <Grid size={{ xs: 10, sm: 6, md: 4, lg: 3 }} rowSpacing={2}>
          <StatsCard
            title={"Total Revenue"}
            revenue={1024}
            profit={{ num: "10.0%", type: "profit" }}
            icon={<AttachMoney sx={{ fontSize: 60, color: "primary.main" }} />}
          />
        </Grid>
        {/* card 2 */}
        <Grid size={{ xs: 10, sm: 6, md: 4, lg: 3 }}>
          <StatsCard
            title={"Total Revenue"}
            revenue={1024}
            profit={{ num: "10.0%", type: "profit" }}
            icon={<AttachMoney sx={{ fontSize: 60, color: "primary.main" }} />}
          />
        </Grid>
        {/* card 3 */}
        <Grid size={{ xs: 10, sm: 6, md: 4, lg: 3 }}>
          <StatsCard
            title={"Total Revenue"}
            revenue={1024}
            profit={{ num: "10.0%", type: "profit" }}
            icon={<AttachMoney sx={{ fontSize: 60, color: "primary.main" }} />}
          />
        </Grid>
        {/* card 4 */}
        <Grid size={{ xs: 10, sm: 6, md: 4, lg: 3 }}>
          <StatsCard
            title={"Total Revenue"}
            revenue={1024}
            profit={{ num: "10.0%", type: "profit" }}
            icon={<AttachMoney sx={{ fontSize: 60, color: "primary.main" }} />}
          />
        </Grid>
      </Grid>
    </Stack>
  );
}
