async function renderMermaid() {
  const blocks = document.querySelectorAll(".mermaid-source");

  if (!blocks.length) {
    return;
  }

  const mermaidModule = await import(
    "https://cdn.jsdelivr.net/npm/mermaid@11/dist/mermaid.esm.min.mjs"
  );

  const mermaid = mermaidModule.default;

  mermaid.initialize({
    startOnLoad: false,
    securityLevel: "strict",
    theme: "neutral",
  });

  for (const [index, block] of blocks.entries()) {
    const source = block.textContent?.trim();

    if (!source) {
      continue;
    }

    const wrapper = document.createElement("div");
    wrapper.className = "mermaid-figure";

    try {
      const id = `mermaid-${index}-${Date.now()}`;
      const { svg } = await mermaid.render(id, source);
      wrapper.innerHTML = svg;
      block.replaceWith(wrapper);
    } catch (error) {
      console.error("Mermaid render failed", error);
    }
  }
}

renderMermaid();
