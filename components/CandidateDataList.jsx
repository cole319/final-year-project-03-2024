import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function CandidateDataList() {
  return (
    <Select>
      <SelectTrigger className="w-full border-2 border-neutral-800 py-2 px-4 placeholder-slate-800 ">
        <SelectValue
          placeholder="Select Group"
          className="placeholder-slate-800"
        ></SelectValue>
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="A">
          <div className="flex space-x-2 p-2">
            <h1 className="font-semibold text-neutral-800">Group A</h1>
            <p className="text-neutral-600">
              (3rd Year B.Tech./BE/Dual Degree/Integrated M.Tech)
            </p>
          </div>
        </SelectItem>
        <SelectItem value="B">
          {" "}
          <div className="flex space-x-2 p-2">
            <h1 className="font-semibold text-neutral-800">Group B</h1>
            <p className="text-neutral-600 ">
              (2nd Year B.Tech./BE/Dual Degree/Integrated M.Tech)
            </p>
          </div>
        </SelectItem>
        <SelectItem value="C">
          {" "}
          <div className="flex space-x-2 p-2">
            <h1 className="font-semibold text-neutral-800">Group C</h1>
            <p className="text-neutral-600 ">
              (1st Year B.Tech./BE/Dual Degree/Integrated M.Tech)
            </p>
          </div>
        </SelectItem>
        <SelectItem value="D">
          {" "}
          <div className="flex space-x-2 p-2">
            <h1 className="font-semibold text-neutral-800">Group D</h1>
            <p className="text-neutral-600">
              (M.Tech. (1st Year) + Dual Degree/Integrated M.Tech (4th Year))
            </p>
          </div>
        </SelectItem>
        <SelectItem value="E">
          {" "}
          <div className="flex space-x-2 p-2">
            <h1 className="font-semibold text-neutral-800">Group E</h1>
            <p className="text-neutral-600">
              (2 Yr. M.Sc (1st Year) + 3 Yr. M.Sc Tech (1st year & 2nd year) + 2
              Yr. MBA (1st Year))
            </p>
          </div>
        </SelectItem>
        <SelectItem value="F">
          {" "}
          <div className="flex space-x-2 p-2">
            <h1 className="font-semibold text-neutral-800">Group F</h1>
            <p className="text-neutral-600 ">
              (Ph.D (Full time) (1st year & 2nd year) student only)
            </p>
          </div>
        </SelectItem>
      </SelectContent>
    </Select>
  );
}
