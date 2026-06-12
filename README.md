# pebble

A minimal static website generator. Write Markdown, get a website. Fast, plain HTML — no JavaScript, no frameworks, no build system.

## Dependencies

- Python 3.11+
- `markdown`, `PyRSS2Gen`, `PyYAML`

## Quickstart

```bash
git clone https://github.com/erdemuysalx/pebble
cd pebble
pip install markdown PyRSS2Gen PyYAML
```

Or with uv:

```bash
uv sync
```

Edit `config.yml` with your details, then build:

```bash
chmod +x build.sh
./build.sh
```

Output is written to `build/`. Serve it with any static file host.

## Configuration

All website settings live in `config.yml`:

| Key | Description |
|-----|-------------|
| `website_url` | Full URL of your website, used in RSS feed links |
| `website_name` | Short name shown in the navbar and page titles |
| `source_url` | URL of your website's source repo, linked in the footer |
| `misc.nav_home` | Label for the home link in the navbar |
| `misc.recent_posts_count` | Number of recent posts shown on the homepage |
| `misc.generate_rss` | Set to `False` to disable RSS generation |
| `misc.rss_post_limit` | Max number of posts included in the RSS feed |
| `misc.rss_filename` | Output filename for the RSS feed (default: `rss.xml`) |

## Structure

```
.
├── blog/          # Blog posts — one .md file per post
├── pages/         # Static pages — each becomes a nav link automatically
├── public/        # Static assets copied to build as-is
├── index.md       # Homepage content
├── header.html    # Website header template
├── footer.html    # Website footer template
└── config.yml     # Website configuration
```

## Writing content

**Blog posts** go in `blog/` with the filename format `YYYY-MM-DD_Post-Title.md`:

```markdown
# Post Title

01 Jan 2024

Post content here.
```

**Static pages** go in `pages/`. Any `.md` file added there is automatically rendered and added to the navigation bar — no config changes needed.

**Homepage** (`index.md`): place `<!-- RECENT_POSTS -->` wherever you want the recent posts list to appear.

## Templates

`header.html` and `footer.html` are plain HTML files. pebble does a simple find-and-replace on them before writing each page — no template engine, no syntax to learn.

```html
<title>{{TITLE}} — {{WEBSITE_NAME}}</title>
<link rel="alternate" type="application/rss+xml" href="{{RSS_URL}}">
```

The available variables:

| Variable | Value |
|----------|-------|
| `{{TITLE}}` | Page title (extracted from the first `#` heading) |
| `{{WEBSITE_NAME}}` | `website_name` from config |
| `{{WEBSITE_URL}}` | `website_url` from config |
| `{{SOURCE_URL}}` | `source_url` from config |
| `{{RSS_URL}}` | Path to the RSS feed |
| `{{NAV_HOME}}` | `misc.nav_home` from config |
| `{{NAV_LINKS}}` | Auto-generated `<li>` links from the `pages/` directory |

## Deployment

The included GitHub Actions workflow (`.github/workflows/build-deploy.yml`) builds the website on every push to `main` and deploys to GitHub Pages via a `deploy` branch.

To use it:
1. Fork this repo on GitHub
2. Go to **Settings → Pages** and set the source to the `deploy` branch
3. Optionally add a `CNAME` file with your custom domain