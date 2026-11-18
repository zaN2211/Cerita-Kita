// ==========================================================================
// SCRIPT.JS - LOGIKA INTERAKTIF ALBUM KENANGAN FAUZAN & HENI
// ==========================================================================

// 1. TANGGAL JADIAN (19 November 2025)
const START_DATE = new Date("2025-11-19T00:00:00");

// Kode tanggal jadian yang diterima (mendukung format DDMMYY maupun DDMMYYYY)
const VALID_PASSCODES = ["191125", "19112025"];
let isCameraUnlocked = false;

// 2. DATA STORIES / FOTO KITA (8 Slide Interaktif di Dalam Album)
const storiesData = [
    {
        type: "normal",
        image: "assets/images/foto1.jpg",
        fallback: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=600",
        title: "Awal Cerita Kita",
        tag: "Chapter 01",
        caption: "Lucu ya kalau diinget, dulu kita sering banget ketemu tapi hampir nggak pernah ngobrol. Sama-sama lagi jalan di cerita masing-masing, padahal diam-diam punya rasa yang sama."
    },
    {
        type: "flip",
        image: "assets/images/foto2.jpg",
        fallback: "assets/images/foto2.1.jpg",
        customHeight: "330px",
        title: "Interaksi Pertama",
        tag: "Chapter 02",
        caption: "Sampai akhirnya aku iseng ngasih kode lewat catatan IG, dan ternyata kamu ngeh. Dari hal sesimpel itu, entah kenapa muncul rasa yakin kalau kali ini aku beneran bisa dapetin kamu.",
        backImage: "assets/images/foto2.1.jpg",
        backFallback: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=600",
        secretNote: "Sampai di titik aku nekad bales catatan IG kamu. Rasanya campur aduk, deg-degan setengah mati takut cuma di-read doang. Pas kamu beneran bales, lega sekaligus senengnya tuh nggak ketulungan."
    },
    {
        type: "normal",
        image: "assets/images/foto3.jpg",
        fallback: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=600",
        title: "Momen Tak Terduga",
        tag: "Chapter 03",
        caption: "Siapa sangka tugas kelompok bikin buket justru jadi jembatan buat kita makin deket. Di sela-sela bikin buket, ngobrol sama kamu terasa seseru itu sampe sekelas pun ikut jadi saksi dan nge-cie-ciein kita hihihiii."
    },
    {
        type: "normal",
        image: "assets/images/foto4.jpg",
        fallback: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=600",
        title: "Momen Aku Nembak Kamu",
        tag: "Chapter 04",
        caption: "Dengan modal nekad dan perasaan yang campur aduk, akhirnya aku ungkapin semuanya ke kamu lewat IG. Sempet dihantui rasa takut ditolak, tapi jawaban 'iya' dari kamu hari itu langsung bikin duniaku rasanya ringan banget, kayak mau terbang hihihii."
    },
    {
        type: "mystery",
        image: "assets/images/foto5.jpg",
        fallback: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=600",
        title: "Fotbar Pertama",
        tag: "Chapter 05",
        caption: "Satu frame pertama kita, pake seragam Paskibra terakhir. Di tengah ramenya yang cie ciein hihihiii, salting banget asli."
    },
    {
        type: "quiz",
        tag: "Mini Kuis 🎯",
        question: "Coba tebak, hal apa yang paling sering bikin kita ketawa bareng?",
        options: [
            "Hal-hal random yang kita lakuin",
            "Salah paham pas lagi chat/call",
            "Dua-duanya bener banget 😂"
        ],
        correctIndex: 2,
        replyText: "Bener banget! Hal random bareng kamu emang selalu jadi obat capek paling ampuh ♥"
    },
    {
        type: "meter",
        tag: "Love Meter 💖",
        question: "Selama 1 tahun ini, seberapa besar rasa sayang kamu ke aku?",
        lowText: "Eits masa segitu doang? Geser lagi ke kanan! 😜",
        midText: "Lumayan, tapi kayaknya masih kurang penuh nih 💕",
        highText: "Nah gitu dong! Sayangku ke kamu juga 1000% ♥✨"
    },
    {
        type: "finale",
        image: "assets/images/foto8.jpg",
        fallback: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=600",
        tag: "365 HARI BERSAMA • 1ST ANNIVERSARY ♥",
        title: "Cerita Awalnya Sampai Sini Dulu...",
        caption: "Dari yang tadinya cuma saling lirik dan salting sendirian, nggak kerasa udah 1 tahun aja kita bareng. Cerita awal kita emang selesai di slide ini, tapi masih banyak banget momen random kita berdua yang tersimpan di gudang kenangan!"
    }
];

// 3. TEKS SURAT RAHASIA FULLSCREEN
const FULL_LOVE_LETTER = `Untuk bebeeeee tersayang tercinta ❤️

Sejak awal kita mulai ini semua, sebenernya aku masih takut buat mulai hubungan lagi. Tapi pas aku liat kamu, entah kenapa aku ngerasa kamu bakal bawa perubahan buat hidup aku. Aku yang awalnya malu-malu, bahkan buat hal sederhana kaya ngomong aja dulu terbata-bata, perlahan ilang gitu aja karna sering ngobrol sama kamu. Aku yang sekarang jadi jauh lebih percaya diri dan ga takut buat coba hal baru, itu semua karna siapa? Karna kamu, bebee. Sampe 1 tahun ini banyak banget hal yang berubah dari yang awalnya kurang baik jadi jauh lebih baik, kaya komunikasi kita. Dulu komunikasi kita bisa dibilang jelek, tapi kamu mau usaha bareng-bareng buat perbaikin itu setiap harinya. Jujur, hal paling ga nyangka itu ternyata ada cewe kaya kamu, yang baik, pengertian, cantik. Bisa bareng kamu sampe detik ini tuh rasanya masih kaya mimpi.

Aku suka banget setiap kali bebee cerita dan ngadu soal dunia yang ga selalu berpihak sama kamu, entah itu dari hal kecil kaya tangan berdarah atau jatuh. Rasanya seneng banget karna kamu mau libatin aku di setiap cerita kamu. Cara kamu ngetreat aku pun rasanya hangat banget, kaya lagi ngejagain anak sendiri, jadi aku ngerasa nyaman banget tiap sama kamu. Kamu ga pernah risih pas aku lagi rewel atau susah dimengerti, dan itu yang bikin aku ngerasa beruntung banget punya kamu.

Dari sekian banyak momen, yang paling nempel di ingetan aku itu pas perpisahan MA. Di situ rasanya pecah banget, sedih, terharu, campur aduk pokonya. Momen pas pertama kalinya aku ngasih fresh flowers buat kamu, dan ternyata itu juga pertama kalinya kamu dapet fresh flowers dari seseorang. Dan yang paling bikin aku ga nyangka, ternyata kamu juga nyiapin bucket bunga wisuda buat aku. Padahal aku kira aku ga layak dapet itu, tapi kamu buktiin lewat kata-kata kamu yang selalu aku inget, "cowo juga harus dirayakan". Itu bener-bener momen yang ga bakal aku lupain.

Bebee, makasih yah buat sabarnya selama ini ngadepin aku. Makasih udah sabar ngejalanin LDR sama aku, dan ga pernah nuntut atau memberatkan aku sama sekali. Makasih juga udah mau nemenin perjalanan aku yang masih panjang ini, semoga di perjalanan panjang ini kita bisa terus sama-sama sampe ke tujuan kita. Karna kamu juga aku bisa ngerti banyak hal dan jadi pribadi yang kaya sekarang. Makasih udah selalu support aku di setiap kegiatan yang aku lakuin, dan makasih sebanyak-banyaknya karna kamu udah mau bertahan sama aku sampe detik ini.

Semoga ke depannya kita bisa jadi pasangan yang lebih baik lagi dari hari ini. Mungkin emang ga ada pasangan yang sempurna, tapi kita bisa usaha buat nyempurnain hubungan ini bareng-bareng. Semoga kita selalu saling inget satu sama lain di tengah kesibukan kita yang berbeda. Oh iya, semoga ke depannya gengsinya rada dikurangi yah hihihii. Semoga kita bisa terus bersama yah, bebee!

Happy 1st Anniversary, bebee! ❤️`;


// ==========================================================================
// HELPER: KUNCI SCROLL BODY SAAT MODAL TERBUKA
// ==========================================================================
function syncBodyModalLock() {
    const anyModalOpen = document.querySelector(".modal-overlay.active") !== null;
    document.body.classList.toggle("modal-open", anyModalOpen);
}


