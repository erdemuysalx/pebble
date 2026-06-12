# Hello World

01 Jan 2024

This is your first blog post. The filename format `YYYY-MM-DD_Post-Title.md` is the
convention — the date on the second line is what the generator reads for ordering and RSS.

## Writing posts

- Place markdown files in the `blog/` directory
- Start with a `# Title` heading on line 1
- Put the date on line 2 in any of these formats: `01 Jan 2024`, `2024-01-01`, `January 1 2024`
- The rest is standard Markdown — code blocks, tables, images, links all work

## Code blocks

Fenced code blocks with syntax highlighting:

```python
def hello():
    print("Hello, world!")
```

Inline code works too: run `uv sync` before your first build.

## Blockquotes

> The best tool is the one that gets out of your way.

Nested quotes work as well:

> Simplicity is the ultimate sophistication.
>
> — Leonardo da Vinci

## Tables

| Format | Example | Notes |
|--------|---------|-------|
| ISO date | `2024-01-01` | Unambiguous, sorts well |
| Short month | `01 Jan 2024` | Human-friendly |
| Long month | `January 1 2024` | Verbose but clear |

## Lists

Unordered:

- Write in Markdown
- Run the build script
- Deploy the `build/` directory

Ordered:

1. Clone the repo
2. Edit `config.yml`
3. Add posts to `blog/`
4. Run `./build.sh`

## Emphasis and inline formatting

You can use **bold**, *italic*, ~~strikethrough~~, and `inline code` anywhere in your prose.

Links work as expected: [pebble on GitHub](https://github.com/erdemuysalx/pebble).

## Horizontal rule

Three dashes produce a divider:

---

That's the full feature set. Everything here is standard Markdown — no custom syntax, no shortcodes, no magic.
