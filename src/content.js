export const siteContent = {
  name: 'Richard Anarfi',
  title: 'LLM systems, evaluation, synthetic data, and agent reliability',
  subtitle:
    'Applied scientist building evaluation frameworks, synthetic benchmarks, prompt experimentation pipelines, and agent-style workflows for complex LLM tasks.',
  links: [
    { label: 'GitHub', href: 'https://github.com/your-github' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/your-linkedin' },
    { label: 'Google Scholar', href: 'https://scholar.google.com/' },
    { label: 'Resume PDF', href: '/resume.pdf' },
  ],
  projects: [
    {
      title: 'AgentEval',
      subtitle: 'A benchmark harness for tool-using LLM systems',
      summary:
        'A public evaluation framework for measuring how well LLM systems use tools across retrieval, structured extraction, code execution, planning, and answer synthesis tasks.',
      bullets: [
        'Benchmark tasks for single-step and multi-step tool use',
        'Prompt and model ablations with measurable metrics',
        'Failure analysis for hallucinations, tool misuse, and recovery',
      ],
      github: 'https://github.com/your-github/agenteval',
    },
    {
      title: 'SynthBench',
      subtitle: 'Synthetic task generation and validation for agent benchmarks',
      summary:
        'A pipeline for generating synthetic agent tasks, reference answers, rubrics, and alternate-valid outputs, followed by validation against human-written seed tasks.',
      bullets: [
        'Human seed set plus synthetic expansion',
        'Rubric and alternate-answer generation',
        'Reliability checks for whether synthetic data transfers',
      ],
      github: 'https://github.com/your-github/synthbench',
    },
    {
      title: 'ResearchFlow',
      subtitle: 'An evaluated research assistant with tool routing and self-critique',
      summary:
        'A prompt-orchestrated research assistant that decomposes questions, retrieves evidence, drafts answers, critiques them, and revises under an explicit rubric.',
      bullets: [
        'Retrieval and tool-routing pipeline',
        'Self-critique and revision loop',
        'Evaluation on faithfulness, completeness, and distractor resistance',
      ],
      github: 'https://github.com/your-github/researchflow',
    },
  ],
  writing: [
    'Why exact-match metrics fail for LLM systems',
    'How to evaluate tool-using agents beyond pass/fail',
    'Synthetic data for agent benchmarks: promise, pitfalls, and validation',
  ],
  about: [
    'I build LLM systems for complex tasks, with a focus on evaluation, synthetic data, tool use, and agent reliability.',
    'My background spans prompt experimentation, benchmark design, evaluation workflows, and structured reasoning about model behavior.',
    'I am especially interested in making agentic systems measurable, dependable, and easier to improve through better infrastructure.',
  ],
  contactEmail: 'your-email@example.com',
}
