const ASSET = "assets/extracted/";

function choice(id, prompt, options, answer, explanation, image = "") {
  return { id, type: "choice", prompt, options, answers: [answer], explanation, image };
}
function input(id, prompt, answers, explanation, image = "") {
  return { id, type: "input", prompt, answers, explanation, image };
}

const sections = [
  { letter: "A", title: "Listen and color. Then write the colors.", note: "Nghe audio, quan sát căn phòng rồi viết tên màu được nhắc đến cho từng đồ vật.", points: 5, audio: "assets/audio/Listening-A.mp3", sectionImage: ASSET + "page1-img2-1167x468.png", questions: [
    input("A1", "1. The bed is ___.", ["red"], "Chiếc giường được tô màu red - màu đỏ."),
    input("A2", "2. The hamster is ___.", ["brown"], "Chú hamster được tô màu brown - màu nâu."),
    input("A3", "3. The flower is ___.", ["yellow"], "Bông hoa được tô màu yellow - màu vàng."),
    input("A4", "4. The butterfly is ___.", ["orange"], "Con bướm được tô màu orange - màu cam."),
    input("A5", "5. The spider is ___.", ["black"], "Con nhện được tô màu black - màu đen.") ] },
  { letter: "B", title: "Read and color.", note: "Đọc yêu cầu và chọn đúng màu cho từng hình.", points: 4, questions: [
    choice("B1", "1. The elephant is ...", ["gray", "brown", "blue", "yellow"], "gray", "Elephant là con voi. Đề yêu cầu tô con voi màu gray - màu xám.", ASSET + "page1-img4-283x185.png"),
    choice("B2", "2. The sun is ...", ["orange", "yellow", "black", "blue"], "yellow", "Sun là mặt trời. Đề yêu cầu tô mặt trời màu yellow - màu vàng."),
    choice("B3", "3. The cat is ...", ["gray", "black", "brown", "orange"], "black", "Cat là con mèo. Đề yêu cầu tô con mèo màu black - màu đen.", ASSET + "page1-img5-316x185.png"),
    choice("B4", "4. The bird is ...", ["yellow", "orange", "blue", "gray"], "blue", "Bird là con chim. Đề yêu cầu tô con chim màu blue - màu xanh dương.", ASSET + "page1-img6-286x181.png") ] },
  { letter: "C", title: "Complete the sentences.", note: "Dùng các từ trong Word Bank. Có một từ không cần dùng.", points: 5, wordBank: ["ball", "fireworks", "home", "playground", "teacher", "hamster"], questions: [
    input("C1", "1. Our ___ is in the classroom.", ["teacher"], "Teacher là giáo viên; giáo viên ở trong lớp học."),
    input("C2", "2. We play in the ___.", ["playground"], "Playground là sân chơi; đây là nơi chúng ta vui chơi."),
    input("C3", "3. I play with a ___.", ["ball"], "Ball là quả bóng; ta có cụm play with a ball."),
    input("C4", "4. I go ___ after school.", ["home"], "Go home nghĩa là về nhà. Sau go home không dùng to."),
    input("C5", "5. We watch ___ in the sky.", ["fireworks"], "Fireworks là pháo hoa; ta xem pháo hoa trên bầu trời.") ] },
  { letter: "D", title: "Circle the correct sentences.", note: "Chọn câu đúng với số lượng và dạng số ít/số nhiều.", points: 4, questions: [
    choice("D1", "1.", ["There is a hamster.", "There are a hamster."], "There is a hamster.", "A hamster là một chú hamster nên dùng There is."),
    choice("D2", "2.", ["There is two old tortoises.", "There are two old tortoises."], "There are two old tortoises.", "Two tortoises là số nhiều nên dùng There are."),
    choice("D3", "3.", ["There is a small kitten.", "There are a small kitten."], "There is a small kitten.", "A kitten là một chú mèo con nên dùng There is."),
    choice("D4", "4.", ["There are black spiders.", "There is black spiders."], "There are black spiders.", "Spiders có -s và là số nhiều nên dùng There are.") ] },
  { letter: "E", title: "Write the words in the correct order.", note: "Sắp xếp đủ các từ để tạo thành câu hoàn chỉnh.", points: 3, questions: [
    input("E1", "1. are / lions / two / There", ["there are two lions"], "There are + số lượng + danh từ số nhiều: There are two lions."),
    input("E2", "2. five / There / toys / are", ["there are five toys"], "Five toys là số nhiều nên câu đúng là There are five toys."),
    input("E3", "3. big / fireworks / There / orange / are", ["there are big orange fireworks"], "Tính từ đứng trước danh từ: big orange fireworks.") ] },
  { letter: "F", title: "Look and write sentences.", note: "Quan sát đúng các số 1-4 đã in trong hình rồi viết câu với There is/There are.", points: 4, sectionImage: ASSET + "page2-img1-1236x480.png", questions: [
    input("F1", "1. frogs", ["there are two frogs"], "Vị trí số 1 có two frogs - hai con ếch, nên dùng There are."),
    input("F2", "2. dog", ["there is a dog", "there is one dog"], "Vị trí số 2 có một con chó. Có thể viết There is a dog hoặc There is one dog."),
    input("F3", "3. birds", ["there are three birds"], "Vị trí số 3 có three birds - ba con chim, nên dùng There are."),
    input("F4", "4. spider", ["there is a spider", "there is one spider"], "Vị trí số 4 có một con nhện. Có thể viết There is a spider hoặc There is one spider.") ] },
  { letter: "G", title: "Look and circle the correct words.", note: "Quan sát hình và chọn từ gọi đúng đồ vật.", points: 3, questions: [
    choice("G1", "1. Choose the correct word.", ["pants", "shorts"], "pants", "Hình cho thấy pants - quần dài.", ASSET + "page3-img1-525x375.png"),
    choice("G2", "2. Choose the correct word.", ["jacket", "jellyfish"], "jacket", "Hình cho thấy jacket - áo khoác.", ASSET + "page3-img2-525x375.png"),
    choice("G3", "3. Choose the correct word.", ["seashells", "sneakers"], "sneakers", "Hình cho thấy sneakers - giày thể thao.", ASSET + "page3-img6-525x375.png") ] },
  { letter: "H", title: "Complete the sentences.", note: "Dùng các từ trong Word Bank. Có một từ không cần dùng.", points: 4, wordBank: ["mix", "mural", "ocean", "sand", "starfish"], questions: [
    input("H1", "1. We play on the ___.", ["sand"], "Sand là cát; ta chơi trên cát ở bãi biển."),
    input("H2", "2. We ___ the colors.", ["mix"], "Mix nghĩa là trộn; mix the colors là trộn các màu."),
    input("H3", "3. Fish live in the ___.", ["ocean"], "Ocean là đại dương; cá sống trong đại dương."),
    input("H4", "4. A ___ has five arms.", ["starfish"], "Starfish là sao biển; sao biển thường có năm cánh.") ] },
  { letter: "I", title: "Unscramble the words.", note: "Sắp xếp các chữ cái để viết đúng từ chỉ sinh vật hoặc vật ở biển.", points: 4, questions: [
    input("I1", "1. fyljleish", ["jellyfish"], "Từ đúng là jellyfish - con sứa.", ASSET + "page3-img3-600x300.png"),
    input("I2", "2. deawsee", ["seaweed"], "Từ đúng là seaweed - rong biển.", ASSET + "page3-img4-600x300.png"),
    input("I3", "3. slhlesea", ["seashell"], "Từ đúng là seashell - vỏ sò.", ASSET + "page3-img5-601x301.png"),
    input("I4", "4. sifhrsat", ["starfish"], "Từ đúng là starfish - sao biển.", ASSET + "page3-img7-600x300.png") ] },
  { letter: "J", title: "Listen and complete the sentences.", note: "Nghe audio và điền giới từ chỉ vị trí còn thiếu.", points: 6, audio: "assets/audio/Listening-J.mp3", questions: [
    input("J1", "1. The picture is ___ the wall.", ["on"], "On nghĩa là ở trên và tiếp xúc với bề mặt: on the wall."),
    input("J2", "2. The pencils are ___ the pencil case.", ["in"], "In nghĩa là ở bên trong: in the pencil case."),
    input("J3", "3. The chair is ___ the desk.", ["next to", "beside"], "Next to nghĩa là ngay bên cạnh: next to the desk."),
    input("J4", "4. The shoes are ___ the bed.", ["under"], "Under nghĩa là ở phía dưới: under the bed."),
    input("J5", "5. The books are ___ the bag.", ["in"], "In nghĩa là ở bên trong: in the bag."),
    input("J6", "6. The toy is ___ the table.", ["on"], "On nghĩa là ở trên mặt bàn: on the table.") ] },
  { letter: "K", title: "Write the words in the correct order. Then match.", note: "Mỗi câu gồm hai ý: sắp xếp thành câu hoàn chỉnh, sau đó chọn đúng hình a-d.", points: 8, imageGallery: [
    { label: "a", src: ASSET + "page4-img1-386x225.png" }, { label: "b", src: ASSET + "page4-img3-387x225.png" },
    { label: "c", src: ASSET + "page4-img2-386x228.png" }, { label: "d", src: ASSET + "page4-img4-387x228.png" } ], questions: [
    input("K1", "1. next to / The T-shirt / the jacket / isn't", ["the t-shirt isn't next to the jacket", "the t shirt isn't next to the jacket", "the t-shirt is not next to the jacket", "the t shirt is not next to the jacket"], "The T-shirt isn't next to the jacket. Isn't là dạng viết tắt của is not."),
    choice("K2", "1. Match the sentence to a picture.", ["a", "b", "c", "d"], "c", "Hình c cho thấy áo phông không ở cạnh áo khoác."),
    input("K3", "2. under / The hat / the jacket / is", ["the hat is under the jacket"], "The hat is under the jacket. Under nghĩa là ở phía dưới."),
    choice("K4", "2. Match the sentence to a picture.", ["a", "b", "c", "d"], "a", "Hình a cho thấy chiếc mũ ở dưới áo khoác."),
    input("K5", "3. in / Starfish and jellyfish / the mural / are", ["starfish and jellyfish are in the mural"], "Chủ ngữ gồm hai loài nên dùng are."),
    choice("K6", "3. Match the sentence to a picture.", ["a", "b", "c", "d"], "b", "Hình b là bức tranh tường có sao biển và sứa."),
    input("K7", "4. on / The seashells / the sand / aren't", ["the seashells aren't on the sand", "the seashells are not on the sand"], "The seashells aren't on the sand. Aren't là dạng viết tắt của are not."),
    choice("K8", "4. Match the sentence to a picture.", ["a", "b", "c", "d"], "d", "Hình d cho thấy vỏ sò ở trong xô, không ở trên cát.") ] }
];

