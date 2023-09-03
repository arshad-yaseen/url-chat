"use client";

import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { SparklesIcon } from "lucide-react";
import { useAtom } from "jotai";
import { SamplePromptsAtom } from "@/lib/atoms";
import { samplePrompts } from "@/config/ai";

function HeroInput() {
  const [samplePromptsToDisplay, setSamplePromptsToDisplay] =
    useAtom(SamplePromptsAtom);

  const handleGenerateClick = () => {
    if (samplePromptsToDisplay.prompt === "") {
      setSamplePromptsToDisplay(samplePrompts);
    }
  };

  return (
    <div className="w-1/2 py-12 flex flex-col items-center justify-center">
      <div className="w-full h-12 relative flex space-x-2">
        <div className="relative w-full flex">
          <Input
            placeholder="Paste the data source url here"
            className={`h-full w-[60%] rounded-r-none`}
            defaultValue={samplePromptsToDisplay.dataUrl}
          />
          <Input
            placeholder="Name for the data"
            className="h-full w-[40%] absolute right-0 rounded-l-none border-l-transparent"
            defaultValue={samplePromptsToDisplay.dataName}
          />
        </div>
        <Button onClick={handleGenerateClick} className="h-full whitespace-nowrap">
          {samplePromptsToDisplay.prompt !== "" ? (
            <>
              <SparklesIcon className="h-5 w-5 mr-2" />
              Generate
            </>
          ) : (
            "Fill sample"
          )}
        </Button>
      </div>
    </div>
  );
}

export default HeroInput;
