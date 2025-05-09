import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&family=Sora:wght@100;200;300;400;500;600;700;800&display=swap');

  :root {
    --primary: #00ff9d;
    --secondary: #ff00ff;
    --accent: #ff3366;
    --background: #0a0a0a;
    --text: #ffffff;
    --text-secondary: #b3b3b3;
    --gradient: linear-gradient(45deg, var(--primary), var(--secondary));
    --glow: 0 0 20px var(--primary);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Sora', sans-serif;
    background-color: var(--background);
    color: var(--text);
    overflow-x: hidden;
    line-height: 1.6;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Orbitron', sans-serif;
    font-weight: 700;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    cursor: pointer;
    border: none;
    outline: none;
    background: none;
    font-family: inherit;
  }

  section {
    min-height: 100vh;
    padding: 4rem 2rem;
    position: relative;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  }

  .glow-text {
    text-shadow: 0 0 10px var(--primary),
                 0 0 20px var(--primary),
                 0 0 30px var(--primary);
  }

  .gradient-text {
    background: var(--gradient);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .glass-effect {
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 15px;
  }

  .neon-border {
    position: relative;
    
    &::before {
      content: '';
      position: absolute;
      top: -2px;
      left: -2px;
      right: -2px;
      bottom: -2px;
      background: var(--gradient);
      border-radius: inherit;
      z-index: -1;
      animation: borderGlow 2s linear infinite;
    }
  }

  @keyframes borderGlow {
    0% {
      opacity: 0.5;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0.5;
    }
  }

  /* Custom Scrollbar */
  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: var(--background);
  }

  ::-webkit-scrollbar-thumb {
    background: var(--gradient);
    border-radius: 5px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: var(--primary);
  }
`;

export default GlobalStyles; 