const form = document.querySelector("#testForm");
const sectionsRoot = document.querySelector("#sections");
const sectionJump = document.querySelector("#sectionJump");
const progressText = document.querySelector("#progressText");
const progressBar = document.querySelector("#progressBar");
const results = document.querySelector("#results");
const answerReview = document.querySelector("#answerReview");
const scoreValue = document.querySelector("#scoreValue");
const scoreMessage = document.querySelector("#scoreMessage");
const STORAGE_KEY = "discover1-written-test2-v1";

renderSections(); restoreProgress(); updateProgress();

form.addEventListener("click", event => {
  const button = event.target.closest("[data-choice]"); if (!button) return;
  const question = button.closest(".question");
  question.querySelectorAll("[data-choice]").forEach(item => { item.classList.toggle("is-selected", item === button); item.setAttribute("aria-pressed", item === button ? "true" : "false"); });
  question.dataset.value = button.dataset.value; question.classList.remove("is-missing"); saveProgress(); updateProgress();
});
form.addEventListener("input", event => { if (!event.target.matches("input")) return; event.target.closest(".question")?.classList.remove("is-missing"); saveProgress(); updateProgress(); });
form.addEventListener("submit", event => {
  event.preventDefault(); document.querySelectorAll(".question.is-missing").forEach(el => el.classList.remove("is-missing"));
  const missing = getMissingFields();
  if (missing.length) { missing.forEach(field => field.closest(".question").classList.add("is-missing")); document.querySelector("#submitHelp").textContent = `Bài còn thiếu ${missing.length} ý. Em hoàn thành phần được đánh dấu trước khi xem đáp án.`; missing[0].closest(".question").scrollIntoView({ behavior: "smooth", block: "center" }); missing[0].focus?.({ preventScroll: true }); return; }
  gradeTest();
});
document.querySelector("#restartTest").addEventListener("click", () => { if (!window.confirm("Em muốn xoá toàn bộ câu trả lời và làm lại từ đầu?")) return; localStorage.removeItem(STORAGE_KEY); window.location.reload(); });
document.querySelector("#reviewMistakes").addEventListener("click", () => { (document.querySelector(".review-card.is-wrong") || answerReview).scrollIntoView({ behavior: "smooth", block: "start" }); });

