<template>
  <div class="quiz-overlay" v-if="visible">
    <div class="quiz-container">
      <!-- Header -->
      <div class="quiz-header">
        <div class="quiz-title">{{ meta.title }}</div>
        <button class="close-btn" @click="handleClose">&times;</button>
      </div>

      <!-- Progress -->
      <div class="quiz-progress">
        <span class="progress-text">{{ currentIndex + 1 }} / {{ questions.length }}</span>
        <div class="progress-bar">
          <div class="progress-fill" :style="{ width: progressPercent + '%' }"></div>
        </div>
      </div>

      <!-- Warning Notice (only on first question) -->
      <div class="quiz-warning" v-if="!showResults && currentIndex === 0">
        <span class="warning-icon">⚠️</span>
        <span class="warning-text">Do not refresh the page during the quiz, or your progress will be lost.</span>
      </div>

      <!-- Question Area -->
      <div class="quiz-content" v-if="!showResults">
        <div class="question-text">{{ currentQuestion.question }}</div>

        <div class="options-list">
          <div
            v-for="option in shuffledOptions"
            :key="option.key"
            class="option-item"
            :class="getOptionClass(option.key)"
            @click="selectOption(option.key)"
          >
            <div class="option-letter">{{ option.key }}.</div>
            <div class="option-content">
              <div class="option-text">{{ option.text }}</div>
              <div class="option-feedback" v-if="hasAnswered && option.key === selectedAnswer">
                <div v-if="isCorrect" class="feedback correct">
                  <span class="feedback-icon">&#10003;</span>
                  <span class="feedback-label">Right answer</span>
                </div>
                <div v-else class="feedback incorrect">
                  <span class="feedback-icon">&times;</span>
                  <span class="feedback-label">Not quite</span>
                </div>
                <div class="feedback-explanation">{{ currentQuestion.explanation }}</div>
              </div>
              <div class="option-feedback" v-if="hasAnswered && !isCorrect && option.key === correctAnswerKey">
                <div class="feedback correct">
                  <span class="feedback-icon">&#10003;</span>
                  <span class="feedback-label">Right answer</span>
                </div>
                <div class="feedback-explanation">{{ currentQuestion.explanation }}</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Navigation -->
        <div class="quiz-navigation">
          <div class="nav-spacer"></div>
          <button
            class="nav-btn prev-btn"
            @click="prevQuestion"
            :disabled="currentIndex === 0"
          >
            Previous
          </button>
          <button
            class="nav-btn next-btn"
            @click="nextQuestion"
            :disabled="!hasAnswered"
          >
            {{ isLastQuestion ? 'Finish' : 'Next' }}
          </button>
        </div>
      </div>

      <!-- Results -->
      <div class="quiz-results" v-else>
        <div class="results-icon">{{ isPassed ? '&#127942;' : '&#128218;' }}</div>
        <div class="results-title">{{ isPassed ? 'Congratulations!' : 'Keep Learning!' }}</div>
        <div class="results-score">
          <span class="score-number">{{ correctCount }}</span>
          <span class="score-divider">/</span>
          <span class="score-total">{{ questions.length }}</span>
        </div>
        <div class="results-percent">{{ scorePercent }}% Correct</div>
        <div class="results-status" :class="{ passed: isPassed, failed: !isPassed }">
          {{ isPassed ? 'PASSED' : 'NOT PASSED' }} ({{ meta.passingScore }}% required)
        </div>

        <!-- Download Reminder -->
        <div class="download-section">
          <div class="download-reminder">
            <span class="reminder-icon">&#128233;</span>
            <div class="reminder-text">
              <strong>Please download your results</strong>
              <p>Send the downloaded file to your trainer for verification.</p>
            </div>
          </div>
          <div class="name-input-wrapper">
            <label for="participant-name" class="name-label">Your Name <span class="required">*</span></label>
            <input
              id="participant-name"
              v-model="participantName"
              type="text"
              class="name-input"
              placeholder="Enter your full name"
            />
          </div>
          <button class="download-btn" @click="downloadResults" :disabled="!participantName.trim()">
            <span class="btn-icon">&#8595;</span>
            Download Results
          </button>
        </div>

        <div class="results-actions">
          <button class="action-btn retry-btn" @click="retryQuiz">Try Again</button>
          <button class="action-btn close-btn-action" @click="handleClose">Close</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue';

