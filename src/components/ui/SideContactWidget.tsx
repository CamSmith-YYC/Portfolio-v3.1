import type { ReactNode } from "react";
import { useMemo, useState } from "react";
import { Box, Fab, IconButton } from "@mui/material";
import type { FabProps } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import LinkIcon from "@mui/icons-material/Link";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";

type SideItem = {
  label: string;
  href: string;
  color: string;
  icon: ReactNode;
};

type SideContactWidgetProps = {
  items?: SideItem[];
  fabProps?: FabProps;
};

const SideContactWidget = ({ items, fabProps }: SideContactWidgetProps) => {
  const [open, setOpen] = useState(false);

  const defaultItems = useMemo<SideItem[]>(
    () => [
      {
        label: "Gmail",
        href: "#",
        color: "#EA4335",
        icon: (
          <Box
            component="svg"
            viewBox="0 0 24 24"
            aria-hidden="true"
            sx={{ width: 24, height: 24, fill: "currentColor" }}
          >
            <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />
          </Box>
        ),
      },
      { label: "LinkedIn", href: "#", color: "#0077B5", icon: <LinkedInIcon fontSize="small" /> },
      { label: "GitHub", href: "#", color: "#181717", icon: <GitHubIcon fontSize="small" /> },
      { label: "Instagram", href: "#", color: "#FF0069", icon: <InstagramIcon fontSize="small" /> },
    ],
    []
  );

  const list = items ?? defaultItems;

  return (
    <Box
      sx={{
        position: "fixed",
        right: 24,
        bottom: 24,
        zIndex: (theme) => theme.zIndex.tooltip + 1,
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            transform: open ? "scaleX(1)" : "scaleX(0)",
            transformOrigin: "right",
            transition: "transform 500ms ease",
          }}
        >
          {list.map((item, index) => (
            <IconButton
              key={item.label}
              component="a"
              href={item.href}
              aria-label={item.label}
              sx={{
                position: "relative",
                height: 52,
                width: 52,
                bgcolor: "grey.300",
                color: "grey.500",
                boxShadow: "0 5px 10px rgba(0, 0, 0, 0.05)",
                borderRadius: index === 0 ? "30px 0 0 30px" : 0,
                transition: "background-color 200ms ease, color 200ms ease",
                "& svg": {
                  fontSize: 26,
                  transition: "transform 200ms ease",
                },
                "& .side-label": {
                  position: "absolute",
                  left: "50%",
                  top: 0,
                  transform: "translateX(-50%) translateY(-30px) rotate(25deg)",
                  opacity: 0,
                  bgcolor: item.color,
                  color: "common.white",
                  fontSize: 13,
                  px: "1em",
                  py: "0.5em",
                  borderRadius: "100px",
                  boxShadow: "0 5px 10px rgba(0, 0, 0, 0.05)",
                  whiteSpace: "nowrap",
                  pointerEvents: "none",
                  transition: "200ms cubic-bezier(.42,0,.44,1.68)",
                },
                "& .side-arrow": {
                  position: "absolute",
                  left: "50%",
                  top: 0,
                  transform: "translateX(-50%) translateY(12px) rotate(25deg)",
                  opacity: 0,
                  width: 0,
                  height: 0,
                  borderLeft: "8px solid transparent",
                  borderRight: "8px solid transparent",
                  borderTop: `10px solid ${item.color}`,
                  pointerEvents: "none",
                  transition: "200ms cubic-bezier(.42,0,.44,1.68)",
                },
                "&:hover": {
                  bgcolor: item.color,
                  color: "common.white",
                },
                "&:hover svg": {
                  transform: "scale(1.33)",
                },
                "&:hover .side-label": {
                  transform: "translateX(-50%) translateY(-50px) rotate(0deg)",
                  opacity: 1,
                },
                "&:hover .side-arrow": {
                  transform: "translateX(-50%) translateY(-18px) rotate(0deg)",
                  opacity: 1,
                },
              }}
            >
              {item.icon}
              <Box className="side-label">{item.label}</Box>
              <Box className="side-arrow" />
            </IconButton>
          ))}
        </Box>
        <Fab
          color="primary"
          aria-label="Open contacts"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          sx={{
            position: "relative",
            height: 52,
            width: 52,
            minHeight: 52,
            transition: "border-radius 1s ease",
            borderRadius: open ? "0 30px 30px 0" : "30px",
            "& .fab-label": {
              position: "absolute",
              left: "50%",
              top: 0,
              transform: "translateX(-50%) translateY(-30px) rotate(25deg)",
              opacity: 0,
              bgcolor: (theme) => theme.palette.primary.main,
              color: "common.white",
              fontSize: 13,
              px: "1em",
              py: "0.5em",
              borderRadius: "100px",
              boxShadow: "0 5px 10px rgba(0, 0, 0, 0.05)",
              whiteSpace: "nowrap",
              pointerEvents: "none",
              transition: "200ms cubic-bezier(.42,0,.44,1.68)",
            },
            "& .fab-arrow": {
              position: "absolute",
              left: "50%",
              top: 0,
              transform: "translateX(-50%) translateY(12px) rotate(25deg)",
              opacity: 0,
              width: 0,
              height: 0,
              borderLeft: "8px solid transparent",
              borderRight: "8px solid transparent",
              borderTop: (theme) => `10px solid ${theme.palette.primary.main}`,
              pointerEvents: "none",
              transition: "200ms cubic-bezier(.42,0,.44,1.68)",
            },
            "&:hover .fab-label": {
              transform: "translateX(-50%) translateY(-50px) rotate(0deg)",
              opacity: 1,
            },
            "&:hover .fab-arrow": {
              transform: "translateX(-50%) translateY(-18px) rotate(0deg)",
              opacity: 1,
            },
          }}
          {...fabProps}
        >
          <Box sx={{ position: "relative", width: 38, height: 38 }}>
            <LinkIcon
              sx={{
                position: "absolute",
                inset: 0,
                fontSize: 38,
                transition: "opacity 200ms ease, transform 600ms ease",
                opacity: open ? 0 : 1,
                transform: open ? "rotate(20deg) scale(0.9)" : "rotate(0deg) scale(1)",
              }}
            />
            <CloseIcon
              sx={{
                position: "absolute",
                inset: 0,
                fontSize: 38,
                transition: "opacity 200ms ease, transform 600ms ease",
                opacity: open ? 1 : 0,
                transform: open ? "rotate(0deg) scale(1)" : "rotate(-20deg) scale(0.9)",
              }}
            />
          </Box>
          <Box className="fab-label">Links</Box>
          <Box className="fab-arrow" />
        </Fab>
      </Box>
    </Box>
  );
};

export default SideContactWidget;