function renderSections() {
  sections.forEach(section => {
    const jump = document.createElement("button"); jump.type = "button"; jump.textContent = section.letter; jump.title = `Phần ${section.letter}`; jump.dataset.jump = section.letter; jump.addEventListener("click", () => document.querySelector(`#section-${section.letter}`).scrollIntoView({ behavior: "smooth" })); sectionJump.appendChild(jump);
    const el = document.createElement("section"); el.className = "test-section"; el.id = `section-${section.letter}`;
    el.innerHTML = `<header class="section-heading"><span class="section-letter">${section.letter}</span><div><h2>${section.title}</h2><p>${section.note}</p></div><span class="section-points">/${section.points}</span></header>${section.audio ? `<div class="audio-panel"><p>Audio phần ${section.letter}</p><audio controls preload="metadata" src="${section.audio}"></audio></div>` : ""}${renderWordBank(section)}${renderImageGallery(section)}${renderSectionImage(section)}<div class="question-list">${section.questions.map((q, i) => renderQuestion(section, q, i)).join("")}</div>`; sectionsRoot.appendChild(el);
  });
}
function renderQuestion(section, question, index) {
  const label = `${section.letter}${index + 1}`;
  const control = question.type === "choice" ? `<div class="choice-grid">${question.options.map((option, i) => `<button type="button" class="choice" data-choice data-value="${escapeAttr(option)}" aria-pressed="false"><span class="choice-key">${String.fromCharCode(65 + i)}</span><span>${option}</span></button>`).join("")}</div>` : `<input class="answer-input" data-input="${question.id}" autocomplete="off" spellcheck="false" placeholder="Nhập câu trả lời">`;
  return `<article class="question" data-id="${question.id}" data-section="${section.letter}"><span class="question-number">${label}</span><div class="question-copy">${question.image ? `<img class="question-image" src="${question.image}" alt="Hình minh hoạ câu ${label}">` : ""}<p class="question-prompt">${question.prompt}</p>${control}</div></article>`;
}
function renderWordBank(section) { return section.wordBank ? `<div class="word-bank" aria-label="Word Bank"><span class="word-bank-title">WORD BANK</span><div class="word-bank-items">${section.wordBank.map(word => `<span>${word}</span>`).join("")}</div></div>` : ""; }
function renderImageGallery(section) { return section.imageGallery ? `<div class="source-gallery picture-grid">${section.imageGallery.map(item => `<figure><img src="${item.src}" alt="Hình ${item.label}"><figcaption>${item.label}</figcaption></figure>`).join("")}</div>` : ""; }
function renderSectionImage(section) { return section.sectionImage ? `<img class="source-image" src="${section.sectionImage}" alt="Hình minh hoạ phần ${section.letter}">` : ""; }
function normalize(value) { return String(value || "").toLowerCase().replace(/[’‘`]/g, "'").replace(/[?.!,]/g, "").replace(/-/g, " ").replace(/\s+/g, " ").trim(); }
function matches(value, accepted) { const v = normalize(value).replace(/does not/g, "doesn't").replace(/is not/g, "isn't").replace(/are not/g, "aren't"); return accepted.some(a => normalize(a).replace(/does not/g, "doesn't").replace(/is not/g, "isn't").replace(/are not/g, "aren't") === v); }
function getMissingFields() { const missing = []; sections.forEach(section => section.questions.forEach(q => { const el = document.querySelector(`[data-id="${q.id}"]`); if (q.type === "choice") { if (!el.dataset.value) missing.push(el.querySelector(".choice")); } else { const field = el.querySelector("input"); if (!field.value.trim()) missing.push(field); } })); return missing; }
function gradeTest() {
  let score = 0; const reviews = [];
  sections.forEach(section => section.questions.forEach((q, i) => { const el = document.querySelector(`[data-id="${q.id}"]`); const value = q.type === "choice" ? el.dataset.value || "" : el.querySelector("input").value; const correct = matches(value, q.answers); if (correct) score++; reviews.push({ question: q, label: `${section.letter}${i + 1}`, value, correct }); }));
  scoreValue.textContent = score; scoreMessage.textContent = score === 50 ? "Em đã làm đúng toàn bộ bài." : `Em cần chữa ${50 - score} ý. Hãy đọc kỹ giải thích và đối chiếu lại câu gốc.`; answerReview.innerHTML = reviews.map(renderReview).join(""); results.hidden = false; form.hidden = true; document.querySelector("#stickyProgress").hidden = true; results.scrollIntoView({ behavior: "smooth", block: "start" });
}
function renderReview(r) { return `<article class="review-card ${r.correct ? "" : "is-wrong"}"><div class="review-head"><h3>Câu ${r.label}</h3><span class="review-status">${r.correct ? "1/1" : "0/1"} điểm</span></div><p class="review-question">${r.question.prompt}</p><div class="review-answer"><span>Em trả lời: <b>${escapeHtml(r.value || "(trống)")}</b></span><span>Đáp án: <b>${escapeHtml(r.question.answers[0])}</b></span></div><p class="explanation"><b>Giải thích:</b> ${r.question.explanation}</p></article>`; }
function updateProgress() { let completed = 0; sections.forEach(section => { let count = 0; section.questions.forEach(q => { const el = document.querySelector(`[data-id="${q.id}"]`); const done = q.type === "choice" ? Boolean(el.dataset.value) : Boolean(el.querySelector("input").value.trim()); if (done) { completed++; count++; } }); const jump = document.querySelector(`[data-jump="${section.letter}"]`); jump.classList.toggle("has-progress", count > 0); jump.classList.toggle("is-complete", count === section.points); }); progressText.textContent = `${completed} / 50`; progressBar.style.width = `${completed * 2}%`; }
function saveProgress() { const data = {}; sections.forEach(section => section.questions.forEach(q => { const el = document.querySelector(`[data-id="${q.id}"]`); data[q.id] = q.type === "choice" ? el.dataset.value || "" : el.querySelector("input").value; })); localStorage.setItem(STORAGE_KEY, JSON.stringify(data)); }
function restoreProgress() { let data; try { data = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}"); } catch { data = {}; } sections.forEach(section => section.questions.forEach(q => { const value = data[q.id]; if (!value) return; const el = document.querySelector(`[data-id="${q.id}"]`); if (q.type === "choice") { el.dataset.value = value; el.querySelectorAll("[data-choice]").forEach(button => { const selected = button.dataset.value === value; button.classList.toggle("is-selected", selected); button.setAttribute("aria-pressed", selected ? "true" : "false"); }); } else el.querySelector("input").value = value; })); }
function escapeHtml(value) { return String(value).replace(/[&<>"']/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" }[char])); }
function escapeAttr(value) { return escapeHtml(value); }
