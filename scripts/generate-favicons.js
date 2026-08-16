const fs = require("fs");
const path = require("path");
const sharp = require("sharp");
const pngToIco = require("png-to-ico");

async function run() {
  const publicDir = path.join(__dirname, "..", "public");
  const src = path.join(publicDir, "favicon.jpg");
  if (!fs.existsSync(src)) {
    console.error("Source favicon.jpg not found at", src);
    process.exit(1);
  }

  const sizes = [16, 32, 48, 64, 180];
  const pngPaths = [];

  for (const s of sizes) {
    const out = path.join(publicDir, `favicon-${s}.png`);
    await sharp(src).resize(s, s, { fit: "cover" }).png().toFile(out);
    pngPaths.push(out);
    console.log("wrote", out);
  }

  // Write apple-touch-icon (180)
  const apple = path.join(publicDir, "apple-touch-icon.png");
  fs.copyFileSync(path.join(publicDir, "favicon-180.png"), apple);
  console.log("wrote", apple);

  // Create favicon.ico from 16,32,48,64
  const icoOut = path.join(publicDir, "favicon.ico");
  const icoBuf = await pngToIco([
    path.join(publicDir, "favicon-16.png"),
    path.join(publicDir, "favicon-32.png"),
    path.join(publicDir, "favicon-48.png"),
    path.join(publicDir, "favicon-64.png"),
  ]);
  fs.writeFileSync(icoOut, icoBuf);
  console.log("wrote", icoOut);
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
