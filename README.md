# pebble

A minimal static website generator. Write Markdown, get a website. Fast, plain HTML, no frameworks, no build pipeline.

## Dependencies

- Python 3.11+
- `markdown`, `pydantic`, `PyRSS2Gen`, `PyYAML`

## Quickstart

```bash
git clone https://github.com/erdemuysalx/pebble
cd pebble
uv sync
```

Edit `config.yml` with your details, then build:

```bash
./build.sh
```

Output is written to `build/`. Serve it with any static file host.

## Structure

```
.
├── blog/          # Blog posts — one .md file per post
├── projects/      # Projects — one .md file per project
├── pages/         # Static pages — each becomes a nav link automatically
├── public/        # Static assets copied to build as-is
│   ├── css/
│   └── js/
├── index.md       # Homepage content
├── header.html    # Header template
├── footer.html    # Footer template
└── config.yml     # Configuration
```

## Writing content

### Blog posts

Place `.md` files in `blog/`. The filename format `YYYY-MM-DD_Post-Title.md` is the convention.

```markdown
# Post Title

01 Jan 2024

Post content here.
```

The date on line 2 controls ordering and RSS. pebble strips it from the rendered page and injects a reading-time line in its place.

Accepted date formats: `01 Jan 2024`, `2024-01-01`, `January 1 2024` (and more — see `_DATE_PATTERNS` in `pebble.py`).

### Projects

Place `.md` files in `projects/`. A preamble block of key-value fields between the title and the body controls card and page behaviour:

```markdown
# Project Title

2024-01-01

GitHub: https://github.com/you/repo
Paper: https://arxiv.org/abs/0000.00000
Image: /public/images/preview.png
Order: 1

Project description starts here.
```

| Field | Description |
|-------|-------------|
| `GitHub` | Repository URL — renders a "GitHub ↗" badge on the card and project page |
| `Paper` | Paper or writeup URL — renders a "Paper ↗" badge |
| `Image` | Preview image shown on the project card |
| `Order` | Integer — lower values appear first; projects without `Order` sort newest-first |

All fields are optional. The first prose paragraph of the body is extracted as the card description.

### Static pages

Any `.md` file added to `pages/` is automatically rendered and linked in the navigation bar — no config changes needed. The contact page (`pages/contact.md`) is always placed last in the nav regardless of filename sort order.

### Homepage

Place these markers in `index.md` to control where content blocks are injected:

| Marker | Replaced with |
|--------|---------------|
| `<!-- RECENT_POSTS -->` | List of recent blog posts with a "View all" link |
| `<!-- SELECTED_PROJECTS -->` | Project carousel with a "View all" link |

If a marker is absent the block is appended after the page content.

## Configuration

All settings live in `config.yml`:

| Key | Description |
|-----|-------------|
| `website_url` | Full URL of your website, used in RSS feed links |
| `website_name` | Short name shown in the navbar and page titles |
| `author` | Your name, available as `{{AUTHOR}}` in templates |
| `source_url` | Source repo URL, linked in the footer |
| `directories.blog` | Blog posts directory (default: `blog`) |
| `directories.projects` | Projects directory (default: `projects`) |
| `directories.pages` | Static pages directory (default: `pages`) |
| `directories.public` | Static assets directory (default: `public`) |
| `directories.output` | Build output directory (default: `build`) |
| `files.root_index` | Homepage source file (default: `index.md`) |
| `files.blog_index` | Blog list page template |
| `files.projects_index` | Projects list page template |
| `misc.nav_home` | Label for the home link in the navbar |
| `misc.contact_url` | URL of the contact page, pinned last in the nav |
| `misc.recent_posts_count` | Number of recent posts shown on the homepage |
| `misc.selected_projects_count` | Number of projects shown in the homepage carousel |
| `misc.carousel_cards_per_page` | Cards per carousel page (default: `2`) |
| `misc.generate_rss` | Set to `False` to disable RSS generation |
| `misc.rss_post_limit` | Max posts included in the RSS feed (default: `20`) |
| `misc.rss_filename` | RSS output filename (default: `rss.xml`) |

## Templates

`header.html` and `footer.html` are plain HTML. pebble does a find-and-replace pass on them for every page — no template engine, no syntax to learn.

Available variables:

| Variable | Value |
|----------|-------|
| `{{TITLE}}` | Page title extracted from the first `#` heading |
| `{{WEBSITE_NAME}}` | `website_name` from config |
| `{{WEBSITE_URL}}` | `website_url` from config |
| `{{AUTHOR}}` | `author` from config |
| `{{SOURCE_URL}}` | `source_url` from config |
| `{{RSS_URL}}` | Path to the RSS feed |
| `{{CONTACT_URL}}` | `misc.contact_url` from config |
| `{{NAV_HOME}}` | `misc.nav_home` from config |
| `{{NAV_HOME_ACTIVE}}` | ` class="active"` when on the homepage, empty otherwise |
| `{{NAV_LINKS}}` | Auto-generated `<li>` links from the `pages/` directory |

## Deployment

The included GitHub Actions workflow (`.github/workflows/build-deploy.yml`) builds the website on every push to `main` and deploys to GitHub Pages via a `deploy` branch.

To use it:
1. Fork this repo on GitHub
2. Go to **Settings → Pages** and set the source to the `deploy` branch
3. Optionally add a `CNAME` file with your custom domain
