<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>Disaster Quiz - 100 Questions</title>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap');
  html, body {
    margin: 0; padding: 0; height: 100vh;
    font-family: 'Poppins', sans-serif;
    background: linear-gradient(270deg, #ffef10, #ff8a00, #ff00ff, #00c3ff, #39ff14);
    background-size: 1000% 1000%;
    animation: bgShift 25s ease infinite;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }
  @keyframes bgShift {
    0% {background-position: 0% 50%;}
    50% {background-position: 100% 50%;}
    100% {background-position: 0% 50%;}
  }
  #quizContainer {
    width: 98vw;
    max-width: 900px;
    height: 85vh;
    background: rgba(255, 255, 255, 0.9);
    border-radius: 16px;
    padding: 25px 30px 80px 30px;
    box-shadow: 0 16px 44px rgba(0,0,0,0.25);
    overflow-y: auto;
    position: relative;
    text-align: center;
    display: flex;
    flex-direction: column;
  }
  #question {
    font-size: 2.3rem;
    font-weight: 700;
    margin-bottom: 26px;
    color: #5f005f;
    text-shadow: 0 1px 3px rgba(255,255,255,0.6);
  }
  #answers {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 18px;
    width: 100%;
    max-width: 850px;
    margin: 0 auto 36px auto;
  }
  #answers button {
    padding: 18px 25px;
    font-size: 1.75rem;
    font-weight: 700;
    border-radius: 40px;
    border: 3px solid transparent;
    background: #f3e3ff;
    color: #580035;
    cursor: pointer;
    box-shadow: 0 6px 18px rgba(88,0,85,0.38);
    position: relative;
    text-align: left;
    padding-left: 70px;
    transition: background-color 0.3s ease, box-shadow 0.4s ease, transform 0.25s ease, color 0.3s ease;
  }
  #answers button:hover:not(:disabled) {
    background: #a464b3;
    color: #fff;
    transform: scale(1.05);
    box-shadow: 0 10px 30px rgba(164, 100, 179, 0.85);
  }
  #answers button:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
  #startBtn, #nextBtn, #exitBtn, #tryAgainBtn {
    padding: 18px 70px;
    background: #800080;
    border: none;
    border-radius: 50px;
    color: #fff;
    font-weight: 700;
    font-size: 2rem;
    box-shadow: 0 10px 32px rgba(128,0,128,0.8);
    cursor: pointer;
    margin: 20px auto 0 auto;
    display: block;
    transition: background-color 0.3s ease;
  }
  #startBtn:hover, #nextBtn:hover, #exitBtn:hover, #tryAgainBtn:hover {
    background: #550055;
  }
  #feedback {
    position: fixed;
    right: 15%;
    top: 140px;
    font-size: 3rem;
    font-weight: 900;
    display: flex;
    align-items: center;
    gap: 20px;
    user-select: none;
    pointer-events: none;
    color: #5f005f;
    z-index: 1100;
  }
  #feedback #checkmark {
    font-size: 4rem;
  }
  #dollImg {
    width: 160px;
    position: fixed;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    animation: dance 3s ease-in-out infinite;
    display: none;
    pointer-events: none;
    z-index: 1050;
  }
  @keyframes dance {
    0%, 100% { transform: translateX(-50%) rotate(0deg) translateY(0); }
    50% { transform: translateX(-50%) rotate(15deg) translateY(-20px); }
  }
  #cryEmoji {
    width: 80px;
    height: 80px;
    margin-left: 25px;
  }
  #flowerBlast {
    position: fixed;
    top: 0; left: 0; right: 0; bottom: 0;
    z-index: 1000;
    pointer-events: none;
    overflow: hidden;
    display: none;
  }
  .flowerParticle {
    position: absolute;
    font-size: 36px;
    user-select: none;
    animation: flyUp 4000ms linear forwards;
  }
  @keyframes flyUp {
    0% {opacity: 1; transform: translate(0, 0) scale(1);}
    100% {opacity: 0; transform: translate(var(--x), -120vh) scale(0.8);}
  }
