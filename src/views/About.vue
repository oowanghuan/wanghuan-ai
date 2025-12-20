<template>
  <div class="about-page">
    <div class="bg" aria-hidden="true"></div>

    <!-- Main -->
    <main class="wrap">
      <!-- Profile Card -->
      <section class="profileCard">
        <div class="avatar">
          <span class="avatarText">W</span>
        </div>
        <div class="profileMain">
          <div class="name">{{ $t('about.name') }}</div>
          <div class="headline">{{ $t('about.headline') }}</div>
          <p class="intro">{{ $t('about.intro') }}</p>
          <div class="profileTags">
            <span class="profileTag">{{ $t('about.tag1') }}</span>
            <span class="profileTag">{{ $t('about.tag2') }}</span>
            <span class="profileTag">{{ $t('about.tag3') }}</span>
            <span class="profileTag">{{ $t('about.tag4') }}</span>
          </div>
        </div>
      </section>

      <!-- Statement: 核心观点 -->
      <section class="statement">
        <div class="statementTitle">{{ $t('about.statementTitle') }}</div>
        <div class="statementBody">{{ $t('about.statementBody') }}</div>
      </section>

      <!-- Section: 我正在做的两条事 -->
      <section class="twoTracks">
        <div class="sectionHeader">
          <div class="sectionTitle">{{ $t('about.twoThingsTitle') }}</div>
        </div>

        <div class="tracksGrid">
          <!-- Track 1: 品牌出海 -->
          <div class="trackCard track1">
            <div class="trackBadge">{{ $t('about.track1Badge') }}</div>
            <div class="trackName">{{ $t('about.track1Name') }}</div>
            <div class="trackTag">{{ $t('about.track1Tag') }}</div>

            <div class="trackContent">
              <p>{{ $t('about.track1Intro') }}</p>
              <p class="highlight" v-html="$t('about.track1Core')"></p>
              <p>{{ $t('about.track1Desc') }}</p>

              <ul class="trackList">
                <li>{{ $t('about.track1Point1') }}</li>
                <li>{{ $t('about.track1Point2') }}</li>
                <li>{{ $t('about.track1Point3') }}</li>
                <li>{{ $t('about.track1Point4') }}</li>
              </ul>

              <div class="trackEmphasis">
                <p v-html="$t('about.track1Emphasis1')"></p>
              </div>

              <p>{{ $t('about.track1Understand') }}</p>
              <ul class="inlineList">
                <li>{{ $t('about.track1Und1') }}</li>
                <li>{{ $t('about.track1Und2') }}</li>
                <li>{{ $t('about.track1Und3') }}</li>
                <li v-html="$t('about.track1Und4')"></li>
              </ul>
            </div>
          </div>

          <!-- Track 2: AI Coding -->
          <div class="trackCard track2">
            <div class="trackBadge">{{ $t('about.track2Badge') }}</div>
            <div class="trackName">{{ $t('about.track2Name') }}</div>
            <div class="trackTag">{{ $t('about.track2Tag') }}</div>

            <div class="trackContent">
              <p>{{ $t('about.track2Intro') }}</p>
              <p class="highlight" v-html="$t('about.track2Core')"></p>

              <p>{{ $t('about.track2Focus') }}</p>
              <ul class="trackList">
                <li>{{ $t('about.track2Q1') }}</li>
                <li>{{ $t('about.track2Q2') }}</li>
                <li v-html="$t('about.track2Q3')"></li>
              </ul>

              <p>{{ $t('about.track2Doing') }}</p>
              <ul class="trackList">
                <li>{{ $t('about.track2Do1') }}</li>
                <li>{{ $t('about.track2Do2') }}</li>
                <li>{{ $t('about.track2Do3') }}</li>
                <li>{{ $t('about.track2Do4') }}</li>
              </ul>

              <div class="trackEmphasis">
                <p v-html="$t('about.track2Emphasis')"></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Section: 两条赛道的连接 -->
      <section class="connection">
        <div class="sectionTitle">{{ $t('about.connectionTitle') }}</div>

        <div class="connectionContent">
          <p class="connectionIntro">{{ $t('about.connectionIntro') }}</p>

          <div class="connectionGrid">
            <div class="connectionCard">
              <div class="connectionLabel">{{ $t('about.conn1Label') }}</div>
              <ul>
                <li>{{ $t('about.conn1P1') }}</li>
                <li>{{ $t('about.conn1P2') }}</li>
                <li>{{ $t('about.conn1P3') }}</li>
              </ul>
            </div>

            <div class="connectionCard">
              <div class="connectionLabel">{{ $t('about.conn2Label') }}</div>
              <ul>
                <li>{{ $t('about.conn2P1') }}</li>
                <li>{{ $t('about.conn2P2') }}</li>
                <li>{{ $t('about.conn2P3') }}</li>
              </ul>
            </div>
          </div>

          <div class="connectionSummary">
            <p v-html="$t('about.connectionSummary')"></p>
          </div>
        </div>
      </section>

      <!-- Connect Section -->
      <section class="connect">
        <div class="connect-card">
          <div class="connect-grid">
            <!-- Left: text -->
            <div class="connect-left">
              <div class="connect-kicker">{{ $t('about.connectKicker') }}</div>
              <h2 class="connect-title">{{ $t('about.connectTitle') }}</h2>
              <p class="connect-desc">{{ $t('about.connectDesc') }}</p>

              <ul class="connect-list">
                <li>
                  <span class="dot"></span>
                  <div class="li-main">
                    <div class="li-title">{{ $t('about.connectTopic1Title') }}</div>
                    <div class="li-desc">{{ $t('about.connectTopic1Desc') }}</div>
                  </div>
                </li>
                <li>
                  <span class="dot"></span>
                  <div class="li-main">
                    <div class="li-title">{{ $t('about.connectTopic2Title') }}</div>
                    <div class="li-desc">{{ $t('about.connectTopic2Desc') }}</div>
                  </div>
                </li>
                <li>
                  <span class="dot"></span>
                  <div class="li-main">
                    <div class="li-title">{{ $t('about.connectTopic3Title') }}</div>
                    <div class="li-desc">{{ $t('about.connectTopic3Desc') }}</div>
                  </div>
                </li>
              </ul>

              <div class="connect-note">
                <span class="spark">✦</span>
                {{ $t('about.connectNote') }}
              </div>
            </div>

            <!-- Right: actions -->
            <div class="connect-right">
              <div class="panel">
                <div class="panel-title">{{ $t('about.panelTitle') }}</div>
                <div class="panel-sub">{{ $t('about.panelSub') }}</div>

                <div class="actions">
                  <a
                    class="btn primary"
                    href="mailto:oowanghuan@gmail.com?subject=%5BBrand%20Globalization%5D%20Let%E2%80%99s%20talk&body=%E4%BD%A0%E5%A5%BD%E7%8E%8B%E6%AC%A2%EF%BC%8C%0A%0A%E6%88%91%E7%9B%AE%E5%89%8D%E5%9C%A8%E5%81%9A%EF%BC%9A%0A%0A%E6%88%91%E7%9A%84%E7%9B%AE%E6%A0%87%E6%98%AF%EF%BC%9A%0A%0A%E6%88%91%E7%8E%B0%E5%9C%A8%E5%8D%A1%E5%9C%A8%EF%BC%9A%0A%0A%E6%83%B3%E8%AF%B7%E4%BD%A0%E5%B8%AE%E6%88%91%E5%88%A4%E6%96%AD%EF%BC%9A%0A"
                  >
                    <span class="btn-ic">🌍</span>
                    <span class="btn-text">
                      <span class="btn-top">{{ $t('about.btn1Top') }}</span>
                      <span class="btn-sub">{{ $t('about.btn1Sub') }}</span>
                    </span>
                    <span class="btn-arrow">→</span>
                  </a>

                  <a
                    class="btn"
                    href="mailto:oowanghuan@gmail.com?subject=%5BAI%20Coding%5D%20Let%E2%80%99s%20talk&body=%E4%BD%A0%E5%A5%BD%E7%8E%8B%E6%AC%A2%EF%BC%8C%0A%0A%E6%88%91%E7%9B%AE%E5%89%8D%E5%9C%A8%E5%81%9A%EF%BC%9A%0A%0A%E6%88%91%E7%9A%84%E7%9B%AE%E6%A0%87%E6%98%AF%EF%BC%9A%0A%0A%E6%88%91%E7%8E%B0%E5%9C%A8%E5%8D%A1%E5%9C%A8%EF%BC%9A%0A%0A%E6%83%B3%E8%AF%B7%E4%BD%A0%E5%B8%AE%E6%88%91%E5%88%A4%E6%96%AD%EF%BC%9A%0A"
                  >
                    <span class="btn-ic">🧩</span>
                    <span class="btn-text">
                      <span class="btn-top">{{ $t('about.btn2Top') }}</span>
                      <span class="btn-sub">{{ $t('about.btn2Sub') }}</span>
                    </span>
                    <span class="btn-arrow">→</span>
                  </a>
                </div>

                <div class="alt">
                  <div class="alt-title">{{ $t('about.altTitle') }}</div>
                  <a
                    class="mini"
                    href="mailto:oowanghuan@gmail.com?subject=%5BQuick%20Question%5D%20Hello&body=%E4%BD%A0%E5%A5%BD%E7%8E%8B%E6%AC%A2%EF%BC%8C%0A%0A%E6%88%91%E6%83%B3%E7%AE%80%E5%8D%95%E9%97%AE%E4%B8%80%E4%B8%AA%E9%97%AE%E9%A2%98%EF%BC%9A%0A"
                  >
                    {{ $t('about.altLink') }}
                  </a>
                </div>

                <div class="foot">
                  <span class="foot-dot"></span>
                  <span>{{ $t('about.footEmail') }}</span>
                  <a class="foot-link" href="mailto:oowanghuan@gmail.com">oowanghuan@gmail.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
