"use client";

import React from "react";
import { AutoTextarea } from "./ui/autotextarea";
import { Button } from "./ui/button";
import { useAtom } from "jotai";
import { SamplePromptsAtom } from "@/lib/atoms";

function Instructions() {

    const [samplePromptsToDisplay] =
    useAtom(SamplePromptsAtom);

  return (
    <div className="w-1/2 h-full  z-50 flex flex-col items-center justify-center">
      <form className="w-full space-y-4">
        <div className="w-full flex justify-end">
          <Button variant="outline">Save Instructions</Button>
        </div>
        <AutoTextarea minRows={3} placeholder="Write prompt here..."
        defaultValue={samplePromptsToDisplay.prompt}
        />
        <AutoTextarea minRows={7} placeholder="Write instructions here..." 
        defaultValue={samplePromptsToDisplay.instructions}
        />
      </form>
    </div>
  );
}

export default Instructions;
