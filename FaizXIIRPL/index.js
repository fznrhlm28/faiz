// Fungsi untuk menyalakan CPU
function turnOnCPU() {
    console.log("Menyalakan CPU");
}

// Fungsi untuk menyalakan monitor
function turnOnMonitor() {
    console.log("Menyalakan monitor");
}

// Fungsi untuk mengecek apakah komputer normal
function isComputerNormal() {
    // Gantilah dengan pengecekan nyata
    return true;
}

// Fungsi untuk mengecek apakah ada pesan error di layar
function hasErrorMessage() {
    // Gantilah dengan pengecekan nyata
    return false;
}

// Fungsi utama untuk menyalakan komputer
function startComputer() {
    // Langkah 1: Menyalakan CPU
    turnOnCPU();

    // Langkah 2: Menunggu beberapa saat untuk CPU menyala
    console.log("Menunggu beberapa saat hingga CPU menyala...");

    // Langkah 3: Memeriksa apakah komputer normal
    if (isComputerNormal()) {
        // Langkah 3.1: Memeriksa apakah ada pesan error di layar
        if (hasErrorMessage()) {
            console.log("Pesan error ditemukan. Melakukan troubleshooting...");
            // Gantilah dengan langkah-langkah troubleshooting nyata
        } else {
            console.log("Komputer siap digunakan.");
        }
    } else {
        console.log("Komputer tidak menyala dengan normal. Periksa lampu indikator.");

        // Langkah 4.1: Memeriksa apakah lampu indikator menyala
        if (isIndicatorLightOn()) {
            // Langkah 4.1.1: Menyalakan monitor jika lampu indikator menyala
            turnOnMonitor();
        } else {
            console.log("Periksa sumber listrik untuk memastikan arus.");

            // Langkah 4.1.2: Memeriksa apakah masalah teratasi
            if (isIssueResolved()) {
                console.log("Komputer kini normal dan siap digunakan.");
            } else {
                console.log("Silakan panggil teknisi untuk memperbaikinya.");
            }
        }
    }
}

// Memanggil fungsi utama untuk menyalakan komputer
startComputer();