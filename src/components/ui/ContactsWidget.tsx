import type { ReactNode } from "react";
import { useMemo, useState } from "react";
import { Box, Fab, IconButton } from "@mui/material";
import type { FabProps } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";

type ContactItem = {
  label: string;
  href: string;
  color: string;
  icon: ReactNode;
};

type ContactsWidgetProps = {
  itemsLeft?: ContactItem[];
  itemsRight?: ContactItem[];
  fabProps?: FabProps;
};

const ContactsWidget = ({ itemsLeft, itemsRight, fabProps }: ContactsWidgetProps) => {
  const [open, setOpen] = useState(false);

  const defaultLeft = useMemo<ContactItem[]>(
    () => [
      {
        label: "Gmail",
        href: "#",
        color: "#EA4335",
        icon: <EmailIcon fontSize="small" />,
      },
      {
        label: "LinkedIn",
        href: "#",
        color: "#0077B5",
        icon: <LinkedInIcon fontSize="small" />,
      },
    ],
    []
  );

  const defaultRight = useMemo<ContactItem[]>(
    () => [
      {
        label: "GitHub",
        href: "#",
        color: "#181717",
        icon: <GitHubIcon fontSize="small" />,
      },
      {
        label: "Instagram",
        href: "#",
        color: "#FF0069",
        icon: <InstagramIcon fontSize="small" />,
      },
    ],
    []
  );

  const left = itemsLeft ?? defaultLeft;
  const right = itemsRight ?? defaultRight;

  const renderItem = (item: ContactItem, isEdge: boolean, edgeSide: "left" | "right") => (
    <IconButton
      key={item.label}
      component="a"
      href={item.href}
      aria-label={item.label}
      sx={{
        position: "relative",
        height: 50,
        width: 50,
        p: "0.5em",
        boxSizing: "border-box",
        flexShrink: 0,
        borderRadius: isEdge ? (edgeSide === "left" ? "30px 0 0 30px" : "0 30px 30px 0") : "0",
        bgcolor: "common.white",
        color: "grey.500",
        boxShadow: "0 5px 10px rgba(0, 0, 0, 0.05)",
        transition: "background-color 200ms ease, color 200ms ease",
        "& svg": {
          fontSize: 28,
          fill: "currentColor",
        },
        "& .contact-label": {
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
        "& .contact-arrow": {
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
        "&:hover .contact-label": {
          transform: "translateX(-50%) translateY(-50px) rotate(0deg)",
          opacity: 1,
        },
        "&:hover .contact-arrow": {
          transform: "translateX(-50%) translateY(-18px) rotate(0deg)",
          opacity: 1,
        },
      }}
    >
      {item.icon}
      <Box className="contact-label">{item.label}</Box>
      <Box className="contact-arrow" />
    </IconButton>
  );

  return (
    <Box
      sx={{
        position: "fixed",
        left: "50%",
        bottom: 24,
        transform: "translateX(-50%)",
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
          {left.map((item, index) => renderItem(item, index === 0, "left"))}
        </Box>
        <Fab
          color="primary"
          aria-label="Contacts"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          sx={{
            height: 50,
            width: 50,
            minHeight: 50,
            transition: "border-radius 1s ease",
            borderRadius: open ? 0 : "30px",
          }}
          {...fabProps}
        >
          <AddIcon
            sx={{
              fontSize: 47,
              transition: "transform 1s ease",
              transform: open ? "rotate(45deg)" : "rotate(0deg)",
            }}
          />
        </Fab>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            transform: open ? "scaleX(1)" : "scaleX(0)",
            transformOrigin: "left",
            transition: "transform 500ms ease",
          }}
        >
          {right.map((item, index) =>
            renderItem(item, index === right.length - 1, "right")
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default ContactsWidget;
