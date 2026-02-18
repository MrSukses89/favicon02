// 1. Inisialisasi Catatan & State (Reset ke Home saat refresh)
let noteBox, noteInput, status;

window.addEventListener('DOMContentLoaded', () => {
    // Ambil elemen DOM yang dibutuhkan
    noteBox = document.getElementById('noteBox');
    noteInput = document.getElementById('noteInput');
    status = document.getElementById('status');

    // Jalankan fungsi switch ke home agar dock lain tersembunyi
    switchScene('home');

    // Reset Catatan
    const savedNote = localStorage.getItem('userNote');
    if (savedNote && noteInput) noteInput.value = savedNote;

    // Pasang listener input setelah elemen tersedia
    if (noteInput) {

        
        noteInput.addEventListener('input', () => {
            localStorage.setItem('userNote', noteInput.value);
            if (status) status.innerText = "Menyimpan...";
            clearTimeout(window.saveTimer);
            window.saveTimer = setTimeout(() => { if (status) status.innerText = "Tersimpan"; }, 800);
        });
    }
});

// 5. FUNGSI CATATAN
function toggleNote() {
    if (!noteBox) noteBox = document.getElementById('noteBox');
    
    // Animasi bounce pada icon yang diklik
    const noteIcon = event.currentTarget; // Mengambil elemen yang diklik
    if (noteIcon) {
        noteIcon.classList.add('animate-bounce');
        setTimeout(() => noteIcon.classList.remove('animate-bounce'), 400);
    }

    const currentDisplay = noteBox ? window.getComputedStyle(noteBox).display : 'none';
    if (noteBox) noteBox.style.display = (currentDisplay === 'none') ? 'flex' : 'none';
}


// 2. FUNGSI SWITCH SCENE (Ganti Dock di Bawah)
function switchScene(sceneId) {
    const target = document.getElementById('dock-' + sceneId);
    if (!target) return;

    // Cek apakah dock yang diklik sudah aktif/tampil
    const isAlreadyActive = !target.classList.contains('dock-hidden') && target.style.display !== 'none';

    if (isAlreadyActive) {
        // Jika sudah aktif, maka sembunyikan (Hide)
        target.classList.add('dock-hidden');
        // Beri delay sedikit agar animasi slide-out selesai sebelum display none
        setTimeout(() => {
            target.style.display = 'none';
        }, 500);
    } else {
        // Jika belum aktif, sembunyikan semua dock lain dulu
        const allDocks = document.querySelectorAll('.dock');
        allDocks.forEach(d => {
            d.classList.add('dock-hidden');
            d.style.display = 'none';
        });

        // Munculkan dock target
        target.style.display = 'flex';
        // Delay 10ms supaya browser sempat proses display flex sebelum animasi jalan
        setTimeout(() => {
            target.classList.remove('dock-hidden');
        }, 10);
    }
}

// 3. FUNGSI TOGGLE MENU (Pop-up di atas dock)
function toggleMenu(menuId) {
    // Ambil semua menu container
    const allMenus = document.querySelectorAll('.menu-container');
    const targetMenu = document.getElementById(menuId);

    // 1. Sembunyikan menu lain yang sedang terbuka
    allMenus.forEach(menu => {
        if (menu.id !== menuId) {
            menu.classList.remove('show');
            // Kasih delay dikit biar animasi tutup gak kaku (opsional)
            setTimeout(() => { menu.style.display = 'none'; }, 300);
        }
    });

    // 2. Logika untuk menu yang diklik
    if (targetMenu.classList.contains('show')) {
        targetMenu.classList.remove('show');
        setTimeout(() => { targetMenu.style.display = 'none'; }, 300);
    } else {
        targetMenu.style.display = 'grid'; // Set display dulu
        // Kasih delay 10ms supaya browser sempat baca perubahan display sebelum animasi jalan
        setTimeout(() => {
            targetMenu.classList.add('show');
        }, 10);
    }
}

// 4. LOGIKA KLIK LUAR (DIPERBAIKI)
window.addEventListener('click', function(event) {
    // Jika klik bukan pada ikon dock DAN bukan pada ikon sidebar, tutup semua menu
    // Kita cek apakah yang diklik mengandung class dock-icon atau nav-icon
    const isIcon = event.target.closest('.dock-icon') || event.target.closest('.nav-icon');
    
    if (!isIcon) {
        document.querySelectorAll('.menu-container').forEach(m => {
            m.style.display = "none";
        });
    }
});

