"use client";
import React from "react";
import { useState, useCallback, useEffect } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";

function PageAnimation({ children }) {
  const [parent] = useAutoAnimate();


  return <div ref={parent}>{children}</div>;
}

export default PageAnimation;
