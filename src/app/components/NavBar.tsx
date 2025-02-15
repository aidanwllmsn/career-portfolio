"use client";

import { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { TypingAnimation } from "./magicui/typing-animation";
import DownloadIcon from "@mui/icons-material/Download";
import Link from "next/link";
import { useAnimation } from "../context/AnimationContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { hasAnimated, markAsAnimated } = useAnimation();

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const list = () => (
    <Box
      sx={{
        width: "auto",
        bgcolor: "var(--background)",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        fontFamily: "monospace",
      }}
      role="presentation"
      onClick={toggleNavbar} // Close the drawer when an item is clicked
      onKeyDown={toggleNavbar} // Close the drawer when a key is pressed
    >
      <List>
        {[
          { text: "Home", path: "/" },
          { text: "Projects", path: "/projects" },
          { text: "Contact", path: "/contact" },
        ].map((item) => (
          <ListItem key={item.text} disablePadding>
            <Link href={item.path} passHref legacyBehavior>
              <ListItemButton
                component="a"
                sx={{
                  textAlign: "center",
                  color: "white",
                  "&:hover": {
                    color: "var(--primary)",
                  },
                }}
              >
                <ListItemText primary={item.text} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <nav className="bg-background border-gray-200">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4 relative">
        {/* Hamburger Button for Mobile */}
        <button
          onClick={toggleNavbar}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-buttonhover focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-cta"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        {/* Name Section */}
        <Link href="/" onClick={markAsAnimated}>
          <TypingAnimation
            className="top-5 absolute left-1/2 transform -translate-x-1/2 text-2xl font-semibold whitespace-nowrap text-white font-mono md:static md:left-auto md:transform-none"
            duration={100}
            delay={100}
            startOnView={false}
            key={hasAnimated ? "no-animation" : "with-animation"}
          >
            Aidan Williamson
          </TypingAnimation>
        </Link>

        {/* Resume Button */}
        <div className="hidden md:flex md:order-2 items-center space-x-3 font-medium text-l rtl:space-x-reverse border border-[#27272a] px-2 py-2 rounded-lg hover:bg-buttonhover">
          <DownloadIcon />
          <a
            href="resume.pdf"
            download="Williamson, Aidan Resume.pdf"
            className="text-white text-centerfont-mono"
          >
            Resume
          </a>
        </div>

        {/* Top Anchor for sm screens */}
        <Drawer
          anchor="top"
          open={isOpen}
          onClose={toggleNavbar}
          sx={{
            "& .MuiDrawer-paper": {
              transition: "transform 0.4s cubic-bezier(0.25, 0.1, 0.25, 1)",
              transform: isOpen ? "translateY(0)" : "translateY(-100%)",
            },
          }}
        >
          {list()}
        </Drawer>

        {/* Static Navbar for md+ */}
        <div
          className="hidden items-center justify-between w-full md:absolute md:left-1/2 md:transform md:-translate-x-1/2 md:flex md:w-auto md:order-1 font-mono"
          id="navbar-md"
        >
          <ul className="flex space-x-4 font-medium">
            <li>
              <Link
                href="/"
                className="block py-2 px-4 text-white hover:text-primary rounded-lg"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                className="block py-2 px-4 text-white hover:text-primary rounded-lg"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="block py-2 px-4 text-white hover:text-primary rounded-lg"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
