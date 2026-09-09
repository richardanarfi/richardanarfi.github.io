# Richard Anarfi's research portfolio

A static HTML/CSS/JavaScript portfolio covering model behavior, LLM evaluation,
synthetic data, reinforcement learning, and agent reliability.

Live site: <https://richardanarfi.github.io/>.

## Interactive research workbenches

The homepage introduces CorpusLab and Model Atlas alongside ToolEval, SynthEval,
PromptLab, and GRPO Arithmetic.

[CorpusLab](projects/corpuslab.html) presents query-first synthetic evidence,
blinded relevance judging, rubric diagnosis, and retrieval/answer evaluation.
Its [workbench](https://richardanarfi.github.io/corpuslab/) is deployed from
the [CorpusLab repository](https://github.com/richardanarfi/corpuslab).

[Model Atlas](projects/model-atlas.html) explains the behavioral graph question,
study design, inconclusive pilot findings, and limitations. Its
[dashboard](https://richardanarfi.github.io/model-atlas/) is deployed from
the [Model Atlas repository](https://github.com/richardanarfi/model-atlas).

This portfolio contains narrative case studies, not the model-collection
pipelines. The workbenches serve static content and saved results; browsing them
does not make model API calls.

## Structure

- `index.html`: homepage, research focus, projects, writing, and background.
- `projects/`: project case studies, including CorpusLab and Model Atlas.
- `writing/`: technical essays.
- `assets/`: shared styles, theme toggle, navigation, and animations.
- `images/`: project graphics.
- `resume.pdf`: existing resume, linked from the navigation and homepage.

## Preview and publishing

Open `index.html` in a browser or serve this folder with a local static server.
There is no build step, package manager, or dependency installation.
GitHub Pages publishes the `main` branch from `/ (root)`.

Keep shared navigation, footer, theme support, and reduced-motion behavior
consistent across pages. When recorded research results change, update the
corresponding case study and homepage summary against the published findings.
Retain uncertainty, synthetic-data and human-audit boundaries, and the
distinction between controlled demonstrations and production outcomes.