// ==========================================================================
// 1. VERIFIKASI PASSWORD TANGGAL JADIAN & KAMERA SHUTTER
// ==========================================================================
function verifyAnniversaryPasscode() {
    const inputEl = document.getElementById("anniversary-passcode");
    const boxEl = document.getElementById("camera-passcode-box");
    const feedbackEl = document.getElementById("passcode-feedback");

    if (!inputEl) return;

    // Bersihkan karakter selain angka (agar input seperti 19-11-25 atau 19/11/2025 tetap valid)
    const cleaned = inputEl.value.replace(/\D/g, "");

    if (VALID_PASSCODES.includes(cleaned)) {
        unlockCameraAccess(true);
    } else {
        if (feedbackEl) {
            feedbackEl.innerText = cleaned.length === 0
                ? "Isi dulu kode tanggal jadian kita ya sayang 😜"
                : "Ups, kode salah! Coba ingat lagi tanggal jadian kita (19 Nov 2025) 🔒";
            feedbackEl.classList.add("error");
        }
        if (boxEl) {
            boxEl.classList.remove("shake");
            void boxEl.offsetWidth;
            boxEl.classList.add("shake");
        }
        if (navigator.vibrate) {
            navigator.vibrate([40, 40, 40]);
        }
        inputEl.focus();
    }
}

function unlockCameraAccess(withCelebration = false) {
    isCameraUnlocked = true;
    try {
        sessionStorage.setItem("fh_camera_unlocked", "1");
    } catch (e) {}

    const passcodeBox = document.getElementById("camera-passcode-box");
    const shutterArea = document.getElementById("camera-shutter-area");
    const lensOuter = document.getElementById("camera-lens-outer");
    const indicatorDot = document.getElementById("camera-indicator-dot");
    const lockIcon = document.getElementById("camera-lock-icon");

    if (passcodeBox) passcodeBox.classList.add("hidden");
    if (shutterArea) shutterArea.classList.remove("hidden");
    if (lensOuter) lensOuter.classList.add("unlocked");
    if (indicatorDot) indicatorDot.classList.add("ready");

    if (lockIcon) {
        lockIcon.setAttribute("data-lucide", "unlock");
        if (window.lucide) lucide.createIcons();
    }

    if (withCelebration && typeof confetti === "function") {
        confetti({
            particleCount: 28,
            spread: 55,
            origin: { y: 0.6 },
            colors: ['#9E3F35', '#C49A45', '#FAF6EE']
        });
    }
}

document.addEventListener("DOMContentLoaded", () => {
    try {
        if (sessionStorage.getItem("fh_camera_unlocked") === "1") {
            unlockCameraAccess(false);
        }
    } catch (e) {}
});

let isShutterFiring = false;

function takePhoto() {
    if (isShutterFiring) return;
    isShutterFiring = true;

    const cameraBody = document.querySelector('.camera-body');
    const flashOverlay = document.getElementById('camera-flash-overlay');
    const ejectedCard = document.getElementById('ejected-polaroid-card');
    const cameraScreen = document.getElementById('camera-screen');
    const mainContent = document.getElementById('main-content');
    const shutterSound = document.getElementById('camera-shutter-sound');

    // 1. Putar suara jepret & mulai musik latar (biarkan fungsi musik aslimu tetap di sini)
    if (shutterSound) {
        shutterSound.currentTime = 0;
        shutterSound.play().catch(() => {});
    }
    if (typeof playMusic === 'function') {
        playMusic();
    } else {
        const bgMusic = document.getElementById('bg-music');
        if (bgMusic) bgMusic.play().catch(() => {});
    }

    // 2. Picu recoil kamera, kilatan flash, dan keluarnya foto Polaroid
    if (cameraBody) cameraBody.classList.add('shutter-firing');
    if (flashOverlay) flashOverlay.classList.add('camera-flash-active');
    if (ejectedCard) ejectedCard.classList.add('ejecting');

    // Update angka film counter di kamera (01 -> 02)
    const filmCounter = document.querySelector('.camera-film-counter');
    if (filmCounter) filmCounter.textContent = '02';

    // 3. Setelah foto selesai tercetak & gambarnya muncul, masuk ke halaman utama
    setTimeout(() => {
        if (cameraScreen) cameraScreen.classList.add('fade-out');
        if (mainContent) mainContent.classList.remove('hidden');

        setTimeout(() => {
            if (cameraScreen) cameraScreen.classList.add('hidden');
            if (mainContent) mainContent.classList.add('visible');
        }, 600);
    }, 1550);
}

// ==========================================================================
// 2. LOGIKA PENGHITUNG HARI (DAYS COUNTER)
// ==========================================================================
function updateDaysCounter() {
    const now = new Date();
    const diff = now - START_DATE;

    if (diff < 0) {
        document.getElementById("days-counter").innerText = "00";
        document.getElementById("hours-counter").innerText = "00";
        document.getElementById("minutes-counter").innerText = "00";
        document.getElementById("seconds-counter").innerText = "00";
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / 1000 / 60) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    document.getElementById("days-counter").innerText = String(days).padStart(2, '0');
    document.getElementById("hours-counter").innerText = String(hours).padStart(2, '0');
    document.getElementById("minutes-counter").innerText = String(minutes).padStart(2, '0');
    document.getElementById("seconds-counter").innerText = String(seconds).padStart(2, '0');
}

setInterval(updateDaysCounter, 1000);
updateDaysCounter();


// ==========================================================================
// 3. MODAL PERESMIAN 1 TAHUN (SAAT DAYS COUNTER DIKLIK)
// ==========================================================================
function openInaugurationModal() {
    const modal = document.getElementById("inauguration-modal");
    modal.classList.add("active");
    syncBodyModalLock();
    launchInaugurationFireworks();
}

function closeInaugurationModal() {
    const modal = document.getElementById("inauguration-modal");
    modal.classList.remove("active");
    syncBodyModalLock();
}

function launchInaugurationFireworks() {
    if (typeof confetti !== 'function') return;

    confetti({
        particleCount: 55,
        angle: 60,
        spread: 65,
        origin: { x: 0, y: 0.7 },
        colors: ['#9E3F35', '#C49A45', '#8C5835', '#FAF6EE']
    });

    confetti({
        particleCount: 55,
        angle: 120,
        spread: 65,
        origin: { x: 1, y: 0.7 },
        colors: ['#9E3F35', '#C49A45', '#8C5835', '#FAF6EE']
    });
}


// ==========================================================================
// 4. KONTROL STORIES FOTO KITA (8 SLIDE INTERAKTIF + SWIPE JARI)
// ==========================================================================
let currentStoryIndex = 0;

function openStoryModal() {
    const modal = document.getElementById("story-modal");
    modal.classList.add("active");
    syncBodyModalLock();
    renderStoryCarousel();
    updateStoryCarousel();
}

function closeStoryModal() {
    const modal = document.getElementById("story-modal");
    modal.classList.remove("active");
    syncBodyModalLock();
}

