# Developer Studio GitHub Pages preview

The feature/initial-dashboard branch publishes a static Next.js build.
No build steps in this workflow modify or merge main.

## One-time repository settings

1. Open Settings → Pages → Build and deployment in idcha2000/new-project.
2. Select GitHub Actions as the publishing source.
3. Check Settings → Environments → github-pages. If deployments are
   restricted to the default branch, explicitly allow feature/initial-dashboard
   in deployment branch or tag rules.
4. Push to feature/initial-dashboard to trigger the workflow.
5. Check the repository Actions tab for the build and deployment jobs.

Expected URL after a successful deployment:
https://idcha2000.github.io/new-project/

## Validate locally

```sh
npm ci
npm run lint
GITHUB_PAGES=true npm run build
test -s out/index.html
test -d out/_next
```

For local development, run npm run dev and open http://localhost:3000/.
The /new-project base path is used only for GitHub Pages builds.

## Notes

- Pages provides one published URL per repository; deploying this feature
  branch updates the repository's Pages site, not an isolated preview URL.
- The workflow triggers on this feature branch only.
- Server-side Next.js features are not available in static export mode.
- To deploy from main later, explicitly update the workflow and policy.
