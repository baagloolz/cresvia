# Cresvia — Netlify CMS-ready site

This package adds a Netlify CMS admin (`/admin`) to the Cresvia site.

## Quick steps to enable CMS on Netlify

1. Create a GitHub repo (if not already) and push this project to `main`. Example repo name: `cresvia`
   - Update `admin/config.yml` -> replace `YOUR_GITHUB_USERNAME/cresvia` with `yourusername/cresvia`

2. In Netlify, create a site from this repo (or drag & drop). If you use drag & drop, Git-backed CMS won't work — you must connect the site to the GitHub repo via **Deploys -> Continuous Deployment -> Link to Git provider**.

3. In Netlify dashboard for your site:
   - Go to **Identity** -> Enable Identity.
   - In **Identity** settings, go to **Services** -> Enable **Git Gateway**.
   - In **Access Control**, invite your GitHub user (or set registration to 'open' temporarily).

4. In **Site settings -> Build & deploy -> Continuous Deployment** ensure Netlify is connected to the GitHub repo, so commits by the CMS will trigger automatic builds.

5. Go to `https://<your-site-domain>/admin` and click **GitHub** to authorize. You should be able to create content (Posts, Events, Research, Gallery). When you publish, Netlify CMS will commit files to the repo and Netlify will rebuild the site.

## Gallery / Carousel
- Images uploaded via the CMS will be stored in `public/uploads` (as configured).
- The current site shows a placeholder carousel. If you'd like, I can implement a functioning carousel that reads files from `content/gallery` and displays them automatically after build.

## Done-for-you service
If you want, I can:
- Update the site to automatically render Posts/Events/Research/Gallery on the site (so published CMS content appears on the homepage and pages).
- Deploy and connect Netlify Identity on your behalf (you'll need to authorize GitHub).

Generated: 2025-10-06T19:54:20.788790 UTC