// 该页面主要是文案与布局，无需额外逻辑
</script>

<style scoped>
.about-page {
  min-height: 100vh;
  color: rgba(255, 255, 255, 0.92);
}

/* Background */
.bg {
  position: fixed;
  inset: 0;
  z-index: -1;
  pointer-events: none;
  background:
    radial-gradient(900px 700px at 20% 10%, rgba(124, 92, 255, 0.28), transparent 60%),
    radial-gradient(700px 500px at 78% 18%, rgba(48, 174, 255, 0.18), transparent 55%),
    radial-gradient(800px 700px at 55% 90%, rgba(124, 92, 255, 0.10), transparent 55%),
    linear-gradient(180deg, rgba(9, 10, 18, 1), rgba(8, 9, 16, 1));
}

/* Layout */
.wrap {
  max-width: 1200px;
  margin: 0 auto;
  padding: 100px 24px 64px;
}

/* Profile Card */
.profileCard {
  display: flex;
  gap: 28px;
  align-items: flex-start;
  padding: 32px;
  border: 1px solid rgba(255, 255, 255, 0.10);
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  backdrop-filter: blur(10px);
  margin-bottom: 32px;
}
.avatar {
  width: 100px;
  height: 100px;
  border-radius: 24px;
  display: grid;
  place-items: center;
  background: rgba(122, 162, 255, 0.18);
  border: 1px solid rgba(122, 162, 255, 0.25);
  flex-shrink: 0;
}
.avatarText {
  font-size: 42px;
  font-weight: 700;
  color: rgba(139, 128, 255, 0.9);
}
.profileMain {
  flex: 1;
}
.name {
  font-size: 28px;
  font-weight: 700;
  letter-spacing: -0.02em;
}
.headline {
  margin-top: 6px;
  font-size: 14px;
  color: rgba(167, 139, 250, 0.95);
  font-weight: 500;
}
.intro {
  margin: 14px 0 0;
  line-height: 1.85;
  font-size: 15px;
  color: rgba(255, 255, 255, 0.78);
}
.profileTags {
  margin-top: 18px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
.profileTag {
  font-size: 13px;
  padding: 8px 16px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  background: rgba(255, 255, 255, 0.04);
  color: rgba(255, 255, 255, 0.85);
}

/* Statement Section */
.statement {
  margin-bottom: 32px;
  padding: 32px 36px;
  border-radius: 20px;
  background: linear-gradient(135deg, rgba(139, 92, 246, 0.15) 0%, rgba(59, 130, 246, 0.12) 100%);
  border: 1px solid rgba(139, 92, 246, 0.25);
  position: relative;
  overflow: hidden;
}
.statement::before {
  content: '"';
  position: absolute;
  top: 12px;
  left: 20px;
  font-size: 80px;
  font-family: Georgia, serif;
  color: rgba(139, 92, 246, 0.2);
  line-height: 1;
}
.statementTitle {
  font-size: 20px;
  font-weight: 700;
  letter-spacing: -0.01em;
  margin-bottom: 16px;
  background: linear-gradient(90deg, rgba(167, 139, 250, 1) 0%, rgba(129, 140, 248, 1) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.statementBody {
  font-size: 16px;
  line-height: 1.9;
  color: rgba(255, 255, 255, 0.88);
  font-weight: 400;
}

/* Section Header */
.sectionHeader {
  margin-bottom: 20px;
}
.sectionTitle {
  font-size: 20px;
  font-weight: 700;
  letter-spacing: -0.01em;
  margin-bottom: 16px;
}

/* Two Tracks Section */
.twoTracks {
  margin-bottom: 32px;
}

/* Tracks Grid - Side by Side */
.tracksGrid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  align-items: start;
}

/* Track Card */
.trackCard {
  border: 1px solid rgba(255, 255, 255, 0.10);
  background: rgba(255, 255, 255, 0.05);
  border-radius: 18px;
  backdrop-filter: blur(10px);
  padding: 24px;
  height: 100%;
}
.track1 {
  border-left: 3px solid rgba(122, 162, 255, 0.5);
}
.track2 {
  border-left: 3px solid rgba(139, 92, 246, 0.5);
}

.trackBadge {
  display: inline-block;
  font-size: 11px;
  padding: 4px 10px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.12);
  margin-bottom: 12px;
  letter-spacing: 0.05em;
}
.trackName {
  font-size: 22px;
  font-weight: 750;
  letter-spacing: -0.01em;
  margin-bottom: 4px;
}
.trackTag {
  font-size: 12px;
  color: rgba(255, 255, 255, 0.55);
  margin-bottom: 16px;
}

.trackContent {
  font-size: 14px;
  line-height: 1.85;
  color: rgba(255, 255, 255, 0.78);
}
.trackContent p {
  margin: 0 0 14px;
}
.trackContent .highlight {
  color: rgba(255, 255, 255, 0.92);
  font-weight: 500;
}
.trackContent :deep(b) {
  color: rgba(255, 255, 255, 0.95);
  font-weight: 650;
}

.trackList {
  margin: 12px 0 16px;
  padding-left: 20px;
}
.trackList li {
  margin: 8px 0;
}

.inlineList {
  margin: 8px 0 16px;
  padding-left: 20px;
}
.inlineList li {
  margin: 6px 0;
}

.trackEmphasis {
  margin: 16px 0;
  padding: 14px 16px;
  border-left: 3px solid rgba(122, 162, 255, 0.4);
  background: rgba(122, 162, 255, 0.08);
  border-radius: 0 12px 12px 0;
}
.trackEmphasis p {
  margin: 0;
  font-size: 14px;
  line-height: 1.7;
}

/* Connection Section */
.connection {
  border: 1px solid rgba(255, 255, 255, 0.10);
  background: rgba(255, 255, 255, 0.05);
  border-radius: 18px;
  backdrop-filter: blur(10px);
  padding: 24px;
  margin-bottom: 24px;
}

.connectionContent {
  font-size: 14px;
  line-height: 1.85;
  color: rgba(255, 255, 255, 0.78);
}
.connectionIntro {
  margin-bottom: 20px;
}

.connectionGrid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin-bottom: 20px;
}

