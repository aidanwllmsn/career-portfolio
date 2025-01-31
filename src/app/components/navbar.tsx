"use client";

import { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { TypingAnimation } from "./magicui/typing-animation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const list = () => (
    <Box
      sx={{
        width: "auto",
        bgcolor: "var(--background)", // Match your background color
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", // Match your shadow
        fontFamily: "monospace",
      }}
      role="presentation"
      onClick={toggleNavbar} // Close the drawer when an item is clicked
      onKeyDown={toggleNavbar} // Close the drawer when a key is pressed
    >
      <List>
        {["Home", "About", "Contact"].map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton
              sx={{
                textAlign: "center",
                color: "white",
                "&:hover": {
                  color: "var(--primary)",
                },
              }}
            >
              <ListItemText primary={text} />
            </ListItemButton>
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
        <a href="/">
          <TypingAnimation
            className="top-5 absolute left-1/2 transform -translate-x-1/2 text-2xl font-semibold whitespace-nowrap text-white font-mono md:static md:left-auto md:transform-none"
            duration={100}
            delay={100}
            startOnView={true}
          >
            Aidan Williamson
          </TypingAnimation>
        </a>

        {/* Resume Button */}
        <div className="hidden md:flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <a
            href="resume.pdf"
            download="Williamson, Aidan Resume.pdf"
            className="text-white focus:ring-4 focus:outline-none text-xl font-semibold rounded-lg px-4 py-2 text-center hover:text-primary focus:ring-blue-800 font-mono"
          >
            My Resume
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
              <a
                href="/"
                className="block py-2 px-4 text-white hover:text-primary rounded-lg"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-4 text-white hover:text-primary rounded-lg"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-4 text-white hover:text-primary rounded-lg"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
