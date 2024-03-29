import * as React from "react";

import FreshersDataList from "./FreshersDataList";

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
      <SelectTrigger className="w-full border-2 border-neutral-800 py-2 px-4 placeholder-slate-800">
        <SelectValue
          placeholder="Select Group"
          className="placeholder-slate-800"
        ></SelectValue>
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="A">
          {" "}
          <div className="flex space-x-2 p-1">
            <h1 className="font-semibold text-neutral-800">1st Year</h1>
            <p className="text-neutral-600">Section A</p>
          </div>
        </SelectItem>
        <SelectItem value="B">
          {" "}
          <div className="flex space-x-2 p-1">
            <h1 className="font-semibold text-neutral-800">1st Year</h1>
            <p className="text-neutral-600">Section B</p>
          </div>
        </SelectItem>
        <SelectItem value="C">
          {" "}
          <div className="flex space-x-2 p-1">
            <h1 className="font-semibold text-neutral-800">1st Year</h1>
            <p className="text-neutral-600">Section C</p>
          </div>
        </SelectItem>
        <SelectItem value="D">
          {" "}
          <div className="flex space-x-2 p-1">
            <h1 className="font-semibold text-neutral-800">1st Year</h1>
            <p className="text-neutral-600">Section D</p>
          </div>
        </SelectItem>
        <SelectItem value="E">
          {" "}
          <div className="flex space-x-2 p-1">
            <h1 className="font-semibold text-neutral-800">1st Year</h1>
            <p className="text-neutral-600">Section E</p>
          </div>
        </SelectItem>
        <SelectItem value="F">
          {" "}
          <div className="flex space-x-2 p-1">
            <h1 className="font-semibold text-neutral-800">1st Year</h1>
            <p className="text-neutral-600">Section F</p>
          </div>
        </SelectItem>
        <SelectItem value="G">
          {" "}
          <div className="flex space-x-2 p-1">
            <h1 className="font-semibold text-neutral-800">1st Year</h1>
            <p className="text-neutral-600">Section G</p>
          </div>
        </SelectItem>
        <SelectItem value="H">
          {" "}
          <div className="flex space-x-2 p-1">
            <h1 className="font-semibold text-neutral-800">1st Year</h1>
            <p className="text-neutral-600">Section H</p>
          </div>
        </SelectItem>

        <SelectItem value="I">
          {" "}
          <div className="flex space-x-2 p-1">
            <h1 className="font-semibold text-neutral-800">2nd Year</h1>
            <p className="text-neutral-600">
              (1st Year B.Tech./BE/Dual Degree/Integrated M.Tech)
            </p>
          </div>
        </SelectItem>
        <SelectItem value="J">
          {" "}
          <div className="flex space-x-2 p-1">
            <h1 className="font-semibold text-neutral-800">Group C</h1>
            <p className="text-neutral-600">
              (1st Year B.Tech./BE/Dual Degree/Integrated M.Tech)
            </p>
          </div>
        </SelectItem>
        <SelectItem value="K">
          {" "}
          <div className="flex space-x-2 p-1">
            <h1 className="font-semibold text-neutral-800">Group D</h1>
            <p className="text-neutral-600 ">
              (M.Tech. (1st Year) + Dual Degree/Integrated M.Tech (4th Year))
            </p>
          </div>
        </SelectItem>
        <SelectItem value="L">
          {" "}
          <div className="flex space-x-2 p-1">
            <h1 className="font-semibold text-neutral-800">Group E</h1>
            <p className="text-neutral-600 ">
              2 Yr. M.Sc (1st Year) + 3 Yr. M.Sc Tech (1st year & 2nd year) + 2
              Yr. MBA (1st Year)
            </p>
          </div>
        </SelectItem>
        <SelectItem value="M">
          {" "}
          <div className="flex space-x-2 p-1">
            <h1 className="font-semibold text-neutral-800">Group F</h1>
            <p className="text-neutral-600 ">
              Ph.D (Full time) (1st year & 2nd year) student only
            </p>
          </div>
        </SelectItem>
      </SelectContent>
    </Select>
  );
}
