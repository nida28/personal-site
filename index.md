---
layout: splash
header:
  overlay_color: "#000000"
  overlay_filter: "0.4"
  overlay_image: /assets/hero-bg.svg

---

<style>
  .page__hero--overlay {
    position: relative;
    background-image: radial-gradient(
      circle at 50% 40%,
      rgba(37, 99, 235, 0.05),
      rgba(147, 51, 234, 0.05),
      rgba(5, 150, 105, 0.05)
    );
    background-blend-mode: overlay;
    background-size: cover;
    backdrop-filter: blur(4px);
  }

  .page__hero__content {
    position: relative;
    z-index: 2;
    padding: 6rem 2rem;
    text-align: center;
    color: white;
  }

  .page__title {
    font-size: 4rem;
    font-weight: 300;
    background: linear-gradient(to right, #7f5af0, #ff00aa, #2cb67d);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 1rem;
  }

  .page__subtitle {
    font-size: 1.2rem;
    color: #e0e0e0;
    margin-bottom: 2rem;
  }

  .btn--primary,
  .btn--inverse {
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid #ffffff33;
    color: #fff !important;
    padding: 0.8rem 1.6rem;
    border-radius: 0.5rem;
    transition: all 0.3s ease;
  }

  .btn--primary:hover,
  .btn--inverse:hover {
    background: rgba(255, 255, 255, 0.15);
    transform: scale(1.05);
  }
</style>

# Hi, I'm Nidaa

<div class="page__subtitle">
  I craft thoughtful systems with .NET, AWS, and clean architecture.<br>
  This is my digital corner for side projects, dev thoughts, and play.
</div>

[Explore Projects](/projects/){: .btn .btn--primary }&nbsp;
[Read My Blog](/blog/){: .btn .btn--inverse }
