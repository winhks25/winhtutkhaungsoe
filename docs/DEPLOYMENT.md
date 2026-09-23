# Deploying to GitHub Pages

## Current configuration

| Setting             | Value                                          |
| ------------------- | ---------------------------------------------- |
| Repository          | `winhks25/winhtutkhaungsoe`                    |
| Publish branch      | `main`                                         |
| Site origin         | `https://winhks25.github.io`                   |
| Base path           | `/winhtutkhaungsoe`                            |
| Output directory    | `dist/`                                        |
| Node version        | 24                                             |
| Expected public URL | `https://winhks25.github.io/winhtutkhaungsoe/` |

The site and base settings are in `astro.config.mjs`. Keep both values when using this project repository URL.

## First publication

1. Review the local commits on `codex/portfolio` and the local preview.
2. In the [repository settings](https://github.com/winhks25/winhtutkhaungsoe/settings/pages), select **Pages → Build and deployment → Source → GitHub Actions**.
3. Publish the reviewed branch to `main`. This repository started empty, so the initial publication can use:

   ```sh
   git push origin codex/portfolio:main
   ```

   If `main` has since acquired other work, merge the changes through the normal review process instead. Do not force-push.

4. Open the repository’s **Actions** tab and follow **Check and deploy portfolio**.
5. After deployment completes, open the expected public URL above and check a project page and the résumé link.

The development work leaves publication to this step; it does not push source, enable Pages remotely, or claim a successful hosted deployment.

## What the workflow does

Pull requests to `main` run formatting checks, Astro/TypeScript checks, a static build, and browser tests. Pushes to `main` run the same checks and upload the verified output as a Pages artifact. A separate deployment job publishes that artifact. Manual runs deploy only when the selected branch is `main`.

The build job has read-only repository permissions. Only the deployment job receives `pages: write` and `id-token: write`. No personal access token or application secrets are required. Both jobs use official GitHub actions; their version tags were verified against the release API during setup.

## Other hosting layouts

For a repository named `winhks25.github.io`, set `base: '/'` and update the hardcoded base path in browser tests, the test preview URL, and the sitemap address in `robots.txt`.

For a custom domain:

1. Set `site` to the HTTPS origin and `base` to `/` in `astro.config.mjs`.
2. Add the hostname to `public/CNAME` and configure it in GitHub Pages settings.
3. Configure DNS according to GitHub’s instructions and enable HTTPS.
4. Update `public/robots.txt` and test expectations for the new origin and base path.
5. Rebuild and run the browser checks before publication.

## Troubleshooting

- **Assets or résumé return 404:** ensure the configured base matches the repository and internal assets use `localPath()`.
- **Site returns 404 immediately after a push:** confirm Pages uses GitHub Actions and both workflow jobs completed successfully.
- **No deployment job on a pull request:** expected; pull requests validate without publishing.
- **Browser tests fail to launch locally:** run `npx playwright install chromium`. Linux machines may need `npx playwright install --with-deps chromium`.
- **Preview looks stale:** run `npm run build` again. Preview serves built files, while `npm run dev` watches source changes.

## References

- [Astro: GitHub Pages deployment](https://docs.astro.build/en/guides/deploy/github/)
- [GitHub: Configuring a publishing source](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)
- [Official Pages artifact action](https://github.com/actions/upload-pages-artifact)
- [Official Pages deployment action](https://github.com/actions/deploy-pages)
