/**
 * Copyright 2022 Pranav Karawale
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// Script to replace __VITE_ASSET__ with the correct asset name
import fg from "fast-glob";
import fs from "fs";

const buildDir = "dist";

const cssFiles = await fg(`./${buildDir}/**/*.css`);
const hashes = (await fg(`./${buildDir}/**/*`))
  .map((path) => path.replace(`./${buildDir}/`, "/"))
  .map((path) => {
    const parts = path.split("/").pop().split(".");
    const hash = parts[parts.length - 2];
    if (hash.length === 8 && /^[0-9a-f]+$/.test(hash)) return [path, hash];
  })
  .filter(Boolean);

cssFiles.forEach((path) => {
  const content = fs.readFileSync(path, "utf8");
  let newContent = content;
  // Sample asset: __VITE_ASSET__643e4e0a__
  const viteAssets = content.match(/__VITE_ASSET__[0-9a-f]{8}__/g);
  if (viteAssets) {
    viteAssets.forEach((viteAsset) => {
      const hash = viteAsset.replace("__VITE_ASSET__", "").replace("__", "");
      const hashFile = hashes.find((h) => h[1] === hash)[0];
      newContent = newContent.replace(viteAsset, `"${hashFile}"`);
    });
  }
  fs.writeFileSync(path, newContent);
});
