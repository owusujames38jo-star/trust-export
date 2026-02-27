import React, { FC, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { HiShieldCheck, HiArrowRight, HiCheckCircle, HiCamera } from "react-icons/hi";

const SellerPinPortal: FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  const [step, setStep] = useState<number>(1);
  const [pin, setPin] = useState<string>("");
  const isPublicView = location.pathname === "/verify";

  const handleVerify = () => {
    const savedPin = localStorage.getItem("active_transaction_pin") || "123456"; // Default for testing
    if (pin === savedPin) {
      setStep(2);
    } else {
      alert("Invalid PIN. Please check the code sent by the buyer.");
    }
  };

  return (
    <div className={`${isPublicView ? "flex-grow py-20" : "p-4"} flex flex-col items-center justify-center`}>
      
      {/* 1. Glass Card Container */}
      <div className={`mt:-md-40 h-200 w-full max-w-lg p-10 rounded-3xl border transition-all duration-500 ${isPublicView 
        ? "bg-gray backdrop-blur-xl border-white/10 shadow-2xl" 
        : "bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700"
    }`}>

        {/* STEP 1: PIN ENTRY */}
        {step === 1 && (
          <div className="space-y-6 animate-fade-in">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-600/20 mb-4">
                <HiShieldCheck className="text-blue-500 text-2xl" />
              </div>
              <h2 className={`text-2xl font-black uppercase italic ${isPublicView ? "text-white" : "dark:text-white"}`}>
                Secure Access
              </h2>
              <p className="text-gray-500 text-xs mt-1">Enter 6-digit Transaction PIN</p>
            </div>

            <input
              type="text"
              maxLength={6}
              value={pin}
              onChange={(e) => setPin(e.target.value.replace(/\D/g, ""))}
              placeholder="000000"
              className="w-full bg-transparent border-b-2 border-gray-700 text-white text-4xl text-center tracking-[0.3em] focus:border-blue-500 focus:outline-none py-2"
            />

            <button onClick={handleVerify} className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all">
              VERIFY PIN <HiArrowRight />
            </button>
          </div>
        )}

        {/* STEP 2: VIN COLLECTION */}
        {step === 2 && (
          <div className="space-y-6 animate-fade-in">
            <div className="text-center">
              <h2 className={`text-2xl font-black uppercase italic ${isPublicView ? "text-white" : "dark:text-white"}`}>
                Vehicle Data
              </h2>
              <p className="text-blue-500 text-xs font-bold uppercase tracking-widest mt-1 text-center border border-blue-500/30 py-1 rounded">
                Transaction Verified
              </p>
            </div>

            <input 
              placeholder="ENTER 17-DIGIT VIN" 
              className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white font-mono focus:ring-2 focus:ring-blue-500 outline-none" 
            />
            
            <div className="border-2 border-dashed border-white/10 rounded-xl p-8 text-center hover:bg-white/5 transition-colors cursor-pointer group">
              <HiCamera className="mx-auto text-3xl text-gray-500 group-hover:text-blue-500 transition-colors mb-2" />
              <span className="text-xs font-bold text-gray-400 uppercase tracking-tighter">Capture VIN Plate Photo</span>
            </div>

            <button onClick={() => setStep(3)} className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-600/20">
              SUBMIT FOR INSPECTION
            </button>
          </div>
        )}

        {/* STEP 3: SUCCESS */}
        {step === 3 && (
          <div className="text-center space-y-6 animate-fade-in py-4">
            <HiCheckCircle className="mx-auto text-6xl text-green-500" />
            <div>
              <h2 className={`text-2xl font-black uppercase italic ${isPublicView ? "text-white" : "dark:text-white"}`}>
                Submission Sent
              </h2>
              <p className="text-gray-500 text-sm mt-2">Data successfully encrypted and sent to the Vault.</p>
            </div>
            <button 
              onClick={() => isPublicView ? navigate('/') : setStep(1)} 
              className="w-full bg-gray-800 text-white font-bold py-4 rounded-xl hover:bg-gray-700"
            >
              FINISH
            </button>
          </div>
        )}

      </div>
    </div>
  );
};

export default SellerPinPortal;