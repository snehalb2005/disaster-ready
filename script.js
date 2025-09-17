// === Lessons data (7 lessons) ===
const LESSONS = [
`<h3>Goal</h3>
<p>Learn what disasters are and why we should know about them.</p>
<h4>1. What is a Disaster?</h4>
<ul>
  <li>A disaster is something sudden and harmful.</li>
  <li>It can hurt people, damage schools or homes, and stop normal life.</li>
</ul>
<h4>2. Kinds of Disasters</h4>
<ul>
  <li><b>Natural</b> → earthquake, flood, cyclone, heatwave.</li>
  <li><b>Man-made</b> → fire, road accident, building collapse.</li>
  <li><b>Health</b> → pandemic (like COVID-19), spread of diseases, unsafe food or water.</li>
</ul>
<h4>3. Why Do We Learn This?</h4>
<ul>
  <li>To stay safe and not panic.</li>
  <li>To know what to do when something happens.</li>
  <li>To help friends and family in need.</li>
</ul>
<h4>4. Real Story</h4>
<p>In Japan, students practice earthquake safety in school. When the 2011 earthquake and tsunami came, they remembered their training and moved to safe places. Many children survived because they had practiced.</p>
<h4>5. Key Message</h4>
<p>If we learn + if we practice → we stay safe.</p>`,

`<h3>Goal</h3>
<p>Learn what to do during and after an earthquake to stay safe.</p>
<h4>1. What is an Earthquake?</h4>
<ul>
  <li>The ground shakes because rocks under the earth move.</li>
  <li>It can happen suddenly, without warning.</li>
  <li>Buildings, walls, and objects may fall.</li>
</ul>
<h4>2. What To Do During an Earthquake? — Drop • Cover • Hold</h4>
<ul>
  <li><b>Drop</b> → Get down on your knees quickly.</li>
  <li><b>Cover</b> → Hide under a strong desk or table. Protect your head and neck with hands.</li>
  <li><b>Hold</b> → Hold the desk/table legs until shaking stops.</li>
  <li>Don’t run, don’t push, don’t use lifts/elevators.</li>
</ul>
<h4>3. If You Are Outside</h4>
<ul>
  <li>Go to an open area (ground, playground).</li>
  <li>Stay away from trees, poles, or buildings.</li>
</ul>
<h4>4. After the Shaking Stops</h4>
<ul>
  <li>Wait for teacher’s instructions.</li>
  <li>Walk calmly to the assembly ground.</li>
  <li>Stay together, don’t panic.</li>
  <li>Help classmates if someone is hurt.</li>
</ul>
<h4>5. Key Message</h4>
<p>Stay Calm → Drop → Cover → Hold → Evacuate Safely</p>`,

`<h3>Goal</h3>
<p>Learn how to stay safe if your school or area faces floods.</p>
<h4>1. What is a Flood?</h4>
<ul>
  <li>Floods happen when there is too much rain or rivers overflow.</li>
  <li>Water covers the land, roads, and sometimes enters homes and schools.</li>
</ul>
<h4>2. What To Do During a Flood?</h4>
<ul>
  <li><b>Go Higher</b> → Move to upstairs floors or higher ground.</li>
  <li><b>Stay Dry</b> → Do not walk or play in flood water.</li>
  <li><b>Stay With Teachers</b> → Always listen to your teacher and move together.</li>
  <li><b>Avoid Electricity</b> → Don’t touch wires, switches, or plugs.</li>
  <li><b>School as Shelter</b> → Sometimes the school building is the safest place.</li>
</ul>
<h4>3. After the Flood</h4>
<ul>
  <li>Do not drink tap water unless teachers say it’s safe.</li>
  <li>Wash hands before eating.</li>
  <li>Be careful of insects, snakes, or sharp objects in water.</li>
  <li>Stay calm and wait for help.</li>
</ul>
<h4>4. Key Message</h4>
<p>Go Up → Stay Dry → Listen to Teachers → Stay Together → Be Safe</p>`,

`<h3>Goal</h3>
<p>Learn what to do if there is a fire in school or at home.</p>
<h4>1. What is a Fire Emergency?</h4>
<ul>
  <li>Fire can start from electric wires, labs, kitchens, or careless use of matches/candles.</li>
  <li>Smoke is dangerous — it makes it hard to breathe.</li>
</ul>
<h4>2. What To Do During Fire?</h4>
<ul>
  <li><b>Shout “Fire!”</b> → Inform teacher or adults quickly.</li>
  <li><b>Don’t Panic, Don’t Run</b> → Move calmly.</li>
  <li><b>Use Nearest Exit</b> → Walk quickly to the school ground.</li>
  <li><b>Crawl Low in Smoke</b> → If there is smoke, bend down and cover your nose/mouth.</li>
  <li><b>Stop, Drop, Roll</b> → If clothes catch fire: Stop moving, Drop to the ground, Roll to put out flames.</li>
</ul>
<h4>3. What NOT To Do</h4>
<ul>
  <li>🚫 Don’t use lifts/elevators.</li>
  <li>🚫 Don’t go back inside for books or things.</li>
  <li>🚫 Don’t push or rush.</li>
</ul>
<h4>4. After the Fire</h4>
<ul>
  <li>Wait with classmates in assembly ground.</li>
  <li>Teacher will take attendance.</li>
  <li>Follow instructions of firefighters.</li>
</ul>
<h4>5. Key Message</h4>
<p>Shout → Exit → Stay Low → Stop, Drop, Roll → Stay Safe</p>`,

`<h3>Goal</h3>
<p>Learn how to protect yourself during very hot weather (heatwave).</p>
<h4>1. What is a Heatwave?</h4>
<ul>
  <li>A heatwave is when the temperature is extremely high for many days.</li>
  <li>It can cause dehydration, heat exhaustion, or heatstroke.</li>
</ul>
<h4>2. How to Stay Safe?</h4>
<ul>
  <li><b>Drink Water Often</b> → Keep sipping water, even if not thirsty.</li>
  <li><b>Wear Light Clothes</b> → Cotton clothes, light colors.</li>
  <li><b>Stay Indoors</b> → Avoid playing outside in strong sun (12–4 PM).</li>
  <li><b>Use Shade</b> → Sit under trees, use caps or umbrellas.</li>
  <li><b>Eat Light Food</b> → Fresh fruits, juices, avoid junk food.</li>
</ul>
<h4>3. Warning Signs of Heatstroke</h4>
<ul>
  <li>Dizziness or fainting.</li>
  <li>Headache and tiredness.</li>
  <li>Very hot, dry skin.</li>
</ul>
<h4>4. Key Message</h4>
<p>Drink Water → Stay Cool → Avoid Sun → Help Friends</p>`,

`<h3>Goal</h3>
<p>Learn how to stay safe during a disease outbreak like COVID-19, flu, dengue.</p>
<h4>1. What is a Pandemic?</h4>
<ul>
  <li>A pandemic is when a disease spreads to many people, across cities or countries.</li>
  <li>Example: COVID-19 pandemic in 2020.</li>
</ul>
<h4>2. How to Stay Safe?</h4>
<ul>
  <li><b>Wash Hands</b> → Use soap or sanitizer often.</li>
  <li><b>Wear Mask</b> (if told) → Cover nose and mouth properly.</li>
  <li><b>Keep Distance</b> → Don’t crowd or push in groups.</li>
  <li><b>Stay Home if Sick</b> → Inform teacher/parents if you feel unwell.</li>
  <li><b>Clean Surroundings</b> → Don’t allow water to collect (mosquitoes spread dengue).</li>
</ul>
<h4>3. During School Time</h4>
<ul>
  <li>Follow school safety rules.</li>
  <li>Sit with space between friends if required.</li>
  <li>Don’t share bottles, food, or handkerchiefs.</li>
</ul>
<h4>4. Key Message</h4>
<p>Wash → Mask → Distance → Stay Clean → Stay Healthy</p>`,

`<h3>Goal</h3>
<p>Learn how to stay safe while working in science labs.</p>
<h4>1. Why Lab Safety Matters</h4>
<ul>
  <li>Labs have chemicals, burners, and glass items.</li>
  <li>Carelessness can cause burns, cuts, or fire accidents.</li>
</ul>
<h4>2. Safety Rules in the Lab</h4>
<ul>
  <li>Wear Safety Gear → Use lab coat, gloves, and goggles.</li>
  <li>Handle Chemicals Carefully → Don’t taste, smell, or touch with bare hands.</li>
  <li>Use Burners Safely → Light burners only with teacher’s permission.</li>
  <li>No Running / Playing → Labs are not playgrounds.</li>
  <li>Label Bottles → Always check the name before using a chemical.</li>
</ul>
<h4>3. If an Accident Happens</h4>
<ul>
  <li>If chemical spills on skin → Wash with plenty of water, inform teacher.</li>
  <li>If clothes catch fire → Stop, Drop, Roll.</li>
  <li>If glass breaks → Don’t touch with hands, call teacher.</li>
  <li>Report any accident immediately to teacher.</li>
</ul>
<h4>4. After Lab Work</h4>
<ul>
  <li>Clean your table and wash hands properly.</li>
  <li>Put chemicals back in their correct place.</li>
</ul>
<h4>5. Key Message</h4>
<p>Be Careful → Follow Rules → Ask Teacher → Stay Safe</p>`
];

