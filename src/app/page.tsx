"use client";
import { useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";

export default function Home() {
  const [value, setValue] = useState<string>("");

  const onChange = (val: string) => {
    setValue(val);
  };

  return (
    <main className="w-full flex-col items-center justify-between p-24">
      <CodeMirror
        value={value}
        theme={"dark"}
        height="200px"
        extensions={[javascript({ jsx: true })]}
        onChange={onChange}
      />
    </main>
  );
}
