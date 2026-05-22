import sharp from "sharp";
import { readdirSync, unlinkSync } from "fs";
import { join, extname, basename } from "path";

const assetsDir = "./src/assets";
const extensions = [".jpg", ".jpeg", ".png"];

const files = readdirSync(assetsDir).filter((f) =>
  extensions.includes(extname(f).toLowerCase())
);

for (const file of files) {
  const inputPath = join(assetsDir, file);
  const outputName = basename(file, extname(file)) + ".webp";
  const outputPath = join(assetsDir, outputName);

  await sharp(inputPath)
    .webp({ quality: 80 })
    .toFile(outputPath);

  // Remove original file
  unlinkSync(inputPath);

  console.log(`✅ ${file} → ${outputName}`);
}

console.log("\n🎉 All images converted to WebP!");
