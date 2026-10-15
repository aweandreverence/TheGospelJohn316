# Contributing

Read the repository README and any applicable directory-level instructions
before editing. Use the existing build/check commands and contribution conventions
where documented; do not invent a framework upgrade or deployment requirement.

<!-- ar-engineering-handbook:start -->
## A&R maintainers: Shared engineering guidance

Reference revision: `5cef9e63509ede20e776b614ef44464454b57ebe`.

- [Engineering handbook](https://github.com/aweandreverence/engineering/blob/5cef9e63509ede20e776b614ef44464454b57ebe/README.md)
- [Architecture and ownership](https://github.com/aweandreverence/engineering/blob/5cef9e63509ede20e776b614ef44464454b57ebe/architecture.md)
- [Applicable style guide](https://github.com/aweandreverence/engineering/blob/5cef9e63509ede20e776b614ef44464454b57ebe/style/typescript-ui.md)
- [Review checklist](https://github.com/aweandreverence/engineering/blob/5cef9e63509ede20e776b614ef44464454b57ebe/review-checklist.md)
- [Adoption and exceptions](https://github.com/aweandreverence/engineering/blob/5cef9e63509ede20e776b614ef44464454b57ebe/adoption.md)

This is a private, optional reference for A&R maintainers. Outside contributors
are not required to access it; this repository's public instructions remain
self-contained and authoritative for their contributions. Do not copy private
handbook contents into this public repository or upstream PRs.

Keep repository-specific security, domain, build and deployment instructions in
this repo. This reference does not authorize migrations, runtime upgrades, merges
or deployments. Resolve substantive conflicts explicitly and record local
exceptions; do not silently overwrite existing policy. Follow SPEAR proportionately:
scope, plan, execute, assess, resolve. Update the pinned revision through a PR.
<!-- ar-engineering-handbook:end -->

## Dependency compatibility checks

Use Yarn Classic 1.22.22 and Node 24.16.0 (also used by the production-build
workflow). Validate dependency changes with a frozen lockfile before building:

```sh
yarn install --frozen-lockfile
CI=true yarn test --watchAll=false --runInBand
CI=true yarn build
git diff --exit-code -- package.json yarn.lock
```

Keep the production and development Browserslist targets unchanged when repairing
compiler compatibility. Babel core and preset-env can resolve different copies of
`@babel/helper-compilation-targets`; an old helper can reject `opera_mobile`
produced by a newer core. The lockfile aligns that helper to 7.29.7 within the
consumers' existing semver ranges, without forcing a resolution or upgrading the
entire preset. Existing compatible Browserslist/data versions are retained.
`src/babel-targets.test.js` checks the target contract through both consumers;
the production build additionally exercises the real app and ESLint pipeline.

For overlapping dependency PRs, test both the fix alone on current master and the
combined tree. Merge the compatibility fix first, then refresh the dependent PR
and rerun these checks. Local success is not proof of a hosted CI pass. These
commands do not deploy; do not use `make deploy` for validation.

When retesting after a failed build in the same worktree, clear or move aside
`node_modules/.cache` first: CRA's cached ESLint/Babel diagnostic can survive a
corrected dependency graph. Fresh CI installs do not reuse that build cache.
