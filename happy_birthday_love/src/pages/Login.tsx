import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState(Array(6).fill("")); // State untuk menyimpan input OTP
  const [error, setError] = useState(""); // State untuk menyimpan pesan error
  const [isLoading, setIsLoading] = useState(false); // State untuk mengontrol loading

  const handleOtpChange = (index: number, value: string) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus ke input berikutnya jika ada input
    if (value && index < 5) {
      const nextInput = document.getElementById(`otp-input-${index + 1}`);
      if (nextInput) {
        nextInput.focus();
      }
    }
  };

  const handleLogin = () => {
    setIsLoading(true); // Aktifkan loading
    setError(""); // Reset pesan error

    // Simulasi proses validasi dengan setTimeout
    setTimeout(() => {
      const enteredOtp = otp.join("");
      if (enteredOtp === "160304") {
        // Jika OTP benar, navigasi ke /read
        navigate("/read");
      } else {
        // Jika OTP salah, tampilkan pesan error
        setError("Tanggal Lahir Kamu Salah !");
      }
      setIsLoading(false); // Matikan loading setelah validasi selesai
    }, 2000); // Delay 2 detik untuk simulasi loading
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-pink-100 to-purple-100 p-4">
      <div className="content flex flex-col items-center bg-white rounded-lg shadow-2xl p-6 w-full max-w-md relative">
        <h1 className="text-2xl md:text-3xl font-bold mb-2 text-gray-800 text-center">Halo Sayang !!</h1>
        <h2 className="mb-3 text-slate-500">Masukan dd/mm/yy Lahir Kamu</h2>
        <div className="w-full mb-4 flex justify-between">
          {otp.map((digit, index) => (
            <input
              key={index}
              id={`otp-input-${index}`}
              type="number"
              maxLength={1}
              value={digit}
              onChange={(e) => handleOtpChange(index, e.target.value)}
              className="w-12 h-12 text-center border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base"
            />
          ))}
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
          Nyalain Dulu Lagunya
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