const props = defineProps({
  visible: {
    type: Boolean,
    default: false
  },
  questions: {
    type: Array,
    required: true
  },
  meta: {
    type: Object,
    required: true
  },
  partKey: {
    type: String,
    required: true
  }
});

const emit = defineEmits(['close']);

// State
const currentIndex = ref(0);
const selectedAnswer = ref(null);
const hasAnswered = ref(false);
const answers = ref({}); // { questionId: { selected: 'A', correct: true/false } }
const showResults = ref(false);
const participantName = ref('');
const shuffledOptionsCache = ref({}); // Cache shuffled options per question ID

// Utility: Shuffle array (Fisher-Yates algorithm)
const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

// Computed
const currentQuestion = computed(() => props.questions[currentIndex.value] || {});

// Get shuffled options for current question (cached per question)
const shuffledOptions = computed(() => {
  const q = currentQuestion.value;
  if (!q || !q.options) return [];

  // Check cache first
  if (shuffledOptionsCache.value[q.id]) {
    return shuffledOptionsCache.value[q.id];
  }

  // Shuffle and assign new keys (A, B, C, D)
  const newKeys = ['A', 'B', 'C', 'D'];
  const shuffled = shuffleArray(q.options).map((opt, index) => ({
    key: newKeys[index],           // New display key
    text: opt.text,
    originalKey: opt.key           // Original key for answer checking
  }));

  // Cache it
  shuffledOptionsCache.value[q.id] = shuffled;
  return shuffled;
});

// Find the new key that maps to the correct answer
const correctAnswerKey = computed(() => {
  const correct = shuffledOptions.value.find(
    opt => opt.originalKey === currentQuestion.value.correctAnswer
  );
  return correct ? correct.key : null;
});

const isCorrect = computed(() => {
  return selectedAnswer.value === correctAnswerKey.value;
});

const isLastQuestion = computed(() => {
  return currentIndex.value === props.questions.length - 1;
});

const progressPercent = computed(() => {
  return ((currentIndex.value + 1) / props.questions.length) * 100;
});

const correctCount = computed(() => {
  return Object.values(answers.value).filter(a => a.correct).length;
});

const scorePercent = computed(() => {
  return Math.round((correctCount.value / props.questions.length) * 100);
});

const isPassed = computed(() => {
  return scorePercent.value >= props.meta.passingScore;
});

// Methods
const selectOption = (key) => {
  if (hasAnswered.value) return;

  selectedAnswer.value = key;
  hasAnswered.value = true;

  // Record answer (map back to original key for the report)
  const selectedOpt = shuffledOptions.value.find(opt => opt.key === key);
  answers.value[currentQuestion.value.id] = {
    selected: selectedOpt ? selectedOpt.originalKey : key,
    correct: key === correctAnswerKey.value,
    question: currentQuestion.value.question
  };
};

const getOptionClass = (key) => {
  if (!hasAnswered.value) {
    return '';
  }

  if (key === correctAnswerKey.value) {
    return 'correct';
  }

  if (key === selectedAnswer.value && !isCorrect.value) {
    return 'incorrect';
  }

  return 'dimmed';
};

const nextQuestion = () => {
  if (!hasAnswered.value) return;

  if (isLastQuestion.value) {
    showResults.value = true;
  } else {
    currentIndex.value++;
    loadQuestionState();
  }
};

const prevQuestion = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--;
    loadQuestionState();
  }
};

const loadQuestionState = () => {
  const saved = answers.value[currentQuestion.value.id];
  if (saved) {
    selectedAnswer.value = saved.selected;
    hasAnswered.value = true;
  } else {
    selectedAnswer.value = null;
    hasAnswered.value = false;
  }
};

const showExplanation = () => {
  // The explanation is already shown inline, this could open a modal for more details
  // For now, it's a placeholder for potential future enhancement
};

const retryQuiz = () => {
  currentIndex.value = 0;
  selectedAnswer.value = null;
  hasAnswered.value = false;
  answers.value = {};
  showResults.value = false;
  participantName.value = '';
  shuffledOptionsCache.value = {}; // Re-shuffle options for retry
};

const handleClose = () => {
  emit('close');
};

