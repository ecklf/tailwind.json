#!/usr/bin/env node

const fs = require("fs");
const resolveConfig = require("tailwindcss/resolveConfig");
const tailwindConfig = require(__dirname + "/tailwind.config.js");

try {
  let fullConfig = resolveConfig(tailwindConfig);
  fullConfig = JSON.stringify(fullConfig, null, 2);

  fs.writeFileSync(__dirname + "/tailwind.json", fullConfig, {
    encoding: "utf-8",
  });
} catch (error) {
  console.error(error);
}
