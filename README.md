# Richard Anarfi's research portfolio

A static HTML/CSS/JavaScript portfolio covering model behavior, LLM evaluation,
synthetic data, reinforcement learning, and agent reliability.

Live site: <https://richardanarfi.github.io/>.

## Model Atlas

The homepage introduces Model Atlas alongside ToolEval, SynthEval, PromptLab,
and GRPO Arithmetic. Its [research case study](projects/model-atlas.html)
explains the question, study design, inconclusive pilot findings, and limitations.

The [interactive dashboard](https://richardanarfi.github.io/model-atlas/) is
deployed separately from the [Model Atlas repository](https://github.com/richardanarfi/model-atlas).
This portfolio contains the narrative case study, not the model-collection
pipeline or dashboard reports. Both sites serve static content; browsing them
does not make model API calls.

## Structure

- `index.html`: homepage, research focus, projects, writing, and background.
- `projects/`: project case studies, including Model Atlas.
- `writing/`: technical essays.
- `assets/`: shared styles, theme toggle, navigation, and animations.
- `images/`: project graphics.
- `resume.pdf`: existing resume, linked from the navigation and homepage.

## Preview and publishing

Open `index.html` in a browser or serve this folder with a local static server.
There is no build step, package manager, or dependency installation.
GitHub Pages publishes the `main` branch from `/ (root)`.

Keep shared navigation, footer, theme support, and reduced-motion behavior
consistent across pages. When Model Atlas results change, update its case study
and homepage summary against the research repository's published findings;
retain uncertainty and the distinction between oracle recovery and production routing.
