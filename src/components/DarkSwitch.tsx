"use client";

import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { FaLightbulb, FaMoon } from "react-icons/fa";

const ThemeChanger = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div className="flex items-center">
      {theme === "dark" ? (
        <button
          onClick={() => setTheme("light")}
          className="rounded-full outline-none focus:outline-none">
          <span className="sr-only">Switch to light mode</span>

          <FaLightbulb size={18} className="text-yellow-200" />
        </button>
      ) : (
        <button
          onClick={() => setTheme("dark")}
          className="text-gray-500 rounded-full outline-none focus:outline-none focus-visible:ring focus-visible:ring-gray-100 focus:ring-opacity-20">
          <span className="sr-only">Switch to dark mode</span>
          <FaMoon size={18}/>
        </button>
      )}
    </div>
  );
};

export default ThemeChanger;