function renderStoryCarousel() {
    const track = document.getElementById("story-carousel-track");
    const progressContainer = document.getElementById("story-progress-container");

    track.innerHTML = "";
    progressContainer.innerHTML = "";

    storiesData.forEach((story, idx) => {
        const progBar = document.createElement("div");
        progBar.className = idx === 0 ? "story-progress-item active" : "story-progress-item";
        progBar.id = `story-prog-${idx}`;
        progressContainer.appendChild(progBar);

        const slide = document.createElement("div");
        slide.className = "story-slide-item";

        // 1. VARIASI FLIP (BOLAK-BALIK 3D + FOTO & TEKS DI BELAKANG)
        if (story.type === "flip") {
            const backPhotoHtml = story.backImage ? `
                <div class="flip-back-img-box">
                    <img src="${story.backImage}" alt="Foto di Balik Kartu" class="polaroid-img" onerror="this.src='${story.backFallback || story.fallback}'">
                </div>
            ` : "";

            slide.innerHTML = `
                <div class="story-flip-wrapper" onclick="this.classList.toggle('flipped')">
                    <div class="story-flip-inner">
                        <div class="polaroid-frame story-flip-front">
                            <div class="polaroid-tape"></div>
                            <div class="story-slide-img-box" style="position:relative;">
                                <img src="${story.image}" style="max-height: ${story.customHeight || '330px'};" alt="${story.title}" class="polaroid-img" onerror="this.src='${story.fallback}'">
                                <span class="flip-badge-hint">Ketuk untuk Balik 🔄</span>
                            </div>
                            <div class="story-slide-text">
                                <span class="story-slide-tag">${story.tag}</span>
                                <h3 class="story-slide-title">${story.title}</h3>
                                <p class="story-slide-caption">${story.caption}</p>
                            </div>
                        </div>
                        <div class="polaroid-frame story-flip-back">
                            <div>
                                <div class="flip-back-header">
                                    <span>Chat Pertama</span>
                                    <span>💌</span>
                                </div>
                                ${backPhotoHtml}
                            </div>
                            <p class="flip-back-note">"${story.secretNote || story.caption}"</p>
                            <div class="flip-back-footer">Fauzan ♥ Heni</div>
                        </div>
                    </div>
                </div>
            `;
        }
        // 2. VARIASI MYSTERY (KETUK 3X UNTUK BUKA BLUR)
        else if (story.type === "mystery") {
            slide.innerHTML = `
                <div class="polaroid-frame story-slide-card">
                    <div class="polaroid-tape"></div>
                    <div class="story-slide-img-box" style="position:relative;">
                        <img id="mystery-img-${idx}" src="${story.image}" style="max-height: ${story.customHeight || '330px'};" alt="${story.title}" class="polaroid-img mystery-img" onerror="this.src='${story.fallback}'">
                        <div id="mystery-overlay-${idx}" class="mystery-overlay" onclick="unlockMysteryPhoto(${idx})">
                            <span style="font-size:28px;">🔒</span>
                            <span id="mystery-btn-${idx}" class="mystery-lock-pill">Ketuk 3x untuk buka foto</span>
                        </div>
                    </div>
                    <div class="story-slide-text">
                        <span class="story-slide-tag">${story.tag}</span>
                        <h3 class="story-slide-title">${story.title}</h3>
                        <p class="story-slide-caption">${story.caption}</p>
                    </div>
                </div>
            `;
        }
        // 3. VARIASI QUIZ (TEBAK MOMEN)
        else if (story.type === "quiz") {
            const optionsHtml = story.options.map((opt, optIdx) => `
                <button class="quiz-option-btn" onclick="answerStoryQuiz(${idx}, ${optIdx}, this)">
                    ${opt}
                </button>
            `).join("");

            slide.innerHTML = `
                <div class="interactive-story-card">
                    <span class="story-card-badge">${story.tag}</span>
                    <h3 class="story-card-question">${story.question}</h3>
                    <div id="quiz-options-${idx}" class="quiz-options">
                        ${optionsHtml}
                    </div>
                    <p id="quiz-feedback-${idx}" class="story-card-feedback"></p>
                </div>
            `;
        }
        // 4. VARIASI LOVE METER (SLIDER PERASAAN)
        else if (story.type === "meter") {
            slide.innerHTML = `
                <div class="interactive-story-card">
                    <span class="story-card-badge">${story.tag}</span>
                    <h3 class="story-card-question">${story.question}</h3>
                    <div id="meter-val-${idx}" class="love-meter-value">50%</div>
                    <input type="range" min="1" max="100" value="50" class="love-meter-range" oninput="updateLoveMeter(${idx}, this.value)">
                    <p id="meter-feedback-${idx}" class="story-card-feedback">Geser tombol di atas ke kanan 👉</p>
                </div>
            `;
        }
        // 5. VARIASI FINALE (PENUTUP SELEBRASI -> MENUJU GUDANG KENANGAN)
        else if (story.type === "finale") {
            slide.innerHTML = `
                <div class="interactive-story-card finale-card">
                    <span class="story-card-badge">${story.tag}</span>
                    <div class="finale-img-box">
                        <img src="${story.image}" alt="${story.title}" class="polaroid-img" onerror="this.src='${story.fallback}'">
                    </div>
                    <h3 class="story-card-question" style="font-size:17px;">${story.title}</h3>
                    <p class="finale-caption">${story.caption}</p>
                    <div class="finale-actions">
                        <button class="finale-warehouse-btn" onclick="openWarehouseModal()">
                            Buka Gudang Kenangan Berdua 📸
                        </button>
                        <button class="finale-replay-btn" onclick="restartStories()">
                            Ulangi Stories dari Awal 🔄
                        </button>
                    </div>
                </div>
            `;
        }
        // 6. VARIASI NORMAL (POLAROID STANDAR)
        else {
            slide.innerHTML = `
                <div class="polaroid-frame story-slide-card">
                    <div class="polaroid-tape"></div>
                    <div class="story-slide-img-box">
                        <img src="${story.image}" alt="${story.title}" class="polaroid-img" onerror="this.src='${story.fallback}'">
                    </div>
                    <div class="story-slide-text">
                        <span class="story-slide-tag">${story.tag}</span>
                        <h3 class="story-slide-title">${story.title}</h3>
                        <p class="story-slide-caption">${story.caption}</p>
                    </div>
                </div>
            `;
        }

        track.appendChild(slide);
    });
}

function updateStoryCarousel() {
    const track = document.getElementById("story-carousel-track");
    track.style.transform = `translateX(-${currentStoryIndex * 100}%)`;

    storiesData.forEach((_, idx) => {
        const prog = document.getElementById(`story-prog-${idx}`);
        if (prog) {
            if (idx === currentStoryIndex) {
                prog.className = "story-progress-item active";
            } else if (idx < currentStoryIndex) {
                prog.className = "story-progress-item completed";
            } else {
                prog.className = "story-progress-item";
            }
        }
    });

    document.getElementById("story-current-index").innerText = `Story ${currentStoryIndex + 1} dari ${storiesData.length}`;

    if (storiesData[currentStoryIndex] && storiesData[currentStoryIndex].type === "finale") {
        launchInaugurationFireworks();
    }
}

function nextStory() {
    if (currentStoryIndex < storiesData.length - 1) {
        currentStoryIndex++;
    } else {
        currentStoryIndex = 0;
    }
    updateStoryCarousel();
}

function prevStory() {
    if (currentStoryIndex > 0) {
        currentStoryIndex--;
        updateStoryCarousel();
    }
}

function restartStories() {
    currentStoryIndex = 0;
    updateStoryCarousel();
}

// Logika Buka Foto Misteri (Ketuk 3x)
const mysteryTaps = {};
function unlockMysteryPhoto(idx) {
    mysteryTaps[idx] = (mysteryTaps[idx] || 0) + 1;
    const img = document.getElementById(`mystery-img-${idx}`);
    const overlay = document.getElementById(`mystery-overlay-${idx}`);
    const btn = document.getElementById(`mystery-btn-${idx}`);

    if (mysteryTaps[idx] === 1) {
        img.style.filter = "blur(10px) brightness(0.85)";
        btn.innerText = "Ketuk 2x lagi ✨";
    } else if (mysteryTaps[idx] === 2) {
        img.style.filter = "blur(4px) brightness(0.95)";
        btn.innerText = "1x lagi kebuka! 👀";
    } else {
        img.style.filter = "blur(0px) brightness(1)";
        img.style.transform = "scale(1)";
        overlay.classList.add("unlocked");
        sendStoryReaction("✨");
    }
}

// Logika Mini Kuis
function answerStoryQuiz(storyIdx, selectedIdx, btnElement) {
    const story = storiesData[storyIdx];
    const feedbackEl = document.getElementById(`quiz-feedback-${storyIdx}`);
    const allBtns = document.querySelectorAll(`#quiz-options-${storyIdx} .quiz-option-btn`);

    allBtns.forEach(b => b.classList.remove("correct", "wrong"));

    if (selectedIdx === story.correctIndex) {
        btnElement.classList.add("correct");
        feedbackEl.innerText = story.replyText;
        sendStoryReaction("❤️");
    } else {
        btnElement.classList.add("wrong");
        feedbackEl.innerText = "Hehe hampir bener, coba pilih yang lain! 😜";
    }
}

// Logika Love Meter Slider
function updateLoveMeter(storyIdx, val) {
    const story = storiesData[storyIdx];
    const valEl = document.getElementById(`meter-val-${storyIdx}`);
    const feedbackEl = document.getElementById(`meter-feedback-${storyIdx}`);
    const num = parseInt(val, 10);

    valEl.innerText = num === 100 ? "100% ♥" : `${num}%`;

    if (num < 40) {
        feedbackEl.innerText = story.lowText;
    } else if (num < 90) {
        feedbackEl.innerText = story.midText;
    } else {
        feedbackEl.innerText = story.highText;
        if (num === 100) sendStoryReaction("💖");
    }
}

// Logika Kirim Reaksi Emoji Melayang
function sendStoryReaction(emoji) {
    for (let i = 0; i < 4; i++) {
        setTimeout(() => {
            const el = document.createElement("div");
            el.className = "floating-tap-heart";
            el.innerText = emoji;
            el.style.left = `${20 + Math.random() * 60}%`;
            el.style.top = `${window.innerHeight - 100}px`;
            el.style.setProperty("--drift-x", `${Math.floor(Math.random() * 50) - 25}px`);
            document.body.appendChild(el);
            setTimeout(() => el.remove(), 950);
        }, i * 110);
    }
}

// Fitur Geser Layar Sentuh (Swipe Kiri/Kanan)
let touchStartX = 0;
let touchEndX = 0;
let isTouchingSlider = false;

document.addEventListener("DOMContentLoaded", () => {
    const touchArea = document.getElementById("story-touch-area");
    if (touchArea) {
        touchArea.addEventListener("touchstart", (e) => {
            isTouchingSlider = e.target.tagName === "INPUT";
            touchStartX = e.changedTouches[0].screenX;
        }, { passive: true });

        touchArea.addEventListener("touchend", (e) => {
            if (isTouchingSlider) return;
            touchEndX = e.changedTouches[0].screenX;
            handleSwipeGesture();
        }, { passive: true });
    }
});

function handleSwipeGesture() {
    const swipeThreshold = 40;
    if (touchEndX < touchStartX - swipeThreshold) {
        nextStory();
    } else if (touchEndX > touchStartX + swipeThreshold) {
        prevStory();
    }
}


