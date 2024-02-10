const fs = require("fs");
const path = require("path");

// Define the directories and the updates for each package.json
const updates = [
  { path: "dist/cjs", content: { type: "commonjs" } },
  { path: "dist/mjs", content: { type: "module" } },
];

// Function to copy and update the package.json file
function copyAndUpdatePackageJson(dirPath, content) {
  // Ensure the directory exists
  fs.mkdirSync(dirPath, { recursive: true });

  // Define the source and destination paths
  const srcFilePath = path.join("package.json");
  const destFilePath = path.join(dirPath, "package.json");

  // Copy the package.json file to the new location
  fs.copyFileSync(srcFilePath, destFilePath);

  // Read the copied package.json file
  const packageData = JSON.parse(fs.readFileSync(destFilePath));

  // Update the package.json content as specified
  Object.assign(packageData, content);

  // Write the updated content back to the package.json file
  fs.writeFileSync(destFilePath, JSON.stringify(packageData, null, 2));

  console.log(`Copied and updated ${destFilePath}`);
}

// Loop through each update configuration and apply the changes
updates.forEach(({ path, content }) => {
  copyAndUpdatePackageJson(path, content);
});
