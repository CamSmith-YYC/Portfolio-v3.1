import type { ReactNode } from "react";
import { AppBar, Box, Toolbar, Typography, Button } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import ConstructionIcon from '@mui/icons-material/Construction';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox';

function Header() {
  const renderIcon = (icon: ReactNode, label: string) => (
    <Box
      sx={{
        position: "relative",
        display: "inline-flex",
        alignItems: "center",
        "& .header-label": {
          position: "absolute",
          left: "50%",
          top: "100%",
          transform: "translateX(-50%) translateY(8px)",
          opacity: 0,
          bgcolor: "primary.dark",
          color: "common.white",
          fontSize: 12,
          px: "0.75em",
          py: "0.4em",
          borderRadius: "100px",
          boxShadow: "0 5px 10px rgba(0, 0, 0, 0.05)",
          whiteSpace: "nowrap",
          pointerEvents: "none",
          transition: "200ms cubic-bezier(.42,0,.44,1.68)",
        },
        "& .header-arrow": {
          position: "absolute",
          left: "50%",
          top: "100%",
          transform: "translateX(-50%) translateY(-1px)",
          opacity: 0,
          width: 0,
          height: 0,
          borderLeft: "6px solid transparent",
          borderRight: "6px solid transparent",
          borderBottom: (theme) => `8px solid ${theme.palette.primary.dark}`,
          pointerEvents: "none",
          transition: "200ms cubic-bezier(.42,0,.44,1.68)",
        },
        ".MuiButton-root:hover & .header-label": {
          transform: "translateX(-50%) translateY(18px)",
          opacity: 1,
        },
        ".MuiButton-root:hover & .header-arrow": {
          transform: "translateX(-50%) translateY(11px)",
          opacity: 1,
        },
      }}
    >
      {icon}
      <Box className="header-label">{label}</Box>
      <Box className="header-arrow" />
    </Box>
  );

  return (
    <AppBar position="static">
      <Toolbar sx={{ gap: 1.25 }}>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          My Portfolio
        </Typography>
        <Button
          startIcon={renderIcon(<HomeIcon />, "Home")}
          color="inherit"
          sx={{
            minWidth: 44,
            px: 1.25,
            "& .MuiButton-startIcon": { m: 0 },
            "&:hover": { bgcolor: "primary.dark" },
          }}
        />
        <Button
          startIcon={renderIcon(<AutoStoriesIcon />, "About")}
          color="inherit"
          sx={{
            minWidth: 44,
            px: 1.25,
            "& .MuiButton-startIcon": { m: 0 },
            "&:hover": { bgcolor: "primary.dark" },
          }}
        />
        <Button
          startIcon={renderIcon(<ConstructionIcon />, "Projects")}
          color="inherit"
          sx={{
            minWidth: 44,
            px: 1.25,
            "& .MuiButton-startIcon": { m: 0 },
            "&:hover": { bgcolor: "primary.dark" },
          }}
        />
        <Button
          startIcon={renderIcon(<HomeRepairServiceIcon />, "Tools")}
          color="inherit"
          sx={{
            minWidth: 44,
            px: 1.25,
            "& .MuiButton-startIcon": { m: 0 },
            "&:hover": { bgcolor: "primary.dark" },
          }}
        />
        <Button
          startIcon={renderIcon(<ForwardToInboxIcon />, "Contact")}
          color="inherit"
          sx={{
            minWidth: 44,
            px: 1.25,
            "& .MuiButton-startIcon": { m: 0 },
            "&:hover": { bgcolor: "primary.dark" },
          }}
        />
      </Toolbar>
    </AppBar>
  );
}

export default Header;