// ==========================================================================
// 5. KONTROL VIDEO KITA (OPSI 2 - ANIMASI PITA SATIN & GUNTING)
// ==========================================================================
let isRibbonCutting = false;

function cutRibbonAndPlayVideo() {
    if (isRibbonCutting) return;
    isRibbonCutting = true;

    const ribbonOverlay = document.getElementById("video-ribbon-overlay");
    const video = document.getElementById("anniversary-short-video");
    const scissorTool = document.getElementById("scissor-cutting-tool");
    const ribbonWrap = document.getElementById("satin-ribbon-wrap");
    const contentBox = document.getElementById("ribbon-content-box");
    const triggerBtn = document.getElementById("ribbon-trigger-btn");

    if (!ribbonOverlay || !video) return;

    if (triggerBtn) triggerBtn.disabled = true;

    if (contentBox) contentBox.classList.add("cutting");
    if (scissorTool) scissorTool.classList.add("snapping");

    if (typeof confetti === "function") {
        const rect = ribbonOverlay.getBoundingClientRect();
        const originX = (rect.left + rect.width / 2) / window.innerWidth;
        const originY = (rect.top + rect.height / 2) / window.innerHeight;
        confetti({
            particleCount: 32,
            spread: 60,
            origin: { x: originX, y: originY },
            colors: ['#9E3F35', '#C49A45', '#8C5835', '#FAF6EE']
        });
    }

    setTimeout(() => {
        if (ribbonWrap) ribbonWrap.classList.add("ribbon-severed");

        setTimeout(() => {
            ribbonOverlay.classList.add("cut");

            const bgMusic = document.getElementById("bg-music");
            if (bgMusic && !bgMusic.paused) {
                bgMusic.pause();
                if (typeof updateMusicUI === "function") updateMusicUI(false);
            }

            video.controls = true;
            video.play().catch(err => console.log("Video play info:", err));

            setTimeout(() => {
                ribbonOverlay.style.display = "none";
                ribbonOverlay.style.pointerEvents = "none";
            }, 500);
        }, 450);
    }, 350);
}

function toggleVideoPlayback(event) {
    const video = document.getElementById("anniversary-short-video");
    if (!video) return;

    const ribbonOverlay = document.getElementById("video-ribbon-overlay");
    if (ribbonOverlay && !ribbonOverlay.classList.contains("cut")) return;

    if (event && event.offsetY > video.clientHeight - 48) return;

    if (video.paused) {
        video.play().then(() => showVideoTapFeedback("play")).catch(e => console.log(e));
        const bgMusic = document.getElementById("bg-music");
        if (bgMusic && !bgMusic.paused) {
            bgMusic.pause();
            if (typeof updateMusicUI === "function") updateMusicUI(false);
        }
    } else {
        video.pause();
        showVideoTapFeedback("pause");
    }
}

function showVideoTapFeedback(action) {
    const indicator = document.getElementById("video-tap-indicator");
    if (!indicator) return;

    indicator.innerHTML = action === "play"
        ? `<i data-lucide="play" class="icon-lg"></i>`
        : `<i data-lucide="pause" class="icon-lg"></i>`;

    if (window.lucide) lucide.createIcons();

    indicator.classList.remove("flash");
    void indicator.offsetWidth;
    indicator.classList.add("flash");
}


// ==========================================================================
// 6. KONTROL AMPLOP FISIK REALISTIK & MODAL SURAT RAHASIA
// ==========================================================================
let isEnvelopeOpening = false;

function handleEnvelopeClick(event) {
    if (isEnvelopeOpening) return;
    isEnvelopeOpening = true;

    const envelope = document.getElementById("physical-envelope");
    if (envelope) {
        envelope.classList.add("opening");
    }

    if (typeof confetti === "function") {
        //confetti({
          //  particleCount: 22,
            //spread: 55,
            //origin: { y: 0.68 },
            //colors: ['#9E3F35', '#C49A45', '#8C5835', '#FAF6EE']
        //});
    }

    setTimeout(() => {
        openLetterModal();

        setTimeout(() => {
            if (envelope) envelope.classList.remove("opening");
            isEnvelopeOpening = false;
        }, 700);
    }, 550);
}

let letterTypingIndex = 0;
let isLetterTyped = false;
let letterTypingTimeout = null;

function openLetterModal() {
    const modal = document.getElementById("letter-modal");
    if (!modal) return;
    modal.classList.add("active");
    syncBodyModalLock();

    if (window.lucide) {
        lucide.createIcons();
    }

    if (!isLetterTyped) {
        startFullLetterTyping();
    } else {
        const skipBtn = document.getElementById("letter-skip-btn");
        if (skipBtn) skipBtn.classList.add("hidden");
    }
}

function closeLetterModal() {
    const modal = document.getElementById("letter-modal");
    if (modal) modal.classList.remove("active");
    syncBodyModalLock();
}

function startFullLetterTyping() {
    const targetElement = document.getElementById("full-typing-text");
    if (!targetElement) return;

    if (letterTypingIndex < FULL_LOVE_LETTER.length) {
        const char = FULL_LOVE_LETTER.charAt(letterTypingIndex);
        targetElement.innerHTML += char;
        letterTypingIndex++;
        letterTypingTimeout = setTimeout(startFullLetterTyping, 24);
    } else {
        isLetterTyped = true;
        const skipBtn = document.getElementById("letter-skip-btn");
        if (skipBtn) skipBtn.classList.add("hidden");
    }
}

function skipLetterTyping() {
    if (isLetterTyped) return;
    if (letterTypingTimeout) clearTimeout(letterTypingTimeout);
    const targetElement = document.getElementById("full-typing-text");
    if (targetElement) {
        targetElement.innerHTML = FULL_LOVE_LETTER;
    }
    isLetterTyped = true;
    const skipBtn = document.getElementById("letter-skip-btn");
    if (skipBtn) skipBtn.classList.add("hidden");
}


// ==========================================================================
// 7. TOMBOL "SAYANG KAMU" DI BAGIAN PALING BAWAH
// ==========================================================================
let loveClickCount = 0;

function handleLoveClick(event) {
    loveClickCount++;
    const textEl = document.getElementById("love-counter-text");

    if (textEl) {
        if (loveClickCount === 5) {
            textEl.innerText = "Sudah 5x — ketagihan mencet ya? 😜♥";
        } else if (loveClickCount === 10) {
            textEl.innerText = "Sudah 10x! Jari kamu nggak capek? 😂♥";
        } else if (loveClickCount === 25) {
            textEl.innerText = "25x! Fix sayang banget ini mah 🥰♥";
        } else if (loveClickCount === 50) {
            textEl.innerText = "50x!! Rekor dunia, makasih udah sesayang itu ♥";
        } else {
            textEl.innerText = `Sudah ${loveClickCount}x. Aslinya sayangku tak terhitung ♥`;
        }
    }

    if (navigator.vibrate) {
        navigator.vibrate(20);
    }

    spawnFloatingHeart(event);
}

function spawnFloatingHeart(event) {
    const heart = document.createElement("span");
    const emojis = ["❤️", "💖", "💕", "💗", "✨"];
    heart.className = "floating-tap-heart";
    heart.innerText = emojis[Math.floor(Math.random() * emojis.length)];

    const btn = document.getElementById("love-btn");
    const rect = btn ? btn.getBoundingClientRect() : { left: window.innerWidth / 2, top: window.innerHeight / 2, width: 0, height: 0 };

    const startX = (event && event.clientX) ? event.clientX : rect.left + rect.width / 2;
    const startY = (event && event.clientY) ? event.clientY : rect.top + rect.height / 2;
    const randomDrift = `${Math.floor(Math.random() * 60) - 30}px`;

    heart.style.left = `${startX}px`;
    heart.style.top = `${startY}px`;
    heart.style.setProperty("--drift-x", randomDrift);

    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 950);
}


// ==========================================================================
// 8. KONTROL PLAYLIST MUSIK (BISA GANTI-GANTI LAGU)
// ==========================================================================
const musicPlaylist = [
    {
        title: "Awal Kisah Selamanya",
        artist: "Raisa",
        src: "assets/sound/awalkisahselamnya.mp3"
    },
    {
        title: "Bukan Cinta Biasa",
        artist: "Afgan",
        src: "assets/sound/bukancintabiasa.mp3"
    },
    {
        title: "Ada Untukmu",
        artist: "Budi Doremi",
        src: "assets/sound/adauntukmu.mp3"
    },
    {
        title: "Jatuh Suka",
        artist: "Tulus",
        src: "assets/sound/jatuhsuka.mp3"
    },
    {
        title: "Jatuh Hati",
        artist: "Raisa",
        src: "assets/sound/jatuhhati.mp3"
    }
];

let currentTrackIndex = 0;

function initMusicPlayer() {
    const audio = document.getElementById("bg-music");
    if (!audio || musicPlaylist.length === 0) return;

    loadTrack(currentTrackIndex, false);

    audio.addEventListener("ended", () => {
        nextTrack();
    });
}