// --- Utility & UI functions used by pages below ---

// loginStudent - called from student-login.html form
function loginStudent(e){
  e.preventDefault && e.preventDefault();
  const emailEl = document.getElementById('email');
  if(!emailEl) return;
  const email = emailEl.value.trim();
  if(!email) { alert('Please enter a valid email.'); return; }
  // Save email for next time
  localStorage.setItem('studentEmail', email);
  // Simple redirect to dashboard (no auth)
  window.location.href = 'student-dashboard.html';
}

// showCategory - used by student-dashboard.html to switch content area
function showCategory(key){
  const area = document.getElementById('content-area');
  if(!area) return;

  if(key === 'lessons'){
    // build lessons list
    let html = `<h2>Gamified Lessons</h2><div class="lessons-list">`;
    for(let i=0;i<LESSONS.length;i++){
      const title = getLessonTitle(i);
      html += `<div class="lesson-card">
        <h4>${title}</h4>
        <p>Tap to open lesson and read — short, practical & interactive.</p>
        <div style="margin-top:12px;"><a class="btn btn-ghost" href="lesson.html?id=${i}">Open Lesson</a></div>
      </div>`;
    }
    html += `</div>`;
    area.innerHTML = html;
  } else if(key === 'quizzes'){
    area.innerHTML = `<h2>Quizzes</h2>
      <p class="muted">Short quizzes to test knowledge and earn points.</p>
      <div class="lessons-list">
        <div class="lesson-card"><h4>Basic Disaster Quiz</h4><p>10 questions — 5 min</p><div style="margin-top:12px;"><button class="btn btn-primary" onclick="alert('Quiz starter placeholder')">Start Quiz</button></div></div>
        <div class="lesson-card"><h4>Earthquake Quick Test</h4><p>5 questions — 2 min</p><div style="margin-top:12px;"><button class="btn btn-primary" onclick="alert('Quiz starter placeholder')">Start Quiz</button></div></div>
      </div>`;
  } else if(key === 'badges'){
    const earned = JSON.parse(localStorage.getItem('badges') || '[]');
    area.innerHTML = `<h2>Badges</h2><p class="muted">Your earned badges appear here.</p><div class="lessons-list">` +
      (earned.length ? earned.map(b=>`<div class="lesson-card"><h4>🏅 ${b}</h4><p>Earned badge</p></div>`).join('') : `<div class="lesson-card"><h4>No badges yet</h4><p>Complete lessons & quizzes to earn badges.</p></div>`) +
      `</div>`;
  } else if(key === 'drills'){
    area.innerHTML = `<h2>Drill Simulations</h2><p class="muted">Practice drills safely in a simulated environment.</p>
      <div class="lessons-list">
        <div class="lesson-card"><h4>Evacuation Drill Simulation</h4><p>Simulate moving to assembly area quickly and safely.</p><div style="margin-top:12px;"><button class="btn btn-primary" onclick="alert('Simulation placeholder')">Run Simulation</button></div></div>
        <div class="lesson-card"><h4>Fire Response Drill</h4><p>Practice Stop, Drop & Roll / safe exit procedures.</p><div style="margin-top:12px;"><button class="btn btn-primary" onclick="alert('Simulation placeholder')">Run Simulation</button></div></div>
      </div>`;
  } else {
    area.innerHTML = `<p>Unknown section</p>`;
  }
}

// getLessonTitle - format title from LESSONS data (we'll just map numbers)
function getLessonTitle(i){
  const titles = [
    "Lesson 1: What is a Disaster?",
    "Lesson 2: Earthquake Safety",
    "Lesson 3: Flood Safety",
    "Lesson 4: Fire Safety",
    "Lesson 5: Heatwave Safety",
    "Lesson 6: Pandemic Safety",
    "Lesson 7: Lab & Chemical Safety"
  ];
  return titles[i] || `Lesson ${i+1}`;
}

// loadLessonById - called by lesson.html to inject content
function loadLessonById(id){
  const titleEl = document.getElementById('lesson-title');
  const bodyEl = document.getElementById('lesson-body');
  if(typeof id !== 'number' || id<0 || id>=LESSONS.length){
    titleEl && (titleEl.textContent = 'Lesson not found');
    bodyEl && (bodyEl.innerHTML = '<p>Lesson not available.</p>');
    return;
  }
  titleEl && (titleEl.textContent = getLessonTitle(id));
  bodyEl && (bodyEl.innerHTML = LESSONS[id]);
}
