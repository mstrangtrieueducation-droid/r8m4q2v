const ASSET = "assets/extracted/";

function choice(id, prompt, options, answer, explanation, image = "") {
  return { id, type: "choice", prompt, options, answers: [answer], explanation, image };
}
function input(id, prompt, answers, explanation, image = "") {
  return { id, type: "input", prompt, answers, explanation, image };
}

const sections = [
  {
    "letter": "A",
    "title": "Listen and color. Then write the colors.",
    "note": "Nghe audio, quan sát căn phòng rồi viết tên màu được nhắc đến cho từng đồ vật.",
    "points": 5,
    "audio": "assets/audio/Listening-A.mp3",
    "sectionImage": "assets/extracted/page1-img2-1167x468.png",
    "questions": [
      {
        "id": "A1",
        "type": "input",
        "prompt": "1. The bed is ___.",
        "answers": [
          "red"
        ],
        "explanation": "Chiếc giường được tô màu red - màu đỏ.",
        "image": ""
      },
      {
        "id": "A2",
        "type": "input",
        "prompt": "2. The hamster is ___.",
        "answers": [
          "brown"
        ],
        "explanation": "Chú hamster được tô màu brown - màu nâu.",
        "image": ""
      },
      {
        "id": "A3",
        "type": "input",
        "prompt": "3. The flower is ___.",
        "answers": [
          "yellow"
        ],
        "explanation": "Bông hoa được tô màu yellow - màu vàng.",
        "image": ""
      },
      {
        "id": "A4",
        "type": "input",
        "prompt": "4. The butterfly is ___.",
        "answers": [
          "orange"
        ],
        "explanation": "Con bướm được tô màu orange - màu cam.",
        "image": ""
      },
      {
        "id": "A5",
        "type": "input",
        "prompt": "5. The spider is ___.",
        "answers": [
          "black"
        ],
        "explanation": "Con nhện được tô màu black - màu đen.",
        "image": ""
      }
    ]
  },
  {
    "letter": "B",
    "title": "Read and color.",
    "note": "Đọc yêu cầu và chọn đúng màu cho từng hình.",
    "points": 4,
    "questions": [
      {
        "id": "B1",
        "type": "choice",
        "prompt": "1. The elephant is ...",
        "options": [
          "gray",
          "brown",
          "blue",
          "yellow"
        ],
        "answers": [
          "gray"
        ],
        "explanation": "Elephant là con voi. Đề yêu cầu tô con voi màu gray - màu xám.",
        "image": "assets/extracted/page1-img4-283x185.png"
      },
      {
        "id": "B2",
        "type": "choice",
        "prompt": "2. The sun is ...",
        "options": [
          "orange",
          "yellow",
          "black",
          "blue"
        ],
        "answers": [
          "yellow"
        ],
        "explanation": "Sun là mặt trời. Đề yêu cầu tô mặt trời màu yellow - màu vàng.",
        "image": ""
      },
      {
        "id": "B3",
        "type": "choice",
        "prompt": "3. The cat is ...",
        "options": [
          "gray",
          "black",
          "brown",
          "orange"
        ],
        "answers": [
          "black"
        ],
        "explanation": "Cat là con mèo. Đề yêu cầu tô con mèo màu black - màu đen.",
        "image": "assets/extracted/page1-img5-316x185.png"
      },
      {
        "id": "B4",
        "type": "choice",
        "prompt": "4. The bird is ...",
        "options": [
          "yellow",
          "orange",
          "blue",
          "gray"
        ],
        "answers": [
          "blue"
        ],
        "explanation": "Bird là con chim. Đề yêu cầu tô con chim màu blue - màu xanh dương.",
        "image": "assets/extracted/page1-img6-286x181.png"
      }
    ]
  },
  {
    "letter": "C",
    "title": "Complete the sentences.",
    "note": "Dùng các từ trong Word Bank. Có một từ không cần dùng.",
    "points": 5,
    "wordBank": [
      "ball",
      "fireworks",
      "home",
      "playground",
      "teacher",
      "hamster"
    ],
    "questions": [
      {
        "id": "C1",
        "type": "input",
        "prompt": "1. That person is my ___.",
        "answers": [
          "teacher"
        ],
        "explanation": "Teacher nghĩa là thầy giáo hoặc cô giáo. Cụm my teacher chỉ người dạy em.",
        "image": ""
      },
      {
        "id": "C2",
        "type": "input",
        "prompt": "2. That place is my old school ___.",
        "answers": [
          "playground"
        ],
        "explanation": "School playground là sân chơi của trường học, nên từ cần điền là playground.",
        "image": ""
      },
      {
        "id": "C3",
        "type": "input",
        "prompt": "3. This old thing is my kitten's ___.",
        "answers": [
          "ball"
        ],
        "explanation": "Kitten là mèo con. Đồ vật cũ của chú mèo là a ball - một quả bóng.",
        "image": ""
      },
      {
        "id": "C4",
        "type": "input",
        "prompt": "4. My favorite place is at ___ with my family.",
        "answers": [
          "home"
        ],
        "explanation": "At home nghĩa là ở nhà. Cụm đầy đủ là at home with my family.",
        "image": ""
      },
      {
        "id": "C5",
        "type": "input",
        "prompt": "5. The ___ are yellow and blue.",
        "answers": [
          "fireworks"
        ],
        "explanation": "Động từ are cho biết chỗ trống cần danh từ số nhiều. Fireworks là những chùm pháo hoa màu vàng và xanh.",
        "image": ""
      }
    ]
  },
  {
    "letter": "D",
    "title": "Circle the correct sentences.",
    "note": "Chọn câu đúng với số lượng và dạng số ít/số nhiều.",
    "points": 4,
    "questions": [
      {
        "id": "D1",
        "type": "choice",
        "prompt": "1.",
        "options": [
          "There is a hamster.",
          "There are a hamster."
        ],
        "answers": [
          "There is a hamster."
        ],
        "explanation": "A hamster là một chú hamster nên dùng There is.",
        "image": ""
      },
      {
        "id": "D2",
        "type": "choice",
        "prompt": "2.",
        "options": [
          "There is two old tortoises.",
          "There are two old tortoises."
        ],
        "answers": [
          "There are two old tortoises."
        ],
        "explanation": "Two tortoises là số nhiều nên dùng There are.",
        "image": ""
      },
      {
        "id": "D3",
        "type": "choice",
        "prompt": "3.",
        "options": [
          "There is a small kitten.",
          "There are a small kitten."
        ],
        "answers": [
          "There is a small kitten."
        ],
        "explanation": "A kitten là một chú mèo con nên dùng There is.",
        "image": ""
      },
      {
        "id": "D4",
        "type": "choice",
        "prompt": "4.",
        "options": [
          "There are black spiders.",
          "There is black spiders."
        ],
        "answers": [
          "There are black spiders."
        ],
        "explanation": "Spiders có -s và là số nhiều nên dùng There are.",
        "image": ""
      }
    ]
  },
  {
    "letter": "E",
    "title": "Write the words in the correct order.",
    "note": "Sắp xếp đủ các từ để tạo thành câu hoàn chỉnh.",
    "points": 3,
    "questions": [
      {
        "id": "E1",
        "type": "input",
        "prompt": "1. are / lions / two / There",
        "answers": [
          "there are two lions"
        ],
        "explanation": "There are + số lượng + danh từ số nhiều: There are two lions.",
        "image": ""
      },
      {
        "id": "E2",
        "type": "input",
        "prompt": "2. five / There / toys / are",
        "answers": [
          "there are five toys"
        ],
        "explanation": "Five toys là số nhiều nên câu đúng là There are five toys.",
        "image": ""
      },
      {
        "id": "E3",
        "type": "input",
        "prompt": "3. big / fireworks / There / orange / are",
        "answers": [
          "there are big orange fireworks"
        ],
        "explanation": "Tính từ đứng trước danh từ: big orange fireworks.",
        "image": ""
      }
    ]
  },
  {
    "letter": "F",
    "title": "Look and write sentences.",
    "note": "Quan sát đúng các số 1-4 đã in trong hình rồi viết câu với There is/There are.",
    "points": 4,
    "sectionImage": "assets/extracted/page2-img1-1236x480.png",
    "questions": [
      {
        "id": "F1",
        "type": "input",
        "prompt": "1. frogs",
        "answers": [
          "there are two frogs"
        ],
        "explanation": "Vị trí số 1 có two frogs - hai con ếch, nên dùng There are.",
        "image": ""
      },
      {
        "id": "F2",
        "type": "input",
        "prompt": "2. dog",
        "answers": [
          "there is a dog",
          "there is one dog"
        ],
        "explanation": "Vị trí số 2 có một con chó. Có thể viết There is a dog hoặc There is one dog.",
        "image": ""
      },
      {
        "id": "F3",
        "type": "input",
        "prompt": "3. birds",
        "answers": [
          "there are three birds"
        ],
        "explanation": "Vị trí số 3 có three birds - ba con chim, nên dùng There are.",
        "image": ""
      },
      {
        "id": "F4",
        "type": "input",
        "prompt": "4. spider",
        "answers": [
          "there is a spider",
          "there is one spider"
        ],
        "explanation": "Vị trí số 4 có một con nhện. Có thể viết There is a spider hoặc There is one spider.",
        "image": ""
      }
    ]
  },
  {
    "letter": "G",
    "title": "Look and circle the correct words.",
    "note": "Quan sát hình và chọn từ gọi đúng đồ vật.",
    "points": 3,
    "questions": [
      {
        "id": "G1",
        "type": "choice",
        "prompt": "1. Choose the correct word.",
        "options": [
          "pants",
          "shorts"
        ],
        "answers": [
          "pants"
        ],
        "explanation": "Hình cho thấy pants - quần dài.",
        "image": "assets/extracted/page3-img1-525x375.png"
      },
      {
        "id": "G2",
        "type": "choice",
        "prompt": "2. Choose the correct word.",
        "options": [
          "jellyfish",
          "jacket"
        ],
        "answers": [
          "jacket"
        ],
        "explanation": "Hình cho thấy jacket - áo khoác.",
        "image": "assets/extracted/page3-img2-525x375.png"
      },
      {
        "id": "G3",
        "type": "choice",
        "prompt": "3. Choose the correct word.",
        "options": [
          "sneakers",
          "seashells"
        ],
        "answers": [
          "sneakers"
        ],
        "explanation": "Hình cho thấy sneakers - giày thể thao.",
        "image": "assets/extracted/page3-img6-525x375.png"
      }
    ]
  },
  {
    "letter": "H",
    "title": "Complete the sentences.",
    "note": "Dùng các từ trong Word Bank. Có một từ không cần dùng.",
    "points": 4,
    "wordBank": [
      "mix",
      "mural",
      "ocean",
      "sand",
      "starfish"
    ],
    "questions": [
      {
        "id": "H1",
        "type": "input",
        "prompt": "1. There is ___ in my sneakers!",
        "answers": [
          "sand"
        ],
        "explanation": "Sand nghĩa là cát. Câu cho biết có cát ở trong đôi giày thể thao của người nói.",
        "image": ""
      },
      {
        "id": "H2",
        "type": "input",
        "prompt": "2. We can ___ red and yellow paint and make the color orange.",
        "answers": [
          "mix"
        ],
        "explanation": "Mix nghĩa là trộn. Khi trộn màu đỏ và màu vàng, ta tạo ra màu cam.",
        "image": ""
      },
      {
        "id": "H3",
        "type": "input",
        "prompt": "3. Many different fish live in the ___.",
        "answers": [
          "ocean"
        ],
        "explanation": "Ocean nghĩa là đại dương. Nhiều loài cá khác nhau sống trong đại dương.",
        "image": ""
      },
      {
        "id": "H4",
        "type": "input",
        "prompt": "4. There's an orange ___ on my jacket.",
        "answers": [
          "starfish"
        ],
        "explanation": "Starfish nghĩa là sao biển. Câu cho biết có hình một con sao biển màu cam trên áo khoác.",
        "image": ""
      }
    ]
  },
  {
    "letter": "I",
    "title": "Look at the pictures. Look at the letters. Write the words.",
    "note": "Sắp xếp các chữ cái để viết đúng từ chỉ sinh vật hoặc vật ở biển.",
    "points": 4,
    "questions": [
      {
        "id": "I1",
        "type": "input",
        "prompt": "1. leljfyhsi",
        "answers": [
          "jellyfish"
        ],
        "explanation": "Các chữ cái được sắp xếp lại thành jellyfish - con sứa.",
        "image": "assets/extracted/page3-img3-600x300.png"
      },
      {
        "id": "I2",
        "type": "input",
        "prompt": "2. aseewde",
        "answers": [
          "seaweed"
        ],
        "explanation": "Các chữ cái được sắp xếp lại thành seaweed - rong biển.",
        "image": "assets/extracted/page3-img4-600x300.png"
      },
      {
        "id": "I3",
        "type": "input",
        "prompt": "3. esashell",
        "answers": [
          "seashell"
        ],
        "explanation": "Các chữ cái được sắp xếp lại thành seashell - vỏ sò.",
        "image": "assets/extracted/page3-img5-601x301.png"
      },
      {
        "id": "I4",
        "type": "input",
        "prompt": "4. tsraifhs",
        "answers": [
          "starfish"
        ],
        "explanation": "Các chữ cái được sắp xếp lại thành starfish - sao biển.",
        "image": "assets/extracted/page3-img7-600x300.png"
      }
    ]
  },
  {
    "letter": "J",
    "title": "Listen and complete the sentences.",
    "note": "Nghe audio và điền giới từ chỉ vị trí còn thiếu.",
    "points": 6,
    "audio": "assets/audio/Listening-J.mp3",
    "questions": [
      {
        "id": "J1",
        "type": "input",
        "prompt": "1. I am ___ the beach.",
        "answers": [
          "on"
        ],
        "explanation": "Ta nói on the beach - ở trên bãi biển, nên điền on.",
        "image": ""
      },
      {
        "id": "J2",
        "type": "input",
        "prompt": "2. My friend is ___ the ocean.",
        "answers": [
          "in"
        ],
        "explanation": "Bạn đang ở trong nước biển nên dùng in: in the ocean.",
        "image": ""
      },
      {
        "id": "J3",
        "type": "input",
        "prompt": "3. The seashell is ___ the small fish.",
        "answers": [
          "next to"
        ],
        "explanation": "Next to nghĩa là ở ngay bên cạnh. Vỏ sò ở cạnh chú cá nhỏ.",
        "image": ""
      },
      {
        "id": "J4",
        "type": "input",
        "prompt": "4. The jellyfish is ___ the starfish.",
        "answers": [
          "under"
        ],
        "explanation": "Under nghĩa là ở phía dưới. Con sứa ở dưới con sao biển.",
        "image": ""
      },
      {
        "id": "J5",
        "type": "input",
        "prompt": "5. The seaweed is not ___ the sand.",
        "answers": [
          "in"
        ],
        "explanation": "Not in the sand nghĩa là không nằm trong cát, nên điền in.",
        "image": ""
      },
      {
        "id": "J6",
        "type": "input",
        "prompt": "6. There is sand ___ my jacket.",
        "answers": [
          "on"
        ],
        "explanation": "Có cát ở trên áo khoác nên dùng on: sand on my jacket.",
        "image": ""
      }
    ]
  },
  {
    "letter": "K",
    "title": "Write the words in the correct order. Then match.",
    "note": "Mỗi câu gồm hai ý: sắp xếp thành câu hoàn chỉnh, sau đó chọn đúng hình a-d.",
    "points": 8,
    "imageGallery": [
      {
        "label": "a",
        "src": "assets/extracted/page4-img1-386x225.png"
      },
      {
        "label": "b",
        "src": "assets/extracted/page4-img3-387x225.png"
      },
      {
        "label": "c",
        "src": "assets/extracted/page4-img2-386x228.png"
      },
      {
        "label": "d",
        "src": "assets/extracted/page4-img4-387x228.png"
      }
    ],
    "questions": [
      {
        "id": "K1",
        "type": "input",
        "prompt": "1. next to / The T-shirt / the jacket / isn't",
        "answers": [
          "the t-shirt isn't next to the jacket",
          "the t shirt isn't next to the jacket",
          "the t-shirt is not next to the jacket",
          "the t shirt is not next to the jacket"
        ],
        "explanation": "The T-shirt isn't next to the jacket. Isn't là dạng viết tắt của is not.",
        "image": ""
      },
      {
        "id": "K2",
        "type": "choice",
        "prompt": "1. Match the sentence to a picture.",
        "options": [
          "a",
          "b",
          "c",
          "d"
        ],
        "answers": [
          "c"
        ],
        "explanation": "Hình c cho thấy áo phông không ở cạnh áo khoác.",
        "image": ""
      },
      {
        "id": "K3",
        "type": "input",
        "prompt": "2. under / The hat / the jacket / is",
        "answers": [
          "the hat is under the jacket"
        ],
        "explanation": "The hat is under the jacket. Under nghĩa là ở phía dưới.",
        "image": ""
      },
      {
        "id": "K4",
        "type": "choice",
        "prompt": "2. Match the sentence to a picture.",
        "options": [
          "a",
          "b",
          "c",
          "d"
        ],
        "answers": [
          "a"
        ],
        "explanation": "Hình a cho thấy chiếc mũ ở dưới áo khoác.",
        "image": ""
      },
      {
        "id": "K5",
        "type": "input",
        "prompt": "3. in / Starfish and jellyfish / the mural / are",
        "answers": [
          "starfish and jellyfish are in the mural"
        ],
        "explanation": "Chủ ngữ gồm hai loài nên dùng are.",
        "image": ""
      },
      {
        "id": "K6",
        "type": "choice",
        "prompt": "3. Match the sentence to a picture.",
        "options": [
          "a",
          "b",
          "c",
          "d"
        ],
        "answers": [
          "b"
        ],
        "explanation": "Hình b là bức tranh tường có sao biển và sứa.",
        "image": ""
      },
      {
        "id": "K7",
        "type": "input",
        "prompt": "4. on / The seashells / the sand / aren't",
        "answers": [
          "the seashells aren't on the sand",
          "the seashells are not on the sand"
        ],
        "explanation": "The seashells aren't on the sand. Aren't là dạng viết tắt của are not.",
        "image": ""
      },
      {
        "id": "K8",
        "type": "choice",
        "prompt": "4. Match the sentence to a picture.",
        "options": [
          "a",
          "b",
          "c",
          "d"
        ],
        "answers": [
          "d"
        ],
        "explanation": "Hình d cho thấy vỏ sò ở trong xô, không ở trên cát.",
        "image": ""
      }
    ]
  }
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
const STORAGE_KEY = "discover1-written-test2-v1-source-audit-v2";

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
function matches(value, accepted) { return DiscoverAnswerMatcher.matches(value, accepted); }

function getMissingFields() { const missing = []; sections.forEach(section => section.questions.forEach(q => { const el = document.querySelector(`[data-id="${q.id}"]`); if (q.type === "choice") { if (!el.dataset.value) missing.push(el.querySelector(".choice")); } else { const field = el.querySelector("input"); if (!field.value.trim()) missing.push(field); } })); return missing; }
function gradeTest() {
  let score = 0; const reviews = [];
  sections.forEach(section => section.questions.forEach((q, i) => { const el = document.querySelector(`[data-id="${q.id}"]`); const value = q.type === "choice" ? el.dataset.value || "" : el.querySelector("input").value; const correct = matches(value, q.answers); if (correct) score++; reviews.push({ question: q, label: `${section.letter}${i + 1}`, value, correct }); }));
  scoreValue.textContent = score; scoreMessage.textContent = score === 50 ? "Em đã làm đúng toàn bộ bài." : `Em cần chữa ${50 - score} ý. Hãy đọc kỹ giải thích và đối chiếu lại câu gốc.`; answerReview.innerHTML = reviews.map(renderReview).join(""); results.hidden = false; form.hidden = true; document.querySelector("#stickyProgress").hidden = true; results.scrollIntoView({ behavior: "smooth", block: "start" });
}
function renderReview(r) { return `<article class="review-card ${r.correct ? "" : "is-wrong"}"><div class="review-head"><h3>Câu ${r.label}</h3><span class="review-status">${r.correct ? "1/1" : "0/1"} điểm</span></div><p class="review-question">${r.question.prompt}</p><div class="review-answer"><span>Em trả lời: <b>${escapeHtml(r.value || "(trống)")}</b></span><span>Đáp án: <b>${escapeHtml(DiscoverAnswerDisplay.formatAnswer(r.question.answers[0]))}</b></span></div><p class="explanation"><b>Giải thích:</b> ${escapeHtml(DiscoverAnswerDisplay.formatExplanation(r.question.explanation))}</p></article>`; }
function updateProgress() { let completed = 0; sections.forEach(section => { let count = 0; section.questions.forEach(q => { const el = document.querySelector(`[data-id="${q.id}"]`); const done = q.type === "choice" ? Boolean(el.dataset.value) : Boolean(el.querySelector("input").value.trim()); if (done) { completed++; count++; } }); const jump = document.querySelector(`[data-jump="${section.letter}"]`); jump.classList.toggle("has-progress", count > 0); jump.classList.toggle("is-complete", count === section.points); }); progressText.textContent = `${completed} / 50`; progressBar.style.width = `${completed * 2}%`; }
function saveProgress() { const data = {}; sections.forEach(section => section.questions.forEach(q => { const el = document.querySelector(`[data-id="${q.id}"]`); data[q.id] = q.type === "choice" ? el.dataset.value || "" : el.querySelector("input").value; })); localStorage.setItem(STORAGE_KEY, JSON.stringify(data)); }
function restoreProgress() { let data; try { data = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}"); } catch { data = {}; } sections.forEach(section => section.questions.forEach(q => { const value = data[q.id]; if (!value) return; const el = document.querySelector(`[data-id="${q.id}"]`); if (q.type === "choice") { el.dataset.value = value; el.querySelectorAll("[data-choice]").forEach(button => { const selected = button.dataset.value === value; button.classList.toggle("is-selected", selected); button.setAttribute("aria-pressed", selected ? "true" : "false"); }); } else el.querySelector("input").value = value; })); }
function escapeHtml(value) { return String(value).replace(/[&<>"']/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" }[char])); }
function escapeAttr(value) { return escapeHtml(value); }