function loadTrack(index, autoPlay = true) {
    const audio = document.getElementById("bg-music");
    const titleEl = document.getElementById("music-title");
    const artistEl = document.getElementById("music-artist");
    const track = musicPlaylist[index];

    if (!audio || !track) return;

    currentTrackIndex = index;
    audio.src = track.src;
    if (titleEl) titleEl.innerText = track.title;
    if (artistEl) {
        artistEl.style.color = "";
        artistEl.innerText = `${track.artist} (${index + 1}/${musicPlaylist.length})`;
    }

    renderPlaylistDrawer();

    if (autoPlay) {
        audio.play()
            .then(() => updateMusicUI(true))
            .catch(e => console.log("Audio play info:", e));
    } else {
        updateMusicUI(false);
    }
}

function toggleAudio() {
    const audio = document.getElementById("bg-music");
    if (!audio) return;

    if (!audio.src) {
        loadTrack(currentTrackIndex, true);
        return;
    }

    if (audio.paused) {
        audio.play()
            .then(() => updateMusicUI(true))
            .catch(e => console.log("Audio autoplay info:", e));
    } else {
        audio.pause();
        updateMusicUI(false);
    }
}

function nextTrack() {
    currentTrackIndex = (currentTrackIndex + 1) % musicPlaylist.length;
    loadTrack(currentTrackIndex, true);
}

function prevTrack() {
    currentTrackIndex = (currentTrackIndex - 1 + musicPlaylist.length) % musicPlaylist.length;
    loadTrack(currentTrackIndex, true);
}

function updateMusicUI(isPlaying) {
    const vinyl = document.getElementById("vinyl-disc");
    const playIcon = document.getElementById("icon-music-play");
    const pauseIcon = document.getElementById("icon-music-pause");
    const eqBars = document.getElementById("active-eq-bars");

    if (vinyl) vinyl.classList.toggle("playing", isPlaying);
    if (eqBars) eqBars.classList.toggle("playing", isPlaying);

    if (playIcon && pauseIcon) {
        playIcon.classList.toggle("hidden", isPlaying);
        pauseIcon.classList.toggle("hidden", !isPlaying);
    }
}

function minimizeMusicPlayer() {
    closePlaylistDrawer();
    const dock = document.getElementById("music-player-dock");
    if (dock) dock.classList.add("minimized");
}

function expandMusicPlayer() {
    const dock = document.getElementById("music-player-dock");
    if (dock && dock.classList.contains("minimized")) {
        dock.classList.remove("minimized");
    }
}

function renderPlaylistDrawer() {
    const container = document.getElementById("playlist-items-container");
    const audio = document.getElementById("bg-music");
    if (!container) return;

    const isCurrentlyPlaying = audio && !audio.paused;

    container.innerHTML = musicPlaylist.map((song, idx) => {
        const isActive = idx === currentTrackIndex;
        const numberLabel = String(idx + 1).padStart(2, "0");

        const rightIndicator = isActive
            ? `<div id="active-eq-bars" class="eq-bars ${isCurrentlyPlaying ? "playing" : ""}">
                   <span></span><span></span><span></span>
               </div>`
            : `<span style="font-size: 11px; color: var(--color-muted);">▶</span>`;

        return `
            <div class="playlist-item ${isActive ? "active" : ""}" onclick="selectTrack(${idx})">
                <div class="playlist-item-left">
                    <span class="playlist-num">${numberLabel}</span>
                    <div class="playlist-item-meta">
                        <p class="playlist-item-title">${song.title}</p>
                        <p class="playlist-item-artist">${song.artist}</p>
                    </div>
                </div>
                ${rightIndicator}
            </div>
        `;
    }).join("");
}

function togglePlaylistDrawer() {
    const drawer = document.getElementById("playlist-drawer");
    if (!drawer) return;

    renderPlaylistDrawer();
    drawer.classList.toggle("open");
}

function closePlaylistDrawer() {
    const drawer = document.getElementById("playlist-drawer");
    if (drawer) drawer.classList.remove("open");
}

function selectTrack(index) {
    loadTrack(index, true);
}

// Tutup laci playlist otomatis saat mengetuk area luar
document.addEventListener("click", (e) => {
    const drawer = document.getElementById("playlist-drawer");
    const dock = document.getElementById("music-player-dock");
    if (drawer && drawer.classList.contains("open")) {
        if (!drawer.contains(e.target) && dock && !dock.contains(e.target)) {
            closePlaylistDrawer();
        }
    }
});

document.addEventListener("DOMContentLoaded", initMusicPlayer);


