"use client";
import { useState } from "react";

const sections = [
  {
    id: 1,
    title: "What is Node.js?",
    icon: "🟢",
    content: (
      <div className="space-y-3">
        <p className="text-base-content/80">
          Node.js হলো{" "}
          <span className="badge badge-success badge-sm">
            JavaScript runtime
          </span>
          । আগে JavaScript শুধু browser এ চলতো — Node.js আসার পর JavaScript
          server/backend এও চলতে পারে।
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 pt-1">
          {[
            "REST API",
            "Authentication",
            "Chat App",
            "File System",
            "Backend Server",
            "Full Stack App",
          ].map((item) => (
            <div
              key={item}
              className="badge badge-outline badge-sm py-3 w-full justify-center"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: 2,
    title: "Node.js Installation",
    icon: "⚙️",
    content: (
      <div className="space-y-3">
        <p className="text-base-content/80">
          nodejs.org থেকে download করো, তারপর check করো:
        </p>
        <div className="mockup-code text-sm">
          <pre data-prefix="$">
            <code>node -v</code>
          </pre>
          <pre data-prefix="$">
            <code>npm -v</code>
          </pre>
        </div>
        <div className="flex gap-2 flex-wrap">
          <div className="badge badge-primary">node → runtime</div>
          <div className="badge badge-secondary">npm → package manager</div>
        </div>
      </div>
    ),
  },
  {
    id: 3,
    title: "File Structure Basics",
    icon: "📂",
    content: (
      <div className="space-y-3">
        <div className="mockup-code text-sm">
          <pre>
            <code>{`project/
├── node_modules/
├── package.json
├── .env
├── server.js
└── utils.js`}</code>
          </pre>
        </div>
        <div className="space-y-2">
          {[
            { file: "server.js", desc: "Main backend file" },
            { file: "package.json", desc: "Project info + dependencies" },
            { file: ".env", desc: "Secret keys রাখে" },
            {
              file: "node_modules",
              desc: "Installed packages (manually edit করো না)",
            },
          ].map(({ file, desc }) => (
            <div key={file} className="flex items-center gap-3 text-sm">
              <code className="badge badge-ghost font-mono">{file}</code>
              <span className="text-base-content/70">{desc}</span>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: 4,
    title: "npm Basics & Project Init",
    icon: "📦",
    content: (
      <div className="space-y-3">
        <p className="text-base-content/80">
          npm = Node Package Manager। Project initialize করতে:
        </p>
        <div className="mockup-code text-sm">
          <pre data-prefix="$">
            <code>npm init -y</code>
          </pre>
        </div>
        <div className="mockup-code text-sm">
          <pre>
            <code>{`{
  "name": "backend-project",
  "version": "1.0.0",
  "main": "server.js"
}`}</code>
          </pre>
        </div>
      </div>
    ),
  },
  {
    id: 5,
    title: "Package Install",
    icon: "🔧",
    content: (
      <div className="space-y-3">
        <div className="mockup-code text-sm">
          <pre data-prefix="$">
            <code>npm install express</code>
          </pre>
          <pre data-prefix="$">
            <code>npm i nodemon -D</code>
          </pre>
        </div>
        <div className="overflow-x-auto">
          <table className="table table-sm">
            <thead>
              <tr>
                <th>Type</th>
                <th>Purpose</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <span className="badge badge-primary badge-sm">
                    dependency
                  </span>
                </td>
                <td className="text-base-content/70">production package</td>
              </tr>
              <tr>
                <td>
                  <span className="badge badge-secondary badge-sm">
                    devDependency
                  </span>
                </td>
                <td className="text-base-content/70">development tools</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    ),
  },
  {
    id: 6,
    title: "require vs import",
    icon: "🔀",
    content: (
      <div className="space-y-3">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <p className="text-xs text-base-content/50 mb-1 font-semibold uppercase tracking-wide">
              CommonJS
            </p>
            <div className="mockup-code text-xs">
              <pre>
                <code>{`const express = require("express");
module.exports = myFn;`}</code>
              </pre>
            </div>
          </div>
          <div>
            <p className="text-xs text-base-content/50 mb-1 font-semibold uppercase tracking-wide">
              ES Module
            </p>
            <div className="mockup-code text-xs">
              <pre>
                <code>{`import express from "express";
export default myFn;`}</code>
              </pre>
            </div>
          </div>
        </div>
        <div className="alert alert-success alert-sm text-sm py-2">
          ✅ শুরুতে <code className="font-mono font-bold">require</code> use করো
          — বেশিরভাগ Express tutorial এটা use করে।
        </div>
      </div>
    ),
  },
  {
    id: 7,
    title: "module.exports",
    icon: "📤",
    content: (
      <div className="space-y-3">
        <p className="text-base-content/80">
          এক file এর code অন্য file এ use করা।
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <p className="text-xs text-base-content/50 mb-1 font-mono">
              math.js
            </p>
            <div className="mockup-code text-xs">
              <pre>
                <code>{`function add(a, b) {
  return a + b;
}
module.exports = add;`}</code>
              </pre>
            </div>
          </div>
          <div>
            <p className="text-xs text-base-content/50 mb-1 font-mono">
              server.js
            </p>
            <div className="mockup-code text-xs">
              <pre>
                <code>{`const add = require("./math");
console.log(add(2, 3));`}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 8,
    title: "JSON Basics",
    icon: "📋",
    content: (
      <div className="space-y-3">
        <p className="text-base-content/80">
          JSON = JavaScript Object Notation। Backend এ data transfer এর standard
          format।
        </p>
        <div className="mockup-code text-sm">
          <pre>
            <code>{`{ "name": "Amirul", "age": 19 }`}</code>
          </pre>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          <div className="bg-base-200 rounded-lg p-3 text-sm">
            <p className="text-xs text-base-content/50 mb-1">Object → JSON</p>
            <code className="text-primary font-mono">JSON.stringify(data)</code>
          </div>
          <div className="bg-base-200 rounded-lg p-3 text-sm">
            <p className="text-xs text-base-content/50 mb-1">JSON → Object</p>
            <code className="text-secondary font-mono">JSON.parse(data)</code>
          </div>
        </div>
        <div className="flex gap-2">
          <div className="badge badge-success badge-sm">✅ "name" → valid</div>
          <div className="badge badge-error badge-sm">❌ 'name' → invalid</div>
        </div>
      </div>
    ),
  },
  {
    id: 9,
    title: "Environment Variables (.env)",
    icon: "🔒",
    content: (
      <div className="space-y-3">
        <p className="text-base-content/80">
          Secret information hide করার জন্য।
        </p>
        <div className="mockup-code text-sm">
          <pre data-prefix="$">
            <code>npm i dotenv</code>
          </pre>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <p className="text-xs text-base-content/50 mb-1 font-mono">.env</p>
            <div className="mockup-code text-xs">
              <pre>
                <code>{`PORT=5000
DB_PASSWORD=123456`}</code>
              </pre>
            </div>
          </div>
          <div>
            <p className="text-xs text-base-content/50 mb-1 font-mono">
              server.js
            </p>
            <div className="mockup-code text-xs">
              <pre>
                <code>{`require("dotenv").config();
console.log(process.env.PORT);`}</code>
              </pre>
            </div>
          </div>
        </div>
        <div className="alert alert-error alert-sm text-sm py-2">
          ❌ কখনো <code>.env</code> GitHub এ push করো না!
        </div>
      </div>
    ),
  },
  {
    id: 10,
    title: "Async / Await",
    icon: "⏳",
    content: (
      <div className="space-y-3">
        <p className="text-base-content/80">
          Backend এ database/API সব async। এটা না বুঝলে backend difficult লাগবে।
        </p>
        <div className="mockup-code text-sm">
          <pre>
            <code>{`async function run() {
  const data = await fetchData();
  console.log(data);
}

run();`}</code>
          </pre>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          <div className="alert alert-error alert-sm text-sm py-2">
            ❌ <code>const data = fetchData()</code> → Promise return হবে
          </div>
          <div className="alert alert-success alert-sm text-sm py-2">
            ✅ <code>const data = await fetchData()</code>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 11,
    title: "Scripts in package.json",
    icon: "▶️",
    content: (
      <div className="space-y-3">
        <div className="mockup-code text-sm">
          <pre>
            <code>{`{
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js"
  }
}`}</code>
          </pre>
        </div>
        <div className="flex gap-2 flex-wrap">
          <div className="mockup-code text-xs inline-flex px-3">
            <pre>
              <code>npm start</code>
            </pre>
          </div>
          <div className="mockup-code text-xs inline-flex px-3">
            <pre>
              <code>npm run dev</code>
            </pre>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 12,
    title: "Core Node.js Concepts",
    icon: "🧠",
    content: (
      <div className="space-y-3">
        <div className="mockup-code text-sm">
          <pre>
            <code>{`console.log(process.env);   // env variables
console.log(__dirname);     // current folder path
console.log("debug here");  // main debug tool`}</code>
          </pre>
        </div>
      </div>
    ),
  },
  {
    id: 13,
    title: "Recommended Setup",
    icon: "💻",
    content: (
      <div className="space-y-3">
        <p className="text-base-content/80 font-medium">VS Code Extensions:</p>
        <div className="flex flex-wrap gap-2">
          {["ES7+", "Prettier", "Error Lens"].map((ext) => (
            <div key={ext} className="badge badge-outline badge-primary">
              {ext}
            </div>
          ))}
        </div>
        <p className="text-base-content/80 font-medium pt-1">Terminal:</p>
        <div className="badge badge-ghost">VS Code Terminal</div>
      </div>
    ),
  },
  {
    id: 14,
    title: "Practice Tasks",
    icon: "✏️",
    content: (
      <div className="space-y-2">
        {[
          "নিজের info print করো",
          "একটা math utility file create করো",
          ".env create করে PORT read করো",
          "async function দিয়ে delay system বানাও",
        ].map((task, i) => (
          <div
            key={i}
            className="flex items-center gap-3 p-2 bg-base-200 rounded-lg text-sm"
          >
            <div className="badge badge-primary badge-sm">{i + 1}</div>
            <span className="text-base-content/80">{task}</span>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: 15,
    title: "Common Beginner Mistakes",
    icon: "⚠️",
    content: (
      <div className="space-y-2">
        {[
          "await ছাড়া async data use করা",
          ".env GitHub এ push করা",
          "সব file এক জায়গায় রাখা",
          "Copy-paste coding",
        ].map((mistake, i) => (
          <div key={i} className="alert alert-warning alert-sm text-sm py-2">
            ❌ {mistake}
          </div>
        ))}
      </div>
    ),
  },
  {
    id: 16,
    title: "Best Learning Strategy",
    icon: "📈",
    content: (
      <div className="space-y-3">
        <div className="steps steps-vertical text-sm">
          <div className="step step-primary">Learn</div>
          <div className="step step-primary">Practice</div>
          <div className="step step-primary">Mini Project</div>
        </div>
        <div className="overflow-x-auto">
          <table className="table table-sm">
            <thead>
              <tr>
                <th>Concept</th>
                <th>Practice</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["module.exports", "math utility"],
                ["dotenv", "env setup"],
                ["async/await", "fake API delay"],
                ["npm", "install packages"],
              ].map(([concept, practice]) => (
                <tr key={concept}>
                  <td>
                    <code className="badge badge-ghost badge-sm font-mono">
                      {concept}
                    </code>
                  </td>
                  <td className="text-base-content/70">{practice}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    ),
  },
  {
    id: 17,
    title: "Phase 1 Checklist",
    icon: "✅",
    content: (
      <div className="space-y-2">
        {[
          "npm init",
          "package install",
          "require / import",
          "module.exports",
          "JSON basics",
          "dotenv",
          "async / await",
          "package.json scripts",
          "basic file structure",
        ].map((item) => (
          <div key={item} className="flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              className="checkbox checkbox-success checkbox-sm"
            />
            <span className="text-base-content/80">{item}</span>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: 18,
    title: "Phase 1 Outcome",
    icon: "🏁",
    content: (
      <div className="space-y-2">
        {[
          "Node.js environment বুঝবে",
          "Express শেখার জন্য ready হবে",
          "backend project setup করতে পারবে",
          "async code বুঝতে পারবে",
          "package ecosystem handle করতে পারবে",
        ].map((outcome, i) => (
          <div
            key={i}
            className="flex items-center gap-2 p-2 bg-success/10 rounded-lg text-sm"
          >
            <span className="text-success">✅</span>
            <span className="text-base-content/80">{outcome}</span>
          </div>
        ))}
      </div>
    ),
  },
];

export default function PhaseOne() {
  const [openSections, setOpenSections] = useState({});

  const toggle = (id) =>
    setOpenSections((prev) => ({ ...prev, [id]: !prev[id] }));

  const allOpen = sections.every((s) => openSections[s.id]);

  const toggleAll = () => {
    if (allOpen) {
      setOpenSections({});
    } else {
      const all = {};
      sections.forEach((s) => (all[s.id] = true));
      setOpenSections(all);
    }
  };

  return (
    <div className="min-h-screen bg-base-200 px-4 py-10">
      <div className="max-w-2xl mx-auto space-y-3">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold">Phase 1</h1>
            <p className="text-base-content/50 text-sm mt-0.5">
              Node.js Backend Fundamentals
            </p>
          </div>
          <button onClick={toggleAll} className="btn btn-sm btn-outline">
            {allOpen ? "Collapse All" : "Expand All"}
          </button>
        </div>

        {/* Sections */}

        {sections.map((section, idx) => (
          <div
            key={section.id}
            className="bg-base-100 border border-base-200 rounded-xl shadow-sm"
          >
            {/* Header */}
            <button
              className="flex items-center gap-3 font-medium text-sm w-full text-left px-4 py-3"
              onClick={() => toggle(section.id)}
            >
              <span className="text-base">{section.icon}</span>
              <span className="flex-1">
                <span className="text-base-content/40 font-mono text-xs mr-2">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                {section.title}
              </span>
              <span
                className={`transition-transform duration-200 text-base-content/40 ${
                  openSections[section.id] ? "rotate-180" : ""
                }`}
              >
                ▾
              </span>
            </button>

            {/* Content */}
            {openSections[section.id] && (
              <div className="px-4 pb-4">
                <div className="border-t border-base-200 pt-4">
                  {section.content}
                </div>
              </div>
            )}
          </div>
        ))}

        {/* Footer */}
        <div className="text-center text-xs text-base-content/30 pt-4">
          {sections.length} sections · Phase 1 of Node.js
        </div>
      </div>
    </div>
  );
}