.connectionCard {
  padding: 16px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(0, 0, 0, 0.15);
  border-radius: 14px;
}
.connectionLabel {
  font-size: 13px;
  font-weight: 650;
  color: rgba(255, 255, 255, 0.92);
  margin-bottom: 10px;
}
.connectionCard ul {
  margin: 0;
  padding-left: 18px;
}
.connectionCard li {
  margin: 6px 0;
  font-size: 13px;
}

.connectionSummary {
  padding: 14px 16px;
  border-left: 3px solid rgba(139, 92, 246, 0.4);
  background: rgba(139, 92, 246, 0.08);
  border-radius: 0 12px 12px 0;
}
.connectionSummary p {
  margin: 0;
  font-size: 14px;
  line-height: 1.7;
}
.connectionSummary :deep(b) {
  color: rgba(255, 255, 255, 0.95);
  font-weight: 650;
}

/* Connect Section */
.connect {
  padding: 22px 0;
}

.connect-card {
  border-radius: 22px;
  border: 1px solid rgba(255,255,255,0.10);
  background: rgba(255,255,255,0.05);
  backdrop-filter: blur(10px);
  overflow: hidden;
  position: relative;
}

.connect-card:before {
  content: "";
  position: absolute;
  inset: 0;
  pointer-events: none;
  background:
    radial-gradient(700px 520px at 20% 10%, rgba(124, 92, 255, 0.22), transparent 60%),
    radial-gradient(640px 480px at 85% 20%, rgba(48, 174, 255, 0.16), transparent 55%);
  opacity: 0.9;
}