// ==========================================================================
// 9. GUDANG KENANGAN BERDUA (MULTI-FOTO PER LOKASI + WINDOWED LAZY LOAD)
// ==========================================================================
const warehousePhotos = [
    {
        images: [
            "assets/images/motoran/motoran1.1.jpg",
            "assets/images/motoran/motoran1.2.jpg",
            "assets/images/motoran/motoran1.3.jpg",
            "assets/images/motoran/motoran1.4.jpg",
            "assets/images/motoran/motoran1.5.jpg",
            "assets/images/motoran/motoran1.6.jpg",
        ],
        fallback: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=600",
        category: "motor",
        categoryLabel: "Naik Motor 🛵",
        date: "Edisi Motoran",
        caption: "First time motoran",
        note: "Motoran ke nyalindung sama kamu, seru banget ini motoran pertama kita",
        sticker: "🛵",
        pinStyle: "tape-gold"
    },
    {
        images: [
            "assets/images/makan/makan1.1.jpg",
            "assets/images/makan/makan1.2.jpg",
            "assets/images/makan/makan1.3.jpg",
            "assets/images/makan/makan1.4.jpg",
        ],
        crops: [
            "",
            "",
            "35% center",
            ""
        ],
        fallback: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=600",
        category: "makan",
        categoryLabel: "Makan-makan 🍜",
        date: "Kuliner Berdua",
        caption: "Nyari baso",
        note: "Nyari baso sampe ujung cioray ujung ujungnya balik lagi, gapapa si yang penting bisa motoran sama kamu.",
        sticker: "🍜",
        pinStyle: "pin-red"
    },
    {
        images: [
            "assets/images/fotbar/fotbar1.1.jpg",
            "assets/images/fotbar/fotbar1.2.jpg",
            "assets/images/fotbar/fotbar1.3.jpg"
        ],
        fallback: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=600",
        category: "fotbar",
        categoryLabel: "Fotbar 😍",
        date: "Paskib date🫡",
        caption: "Fotbar pertama kali",
        note: "Fotbar pake baju paskib untuk terakhir kalinya, Akunya masih malu malu kucing itu🤣.",
        sticker: "❤️",
        pinStyle: "tape-pink"
    },
    {
        images: [
            "assets/images/random/fotorandom1.1.jpg",
            "assets/images/random/fotorandom1.2.jpg",
            "assets/images/random/fotorandom1.3.jpg",
            "assets/images/random/fotorandom1.4.jpg",
            "assets/images/random/fotorandom1.5.jpg",
        ],
        fallback: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=600",
        category: "random",
        categoryLabel: "Random 💫",
        date: "Momen Lucu",
        caption: "Bikin buket, dapet kamu",
        note: "Salah satu momen paling seru dan salting, sempet ga nyangka ternyata aku bisa sekelompok sama kamu, thanks to afdal karna udah inisiatif fotoin hihihii.",
        sticker: "✨",
        pinStyle: "pin-red"
    },
    {
        images: [
            "assets/images/fotbar/fotbar2.1.jpg",
            "assets/images/fotbar/fotbar2.2.jpg",
            "assets/images/fotbar/fotbar2.3.jpg",
            "assets/images/fotbar/fotbar2.4.jpg",
        ],
        fallback: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=600",
        category: "fotbar",
        categoryLabel: "Fotbar 😍",
        date: "Fotbar ultah",
        caption: "Moment ulang tahun kamu",
        note: "Moment pas aku ngasi kado spesial baut kamu, meskipun kelewat hari hihihii, disini kamu terharu sampe nangis🥲.",
        sticker: "❤️",
        pinStyle: "tape-pink"
    },
    {
        images: [
            "assets/images/fotbar/fotbar3.4.jpg",
            "assets/images/fotbar/fotbar3.1.jpg",
            "assets/images/fotbar/fotbar3.2.jpg",
            "assets/images/fotbar/fotbar3.3.jpg",
        ],
        crops: [
            "center 100%",
            "center 100%",
            "center 100%",
            "center 100%",
        ],
        fallback: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=600",
        category: "fotbar",
        categoryLabel: "Fotbar 😍",
        date: "Fotbar pulang upra",
        caption: "Fav photo",
        note: "Moment dimana aku udah mau pulang, tadinya pengen fotbar dulu sebelum pulang tapi kamunya udah mau pulang, terus kamu balik lagi dan jadi deh.",
        sticker: "❤️",
        pinStyle: "tape-gold"
    },
    {
        images: [
            "assets/images/fotbar/fotbar4.1.jpg",
            "assets/images/fotbar/fotbar4.2.jpg",
            "assets/images/fotbar/fotbar4.3.jpg",
            "assets/images/fotbar/fotbar4.4.jpg",
            "assets/images/fotbar/fotbar4.5.jpg",
            "assets/images/fotbar/fotbar4.6.jpg",
            "assets/images/fotbar/fotbar4.7.jpg",
            "assets/images/fotbar/fotbar4.8.jpg",
            "assets/images/fotbar/fotbar4.9.jpg",
            "assets/images/fotbar/fotbar4.10.jpg",
            "assets/images/fotbar/fotbar4.11.jpg",
            "assets/images/fotbar/fotbar4.12.jpg",
            "assets/images/fotbar/fotbar4.13.jpg",
        ],
        crops: [
            "center 40%",
        ],
        fallback: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=600",
        category: "fotbar",
        categoryLabel: "Fotbar 😍",
        date: "Bukit Tingalien",
        caption: "Bukit tingalien date",
        note: "Moment kita date secara resmi pertama kalinya, di ajakin bi yayang, awalnya kamu nolak karna takut ketemu orang yang kenal dan alasan alasan lain, tapi pada akhirnya kita jadi hihihi, meski rada akward karna ada bi yayang🤣.",
        sticker: "❤️",
        pinStyle: "pin-red"
    },
    {
        images: [
            "assets/images/fotbar/fotbar5.6.jpg",
            "assets/images/fotbar/fotbar5.1.jpg",
            "assets/images/fotbar/fotbar5.2.jpg",
            "assets/images/fotbar/fotbar5.3.jpg",
            "assets/images/fotbar/fotbar5.4.jpg",
            "assets/images/fotbar/fotbar5.5.jpg",
            "assets/images/fotbar/fotbar5.7.jpg",
            "assets/images/fotbar/fotbar5.8.jpg",
        ],
        crops: [],
        fallback: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=600",
        category: "fotbar",
        categoryLabel: "Fotbar 😍",
        date: "Lari Ke Bungamelur",
        caption: "Running date ceritanya",
        note: "Moment pas kita lagi upra PJOK, kita lari ke bungamelur, dan aku sengaja larinya di lambatin biar deket kamu terus, terus kejebak ujan, tapi moment paling seru deh😉",
        sticker: "❤️",
        pinStyle: "tape-pink"
    },
    {
        images: [
            "assets/images/random/random2.1.jpg",
            "assets/images/random/random2.2.jpg",
            "assets/images/random/random2.3.jpg",
            "assets/images/random/random2.4.jpg",
            "assets/images/random/random2.5.jpg",
        ],
        fallback: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=600",
        category: "random",
        categoryLabel: "Random 💫",
        date: "Momen Lucu",
        caption: "Foto asal jepret",
        note: "Di fotoin bi yayang tapi bi yayangnya asal jepret jadi gini deh🤣",
        sticker: "😭",
        pinStyle: "pin-red"
    },
    {
        images: [
            "assets/images/makan/makan2.1.jpg",
            "assets/images/makan/makan2.10.jpg",
            "assets/images/makan/makan2.11.jpg",
            "assets/images/makan/makan2.12.jpg",
            "assets/images/makan/makan2.13.jpg",
            "assets/images/makan/makan2.2.jpg",
            "assets/images/makan/makan2.3.jpg",
            "assets/images/makan/makan2.4.jpg",
            "assets/images/makan/makan2.5.jpg",
            "assets/images/makan/makan2.6.jpg",
            "assets/images/makan/makan2.7.jpg",
            "assets/images/makan/makan2.8.jpg",
            "assets/images/makan/makan2.9.jpg",
        ],
        crops: [
            "60% center",
            "",
            "",
            "",
            "",
            "60% center",
            "",
            "60% center",
            "60% center",
            "60% center",
            "60% center",
        ],
        fallback: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=600",
        category: "makan",
        categoryLabel: "Makan baso 🍜",
        date: "Bakso date again",
        caption: "Bakso date",
        note: "Moment pas aku jemput kamu pulang dari cirebon, terus kita makan baso dulu, terus malah ke ujanan, jadinya ga sampe rumah abah, terus kamu nginep karna udah sore, moment terseru sih, ujan ujanan di motor sama kamu.",
        sticker: "❤️",
        pinStyle: "tape-pink"
    },
    {
        images: [
            "assets/images/fotbar/fotbar6.2.jpg",
            "assets/images/fotbar/fotbar6.3.jpg",
            "assets/images/fotbar/fotbar6.4.jpg",
            "assets/images/fotbar/fotbar6.6.jpg",
            "assets/images/fotbar/fotbar6.7.jpg",
            "assets/images/fotbar/fotbar6.8.jpg",
            "assets/images/fotbar/fotbar6.9.jpg",
        ],
        crops: [],
        fallback: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=600",
        category: "fotbar",
        categoryLabel: "Fotbar 😍",
        date: "Outdoor date",
        caption: "Outdoor date",
        note: "Moment pas kita camp di sukanagara, kemaren nya aku ngajakin kamu foto tapi kamu gamau, jadi aku marah, terus pas paginya jadi foto yey, meski kita masih ada muka bantalnya tapi tetep cakep xixixi.",
        sticker: "❤️",
        pinStyle: "tape-pink"
    },
    {
        images: [
            "assets/images/fotbar/fotbar7.1.jpg",
            "assets/images/fotbar/fotbar7.2.jpg",
            "assets/images/fotbar/fotbar7.3.jpg",
            "assets/images/fotbar/fotbar7.4.jpg",
            "assets/images/fotbar/fotbar7.5.jpg",
        ],
        crops: [],
        fallback: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=600",
        category: "fotbar",
        categoryLabel: "Fotbar 😍",
        date: "Outdoor date",
        caption: "Outdoor date #2",
        note: "Nah ini moment pas kita udah siap mau pulang dan kita sempetin buat foto, karna buat kenang kenangan.",
        sticker: "❤️",
        pinStyle: "tape-pink"
    },
    {
        images: [
            "assets/images/fotbar/fotbar6.1.jpg",
            "assets/images/fotbar/fotbar6.5.jpg",
            "assets/images/random/random3.1.jpg",
            "assets/images/random/random3.10.jpg",
            "assets/images/random/random3.11.jpg",
            "assets/images/random/random3.2.jpg",
            "assets/images/random/random3.3.jpg",
            "assets/images/random/random3.4.jpg",
            "assets/images/random/random3.5.jpg",
            "assets/images/random/random3.6.jpg",
            "assets/images/random/random3.7.jpg",
            "assets/images/random/random3.8.jpg",
            "assets/images/random/random3.9.jpg",
        ],
        fallback: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=600",
        category: "random",
        categoryLabel: "Random 💫",
        date: "Momen lucu",
        caption: "Asal Jepret",
        note: "Ini di fotoin tapi ga bener, dan di liat liat emang kebanyakan foto yang ga benernya🤣 tapi tetep cakep di segala kondisi.",
        sticker: "😭",
        pinStyle: "pin-red"
    },
    {
        images: [
            "assets/images/fotbar/fotbar8.1.jpg",
            "assets/images/fotbar/fotbar8.2.jpg",
            "assets/images/fotbar/fotbar8.3.jpg",
            "assets/images/fotbar/fotbar8.4.jpg",
            "assets/images/fotbar/fotbar8.5.jpg",
            "assets/images/fotbar/fotbar8.6.jpg",
            "assets/images/fotbar/fotbar8.7.jpg",
        ],
        crops: [],
        fallback: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=600",
        category: "fotbar",
        categoryLabel: "Fotbar 😍",
        date: "Outdoor date",
        caption: "Bukit Tingalien #2",
        note: "Pas pulang dari camp, kita mampir ke bukit ini lagi, dan kita fotbar lagi hihii, biar ada jejaknya.",
        sticker: "❤️",
        pinStyle: "tape-gold"
    },
    {
        images: [
            "assets/images/fotbar/fotbar9.15.jpg",
            "assets/images/fotbar/fotbar9.1.jpg",
            "assets/images/fotbar/fotbar9.10.jpg",
            "assets/images/fotbar/fotbar9.11.jpg",
            "assets/images/fotbar/fotbar9.12.jpg",
            "assets/images/fotbar/fotbar9.13.jpg",
            "assets/images/fotbar/fotbar9.14.jpg",
            "assets/images/fotbar/fotbar9.16.jpg",
            "assets/images/fotbar/fotbar9.17.jpg",
            "assets/images/fotbar/fotbar9.18.jpg",
            "assets/images/fotbar/fotbar9.2.jpg",
            "assets/images/fotbar/fotbar9.3.jpg",
            "assets/images/fotbar/fotbar9.4.jpg",
            "assets/images/fotbar/fotbar9.5.jpg",
            "assets/images/fotbar/fotbar9.6.jpg",
            "assets/images/fotbar/fotbar9.7.jpg",
            "assets/images/fotbar/fotbar9.8.jpg",
            "assets/images/fotbar/fotbar9.9.jpg",
        ],
        crops: [],
        fallback: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=600",
        category: "fotbar",
        categoryLabel: "Fotbar 😍",
        date: "Graduation",
        caption: "Moment Graduation",
        note: "Moment dimana kita kali terakhir pake baju sekolah, dan pertemuan kita di sekolah, campur aduk rasanya, tapi tetep happy sih, karna aku first time di kasi bunga, dan kamu pun first time di kasi fresh flowers.",
        sticker: "❤️",
        pinStyle: "tape-pink"
    },
    {
        images: [
            "assets/images/fotbar/fotbar13.1.jpg",
            "assets/images/fotbar/fotbar13.10.jpg",
            "assets/images/fotbar/fotbar13.11.jpg",
            "assets/images/fotbar/fotbar13.12.jpg",
            "assets/images/fotbar/fotbar13.13.jpg",
            "assets/images/fotbar/fotbar13.14.jpg",
            "assets/images/fotbar/fotbar13.15.jpg",
            "assets/images/fotbar/fotbar13.16.jpg",
            "assets/images/fotbar/fotbar13.17.jpg",
            "assets/images/fotbar/fotbar13.18.jpg",
            "assets/images/fotbar/fotbar13.19.jpg",
            "assets/images/fotbar/fotbar13.2.jpg",
            "assets/images/fotbar/fotbar13.20.jpg",
            "assets/images/fotbar/fotbar13.21.jpg",
            "assets/images/fotbar/fotbar13.22.jpg",
            "assets/images/fotbar/fotbar13.23.jpg",
            "assets/images/fotbar/fotbar13.24.jpg",
            "assets/images/fotbar/fotbar13.25.jpg",
            "assets/images/fotbar/fotbar13.26.jpg",
            "assets/images/fotbar/fotbar13.27.jpg",
            "assets/images/fotbar/fotbar13.28.jpg",
            "assets/images/fotbar/fotbar13.29.jpg",
            "assets/images/fotbar/fotbar13.3.jpg",
            "assets/images/fotbar/fotbar13.30.jpg",
            "assets/images/fotbar/fotbar13.31.jpg",
            "assets/images/fotbar/fotbar13.32.jpg",
            "assets/images/fotbar/fotbar13.33.jpg",
            "assets/images/fotbar/fotbar13.4.jpg",
            "assets/images/fotbar/fotbar13.5.jpg",
            "assets/images/fotbar/fotbar13.6.jpg",
            "assets/images/fotbar/fotbar13.7.jpg",
            "assets/images/fotbar/fotbar13.8.jpg",
            "assets/images/fotbar/fotbar13.9.jpg",
        ],
        crops: [
            "center 90%",
            "center 90%",
            "center 90%",
            "center 90%",
            "center 90%",
            "center 90%",
            "center 90%",
            "center 90%",
            "center 90%",
            "center 90%",
            "center 90%",
            "center 90%",
            "center 90%",
            "center 90%",
            "center 90%",
            "center 90%",
        ],
        fallback: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=600",
        category: "fotbar",
        categoryLabel: "Fotbar 😍",
        date: "Cakrawala date",
        caption: "Moment date ke cakrawala",
        note: "Moment pas kita main ke wisata alam cakrawala, soalnya kita pengen cari tempat yang sejuk sejuk, biar seger, terus pulangnya kali pertamanya kamu kerumah aku dulu ketemu mama papa dan kaka aku. maaf ya banyak soalnya aku masukin semua nya hihihiii.",
        sticker: "❤️",
        pinStyle: "tape-gold"
    },
    {
        images: [
            "assets/images/fotbar/fotbar10.2.jpg",
            "assets/images/fotbar/fotbar10.1.jpg",
            "assets/images/fotbar/fotbar10.3.jpg",
            "assets/images/fotbar/fotbar10.4.jpg",
            "assets/images/fotbar/fotbar10.5.jpg",
        ],
        crops: [],
        fallback: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=600",
        category: "fotbar",
        categoryLabel: "Fotbar 😍",
        date: "Pasawahan date",
        caption: "Pasawahan date",
        note: "Moment pas aku ketemu kamu di pasawahan, kirain aku mau lama, ternyata kamunya sebentar doang terus pulang, but its okeeyy yang penting aku ketemu kamu.",
        sticker: "❤️",
        pinStyle: "tape-pink"
    },
    {
        images: [
            "assets/images/fotbar/fotbar11.1.jpg",
            "assets/images/fotbar/fotbar11.10.jpg",
            "assets/images/fotbar/fotbar11.2.jpg",
            "assets/images/fotbar/fotbar11.5.jpg",
            "assets/images/fotbar/fotbar11.6.jpg",
            "assets/images/fotbar/fotbar11.7.jpg",
            "assets/images/fotbar/fotbar11.8.jpg",
            "assets/images/fotbar/fotbar11.9.jpg",
            "assets/images/fotbar/fotbar11.3.jpg",
            "assets/images/fotbar/fotbar11.4.jpg",
        ],
        crops: [
            "60% center",
            "60% center",
            "60% center",
            "60% center",
            "60% center",
            "60% center",
            "60% center",
            "55% center",
        ],
        fallback: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=600",
        category: "fotbar",
        categoryLabel: "Fotbar 😍",
        date: "Photo booth date",
        caption: "First photo booth",
        note: "Moment paling seru, sebelumnya kita debat dulu buat nentuin tempatnya, jadi kangen, nanti kita photo booth lagi oke.",
        sticker: "❤️",
        pinStyle: "tape-pink"
    },
    {
        images: [
            "assets/images/fotbar/fotbar12.1.jpg",
            "assets/images/fotbar/fotbar12.2.jpg",
        ],
        crops: [],
        fallback: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=600",
        category: "fotbar",
        categoryLabel: "Fotbar 😍",
        date: "Nganterin Pulang",
        caption: "Moment terakhir kita ketemu sebelum aku kuliah",
        note: "Pas moment ini rasanya sedih deh, aku udah mulai ada kegiatan, dan takut kamu nya mikir aku gada waktu lagi buat kamu, tapi ternyata ngga seperti itu, kita masih tetep bisa punya ruang, makasi ya sayang udah ngerti, love you more sayang💕",
        sticker: "❤️",
        pinStyle: "tape-pink"
    },
];

