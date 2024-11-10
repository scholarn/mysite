---
title: "Typing Test"
ql: True
---

<div class="typing-test-container">
  <h1>Typing Speed Test</h1>

  <section class="options">
    <label for="difficulty-select">Difficulty:
      <select id="difficulty-select">
        <option value="easy">Easy</option>
        <option value="medium" selected>Medium</option>
        <option value="hard">Hard</option>
      </select>
    </label>
    <label for="countdown-select">Countdown:
      <select id="countdown-select">
        <option value="30">30s</option>
        <option value="60" selected>60s</option>
        <option value="120">120s</option>
      </select>
    </label>
  </section>

  <button id="start-button" class="button">Start Typing Test</button>

  <div id="test-area" style="display: none;">
    <p id="text-display">Loading test text...</p>
    <input type="text" id="text-input" placeholder="Start typing here..." autocomplete="off">
    <p id="timer">Time: 60 seconds</p>
    <div id="progress-bar"><span id="progress"></span></div>
  </div>

  <div id="results" style="display: none;">
    <h3>Results</h3>
    <p id="wpm-result">WPM: 0</p>
    <p id="accuracy-result">Accuracy: 0%</p>
    <button id="retry-button" class="button">Try Again</button>
  </div>
</div>

<script src="{{ '/assets/js/typing-test.js' | relative_url }}"></script>
<link rel="stylesheet" href="{{ '/assets/css/typing-test.css' | relative_url }}">