</style>
</head>
<body>
<div id="quizContainer">
  <button id="startBtn">Start Quiz</button>
  <div id="quizContent" style="display:none; flex-direction: column;">
    <div id="question"></div>
    <div id="answers"></div>
    <div id="feedback"></div>
    <div id="tryAgainContainer"></div>
    <button id="nextBtn" style="display:none;">Next</button>
    <button id="exitBtn" style="display:none;">Exit</button>
  </div>
  <img id="dollImg" src="man-dancing-joypixels.gif" alt="Dancing man" />
  <div id="resultsSummary" style="display:none; margin-top: 20px; font-weight: 700; font-size: 2rem; color: #5f005f"></div>
</div>
<div id="flowerBlast"></div>
<script>
  const startBtn = document.getElementById('startBtn');
  const quizContent = document.getElementById('quizContent');
  const questionEl = document.getElementById('question');
  const answersEl = document.getElementById('answers');
  const feedbackEl = document.getElementById('feedback');
  const tryAgainContainer = document.getElementById('tryAgainContainer');
  const nextBtn = document.getElementById('nextBtn');
  const exitBtn = document.getElementById('exitBtn');
  const dollImg = document.getElementById('dollImg');
  const flowerBlast = document.getElementById('flowerBlast');
  const resultsSummary = document.getElementById('resultsSummary');
  const flowerEmojis = ['🌸','🌺','🌷','🌻','🌼','💐'];
  const sadEmoji = '❌';
  const checkMark = '✔';
  const cryingEmojiSrc = 'smiley-face-cry.gif';

  // === 100 Disaster Questions ===
  const questions = [];
  const baseQuestions = [
    { q: "What to do during an earthquake?", a: ["Run outside immediately","Drop, Cover, and Hold On","Call for help","Stand near windows"], c: 1 },
    { q: "Where is the safest place during a flood?", a: ["Low ground near water","Stay indoors on higher floors","Open all doors and windows","Go into basement"], c: 1 },
    { q: "What should you avoid using in a fire emergency?", a: ["Elevators","Stairs","Fire extinguisher","Exit signs"], c: 0 },
    { q: "What’s the first step in CPR?", a: ["Check responsiveness","Start compressions","Give breaths","Call a friend"], c: 0 },
    { q: "In a cyclone, you should?", a: ["Go near the sea","Stay in a strong building","Climb tall trees","Drive fast"], c: 1 },
  ];
  // Fill up to 100 by repeating variations
  for (let i=0; i<100; i++) {
    const bq = baseQuestions[i % baseQuestions.length];
    questions.push({
      question: bq.q + " (Q" + (i+1) + ")",
      answers: bq.a.map((txt, idx) => ({text: txt, correct: idx===bq.c}))
    });
  }

  let curIndex = 0;
  let attended = 0;
  let correctCount = 0;
  let wrongCount = 0;
  let answered = false;
  let flowerInterval;

  startBtn.onclick = () => {
    startBtn.style.display = 'none';
    quizContent.style.display = 'flex';
    nextBtn.style.display = 'none';
    exitBtn.style.display = 'inline-block';
    resultsSummary.style.display = 'none';
    loadQuestion();
  };

  nextBtn.onclick = () => {
    if (!answered) { alert('Please answer before continuing!'); return; }
    curIndex++;
    if (curIndex >= questions.length) { showResults(); }
    else { loadQuestion(); }
  };

  exitBtn.onclick = () => { showResults(true); };

  function loadQuestion() {
    attended = Math.max(attended, curIndex+1);
    feedbackEl.innerHTML = '';
    tryAgainContainer.innerHTML = '';
    nextBtn.style.display = 'none';
    dollImg.style.display = 'none';
    clearAnswersStyle();
    stopFlowerBurst();
    answered = false;
    const q = questions[curIndex];
    questionEl.textContent = q.question;
    answersEl.innerHTML = '';
    q.answers.forEach(ans => {
      const btn = document.createElement('button');
      btn.textContent = ans.text;
      btn.onclick = () => handleAnswer(btn, ans.correct);
      answersEl.appendChild(btn);
    });
  }

  function handleAnswer(btn, isCorrect) {
    if (answered) return;
    answered = true;
    disableAnswers();
    if (isCorrect) {
      correctCount++;
      btn.classList.add('correct-answer');
      addCheckmark(btn);
      feedbackEl.innerHTML = <span id="checkmark">${checkMark}</span>;
      dollImg.style.display = 'block';
      startFlowerBurst();
      nextBtn.style.display = (curIndex===questions.length-1)?'none':'inline-block';
    } else {
      wrongCount++;
      btn.classList.add('wrong-answer');
      feedbackEl.innerHTML = <span style="color:#b71c1c; font-weight: 700; font-size: 3rem;">${sadEmoji}</span>;
      tryAgainContainer.innerHTML = `
        <button id="tryAgainBtn">Try Again</button>
        <button id="nextBtnTry">Next</button>
        <img id="cryEmoji" src="${cryingEmojiSrc}" alt="crying emoji">
      `;
      dollImg.style.display = 'none';
      document.getElementById('tryAgainBtn').onclick = () => {
        feedbackEl.innerHTML = '';
        tryAgainContainer.innerHTML = '';
        clearAnswersStyle();
        enableAnswers();
        wrongCount--;
        answered = false;
      };
      document.getElementById('nextBtnTry').onclick = () => {
        curIndex++;
        if (curIndex >= questions.length) showResults();
        else loadQuestion();
      };
      stopFlowerBurst();
    }
  }

  function addCheckmark(button) {
    answersEl.querySelectorAll('#checkmark').forEach(el=>el.remove());
    const span = document.createElement('span');
    span.id='checkmark';
    span.textContent=checkMark;
    span.style.position='absolute';
    span.style.left='15px';
    span.style.top='50%';
    span.style.transform='translateY(-50%)';
    button.style.position='relative';
    button.appendChild(span);
  }
  function disableAnswers() { Array.from(answersEl.children).forEach(b=>b.disabled=true); }
  function enableAnswers() { Array.from(answersEl.children).forEach(b=>b.disabled=false); }
  function clearAnswersStyle() {
    Array.from(answersEl.children).forEach(b=>{
      b.className='';
      const c=b.querySelector('#checkmark'); if(c) c.remove();
    });
  }

  function startFlowerBurst() {
    if (flowerInterval) return;
    flowerBurst(true);
    flowerInterval = setInterval(()=>flowerBurst(false),150);
  }
  function stopFlowerBurst() {
    clearInterval(flowerInterval);
    flowerInterval=null;
    Array.from(flowerBlast.children).forEach(child=>child.remove());
    flowerBlast.style.display='none';
  }
  function flowerBurst(firstBurst) {
    for (let i=0;i<(firstBurst?15:7);i++) {
      const flower=document.createElement('div');
      flower.classList.add('flowerParticle');
      flower.textContent=flowerEmojis[Math.floor(Math.random()*flowerEmojis.length)];
      flower.style.color=hsl(${Math.random()*360},90%,58%);
      flower.style.left=${Math.random()*window.innerWidth}px;
      flower.style.bottom='0px';
      flower.style.fontSize=${24+Math.random()*25}px;
      flower.style.setProperty('--x',${(Math.random()-0.5)*350}px);
      flower.style.animationDuration=${3500+Math.random()*2500}ms;
      flowerBlast.appendChild(flower);
      flower.addEventListener('animationend',()=>flower.remove());
    }
    flowerBlast.style.display='block';
  }

  function showResults(exit=false) {
    stopFlowerBurst();
    dollImg.style.display='none';
    quizContent.style.display='none';
    feedbackEl.innerHTML='';
    tryAgainContainer.innerHTML='';
    nextBtn.style.display='none';
    exitBtn.style.display='none';
    answersEl.innerHTML='';
    questionEl.textContent= exit? 'Quiz Exited':'Quiz Completed!';
    resultsSummary.style.display='block';
    resultsSummary.innerHTML=`
      <h2>${exit?'You Exited The Quiz':'Quiz Completed!'}</h2>
      <p>Total Attended: <strong>${attended}</strong></p>
      <p>Total Correct: <strong>${correctCount}</strong></p>
      <p>Total Wrong: <strong>${wrongCount}</strong></p>
    `;
  }
</script>
</body>
</html>
