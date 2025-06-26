# bloggen-py

Single-file website and blog generator written in Python

## Features

- Fast, minimal, (nearly) no CSS website generator
- Custom `header.html` and `footer.html` templates
- Auto-generated, valid RSS feed
- Not much else

## Dependencies

- `python`
- Python packages: `PyYAML`, `markdown`, and `PyRSS2Gen`

## Getting Started

- Set your configuration in the main configuration file `config.yml` (website URL, index files, etc.).
- Pages go under the `pages` directory as markdown files.
- Blog posts go under the `blog` directory as markdown files.
- Optionally, one can create another page with posts such as projects, publications, etc., where its posts go under its directory, e.g., `projects`.
- Posts are the building blocks that constitute a blog, project, or any other page.
- Posts need to be structured with an `h1` on the first line, a space on the second, and the date on the third line (e.g., 1 Jan 2025).
- Media (images, videos, etc) go in the root `public` directory.
- Main styling is found in `public/style.css` (feel free to be creative!).

### Running

1. Create a conda environment via `conda env create -f environment.yaml` or install the dependencies manually `conda install PyYAML markdown PyRSS2Gen`.
2. Run `build.sh` in the root directory.
3. Upload the `build` folder to your server.
4. Your website is ready!