.connect-grid {
  position: relative;
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  gap: 18px;
  padding: 26px;
}

/* Left */
.connect-kicker {
  font-size: 12px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  opacity: 0.55;
  margin-bottom: 10px;
}

.connect-title {
  margin: 0;
  font-size: 28px;
  font-weight: 800;
  letter-spacing: -0.02em;
  color: rgba(122, 162, 255, 0.92);
}

.connect-desc {
  margin: 12px 0 0;
  font-size: 13.5px;
  line-height: 1.8;
  color: rgba(255,255,255,0.70);
  max-width: 680px;
}

.connect-list {
  margin: 18px 0 0;
  padding: 0;
  list-style: none;
  display: grid;
  gap: 12px;
}

.connect-list li {
  display: grid;
  grid-template-columns: 10px 1fr;
  gap: 12px;
  align-items: start;
  padding: 12px 12px;
  border-radius: 16px;
  border: 1px solid rgba(255,255,255,0.08);
  background: rgba(0,0,0,0.12);
}

.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: rgba(122, 162, 255, 0.7);
  margin-top: 6px;
  box-shadow: 0 0 0 4px rgba(122,162,255,0.12);
}

.li-title {
  font-size: 13px;
  font-weight: 750;
  letter-spacing: -0.01em;
  color: rgba(255,255,255,0.90);
}

