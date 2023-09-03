import { SamplePrompts } from "@/types";
import { atom } from "jotai";

export const SamplePromptsAtom = atom({
  dataUrl: "",
  dataName: "",
  prompt: "",
  instructions: "",
} satisfies SamplePrompts);