let currentFilteredWarehouse = [...warehousePhotos];
let currentZoomIndex = 0;
let currentSubPhotoIndex = 0;

function getMomentPhotos(item) {
    if (Array.isArray(item.images) && item.images.length > 0) {
        return item.images;
    }
    return item.image ? [item.image] : [item.fallback];
}

function getPhotoCrop(item, photoIndex) {
    if (Array.isArray(item.crops) && item.crops[photoIndex]) {
        return item.crops[photoIndex];
    }
    if (item.crop) {
        return item.crop;
    }
    return "center 25%";
}

function openWarehouseModal() {
    closeStoryModal();
    const modal = document.getElementById("warehouse-modal");
    modal.classList.add("active");
    syncBodyModalLock();

    const firstPill = document.querySelector("#warehouse-filter-bar .filter-pill");
    filterWarehouse("all", firstPill);
    //launchInaugurationFireworks();
}

function closeWarehouseModal() {
    const modal = document.getElementById("warehouse-modal");
    modal.classList.remove("active");
    syncBodyModalLock();
}

function filterWarehouse(category, btnElement) {
    document.querySelectorAll("#warehouse-filter-bar .filter-pill").forEach(btn => {
        btn.classList.remove("active");
    });
    if (btnElement) btnElement.classList.add("active");

    if (category === "all") {
        currentFilteredWarehouse = [...warehousePhotos];
    } else {
        currentFilteredWarehouse = warehousePhotos.filter(item => item.category === category);
    }

    const scrollArea = document.getElementById("warehouse-scroll-area");
    if (scrollArea) scrollArea.scrollTop = 0;

    renderWarehouseWall();
}

