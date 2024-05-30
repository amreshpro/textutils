"use client"
import useThemeStore from "@/store/themeStore";
import React, { useEffect } from "react";
import ThemeButton from "../ui/ThemeButton";

export default function Container({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isDarkMode ,changeThemeMode} = useThemeStore((state)=>state);
  useEffect(()=>{
    if(window.matchMedia('(prefers-color-scheme: dark)').matches){
  changeThemeMode(true)
      }
  },[changeThemeMode])

  return (
    <div className={`${isDarkMode ? "dark" : "light"} w-full min-w-screen h-full min-h-screen p-4`}>
      <ThemeButton />
      {children}
    </div>
  );
}
