import {
  AttachMoney,
  Key,
  KeyboardArrowDown,
  KeyboardArrowUp,
  MoneyRounded,
} from "@mui/icons-material";
import { Paper, Stack, Typography } from "@mui/material";

export default function StatsCard({
  revenue,
  title,
  profit,
  icon,
}: statsCardType) {
  return (
    <Paper elevation={4} sx={{ p: 2, maxWidth: 250 }}>
      <Stack
        direction={"row"}
        justifyContent={"space-around"}
        alignItems={"center"}
        height={"100%"}
      >
        {/* stats */}
        <Stack justifyContent={"space-between"}>
          <Typography sx={{ color: "text.secondary" }}>{title}</Typography>
          <Typography variant="h4" fontWeight={600}>
            ${revenue}
          </Typography>
          <Typography
            sx={{
              display: "flex",
              alignItems: "center",
              color: profit?.type === "profit" ? "success.main" : "error.main",
            }}
          >
            {profit?.num}
            {profit?.type === "profit" ? (
              <KeyboardArrowUp />
            ) : (
              <KeyboardArrowDown />
            )}
          </Typography>
        </Stack>
        {/* icons */}
        {icon}
      </Stack>
    </Paper>
  );
}

interface statsCardType {
  revenue: number;
  title: string;
  profit: { num: string; type: "profit" | "loss" };
  icon: React.ReactElement;
}