function renderWarehouseWall() {
    const grid = document.getElementById("warehouse-grid");
    const countInfo = document.getElementById("warehouse-count-info");

    const totalMoments = currentFilteredWarehouse.length;
    const totalAllPhotos = currentFilteredWarehouse.reduce((sum, item) => sum + getMomentPhotos(item).length, 0);

    countInfo.innerText = `${totalMoments} lokasi/momen (${totalAllPhotos} foto berdua)`;
    grid.innerHTML = "";

    const tilts = ["-2deg", "1.6deg", "-1.4deg", "2deg", "-1.6deg", "1.3deg"];
    const fragment = document.createDocumentFragment();

    currentFilteredWarehouse.forEach((item, idx) => {
        const photos = getMomentPhotos(item);
        const coverPhoto = photos[0];
        const coverCrop = getPhotoCrop(item, 0);
        const hasMultiple = photos.length > 1;
        const tilt = tilts[idx % tilts.length];

        let pinHtml = `<div class="mini-washi-tape gold"></div>`;
        if (item.pinStyle === "tape-pink") pinHtml = `<div class="mini-washi-tape pink"></div>`;
        if (item.pinStyle === "pin-red") pinHtml = `<div class="mini-pushpin"></div>`;

        const stackBadgeHtml = hasMultiple
            ? `<span class="scrapbook-stack-badge">📑 ${photos.length} Foto</span>`
            : "";

        const card = document.createElement("div");
        card.className = `scrapbook-polaroid ${hasMultiple ? "is-stack" : ""}`;
        card.style.setProperty("--card-tilt", tilt);
        card.onclick = () => openWarehouseZoom(idx);

        // 4 kartu pertama langsung eager agar instan muncul, sisanya lazy + async decode
        const loadingAttr = idx < 4 ? 'loading="eager"' : 'loading="lazy"';

        card.innerHTML = `
            ${pinHtml}
            ${stackBadgeHtml}
            <div class="scrapbook-img-wrap">
                <img src="${coverPhoto}" style="object-position: ${coverCrop};" alt="${item.caption}" class="scrapbook-img" ${loadingAttr} decoding="async" onload="this.classList.add('loaded')" onerror="this.onerror=null; this.src='${item.fallback}'; this.classList.add('loaded')">
            </div>
            <span class="polaroid-corner-sticker">${item.sticker || "❤️"}</span>
            <p class="scrapbook-caption">${item.caption}</p>
        `;

        fragment.appendChild(card);
    });

    grid.appendChild(fragment);
}

function pickRandomWarehouseMemory() {
    if (currentFilteredWarehouse.length === 0) return;
    const randomIndex = Math.floor(Math.random() * currentFilteredWarehouse.length);
    sendStoryReaction("🎲");
    openWarehouseZoom(randomIndex);
}

// Buka Lightbox Zoom Foto
function openWarehouseZoom(idx) {
    currentZoomIndex = idx;
    currentSubPhotoIndex = 0;
    const modal = document.getElementById("warehouse-zoom-modal");
    modal.classList.add("active");
    syncBodyModalLock();
    updateZoomContent();
}

function closeWarehouseZoom() {
    const modal = document.getElementById("warehouse-zoom-modal");
    modal.classList.remove("active");
    syncBodyModalLock();
}

function closeWarehouseZoomOnBackdrop(event) {
    if (event.target.id === "warehouse-zoom-modal") {
        closeWarehouseZoom();
    }
}

// Hanya memuat foto aktif & 1 tetangga kiri/kanan agar HP tidak lag mendekode belasan foto sekaligus
function hydrateZoomNearbySlides(activeIdx) {
    const slides = document.querySelectorAll("#zoom-photo-track .zoom-photo-img");
    slides.forEach((img, idx) => {
        if (Math.abs(idx - activeIdx) <= 1 && !img.getAttribute("src")) {
            const realSrc = img.getAttribute("data-src");
            if (realSrc) img.setAttribute("src", realSrc);
        }
    });
}

function updateZoomContent() {
    const item = currentFilteredWarehouse[currentZoomIndex];
    if (!item) return;

    const pinEl = document.getElementById("zoom-pin-ornament");
    if (pinEl) {
        if (item.pinStyle === "pin-red") {
            pinEl.className = "mini-pushpin";
        } else if (item.pinStyle === "tape-pink") {
            pinEl.className = "mini-washi-tape pink";
        } else {
            pinEl.className = "mini-washi-tape gold";
        }
    }

    const photos = getMomentPhotos(item);
    currentSubPhotoIndex = 0;

    const card = document.getElementById("zoom-polaroid-card");
    card.style.animation = "none";
    void card.offsetHeight;
    card.style.animation = "zoomBounceIn 0.28s cubic-bezier(0.22, 1, 0.36, 1)";

    const track = document.getElementById("zoom-photo-track");
    track.style.transform = "translateX(0%)";
    track.innerHTML = photos.map((photoSrc, pIdx) => {
        const slideCrop = getPhotoCrop(item, pIdx);
        const shouldLoadNow = pIdx <= 1;
        const srcAttr = shouldLoadNow ? `src="${photoSrc}"` : `data-src="${photoSrc}"`;
        return `
            <div class="zoom-slide">
                <img ${srcAttr} style="object-position: ${slideCrop};" alt="${item.caption} (${pIdx + 1})" class="zoom-photo-img" decoding="async" onerror="this.onerror=null; this.src='${item.fallback}'">
            </div>
        `;
    }).join("");

    const hasMultiple = photos.length > 1;
    const prevBtn = document.getElementById("zoom-sub-prev");
    const nextBtn = document.getElementById("zoom-sub-next");
    const counterEl = document.getElementById("zoom-photo-counter");
    const dotsEl = document.getElementById("zoom-photo-dots");

    if (prevBtn) prevBtn.classList.toggle("hidden", !hasMultiple);
    if (nextBtn) nextBtn.classList.toggle("hidden", !hasMultiple);
    if (counterEl) {
        counterEl.classList.toggle("hidden", !hasMultiple);
        counterEl.innerText = `1 / ${photos.length}`;
    }

    if (dotsEl) {
        dotsEl.innerHTML = hasMultiple
            ? photos.map((_, dIdx) => `<span class="zoom-dot ${dIdx === 0 ? "active" : ""}" onclick="goToZoomSubPhoto(${dIdx})"></span>`).join("")
            : "";
    }

    document.getElementById("zoom-category-badge").innerText = item.categoryLabel;
    document.getElementById("zoom-date-text").innerText = `${item.date} (${currentZoomIndex + 1}/${currentFilteredWarehouse.length})`;
    document.getElementById("zoom-caption-title").innerText = item.caption;
    document.getElementById("zoom-story-note").innerText = item.note;
}

function slideZoomPhoto(direction) {
    const item = currentFilteredWarehouse[currentZoomIndex];
    if (!item) return;

    const photos = getMomentPhotos(item);
    if (photos.length <= 1) return;

    currentSubPhotoIndex = (currentSubPhotoIndex + direction + photos.length) % photos.length;
    applyZoomSubSlide(photos.length);
}

function goToZoomSubPhoto(subIdx) {
    const item = currentFilteredWarehouse[currentZoomIndex];
    if (!item) return;

    const photos = getMomentPhotos(item);
    currentSubPhotoIndex = subIdx;
    applyZoomSubSlide(photos.length);
}

function applyZoomSubSlide(totalSubPhotos) {
    hydrateZoomNearbySlides(currentSubPhotoIndex);

    const track = document.getElementById("zoom-photo-track");
    const counterEl = document.getElementById("zoom-photo-counter");
    const dots = document.querySelectorAll("#zoom-photo-dots .zoom-dot");

    if (track) {
        track.style.transform = `translateX(-${currentSubPhotoIndex * 100}%)`;
    }
    if (counterEl) {
        counterEl.innerText = `${currentSubPhotoIndex + 1} / ${totalSubPhotos}`;
    }
    dots.forEach((dot, idx) => {
        dot.classList.toggle("active", idx === currentSubPhotoIndex);
    });
}

function navigateZoom(direction) {
    const total = currentFilteredWarehouse.length;
    currentZoomIndex = (currentZoomIndex + direction + total) % total;
    updateZoomContent();
}

function likeZoomedPhoto() {
    sendStoryReaction("❤️");
    //if (typeof confetti === "function") {
        //confetti({
          //  particleCount: 25,
           // spread: 60,
           // origin: { y: 0.75 },
            //colors: ['#9E3F35', '#C49A45', '#8C5835', '#FAF6EE']
        //});
    //}
}

// Dukungan Swipe Jari Horizontal pada Foto Zoom di Android
let zoomSwipeStartX = 0;
let zoomSwipeStartY = 0;

document.addEventListener("DOMContentLoaded", () => {
    const zoomViewport = document.getElementById("zoom-carousel-viewport");
    if (zoomViewport) {
        zoomViewport.addEventListener("touchstart", (e) => {
            zoomSwipeStartX = e.changedTouches[0].screenX;
            zoomSwipeStartY = e.changedTouches[0].screenY;
        }, { passive: true });

        zoomViewport.addEventListener("touchend", (e) => {
            const diffX = e.changedTouches[0].screenX - zoomSwipeStartX;
            const diffY = e.changedTouches[0].screenY - zoomSwipeStartY;

            if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 35) {
                if (diffX < 0) {
                    slideZoomPhoto(1);
                } else {
                    slideZoomPhoto(-1);
                }
            }
        }, { passive: true });
    }
});

// Tutup modal teratas saat tombol Escape ditekan
document.addEventListener("keydown", (e) => {
    if (e.key !== "Escape") return;
    if (document.getElementById("warehouse-zoom-modal")?.classList.contains("active")) {
        closeWarehouseZoom();
    } else if (document.getElementById("warehouse-modal")?.classList.contains("active")) {
        closeWarehouseModal();
    } else if (document.getElementById("story-modal")?.classList.contains("active")) {
        closeStoryModal();
    } else if (document.getElementById("letter-modal")?.classList.contains("active")) {
        closeLetterModal();
    } else if (document.getElementById("inauguration-modal")?.classList.contains("active")) {
        closeInaugurationModal();
    }
});
