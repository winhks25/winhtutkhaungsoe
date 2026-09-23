# Hero portrait asset

- Source: the user's supplied `IMG_1250 3.JPG`, retained at `src/assets/win-portrait.jpg`.
- Output: `src/assets/win-portrait-cutout.png`, a 1086 × 1448 PNG with verified alpha transparency.
- Tool: built-in image generation, image-edit mode (`background-extraction`). This is an AI-edited derivative, not a pixel-exact background mask.
- Preparation: the first JPEG input was rejected by the image tool; re-encoded the original as an orientation-correct PNG for input. The original file is unchanged.
- Presentation: `HeroPortrait.astro` renders the complete silhouette without a card or caption. The ivory paper edge is embedded in the asset. Astro generates responsive WebP files while retaining transparency.

## Final editing prompt

Use case: background-extraction. Asset type: transparent portfolio hero portrait cutout. Edit target: the supplied photograph of Win. Remove the entire city, water, railing and all background. Preserve exactly the man's identity, face, glasses, hair, smile, skin tone, gray shirt, watch, trousers, body proportions and pose from this photo; do not beautify or redraw him. Isolate the visible person from hair to the original lower thigh crop. Add a narrow warm ivory torn-paper silhouette outline following the outside of his entire body, with subtle irregular hand-cut paper edges, about 10-16 pixels at 1024px output; a clean editorial paper collage cutout, not a rectangle or rounded card. No scene, background fill, checkerboard pattern, text, caption, props or sticker graphics. Actual transparent alpha outside the ivory paper silhouette. Center tightly on a portrait canvas with just enough transparent margin around all sides to keep the paper outline fully visible. Keep the original facial detail and photographic texture unchanged. The bottom termination should have a gently irregular torn paper edge.
