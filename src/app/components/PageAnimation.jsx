"use client";
import React from "react";
import { useState, useCallback, useEffect } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";

function PageAnimation({ children }) {
  const [parent] = useAutoAnimate();


  return <div className="w-full" ref={parent}>{children}</div>;
}

export default PageAnimation;
