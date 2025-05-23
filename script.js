let daftarFilm = [
    {
        judul: "Inception",
        deskripsi: "Film mimpi dalam mimpi",
        kategori : "Science Fiction",
        sutradara : "Christopher Nolan",
        rating : "8,8",
        tahun_terbit : "2010",
        gambar : 
        "https://upload.wikimedia.org/wikipedia/id/9/91/Inception_poster.jpg"
    },

    {
        judul : "Interstellar",
        deskripsi : "Perjalanan antar planet untuk mencari tempat tinggal baru.",
        kategori : "Science Fiction",
        sutradara : "Christopher Nolan",
        rating : "8,7",
        tahun_terbit : "2014",
        gambar :
        "https://upload.wikimedia.org/wikipedia/id/b/bc/Interstellar_film_poster.jpg"
    },

    {
        judul: "The Ritual",
        deskripsi: "Perjalanan hiking di hutan Swedia untuk mengenang seorang teman yang meninggal.",
        kategori: "Horor, Misteri",
        sutradara : "David Bruckner",
        rating : "6,4",
        tahun_terbit : "2017",
        gambar:
        "https://upload.wikimedia.org/wikipedia/en/f/ff/The_Ritual_UK_poster.png"
    }
];

console.log(daftarFilm);


function tampilkanDaftarFilm() {
    let container = document.getElementById("daftar-film");
    container.innerHTML = ""; // bersihkan isi sebelumnya
    daftarFilm.forEach(function(film, index) {
        let filmDiv = document.createElement("div")
        filmDiv.classList.add("film-card");
        filmDiv.innerHTML = `
        <img src="${film.gambar}" alt="${film.judul}">
        <h3>${film.judul}</h3>
        <p>${film.deskripsi}</p>
        <small>Kategori: ${film.kategori}</small>
        <small>sutradara: ${film.sutradara}</small>
        <small>rating: ${film.rating}</small>
        <small>tahun terbit: ${film.tahun_terbit}</small>
        <br>
        <button onclick="editFilm(${index})">Edit</button>
        <button onclick="hapusFilm(${index})">Hapus</button>
        `;
        container.appendChild(filmDiv);

    });
}

// panggil fungsi 
tampilkanDaftarFilm();


function hapusFilm(index) {
    daftarFilm.splice(index, 1); //hapus film diindex data 1

    tampilkanDaftarFilm(); //refresh tampilan
}

function editFilm(index) {
    let film = daftarFilm[index];

    document.getElementById("judul").value = film.judul;
    document.getElementById("deskripsi").value = film.deskripsi;
    document.getElementById("kategori").value = film.kategori;
    document.getElementById("gambar").value = film.gambar;
    document.getElementById("sutradara").value = film.sutradara;
    document.getElementById("rating").value = film.rating;
    document.getElementById("tahun_terbit").value = film.tahun_terbit;


    formFilm.onsubmit = function (event){
        event.preventDefault();

        film.judul = document.getElementById("judul").value;
        film.deskripsi = document.getElementById("deskripsi").value;
        film.kategori = document.getElementById("kategori").value;
        film.gambar = document.getElementById("gambar").value;
        film.sutradara = document.getElementById("sutradara").value;
        film.rating = document.getElementById("rating").value;
        film.tahun_terbit = document.getElementById("tahun_terbit").value;

        tampilkanDaftarFilm();
        formFilm.reset();

        //kembali submit ke mode tambah
        formFilm.onsubmit = defaultSubmit;


    }
}

let formFilm = document.getElementById("formFilm");
function defaultSubmit(event) {
    event.preventDefault(); // 

    let judul = document.getElementById("judul").value;
    let deskripsi = document.getElementById("deskripsi").value;
    let kategori = document.getElementById("kategori").value;
    let gambar = document.getElementById("gambar").value;
    let sutradara = document.getElementById("sutradara").value;
    let rating = document.getElementById("rating").value;
    let tahun_terbit = document.getElementById("tahun_terbit").value;

    let filmBaru = {
        judul: judul,
        deskripsi: deskripsi,
        kategori: kategori,
        gambar:gambar,
        sutradara: sutradara,
        rating: rating,
        tahun_terbit: tahun_terbit
    };

    daftarFilm.push(filmBaru);

    tampilkanDaftarFilm(); 
    formFilm.reset(); 
}

formFilm.onsubmit = defaultSubmit;