const downloadResults = () => {
  if (!participantName.value.trim()) return;

  const name = participantName.value.trim();
  const dateStr = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
  const safeName = name.replace(/[^a-zA-Z0-9\u4e00-\u9fa5]/g, '_');
  const fileDate = new Date().toISOString().split('T')[0];

  // Generate HTML report
  const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Quiz Results - ${name}</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background: #f5f5f5; padding: 40px 20px; }
    .container { max-width: 800px; margin: 0 auto; background: white; border-radius: 16px; box-shadow: 0 4px 20px rgba(0,0,0,0.1); overflow: hidden; }
    .header { background: linear-gradient(135deg, #6366f1, #8b5cf6); color: white; padding: 40px; text-align: center; }
    .header h1 { font-size: 28px; margin-bottom: 8px; }
    .header .subtitle { opacity: 0.9; font-size: 16px; }
    .info-section { padding: 30px 40px; border-bottom: 1px solid #e5e7eb; }
    .info-row { display: flex; justify-content: space-between; margin-bottom: 12px; }
    .info-label { color: #6b7280; }
    .info-value { font-weight: 600; color: #1f2937; }
    .score-section { padding: 40px; text-align: center; background: #f9fafb; }
    .score-number { font-size: 72px; font-weight: 700; color: #1f2937; }
    .score-total { font-size: 36px; color: #9ca3af; }
    .score-percent { font-size: 24px; color: #6b7280; margin: 16px 0; }
    .status { display: inline-block; padding: 12px 32px; border-radius: 30px; font-size: 18px; font-weight: 600; }
    .status.passed { background: #d1fae5; color: #059669; }
    .status.failed { background: #fee2e2; color: #dc2626; }
    .details-section { padding: 30px 40px; }
    .details-title { font-size: 18px; font-weight: 600; margin-bottom: 20px; color: #1f2937; }
    .question-item { padding: 16px; border-radius: 8px; margin-bottom: 12px; }
    .question-item.correct { background: #f0fdf4; border-left: 4px solid #10b981; }
    .question-item.incorrect { background: #fef2f2; border-left: 4px solid #ef4444; }
    .question-num { font-weight: 600; color: #6b7280; margin-bottom: 4px; }
    .question-text { color: #374151; margin-bottom: 8px; }
    .answer-info { font-size: 14px; }
    .answer-info .your-answer { color: #6b7280; }
    .answer-info .correct-mark { color: #059669; font-weight: 600; }
    .answer-info .incorrect-mark { color: #dc2626; font-weight: 600; }
    .footer { padding: 30px 40px; background: #f9fafb; text-align: center; color: #6b7280; font-size: 14px; }
    .summary-stats { display: flex; justify-content: center; gap: 40px; margin-top: 20px; }
    .stat-item { text-align: center; }
    .stat-value { font-size: 24px; font-weight: 700; }
    .stat-value.green { color: #059669; }
    .stat-value.red { color: #dc2626; }
    .stat-label { font-size: 12px; color: #6b7280; }
    @media print { body { padding: 0; } .container { box-shadow: none; } }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>AI Commander Training</h1>
      <div class="subtitle">${props.meta.title}</div>
    </div>

    <div class="info-section">
      <div class="info-row">
        <span class="info-label">Participant Name</span>
        <span class="info-value">${name}</span>
      </div>
      <div class="info-row">
        <span class="info-label">Date & Time</span>
        <span class="info-value">${dateStr}</span>
      </div>
      <div class="info-row">
        <span class="info-label">Quiz Module</span>
        <span class="info-value">${props.partKey.toUpperCase()}</span>
      </div>
    </div>

    <div class="score-section">
      <div>
        <span class="score-number">${correctCount.value}</span>
        <span class="score-total">/ ${props.questions.length}</span>
      </div>
      <div class="score-percent">${scorePercent.value}% Correct</div>
      <div class="status ${isPassed.value ? 'passed' : 'failed'}">
        ${isPassed.value ? 'PASSED' : 'NOT PASSED'} (${props.meta.passingScore}% required)
      </div>
      <div class="summary-stats">
        <div class="stat-item">
          <div class="stat-value green">${correctCount.value}</div>
          <div class="stat-label">Correct</div>
        </div>
        <div class="stat-item">
          <div class="stat-value red">${props.questions.length - correctCount.value}</div>
          <div class="stat-label">Incorrect</div>
        </div>
      </div>
    </div>

    <div class="details-section">
      <div class="details-title">Answer Details</div>
      ${Object.entries(answers.value).map(([id, data], index) => {
        const q = props.questions.find(q => q.id == id);
        const correctAns = q ? q.correctAnswer : '?';
        const correctOption = q ? q.options.find(opt => opt.key === q.correctAnswer) : null;
        const correctText = correctOption ? correctOption.text : '';
        return `
        <div class="question-item ${data.correct ? 'correct' : 'incorrect'}">
          <div class="question-num">Question ${index + 1}</div>
          <div class="question-text">${data.question}</div>
          <div class="answer-info">
            <span class="your-answer">Your answer: <strong>${data.selected}</strong></span>
            ${data.correct
              ? '<span class="correct-mark"> ✓ Correct</span>'
              : `<span class="incorrect-mark"> ✗ Incorrect</span>`
            }
          </div>
          <div class="correct-answer-text" style="margin-top: 8px; padding: 10px; background: #f0fdf4; border-radius: 6px; font-size: 14px;">
            <strong style="color: #059669;">Correct Answer (${correctAns}):</strong> ${correctText}
          </div>
        </div>`;
      }).join('')}
    </div>

    <div class="footer">
      <p>AI Commander Training Quiz Results</p>
      <p>Generated on ${dateStr}</p>
      <p style="margin-top: 16px; font-size: 12px; color: #9ca3af;">
        Please send this report to your trainer for verification.
      </p>
    </div>
  </div>
</body>
</html>`;

  const blob = new Blob([htmlContent], { type: 'text/html' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `Quiz-Report-${props.partKey}-${safeName}-${fileDate}.html`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};

// Watch for visibility changes to reset state
watch(() => props.visible, (newVal) => {
  if (newVal) {
    // Reset when opening
    currentIndex.value = 0;
    selectedAnswer.value = null;
    hasAnswered.value = false;
    answers.value = {};
    showResults.value = false;
    participantName.value = '';
    shuffledOptionsCache.value = {}; // Reset shuffled options for new quiz session
  }
});
</script>

<style scoped>
.quiz-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
}

.quiz-container {
  background: #fff;
  border-radius: 16px;
  width: 100%;
  max-width: 700px;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
}

.quiz-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 24px;
  border-bottom: 1px solid #e5e7eb;
}

.quiz-title {
  font-size: 18px;
  font-weight: 600;
  color: #1f2937;
}

.close-btn {
  background: none;
  border: none;
  font-size: 28px;
  color: #6b7280;
  cursor: pointer;
  padding: 0;
  line-height: 1;
}

.close-btn:hover {
  color: #1f2937;
}

.quiz-progress {
  padding: 16px 24px;
  border-bottom: 1px solid #e5e7eb;
}

.progress-text {
  font-size: 14px;
  color: #6b7280;
  margin-bottom: 8px;
  display: block;
}

.progress-bar {
  height: 4px;
  background: #e5e7eb;
  border-radius: 2px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #6366f1, #8b5cf6);
  border-radius: 2px;
  transition: width 0.3s ease;
}

.quiz-warning {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  background: #fef3c7;
  border-bottom: 1px solid #fcd34d;
}

.warning-icon {
  font-size: 16px;
}

.warning-text {
  font-size: 13px;
  color: #92400e;
}

.quiz-content {
  padding: 24px;
}

.question-text {
  font-size: 18px;
  font-weight: 500;
  color: #1f2937;
  line-height: 1.6;
  margin-bottom: 24px;
}

.options-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.option-item {
  display: flex;
  gap: 12px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid #e5e7eb;
  cursor: pointer;
  transition: all 0.2s ease;
}

.option-item:hover:not(.correct):not(.incorrect):not(.dimmed) {
  border-color: #6366f1;
  background: #f5f3ff;
}

.option-item.correct {
  background: #d1fae5;
  border-color: #10b981;
}

.option-item.incorrect {
  background: #fee2e2;
  border-color: #ef4444;
}

.option-item.dimmed {
  opacity: 0.5;
  cursor: default;
}

.option-letter {
  font-weight: 600;
  color: #6b7280;
  min-width: 24px;
}

.option-content {
  flex: 1;
}

.option-text {
  color: #374151;
  line-height: 1.5;
}

.option-feedback {
  margin-top: 12px;
  padding-top: 12px;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}

.feedback {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
}

.feedback.correct {
  color: #059669;
}

.feedback.incorrect {
  color: #dc2626;
}

.feedback-icon {
  font-weight: bold;
  font-size: 16px;
}

.feedback-label {
  font-weight: 600;
  font-size: 14px;
}

.feedback-explanation {
  font-size: 14px;
  color: #4b5563;
  line-height: 1.5;
}

.quiz-navigation {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 32px;
  padding-top: 24px;
  border-top: 1px solid #e5e7eb;
}

.nav-spacer {
  flex: 1;
}

.nav-btn {
  padding: 10px 20px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
}

.explain-btn {
  background: #fff;
  border: 1px solid #e5e7eb;
  color: #374151;
  display: flex;
  align-items: center;
  gap: 6px;
}

.explain-btn:hover {
  background: #f9fafb;
}

.prev-btn {
  background: #fff;
  border: 1px solid #e5e7eb;
  color: #374151;
}

.prev-btn:hover:not(:disabled) {
  background: #f9fafb;
}

.prev-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.next-btn {
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  border: none;
  color: #fff;
}

.next-btn:hover:not(:disabled) {
  opacity: 0.9;
  transform: translateY(-1px);
}

.next-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.btn-icon {
  font-size: 16px;
}

/* Results */
.quiz-results {
  padding: 48px 24px;
  text-align: center;
}

.results-icon {
  font-size: 64px;
  margin-bottom: 16px;
}

.results-title {
  font-size: 28px;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 24px;
}

.results-score {
  font-size: 48px;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 8px;
}

.score-divider {
  color: #9ca3af;
  margin: 0 4px;
}

.score-total {
  color: #6b7280;
}

.results-percent {
  font-size: 18px;
  color: #6b7280;
  margin-bottom: 16px;
}

.results-status {
  display: inline-block;
  padding: 8px 20px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 32px;
}

.results-status.passed {
  background: #d1fae5;
  color: #059669;
}

.results-status.failed {
  background: #fee2e2;
  color: #dc2626;
}

.download-section {
  background: #f0f9ff;
  border: 1px solid #bae6fd;
  border-radius: 12px;
  padding: 24px;
  margin-bottom: 32px;
}

.download-reminder {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  text-align: left;
  margin-bottom: 20px;
}

.reminder-icon {
  font-size: 32px;
}

.reminder-text strong {
  display: block;
  color: #0369a1;
  margin-bottom: 4px;
}

.reminder-text p {
  color: #0284c7;
  margin: 0;
  font-size: 14px;
}

.name-input-wrapper {
  margin-bottom: 20px;
}

.name-label {
  display: block;
  font-size: 14px;
  font-weight: 600;
  color: #0369a1;
  margin-bottom: 8px;
  text-align: left;
}

.name-label .required {
  color: #dc2626;
}

.name-input {
  width: 100%;
  padding: 12px 16px;
  font-size: 16px;
  border: 2px solid #bae6fd;
  border-radius: 8px;
  outline: none;
  transition: all 0.2s ease;
  box-sizing: border-box;
}

.name-input:focus {
  border-color: #0ea5e9;
  box-shadow: 0 0 0 3px rgba(14, 165, 233, 0.2);
}

.name-input::placeholder {
  color: #94a3b8;
}

.download-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 14px 28px;
  background: linear-gradient(135deg, #0ea5e9, #0284c7);
  color: #fff;
  border: none;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
}

.download-btn:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(14, 165, 233, 0.4);
}

.download-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.results-actions {
  display: flex;
  justify-content: center;
  gap: 16px;
}

.action-btn {
  padding: 12px 24px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
}

.retry-btn {
  background: #fff;
  border: 1px solid #e5e7eb;
  color: #374151;
}

.retry-btn:hover {
  background: #f9fafb;
}

.close-btn-action {
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  border: none;
  color: #fff;
}

.close-btn-action:hover {
  opacity: 0.9;
}

/* Responsive */
@media (max-width: 640px) {
  .quiz-container {
    max-height: 100vh;
    border-radius: 0;
  }

  .quiz-content {
    padding: 16px;
  }

  .question-text {
    font-size: 16px;
  }

  .option-item {
    padding: 12px;
  }

  .quiz-navigation {
    flex-wrap: wrap;
  }

  .nav-spacer {
    order: -1;
    width: 100%;
    height: 0;
  }

  .explain-btn {
    order: 3;
    width: 100%;
    justify-content: center;
    margin-top: 12px;
  }

  .results-score {
    font-size: 36px;
  }

  .download-reminder {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
}
</style>
