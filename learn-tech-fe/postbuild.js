const fs = require("fs");
const path = require("path");

const indexPath = path.join(__dirname, "build", "index.html");
const errorPagePath = path.join(__dirname, "build", "404.html");

if (fs.existsSync(indexPath)) {
  fs.copyFileSync(indexPath, errorPagePath);
  console.log("404.html copied successfully");
} else {
  console.error(" Error: index.html not found. Make sure to run 'npm run build' first.");
}
