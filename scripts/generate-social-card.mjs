import { readFile } from 'node:fs/promises';
import { chromium } from '@playwright/test';

const sans = await readFile(
  new URL(
    '../node_modules/@fontsource-variable/dm-sans/files/dm-sans-latin-wght-normal.woff2',
    import.meta.url,
  ),
);
const serif = await readFile(
  new URL(
    '../node_modules/@fontsource/instrument-serif/files/instrument-serif-latin-400-italic.woff2',
    import.meta.url,
  ),
);
const browser = await chromium.launch();

try {
  const page = await browser.newPage({
    viewport: { width: 1200, height: 630 },
    deviceScaleFactor: 1,
  });
  await page.setContent(`<!doctype html><html lang="en"><head><meta charset="utf-8"><style>
    @font-face{font-family:DM;src:url(data:font/woff2;base64,${sans.toString('base64')});font-weight:100 1000}
    @font-face{font-family:Instrument;src:url(data:font/woff2;base64,${serif.toString('base64')});font-style:italic}
    *{box-sizing:border-box}body{margin:0;background:#f7f8f2;color:#243b2f;font-family:DM,sans-serif;padding:57px 65px}
    header{display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid #d9ddd2;padding-bottom:25px}
    .logo{font-size:40px;font-weight:650;letter-spacing:-2px}.logo span{color:#81935d}.topline{font:11px monospace;letter-spacing:2px;color:#65715c}
    main{position:relative;padding-top:52px}.eyebrow{font:11px monospace;letter-spacing:2px;margin-bottom:23px}h1{font-size:79px;font-weight:450;letter-spacing:-4px;line-height:1.08;margin:0}
    em{font-family:Instrument;font-size:98px;font-weight:400;letter-spacing:-3px}p{font-size:17px;color:#65715c;margin-top:27px}.art{position:absolute;right:0;top:46px;width:280px;height:300px;background:#e5ebd9;border:1px solid #d4ddc7;overflow:hidden}.circle{position:absolute;width:230px;height:230px;border:1px solid #b5c5a2;border-radius:50%;left:25px;top:35px}.circle.second{width:330px;height:330px;left:-25px;top:-15px;border-style:dashed}.art svg{position:absolute;width:175px;height:175px;top:60px;left:53px;transform:rotate(12deg)}footer{margin-top:46px;font:10px monospace;letter-spacing:2px;color:#65715c}
    </style></head><body><header><div class="logo">win<span>.</span></div><span class="topline">DEVELOPER · AI STUDENT · COMMUNITY BUILDER</span></header><main><div class="eyebrow">WIN HTUT KHAUNG SOE</div><h1>Thoughtful code.<br><em>Human impact.</em></h1><p>Building useful software. Bringing people together.</p><div class="art"><div class="circle"></div><div class="circle second"></div><svg viewBox="0 0 200 200"><path d="M100 8C104 73 127 96 192 100C127 104 104 127 100 192C96 127 73 104 8 100C73 96 96 73 100 8Z" fill="#234c3b"/></svg></div></main><footer>BASED IN SINGAPORE &nbsp; / &nbsp; STUDYING AI AT NUS</footer></body></html>`);
  await page.evaluate(() => document.fonts.ready);
  await page.screenshot({
    path: new URL('../public/social-card.png', import.meta.url).pathname,
  });
  console.log('Generated public/social-card.png (1200 × 630).');
} finally {
  await browser.close();
}
