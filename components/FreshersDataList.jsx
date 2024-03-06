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

export default function FreshersDataList() {
  return (
    <Select>
      {/* <SelectTrigger className="w-full border-2 border-neutral-800 py-2 px-4 placeholder-slate-800">
        <SelectValue
          placeholder=""
          className="placeholder-slate-800"
        ></SelectValue>
      </SelectTrigger> */}
      <div>1st Year</div>
      <SelectTrigger>
        <SelectValue placeholder="Section"></SelectValue>
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="A">
          <div className="flex flex-col space-y-2">
            <h1 className="font-semibold text-neutral-800">Secion A</h1>
          </div>
        </SelectItem>
        <SelectItem value="B">
          <div className="flex flex-col space-y-2">
            <h1 className="font-semibold text-neutral-800">Secion B</h1>
          </div>
        </SelectItem>
        <SelectItem value="C">
          <div className="flex flex-col space-y-2">
            <h1 className="font-semibold text-neutral-800">Secion C</h1>
          </div>
        </SelectItem>
        <SelectItem value="D">
          <div className="flex flex-col space-y-2">
            <h1 className="font-semibold text-neutral-800">Secion D</h1>
          </div>
        </SelectItem>
      </SelectContent>
    </Select>
  );
}