.li-desc {
  margin-top: 6px;
  font-size: 12.5px;
  line-height: 1.65;
  color: rgba(255,255,255,0.65);
}

.connect-note {
  margin-top: 14px;
  padding: 12px 12px;
  border-radius: 16px;
  border: 1px solid rgba(255,255,255,0.08);
  background: rgba(122,162,255,0.08);
  color: rgba(255,255,255,0.74);
  font-size: 12.5px;
  line-height: 1.7;
  display: flex;
  gap: 10px;
  align-items: flex-start;
}

.spark {
  opacity: 0.9;
  margin-top: 1px;
}

/* Right panel */
.panel {
  border-radius: 18px;
  border: 1px solid rgba(255,255,255,0.10);
  background: rgba(0,0,0,0.16);
  padding: 16px;
  height: 100%;
}

.panel-title {
  font-size: 13px;
  font-weight: 750;
  letter-spacing: -0.01em;
}

.panel-sub {
  margin-top: 8px;
  font-size: 12.5px;
  line-height: 1.6;
  color: rgba(255,255,255,0.62);
}

.actions {
  margin-top: 14px;
  display: grid;
  gap: 10px;
}

.connect .btn {
  display: grid;
  grid-template-columns: 28px 1fr 18px;
  gap: 12px;
  align-items: center;
  padding: 12px 12px;
  border-radius: 16px;
  border: 1px solid rgba(255,255,255,0.10);
  background: rgba(255,255,255,0.04);
  text-decoration: none;
  color: rgba(255,255,255,0.86);
  transition: 0.18s ease;
}

