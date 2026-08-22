const fs = require("fs");
const path = require("path");
const sharp = require("sharp");
const toIco = require("to-ico");

async function run() {
  const publicDir = path.join(__dirname, "..", "public");
  const src = path.join(publicDir, "favicon.jpg");
  if (!fs.existsSync(src)) {
    console.error("Source favicon.jpg not found at", src);
    process.exit(1);
  }

  const sizes = [16, 32, 48, 64, 180];

  for (const s of sizes) {
    const out = path.join(publicDir, `favicon-${s}.png`);
    await sharp(src)
      .resize(s, s, { fit: "contain", background: "#ffffff" })
      .png()
      .toFile(out);
    console.log("wrote", out);
  }

  // Write apple-touch-icon (180)
  const apple = path.join(publicDir, "apple-touch-icon.png");
  fs.copyFileSync(path.join(publicDir, "favicon-180.png"), apple);
  console.log("wrote", apple);

  // Create favicon.ico from 16,32,48,64
  const icoOut = path.join(publicDir, "favicon.ico");
  const pngBuffers = [
    fs.readFileSync(path.join(publicDir, "favicon-16.png")),
    fs.readFileSync(path.join(publicDir, "favicon-32.png")),
    fs.readFileSync(path.join(publicDir, "favicon-48.png")),
    fs.readFileSync(path.join(publicDir, "favicon-64.png")),
  ];
  const icoBuf = await toIco(pngBuffers);
  fs.writeFileSync(icoOut, icoBuf);
  console.log("wrote", icoOut);
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
