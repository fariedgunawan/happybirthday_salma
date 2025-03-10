import { useState, useEffect } from "react";
import "./styles.css"; // File CSS untuk animasi
import { useNavigate } from "react-router-dom";

const Opening = () => {
  const navigate = useNavigate();
  // Daftar teks yang akan ditampilkan
  const messages = [
    "Hai alma ......",
    "hari ini hari yang special buat kesayangan ku",
    "hari ini juga hari yang pastinya dinanti2kan sama kamu kan",
    "aku ada sesuatu yang aku udah usahain ini dari sejak lama",
    "aku mau ngucapin",
    "selamat ulang tahun sayang ..",
    "semoga kamu menjadi anak yang solehah",
    "rejekinya lancar",
    "semua urusannya dimudahkan",
    "berbakti kepada orang tua kamu",
    "menjadi anak yang baik kepada orang lain",
    "kamu selalu menjadi yang terbaik buat mamah dan papah",
    "kamu juga selalu menjadi yang terbaik buat aku",
    "mungkin ini ga bagus bagus amat buat sekelas kado ke pacar",
    "tapi seengganya ini special hanya untuk kamu sayang",
    "kado aku mungkin ga mahal tpi aku lebih memilih untuk memberikan tenaga dan pikiran aku supaya lebih terkesan buat kamu",
    "jangan merasa sedih lagi sayang",
    "ada faried disini yang selalu berusaha nemenin kamu disaat kamu badmood maupun seneng",
    "oiya ini sekaligus juga semoga menjadi hadiah terlucu kamu di 4 bulanan kita",
    "semoga hubungan kita baik terus",
    "sampai nikah dan maut memisahkan",
    "terus seneng ya sama aku",
    "aku gabisa ngasih banyak ke kamu",
    "aku hanya bisa ngasih yang terbaik buat kamu",
    "terima kasih ya sayangg udah selalu ada buat aku",
    "Aku sayang bgt sama kamu",
  ];

  const [currentMessageIndex, setCurrentMessageIndex] = useState(0); // State untuk indeks teks saat ini
  const [isVisible, setIsVisible] = useState(true); // State untuk mengontrol visibilitas teks
  const [showButton, setShowButton] = useState(false); // State untuk mengontrol visibilitas button

  useEffect(() => {
    // Jika sudah mencapai teks terakhir, hentikan timer dan tampilkan button
    if (currentMessageIndex === messages.length - 1) {
      setShowButton(true); // Tampilkan button setelah pesan terakhir
      return;
    }

    // Timer untuk mengubah teks setiap 3 detik
    const messageTimer = setTimeout(() => {
      setIsVisible(false); // Hilangkan teks saat ini
      setTimeout(() => {
        setCurrentMessageIndex((prevIndex) => prevIndex + 1); // Pindah ke teks berikutnya
        setIsVisible(true); // Tampilkan teks berikutnya
      }, 500); // Delay sebelum teks berikutnya muncul
    }, 3000); // Durasi setiap teks ditampilkan

    return () => clearTimeout(messageTimer); // Bersihkan timer saat komponen unmount
  }, [currentMessageIndex, messages.length]);

  return (
    <div className="body-opening flex min-h-screen px-[20px] bg-gradient-to-b from-pink-100 to-purple-100">
      <div className="container flex flex-col items-center justify-center">
        <h2 className={`font-semibold text-[20px] text-center ${isVisible ? "fade-in-slide-up-text" : "opacity-0"}`}>{messages[currentMessageIndex]}</h2>
        {showButton && (
          <button
            className="mt-4 px-6 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-colors"
            onClick={() => navigate("/alma")} // Aksi saat button diklik
          >
            I have something for you
          </button>
        )}
      </div>
    </div>
  );
};

export default Opening;