.connect .btn:hover {
  transform: translateY(-2px);
  background: rgba(255,255,255,0.06);
  border-color: rgba(122,162,255,0.35);
}

.connect .btn.primary {
  background: rgba(122,162,255,0.12);
  border-color: rgba(122,162,255,0.26);
}

.connect .btn.primary:hover {
  background: rgba(122,162,255,0.16);
  border-color: rgba(122,162,255,0.38);
}

.btn-ic {
  width: 28px;
  height: 28px;
  border-radius: 12px;
  display: grid;
  place-items: center;
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(255,255,255,0.10);
  font-size: 14px;
}

.btn-text {
  display: grid;
  gap: 3px;
}

.btn-top {
  font-size: 13px;
  font-weight: 750;
  letter-spacing: -0.01em;
}

.btn-sub {
  font-size: 12px;
  color: rgba(255,255,255,0.62);
}

.btn-arrow {
  opacity: 0.35;
  font-size: 16px;
  transition: 0.18s ease;
}

.connect .btn:hover .btn-arrow {
  opacity: 0.55;
  transform: translateX(2px);
}

.alt {
  margin-top: 12px;
  padding-top: 12px;
  border-top: 1px solid rgba(255,255,255,0.08);
}

.alt-title {
  font-size: 12px;
  opacity: 0.62;
  margin-bottom: 6px;
}

.mini {
  font-size: 12.5px;
  color: rgba(122, 162, 255, 0.92);
  text-decoration: none;
}
.mini:hover { text-decoration: underline; }

.foot {
  margin-top: 14px;
  padding-top: 12px;
  border-top: 1px solid rgba(255,255,255,0.08);
  font-size: 12.5px;
  color: rgba(255,255,255,0.62);
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
}

.foot-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: rgba(122,162,255,0.65);
  box-shadow: 0 0 0 4px rgba(122,162,255,0.12);
}

.foot-link {
  color: rgba(122, 162, 255, 0.92);
  text-decoration: none;
}
.foot-link:hover { text-decoration: underline; }

/* Responsive */
@media (max-width: 980px) {
  .connect-grid {
    grid-template-columns: 1fr;
  }
  .connect-right {
    order: -1;
  }
}

@media (max-width: 900px) {
  .tracksGrid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 640px) {
  .profileCard {
    flex-direction: column;
    text-align: center;
  }
  .profileTags {
    justify-content: center;
  }
  .connectionGrid {
    grid-template-columns: 1fr;
  }
  .connect-grid {
    padding: 20px;
  }
  .connect-title {
    font-size: 22px;
  }
}
</style>
