# Example Project

2024-01-01

GitHub: https://github.com/example/project
Paper: https://arxiv.org/abs/0000.00000
Image: /public/images/example-project.png
Order: 1

This is your first project page. The preamble block between the title and the body
is where project-specific metadata lives — the generator strips it before rendering
so none of it appears in the page body.

## Preamble fields

Place these lines directly after the title and date, in any order:

| Field | Example | Notes |
|-------|---------|-------|
| `GitHub` | `GitHub: https://github.com/you/repo` | Links a "GitHub ↗" badge on the card and page |
| `Paper` | `Paper: https://arxiv.org/abs/0000.00000` | Links a "Paper ↗" badge |
| `Image` | `Image: /public/images/preview.png` | Thumbnail shown on the project card |
| `Order` | `Order: 1` | Integer — lower numbers appear first on the projects page |

All fields are optional. A project with no `Image` gets a hatched placeholder on its card.
`GitHub` and `Paper` badges appear both on the card footer and at the top of the project page.

## Body

Everything below the last preamble line is the project body — standard Markdown, no restrictions.

Write a short description here. The first paragraph is extracted as the card description,
so lead with the most important information.

## How it works

Write as much detail as you like. Code blocks, tables, images — all work.

```python
# Example: training loop sketch
for epoch in range(num_epochs):
    loss = model.train_step(batch)
    print(f"Epoch {epoch}: loss={loss:.4f}")
```

## Results

| Metric | Baseline | This project |
|--------|----------|--------------|
| Accuracy | 72.3% | 88.1% |
| Latency | 420 ms | 38 ms |

## References

[1] Author, A. "Paper title." *Conference*, 2024.

[2] Author, B. "Another paper." *Journal*, 2023.
