# Changelog

All notable changes to this project will be documented in this file.

## [2026-01-23] - AI Commander Training Quiz Feature

### Added
- **TrainingQuiz Component** (`src/components/TrainingQuiz.vue`)
  - Interactive quiz modal with progress tracking
  - Randomized answer options (Fisher-Yates shuffle) to prevent memorization
  - Correct/incorrect feedback with explanations
  - Results page with score summary and pass/fail status
  - Name input field for participant identification
  - HTML report download with full answer details
  - Warning notice on first question about page refresh

- **Quiz Questions Data** (`src/data/quizQuestions.js`)
  - Part 0: AI Workflow Business Vocabulary (20 questions)
  - Part 1: From Executor to Commander (20 questions)
  - Part 2: AI Command Operational Strategy (35 questions)
  - Part 3: Standard AI Work Cycle & Reporting (35 questions)
  - Total: 110 questions with explanations

- **Quiz Integration**
  - Added "Take Quiz" buttons to both English and Chinese training pages
  - `AiTrainingMaterialsEn.vue` - English version
  - `AiTrainingMaterials.vue` - Chinese version

### Changed
- Updated `vite.config.js` to add `@` path alias for cleaner imports

### Technical Details
- Quiz options are shuffled per session and cached for consistent navigation
- Answers recorded using original option keys for accurate reporting
- HTML reports include participant name, timestamp, score breakdown, and correct answer text
- 70% passing score required for all modules
