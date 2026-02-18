// ==========================================
// 1. INISIALISASI & STATE
// ==========================================
let currentDate = new Date();

// ==========================================
// 2. FUNGSI JAM (ANALOG & DIGITAL)
// ==========================================
function updateClock() {
    const now = new Date();
    const h = now.getHours();
    const m = now.getMinutes();
    const s = now.getSeconds();

    // --- Digital Clock ---
    const digitalEl = document.getElementById("digital-clock");
    if (digitalEl) {
        digitalEl.innerText = `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    }
    
    // --- Date Display (Baris bawah jam) ---
    const dateEl = document.getElementById("date-display");
    if (dateEl) {
        const dateOptions = { weekday: 'short', day: 'numeric', month: 'short' };
        dateEl.innerText = now.toLocaleDateString('id-ID', dateOptions);
    }

    // --- Analog Clock Logic ---
    const hDeg = (h % 12) * 30 + (m / 60) * 30;
    const mDeg = m * 6;
    const sDeg = s * 6;

    const hourHand = document.querySelector(".hour-hand");
    const minHand = document.querySelector(".min-hand");
    const secHand = document.querySelector(".sec-hand");

    if (secHand) {
        // Anti-Glitch: Matikan transisi saat detik kembali ke 0 agar tidak putar balik 360 derajat
        if (s === 0) {
            secHand.style.transition = "none";
        } else {
            secHand.style.transition = "all 0.2s cubic-bezier(0.4, 2.08, 0.55, 0.44)";
        }
        
        hourHand.style.transform = `translateX(-50%) rotate(${hDeg}deg)`;
        minHand.style.transform = `translateX(-50%) rotate(${mDeg}deg)`;
        secHand.style.transform = `translateX(-50%) rotate(${sDeg}deg)`;
    }
}

// ==========================================
// 3. FUNGSI KALENDER
// ==========================================
function renderCalendar() {
    const monthYearText = document.getElementById("cal-month-year");
    const daysContainer = document.getElementById("cal-days");
    if (!monthYearText || !daysContainer) return;

    // Set Header (Bulan & Tahun)
    const options = { month: 'long', year: 'numeric' };
    monthYearText.innerText = currentDate.toLocaleDateString('id-ID', options);

    daysContainer.innerHTML = "";

    // Logika Tanggal
    const firstDayIndex = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
    const lastDay = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
    const prevLastDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();

    // 1. Padding Bulan Sebelumnya
    for (let x = firstDayIndex; x > 0; x--) {
        const div = document.createElement("div");
        div.classList.add("cal-day");
        div.style.opacity = "0.3"; 
        div.innerText = prevLastDay - x + 1;
        daysContainer.appendChild(div);
    }

    // 2. Hari Bulan Sekarang
    const today = new Date();
    for (let i = 1; i <= lastDay; i++) {
        const div = document.createElement("div");
        div.classList.add("cal-day");
        
        const checkDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), i);
        
        // Tandai Hari Minggu
        if (checkDate.getDay() === 0) div.classList.add("sunday");
        
        // Tandai Hari Ini
        if (i === today.getDate() && 
            currentDate.getMonth() === today.getMonth() && 
            currentDate.getFullYear() === today.getFullYear()) {
            div.classList.add("today");
        }

        div.innerText = i;
        daysContainer.appendChild(div);
    }
}

// --- Kontrol Navigasi Bulan ---
function changeMonth(event, offset) {
    if (event) event.stopPropagation(); // Stop agar panel tidak tertutup saat klik panah
    currentDate.setMonth(currentDate.getMonth() + offset);
    renderCalendar();
}

// --- Buka/Tutup Panel Kalender ---
function toggleCalendar() {
    const panel = document.getElementById("calendar-panel");
    if (!panel) return;

    const isVisible = panel.style.display === "block";
    panel.style.display = isVisible ? "none" : "block";
    
    if (!isVisible) renderCalendar();
}

// ==========================================
// 4. OPERASIONAL (STARTUP)
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    // Jalankan jam setiap detik
    setInterval(updateClock, 1000);
    updateClock();
    
    // Render kalender awal
    renderCalendar();
});