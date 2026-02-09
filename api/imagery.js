// server.js
import express from "express";
import { icons } from "lucide"; // npm i lucide

const app = express();
const PORT = 3000;

// Example: GET /icon/:firstId/:secondId
app.get("/icon/:firstId/:secondId", (req, res) => {
  const { firstId, secondId } = req.params;

  // Choose icon based on firstId, secondId logic
  // For now, if firstId = "folders" return folder icon
  let iconName = firstId.toLowerCase() === "folders" ? "Folder" : "Circle";

  // Lucide icons are PascalCase
  const IconComponent = icons[iconName];

  if (!IconComponent) return res.status(404).send("Icon not found");

  // Generate SVG
  const svg = IconComponent({ width: 64, height: 64, stroke: "black" });

  // Respond with link info (could be HTML, JSON, etc.)
  res.json({
    id1: firstId,
    id2: secondId,
    svg: svg,
    link: `/icon/${firstId}/${secondId}`, // simple link to itself
  });
});

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
