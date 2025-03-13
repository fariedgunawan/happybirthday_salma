import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState(""); // State untuk menyimpan input password
  const [error, setError] = useState(""); // State untuk menyimpan pesan error
  const [isLoading, setIsLoading] = useState(false); // State untuk mengontrol loading

  const handleLogin = () => {
    setIsLoading(true); // Aktifkan loading
    setError(""); // Reset pesan error

    // Simulasi proses validasi dengan setTimeout
    setTimeout(() => {
      if (password === "160304") {
        // Jika password benar, navigasi ke /read
        navigate("/read");
      } else {
        // Jika password salah, tampilkan pesan error
        setError("Password salah! Coba lagi.");
      }
      setIsLoading(false); // Matikan loading setelah validasi selesai
    }, 5000); // Delay 2 detik untuk simulasi loading
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-pink-100 to-purple-100 p-4">
      <div className="content flex flex-col items-center bg-white rounded-lg shadow-2xl p-6 w-full max-w-md relative">
        <h1 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800 text-center">Halo Sayang !!</h1>
        <div className="w-full mb-4">
          <input
            type="password" // Ubah ke type password untuk menyembunyikan input
            placeholder="Masukkan password kamu"
            value={password}
            onChange={(e) => setPassword(e.target.value)} // Update state saat input berubah
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base"
          />
        </div>

        {error && ( // Tampilkan pesan error jika ada
          <p className="text-red-500 text-sm mb-4">{error}</p>
        )}

        <button
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300 text-sm md:text-base"
          onClick={handleLogin} // Panggil handleLogin saat tombol diklik
          disabled={isLoading} // Nonaktifkan tombol saat loading
        >
          Login
        </button>

        <p className="mt-4 text-gray-600 text-sm md:text-base text-center">
          Masa iya gatau?{" "}
          <a href="#" className="text-blue-600 hover:underline">
            Lahir Kembali
          </a>
        </p>

        {/* Overlay dan Loading */}
        {isLoading && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
            <span className="loader"></span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
