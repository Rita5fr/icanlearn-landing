import React, { useState, useEffect } from 'react';
import { 
  CheckCircle2, 
  XCircle, 
  Clock, 
  Users, 
  Star, 
  PlayCircle, 
  Award, 
  BookOpen, 
  MessageCircle, 
  ChevronDown,
  ChevronUp,
  MapPin,
  ShieldCheck,
  Video,
  Languages,
  Zap,
  ArrowRight
} from 'lucide-react';

// --- Translation Dictionary ---
const translations = {
  en: {
    headerBtn: "Join Workshop - ₹49",
    heroPre: "LIVE 2-Hour Workshop by ICANLEARN",
    heroDateBadge: "🚀 STARTS THIS SUNDAY | 12:00 PM to 2:00 PM",
    guaranteeBadge: "100% Money-Back Guarantee",
    guaranteeDesc: "If you don't find value in the workshop, let us know and get an instant refund. No questions asked.",
    heroTitle: <>The Spoken English Masterclass That Has Already Helped <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-yellow-500">5,000+ Students</span> Speak Fluent, Confident English</>,
    heroSub: "Join Zainab (Founder, ICANLEARN) for a LIVE 2-hour session where she reveals the exact approach that transforms hesitant speakers into confident English communicators — no matter your current level.",
    heroCta: "Join the Workshop for Just ₹49",
    trustStudents: "5,000+ students trained",
    trustRated: "Rated by hundreds of learners",
    timerText: "Enrollments Closing In:",
    timeUnits: { h: "Hours", m: "Minutes", s: "Seconds" },
    painHeading: "Is This You?",
    painPoints: [
      "You've been wanting to speak English for months or years — but still stuck.",
      "You know grammar and words but your mind goes blank when speaking.",
      "You feel shy and embarrassed when others speak English fluently.",
      "You've tried YouTube, apps, coaching — nothing really clicked.",
      "You know poor English is holding back your career, confidence and personality."
    ],
    painConclusion: <>"You don't have an English problem. You have an <span className="text-rose-600 font-extrabold underline decoration-rose-300 decoration-4 underline-offset-4">APPROACH</span> problem. And that's exactly what this workshop will fix."</>,
    diffHeading: "What You'll Discover in Just 2 Hours",
    diffCards: [
      { title: "The Missing Link", desc: "Why you've been struggling despite trying so hard with grammar books and apps." },
      { title: "The Proven Formula", desc: "What actually works when it comes to learning spoken English fast without hesitation." },
      { title: "The ICANLEARN Framework", desc: "The exact real approach used by 5,000+ successful students of ICANLEARN." },
      { title: "Real Transformations", desc: "How ordinary people — students, housewives, professionals — became fluent speakers in a short time." }
    ],
    diffBottom: "You'll leave this workshop with complete clarity on your English-speaking journey.",
    reserveBtn: "Reserve My Seat for ₹49",
    hostHeading: "Meet Your Workshop Host",
    hostBullets: [
      "Expert Spoken English trainer with years of proven experience",
      "Teaches both online and offline at the prestigious ICANLEARN",
      "Personally trained 5,000+ students to speak confident English",
      "Known for a simple, relatable, and highly practical teaching style"
    ],
    hostQuote: "I've seen people transform their entire personality just by learning to speak English the RIGHT way. I want to show you exactly how you can do it too.",
    testHeading: "Real Students. Real Results.",
    testimonials: [
      { quote: "Before ICANLEARN, I couldn't even introduce myself in English. Today I give presentations at work. Zainab Ma'am changed my professional life completely.", name: "Rahul Sharma", city: "Delhi" },
      { quote: "I spent ₹10,000+ on other courses. Nothing worked. One simple session with Zainab Ma'am gave me more clarity than 6 months of expensive coaching.", name: "Priya Patel", city: "Mumbai" },
      { quote: "My friends can't believe how confidently I speak English now. I used to be so shy in social gatherings. Best decision I ever made.", name: "Vikram Singh", city: "Jaipur" }
    ],
    whoHeading: "This Workshop is For You If...",
    whoPoints: [
      "Students preparing for interviews or competitive exams",
      "Working professionals who want quick career growth",
      "Homemakers who want to speak confidently in social settings",
      "Business owners dealing with English-speaking clients",
      "Anyone serious about finally speaking fluent English"
    ],
    whoCondition: <>Only condition: You must be <span className="underline decoration-amber-500 decoration-4">SERIOUS</span> about changing your English. That's why we charge ₹49 — to filter out non-serious people.</>,
    detailsHeading: "Workshop Details Snapshot",
    details: {
      topic: "Spoken English Mastery",
      duration: "This Sunday, 12 PM - 2 PM (LIVE)",
      host: "Zainab, ICANLEARN",
      mode: "Online (+ Offline option available)",
      investment: "₹49 only (Fully Refundable)"
    },
    regHeading: "You've Already Wasted Enough Time Trying the Wrong Way",
    regSub: "Spend just 2 hours and ₹49 — and finally get the clarity you've been missing. This one workshop can save you months of struggle.",
    formLabels: { name: "Full Name", phone: "WhatsApp Number", email: "Email Address" },
    formBtn: "Pay ₹49 and Reserve My Seat Now",
    formSecure: "100% Secure Encrypted Payment",
    formUrgency: "Limited seats for each batch — don't wait and miss out",
    successHeading: "Payment Successful! 🎉",
    successSub: "You're in! Redirecting you to the WhatsApp group...",
    successFallback: "If not redirected automatically, click below:",
    successBtn: "Join WhatsApp Group →",
    faqHeading: "Frequently Asked Questions",
    faqs: [
      { q: "What if I'm a complete beginner?", a: "Perfect. This workshop is designed for all levels — beginners benefit the most because we correct the approach from day one." },
      { q: "Is this online or offline?", a: "Both options are available. You will receive an option to choose your preferred mode after registration on WhatsApp." },
      { q: "What do I need to join?", a: "Just your phone or laptop, a notebook, a pen, and a serious desire to improve your English." },
      { q: "What happens after I pay ₹49?", a: "You'll receive the workshop date, exact time, and the private joining link on your WhatsApp and Email immediately." },
      { q: "Is the ₹49 refundable?", a: "Yes! We offer a 100% No-Questions-Asked Money-Back Guarantee. If you don't find value in the workshop, let us know before it ends and we'll refund your ₹49 instantly." }
    ],
    footerTagline: "Empowering people through fluent English communication."
  },
  hi: {
    headerBtn: "Workshop Join करें - ₹49",
    heroPre: "ICANLEARN द्वारा LIVE 2-Hour Workshop",
    heroDateBadge: "🚀 WORKSHOP THIS SUNDAY | 12:00 PM से 2:00 PM",
    guaranteeBadge: "100% Money-Back Guarantee",
    guaranteeDesc: "अगर आपको workshop valuable नहीं लगती, तो हमें बताएं और तुरंत refund पाएं। No questions asked.",
    heroTitle: <>वो Spoken English Masterclass जिसने <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-yellow-500">5,000+ Students</span> को Fluent और Confident English बोलने में मदद की है</>,
    heroSub: "Zainab (Founder, ICANLEARN) के साथ LIVE 2-hour session join करें, जहाँ वह वो exact approach बताएंगी जो hesitant speakers को confident English communicators में बदल देती है — चाहे आपका current level कुछ भी हो।",
    heroCta: "सिर्फ ₹49 में Workshop Join करें",
    trustStudents: "5,000+ Students trained",
    trustRated: "Hundreds of learners द्वारा Rated",
    timerText: "Enrollments Closing In:",
    timeUnits: { h: "घंटे", m: "मिनट", s: "सेकंड" },
    painHeading: "क्या आपके साथ भी ऐसा होता है?",
    painPoints: [
      "आप महीनों या सालों से English बोलना चाहते हैं — लेकिन अभी भी stuck हैं।",
      "आपको grammar और words पता हैं, लेकिन बोलते समय mind blank हो जाता है।",
      "जब दूसरे fluent English बोलते हैं तो आपको shy और embarrassed feel होता है।",
      "आपने YouTube, Apps, Coaching सब try कर लिया — लेकिन कुछ काम नहीं आया।",
      "आप जानते हैं कि poor English आपके career, confidence और personality को रोक रही है।"
    ],
    painConclusion: <>"आपको English की problem नहीं है। आपको <span className="text-rose-600 font-extrabold underline decoration-rose-300 decoration-4 underline-offset-4">APPROACH</span> की problem है। और यही हम इस Workshop में fix करेंगे।"</>,
    diffHeading: "सिर्फ 2 Hours में आप क्या सीखेंगे",
    diffCards: [
      { title: "The Missing Link", desc: "Grammar books और Apps के साथ इतनी मेहनत करने के बावजूद आप क्यों struggle कर रहे हैं।" },
      { title: "The Proven Formula", desc: "बिना hesitation के तेजी से Spoken English सीखने के लिए असल में क्या काम करता है।" },
      { title: "The ICANLEARN Framework", desc: "वो exact approach जो ICANLEARN के 5,000+ successful students ने use की है।" },
      { title: "Real Transformations", desc: "कैसे ordinary लोग — students, housewives, professionals — बहुत कम समय में fluent speakers बन गए।" }
    ],
    diffBottom: "आप अपनी English-speaking journey पर complete clarity के साथ इस workshop से बाहर निकलेंगे।",
    reserveBtn: "₹49 में अपनी Seat Reserve करें",
    hostHeading: "मिलिए अपने Workshop Host से",
    hostBullets: [
      "सालों के proven experience के साथ Expert Spoken English trainer",
      "ICANLEARN में online और offline दोनों पढ़ाती हैं",
      "5,000+ students को confident English बोलने के लिए personally train किया है",
      "Simple, relatable और highly practical teaching style के लिए जानी जाती हैं"
    ],
    hostQuote: "मैंने लोगों को सिर्फ सही तरीके से English बोलना सीखकर अपनी पूरी personality बदलते देखा है। मैं आपको exactly यही दिखाना चाहती हूँ कि आप भी ये कैसे कर सकते हैं।",
    testHeading: "Real Students. Real Results.",
    testimonials: [
      { quote: "ICANLEARN से पहले, मैं English में खुद को introduce भी नहीं कर पाता था। आज मैं office में presentations देता हूँ। Zainab Ma'am ने मेरी professional life पूरी तरह बदल दी।", name: "Rahul Sharma", city: "Delhi" },
      { quote: "मैंने दूसरे courses पर ₹10,000+ खर्च किए। कुछ काम नहीं आया। Zainab Ma'am के एक simple session ने मुझे 6 महीने की expensive coaching से ज्यादा clarity दी।", name: "Priya Patel", city: "Mumbai" },
      { quote: "मेरे friends को यकीन नहीं होता कि मैं अब कितनी confidently English बोलता हूँ। मैं social gatherings में बहुत shy हुआ करता था। Best decision I ever made.", name: "Vikram Singh", city: "Jaipur" }
    ],
    whoHeading: "यह Workshop आपके लिए है अगर...",
    whoPoints: [
      "Interviews या competitive exams की तैयारी कर रहे Students",
      "Working professionals जो quick career growth चाहते हैं",
      "Homemakers जो social settings में confidently बोलना चाहती हैं",
      "Business owners जो English-speaking clients के साथ deal करते हैं",
      "कोई भी जो finally fluent English बोलने को लेकर serious है"
    ],
    whoCondition: <>Only condition: आपको अपनी English बदलने के लिए <span className="underline decoration-amber-500 decoration-4">SERIOUS</span> होना होगा। इसलिए हम ₹49 charge करते हैं — ताकि non-serious लोग filter हो सकें।</>,
    detailsHeading: "Workshop Details",
    details: {
      topic: "Spoken English Mastery",
      duration: "This Sunday, 12 PM - 2 PM (LIVE)",
      host: "Zainab, ICANLEARN",
      mode: "Online (+ Offline option available)",
      investment: "सिर्फ ₹49 (100% Refundable)"
    },
    regHeading: "आप गलत तरीके try करके पहले ही काफी Time Waste कर चुके हैं",
    regSub: "सिर्फ 2 Hours और ₹49 invest करें — और finally वो clarity पाएं जो missing थी। यह एक Workshop आपके महीनों का struggle बचा सकता है।",
    formLabels: { name: "Full Name (पूरा नाम)", phone: "WhatsApp Number", email: "Email Address" },
    formBtn: "₹49 Pay करें और अपनी Seat Reserve करें",
    formSecure: "100% Secure Encrypted Payment",
    formUrgency: "हर Batch के लिए Limited seats — इंतज़ार न करें, मौक़ा हाथ से जाने न दें",
    successHeading: "Payment Successful! 🎉",
    successSub: "आप IN हैं! WhatsApp group पर redirect हो रहे हैं...",
    successFallback: "अगर automatically redirect न हो, तो नीचे click करें:",
    successBtn: "WhatsApp Group Join करें →",
    faqHeading: "Frequently Asked Questions (FAQs)",
    faqs: [
      { q: "अगर मैं complete beginner हूँ तो क्या?", a: "Perfect. यह workshop सभी levels के लिए design किया गया है — beginners को सबसे ज्यादा फायदा होता है क्योंकि हम day one से ही approach सही करते हैं।" },
      { q: "क्या यह Online है या Offline?", a: "दोनों options available हैं। Registration के बाद आपको WhatsApp पर अपना preferred mode choose करने का option मिलेगा।" },
      { q: "Join करने के लिए मुझे क्या चाहिए?", a: "सिर्फ आपका phone या laptop, एक notebook, एक pen, और अपनी English improve करने की सच्ची desire." },
      { q: "₹49 pay करने के बाद क्या होगा?", a: "आपको तुरंत अपने WhatsApp और Email पर workshop की date, exact time, और private joining link मिल जाएगा।" },
      { q: "क्या ₹49 refundable हैं?", a: "हाँ! हमारी 100% Money-Back Guarantee है। अगर आपको workshop valuable नहीं लगती, तो session खत्म होने से पहले हमें बताएं और हम आपके ₹49 तुरंत refund कर देंगे। No questions asked." }
    ],
    footerTagline: "Fluent English communication के ज़रिए लोगों को empower करना।"
  }
};

// --- Components ---

const CountdownTimer = ({ labels }) => {
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    // Check local storage for an existing end time
    let endTime = localStorage.getItem('workshop_deadline');
    
    // If no end time, or if the deadline has passed, reset it to 2 hours from now
    if (!endTime || new Date().getTime() > parseInt(endTime, 10)) {
       endTime = new Date().getTime() + 2 * 60 * 60 * 1000; // 2 hours
       localStorage.setItem('workshop_deadline', endTime.toString());
    }

    const calculateTimeLeft = () => {
      const difference = parseInt(localStorage.getItem('workshop_deadline'), 10) - new Date().getTime();
      
      if (difference > 0) {
        return {
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        };
      }
      return { hours: 0, minutes: 0, seconds: 0 };
    };

    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);

  const TimeUnit = ({ value, label }) => (
    <div className="flex flex-col items-center">
      <div className="bg-white/5 backdrop-blur-md text-white rounded-xl w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center text-3xl font-outfit font-bold border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)]">
        {String(value).padStart(2, '0')}
      </div>
      <span className="text-white/60 text-[10px] sm:text-xs mt-3 uppercase tracking-[0.2em] font-semibold">{label}</span>
    </div>
  );

  return (
    <div className="flex gap-4 sm:gap-6 justify-center mt-6">
      <TimeUnit value={timeLeft.hours} label={labels.h} />
      <div className="text-white/40 text-4xl font-light mt-3 sm:mt-4">:</div>
      <TimeUnit value={timeLeft.minutes} label={labels.m} />
      <div className="text-white/40 text-4xl font-light mt-3 sm:mt-4">:</div>
      <TimeUnit value={timeLeft.seconds} label={labels.s} />
    </div>
  );
};

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border border-slate-200/60 bg-white rounded-2xl mb-4 overflow-hidden transition-all duration-300 hover:border-slate-300 hover:shadow-md">
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="w-full flex justify-between items-center text-left p-6 focus:outline-none"
      >
        <span className="font-outfit font-semibold text-lg text-slate-900 pr-4">{question}</span>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${isOpen ? 'bg-amber-100 text-amber-600' : 'bg-slate-100 text-slate-500'}`}>
          {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </div>
      </button>
      {isOpen && (
        <div className="px-6 pb-6 text-slate-600 animate-fade-in text-lg leading-relaxed">
          {answer}
        </div>
      )}
    </div>
  );
};

const CTAButton = ({ text, className = "", onClick }) => {
  const handleClick = (e) => {
    if (onClick) { onClick(e); return; }
    e.preventDefault();
    document.getElementById('register').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <button 
      onClick={handleClick}
      className={`group relative overflow-hidden bg-gradient-to-r from-amber-400 to-yellow-500 hover:from-amber-300 hover:to-yellow-400 text-slate-900 font-outfit font-bold py-4 sm:py-5 px-8 sm:px-10 rounded-full shadow-[0_0_40px_rgba(251,191,36,0.3)] hover:shadow-[0_0_60px_rgba(251,191,36,0.5)] hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto text-lg sm:text-xl flex items-center justify-center gap-3 ${className}`}
    >
      <div className="absolute inset-0 w-full h-full bg-white/20 group-hover:animate-[shine_1.5s_ease-in-out_infinite] -skew-x-12 translate-x-[-150%]"></div>
      <span className="relative z-10">{text}</span>
      <ArrowRight size={24} className="relative z-10 group-hover:translate-x-1 transition-transform" />
    </button>
  );
};

// --- Main App ---

const WHATSAPP_GROUP_URL = 'https://whatsapp.com/channel/0029VbC50EWLSmbfzdeXNi0O';

export default function App() {
  const [lang, setLang] = useState('en');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [paymentError, setPaymentError] = useState('');
  const t = translations[lang];

  const handlePayment = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setPaymentError('');

    const name = e.target.querySelector('#name').value;
    const phone = e.target.querySelector('#phone').value;
    const email = e.target.querySelector('#email').value;

    try {
      // Create Razorpay order via backend
      const res = await fetch('/api/create-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, phone, email }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to create order');

      // Open Razorpay Checkout
      const options = {
        key: data.keyId,
        amount: data.amount,
        currency: data.currency,
        name: 'ICANLEARN',
        description: 'Spoken English Workshop - Live Session',
        order_id: data.orderId,
        prefill: {
          name,
          email,
          contact: `+91${phone}`,
        },
        theme: { color: '#4F46E5' },
        handler: function () {
          // Payment successful
          setIsSubmitted(true);
          setIsLoading(false);

          // Meta Pixel Purchase Tracking
          if (typeof window !== 'undefined') {
            if (window.fbq) {
              window.fbq('track', 'Purchase', { currency: 'INR', value: 49.00 });
            }
          }

          // Redirect to WhatsApp after brief delay
          setTimeout(() => {
            window.location.href = WHATSAPP_GROUP_URL;
          }, 3000);
        },
        modal: {
          ondismiss: function () {
            setIsLoading(false);
          },
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.on('payment.failed', function (response) {
        setPaymentError(response.error?.description || 'Payment failed. Please try again.');
        setIsLoading(false);
      });

      // Meta Pixel InitiateCheckout Tracking
      if (typeof window !== 'undefined') {
        if (window.fbq) {
          window.fbq('track', 'InitiateCheckout', { currency: 'INR', value: 49.00 });
        }
      }

      rzp.open();
    } catch (err) {
      setPaymentError(err.message || 'Something went wrong. Please try again.');
      setIsLoading(false);
    }
  };

  return (
    <div className="font-inter text-slate-900 bg-[#FAFAFA] scroll-smooth selection:bg-amber-200 selection:text-amber-900 overflow-x-hidden">
      {/* Import Google Fonts */}
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Outfit:wght@400;500;700;800;900&display=swap');
        .font-outfit { font-family: 'Outfit', sans-serif; }
        .font-inter { font-family: 'Inter', sans-serif; }
        .animate-fade-in { animation: fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .animate-slide-up { animation: slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .animate-float { animation: float 6s ease-in-out infinite; }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes float { 0% { transform: translateY(0px); } 50% { transform: translateY(-15px); } 100% { transform: translateY(0px); } }
        @keyframes shine { 100% { transform: translateX(150%); } }
      `}} />

      {/* 1. Sticky Header - Glassmorphic */}
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-xl shadow-sm border-b border-slate-200/50 z-50 transition-all">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="ICANLEARN" className="w-10 h-10 rounded-xl shadow-lg shadow-indigo-200 object-contain" />
            <span className="font-outfit font-extrabold text-2xl tracking-tight text-slate-900 hidden md:block">
              ICANLEARN
            </span>
          </div>
          
          <div className="flex items-center gap-3 sm:gap-5">
            {/* Language Toggle */}
            <div className="flex items-center bg-slate-100/80 p-1 rounded-full border border-slate-200">
              <button 
                onClick={() => setLang('en')}
                className={`px-3 py-1.5 text-xs sm:text-sm rounded-full transition-all font-semibold flex items-center gap-1.5 ${lang === 'en' ? 'bg-white shadow-sm text-indigo-700' : 'text-slate-500 hover:text-slate-800'}`}
              >
                <Languages size={14} className="hidden sm:block"/> EN
              </button>
              <button 
                onClick={() => setLang('hi')}
                className={`px-3 py-1.5 text-xs sm:text-sm rounded-full transition-all font-semibold flex items-center gap-1.5 ${lang === 'hi' ? 'bg-white shadow-sm text-indigo-700' : 'text-slate-500 hover:text-slate-800'}`}
              >
                <Languages size={14} className="hidden sm:block"/> HI
              </button>
            </div>

            <button 
              onClick={(e) => { e.preventDefault(); document.getElementById('register').scrollIntoView({ behavior: 'smooth' }); }}
              className="bg-slate-900 hover:bg-slate-800 text-white font-outfit font-semibold py-2.5 px-5 rounded-full text-sm sm:text-base transition-all shadow-md hover:shadow-xl hover:-translate-y-0.5 flex items-center gap-2"
            >
              {t.headerBtn}
            </button>
          </div>
        </div>
      </header>

      {/* 2. Hero Section - Deep Premium Theme */}
      <section className="pt-36 pb-24 px-4 sm:px-6 bg-slate-950 text-center relative overflow-hidden">
        {/* Abstract Glowing Orbs */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-violet-600/20 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute top-40 left-0 w-[400px] h-[400px] bg-amber-500/10 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-4xl mx-auto relative z-10 animate-slide-up">
          <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-400/20 text-indigo-300 font-semibold px-5 py-2 rounded-full text-sm mb-8 backdrop-blur-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
            </span>
            {t.heroPre}
          </div>

          {/* Sunday Highlight Badge */}
          <div className="flex justify-center mb-6 animate-fade-in">
             <div className="bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-900 font-outfit font-black text-lg sm:text-2xl px-6 py-2 sm:py-3 rounded-xl shadow-[0_0_30px_rgba(251,191,36,0.4)] border border-amber-300 transform -skew-x-6 hover:scale-105 transition-transform">
                <span className="block skew-x-6 tracking-wide">{t.heroDateBadge}</span>
             </div>
          </div>
          
          <h1 className="font-outfit text-4xl sm:text-5xl md:text-[4rem] font-extrabold text-white leading-[1.1] mb-8 tracking-tight">
            {t.heroTitle}
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-slate-300 mb-20 leading-relaxed max-w-3xl mx-auto font-light">
            {t.heroSub}
          </p>

          {/* Host Photo - Authority Figure Style */}
          <div className="relative -mx-16 sm:-mx-24 md:-mx-32 lg:-mx-40 mb-0">
            <div className="absolute -inset-16 bg-gradient-to-b from-indigo-500/30 via-violet-500/15 to-transparent rounded-full blur-[60px] pointer-events-none"></div>
            <img 
              src="/zainab-hero.png" 
              alt="Zainab - Founder, ICANLEARN" 
              className="relative z-10 w-full h-auto drop-shadow-[0_0_60px_rgba(255,255,255,0.25)]" 
              style={{ WebkitMaskImage: 'radial-gradient(50% 50% at 50% 50%, black 75%, transparent 100%)', maskImage: 'radial-gradient(50% 50% at 50% 50%, black 75%, transparent 100%)' }}
            />
            <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-slate-950 via-slate-950/90 to-transparent z-20 pointer-events-none"></div>
          </div>
          
          <div className="relative z-30 -mt-20 flex flex-col items-center pb-24 transform scale-110 sm:scale-125 origin-top">
            <CTAButton text={t.heroCta} className="mx-auto" />

            {/* Money Back Guarantee Hero */}
            <div className="mt-5 flex justify-center items-center gap-2 text-emerald-400 font-medium bg-emerald-400/10 inline-flex px-5 py-2 rounded-full border border-emerald-400/20 shadow-sm backdrop-blur-sm">
              <ShieldCheck size={18} className="text-emerald-400" />
              <span>{t.guaranteeBadge}</span>
            </div>
            
            <div className="mt-8 flex flex-wrap justify-center items-center gap-4 text-sm text-slate-400 font-medium">
              <div className="flex items-center gap-2">
                <div className="bg-white/10 p-1.5 rounded-full"><Users size={16} className="text-indigo-400" /></div> 
                {t.trustStudents}
              </div>
              <div className="hidden sm:block text-slate-700">•</div>
              <div className="flex items-center gap-2">
                <div className="flex gap-0.5 text-amber-400">
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                </div>
                {t.trustRated}
              </div>
            </div>

            <div className="mt-16 pt-10 border-t border-white/10 w-full max-w-2xl text-center">
              <p className="font-outfit text-indigo-200 font-semibold mb-2 tracking-wide uppercase text-sm">{t.timerText}</p>
              <CountdownTimer labels={t.timeUnits} />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Pain Point Section - Clean & High Contrast */}
      <section className="py-24 px-4 sm:px-6 relative bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-outfit text-4xl md:text-5xl font-extrabold text-slate-900">{t.painHeading}</h2>
            <div className="w-24 h-1.5 bg-rose-500 mx-auto mt-6 rounded-full"></div>
          </div>
          
          <div className="space-y-4 max-w-2xl mx-auto mb-16">
            {t.painPoints.map((point, index) => (
              <div key={index} className="flex items-start gap-5 p-6 bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-slate-100 hover:border-rose-200 hover:shadow-lg transition-all duration-300">
                <div className="bg-rose-100 p-2 rounded-full shrink-0 mt-0.5">
                  <XCircle className="text-rose-500" size={24} />
                </div>
                <p className="text-slate-700 font-medium text-lg leading-relaxed">{point}</p>
              </div>
            ))}
          </div>

          <div className="bg-slate-900 p-8 md:p-12 rounded-3xl shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/20 rounded-full blur-[80px]"></div>
            <p className="text-2xl md:text-3xl font-outfit font-light text-white leading-relaxed text-center relative z-10">
              {t.painConclusion}
            </p>
          </div>
        </div>
      </section>

      {/* 4. What Makes This Workshop Different (Bento Box Style) */}
      <section className="py-24 px-4 sm:px-6 bg-slate-50 border-y border-slate-200/50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-outfit text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">{t.diffHeading}</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">Stop using outdated methods. Discover the modern framework built for real fluency.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            <div className="bg-white p-10 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 hover:-translate-y-1 transition-transform group">
              <div className="w-16 h-16 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600 mb-6 group-hover:scale-110 transition-transform group-hover:bg-indigo-600 group-hover:text-white">
                <BookOpen size={32} />
              </div>
              <h3 className="font-outfit text-2xl font-bold mb-4 text-slate-900">{t.diffCards[0].title}</h3>
              <p className="text-slate-600 text-lg leading-relaxed">{t.diffCards[0].desc}</p>
            </div>
            
            <div className="bg-white p-10 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 hover:-translate-y-1 transition-transform group">
              <div className="w-16 h-16 bg-amber-50 rounded-2xl flex items-center justify-center text-amber-500 mb-6 group-hover:scale-110 transition-transform group-hover:bg-amber-400 group-hover:text-white">
                <Zap size={32} />
              </div>
              <h3 className="font-outfit text-2xl font-bold mb-4 text-slate-900">{t.diffCards[1].title}</h3>
              <p className="text-slate-600 text-lg leading-relaxed">{t.diffCards[1].desc}</p>
            </div>
            
            <div className="bg-white p-10 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 hover:-translate-y-1 transition-transform group">
              <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-500 mb-6 group-hover:scale-110 transition-transform group-hover:bg-emerald-500 group-hover:text-white">
                <ShieldCheck size={32} />
              </div>
              <h3 className="font-outfit text-2xl font-bold mb-4 text-slate-900">{t.diffCards[2].title}</h3>
              <p className="text-slate-600 text-lg leading-relaxed">{t.diffCards[2].desc}</p>
            </div>
            
            <div className="bg-slate-900 p-10 rounded-3xl shadow-2xl hover:-translate-y-1 transition-transform group relative overflow-hidden">
               <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-indigo-500/30 rounded-full blur-3xl"></div>
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform relative z-10">
                <Users size={32} />
              </div>
              <h3 className="font-outfit text-2xl font-bold mb-4 text-white relative z-10">{t.diffCards[3].title}</h3>
              <p className="text-slate-300 text-lg leading-relaxed relative z-10">{t.diffCards[3].desc}</p>
            </div>
          </div>

          <div className="text-center bg-indigo-50/50 p-10 rounded-3xl border border-indigo-100">
            <p className="text-2xl font-semibold text-indigo-950 mb-8">{t.diffBottom}</p>
            <CTAButton text={t.reserveBtn} className="mx-auto" />
          </div>
        </div>
      </section>

      {/* 5. About the Host - Premium Profile */}
      <section className="py-24 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="w-full lg:w-5/12 relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-200 to-violet-100 rounded-[3rem] transform -rotate-6 scale-105"></div>
              <img 
                src="/zainab-host.png" 
                alt="Zainab - Founder, ICANLEARN" 
                className="relative rounded-[3rem] z-10 w-full object-cover aspect-[4/5] shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-5 rounded-2xl shadow-xl z-20 flex items-center gap-4">
                 <div className="bg-amber-100 p-3 rounded-full text-amber-500">
                    <Award size={24}/>
                 </div>
                 <div>
                    <p className="font-outfit font-bold text-slate-900 leading-tight">Founder</p>
                    <p className="text-sm text-slate-500">ICANLEARN</p>
                 </div>
              </div>
            </div>
            
            <div className="w-full lg:w-7/12">
              <h2 className="font-outfit text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">{t.hostHeading}</h2>
              <div className="flex flex-col pt-3">
                 <h3 className="font-outfit text-3xl text-indigo-600 font-bold">Zainab Mam</h3>
                 <p className="text-slate-500 font-medium">Founder, <span className="text-amber-500 font-bold">ICANLEARN</span></p>
              </div>
              
              <ul className="space-y-5 mb-10">
                {t.hostBullets.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <div className="bg-indigo-50 p-1 rounded-full shrink-0 mt-1">
                      <CheckCircle2 className="text-indigo-600" size={20} />
                    </div>
                    <span className="text-slate-700 text-lg">{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="bg-slate-50 p-8 rounded-2xl border-l-4 border-amber-400 relative">
                <p className="text-xl italic text-slate-700 font-medium">
                  "{t.hostQuote}"
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Student Testimonials */}
      <section className="py-24 px-4 sm:px-6 bg-slate-950 relative overflow-hidden">
        {/* Background blobs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl"></div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-outfit text-4xl md:text-5xl font-extrabold text-white mb-6">{t.testHeading}</h2>
            <p className="text-xl text-slate-400">Join 5,000+ others who have transformed their lives.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {t.testimonials.map((test, idx) => (
              <div key={idx} className="bg-slate-900/50 backdrop-blur-xl p-8 rounded-3xl border border-white/10 flex flex-col hover:-translate-y-2 transition-transform duration-300">
                <div className="flex text-amber-400 mb-6">
                  {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
                </div>
                <p className="text-slate-300 text-lg italic flex-grow mb-8 leading-relaxed">"{test.quote}"</p>
                <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                  <img src={`https://images.unsplash.com/photo-${idx === 0 ? '1507003211169-0a1dd7228f2d' : idx === 1 ? '1438761681033-6461ffad8d80' : '1500648767791-00dcc994a43e'}?auto=format&fit=crop&w=100&q=80`} alt={test.name} className="w-14 h-14 rounded-full object-cover border-2 border-slate-700" />
                  <div>
                    <h4 className="font-outfit font-bold text-white text-lg">{test.name}</h4>
                    <p className="text-sm text-slate-400">{test.city}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <CTAButton text={t.headerBtn} className="mx-auto" />
          </div>
        </div>
      </section>

      {/* 7. Who Should Join */}
      <section className="py-24 px-4 sm:px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-outfit text-4xl md:text-5xl font-extrabold text-slate-900">{t.whoHeading}</h2>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-6 mb-16">
            {t.whoPoints.map((item, idx) => (
              <div key={idx} className="flex items-center gap-5 p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-md transition-shadow">
                <div className="bg-white p-2 rounded-full shadow-sm shrink-0">
                  <CheckCircle2 className="text-indigo-600" size={24} />
                </div>
                <span className="font-medium text-slate-800 text-lg">{item}</span>
              </div>
            ))}
          </div>
          
          <div className="bg-gradient-to-r from-amber-100 to-yellow-50 p-8 rounded-3xl text-center shadow-inner border border-amber-200">
            <p className="text-xl md:text-2xl font-outfit font-semibold text-amber-900">
              {t.whoCondition}
            </p>
          </div>
        </div>
      </section>

      {/* 8. Workshop Details */}
      <section className="py-20 px-4 sm:px-6 bg-slate-50 border-t border-slate-200/50">
        <div className="max-w-4xl mx-auto bg-white rounded-[2.5rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] overflow-hidden border border-slate-100">
          <div className="bg-slate-900 p-8 sm:p-10 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
            <h2 className="font-outfit text-3xl font-bold text-white tracking-tight">{t.detailsHeading}</h2>
          </div>
          <div className="p-8 sm:p-12">
            <ul className="space-y-8">
              <li className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center border-b border-slate-100 pb-6">
                <div className="flex items-center gap-4 text-slate-500 text-lg mb-2 sm:mb-0">
                  <div className="bg-indigo-50 p-2.5 rounded-xl"><Award size={24} className="text-indigo-600" /></div> Topic
                </div>
                <div className="font-outfit font-bold text-slate-900 text-xl sm:text-right">{t.details.topic}</div>
              </li>
              <li className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center border-b border-slate-100 pb-6">
                <div className="flex items-center gap-4 text-slate-500 text-lg mb-2 sm:mb-0">
                  <div className="bg-indigo-50 p-2.5 rounded-xl"><Clock size={24} className="text-indigo-600" /></div> Duration
                </div>
                <div className="font-outfit font-bold text-slate-900 text-xl sm:text-right">{t.details.duration}</div>
              </li>
              <li className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center border-b border-slate-100 pb-6">
                <div className="flex items-center gap-4 text-slate-500 text-lg mb-2 sm:mb-0">
                  <div className="bg-indigo-50 p-2.5 rounded-xl"><Users size={24} className="text-indigo-600" /></div> Host
                </div>
                <div className="font-outfit font-bold text-slate-900 text-xl sm:text-right">{t.details.host}</div>
              </li>
              <li className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center border-b border-slate-100 pb-6">
                <div className="flex items-center gap-4 text-slate-500 text-lg mb-2 sm:mb-0">
                  <div className="bg-indigo-50 p-2.5 rounded-xl"><MapPin size={24} className="text-indigo-600" /></div> Mode
                </div>
                <div className="font-outfit font-bold text-slate-900 text-xl sm:text-right">{t.details.mode}</div>
              </li>
              <li className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center">
                <div className="flex items-center gap-4 text-slate-500 text-lg mb-2 sm:mb-0">
                  <div className="bg-amber-50 p-2.5 rounded-xl"><ShieldCheck size={24} className="text-amber-500" /></div> Investment
                </div>
                <div className="font-outfit font-bold text-amber-500 text-3xl sm:text-right">{t.details.investment}</div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Registration / Payment Section */}
      <section id="register" className="py-24 px-4 sm:px-6 bg-slate-900 relative overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-3xl mx-auto bg-white rounded-[2.5rem] shadow-2xl relative z-10 p-8 sm:p-14">
          
          {!isSubmitted ? (
            <div className="animate-fade-in">
              <div className="text-center mb-12">
                {/* Highlight Badge in Form */}
                <div className="inline-block bg-gradient-to-r from-amber-100 to-yellow-100 text-amber-900 font-outfit font-bold text-lg px-6 py-2 rounded-xl border border-amber-300 mb-6 shadow-sm">
                   📅 {t.heroDateBadge}
                </div>

                <h2 className="font-outfit text-3xl md:text-4xl font-extrabold text-slate-900 mb-5 leading-tight">{t.regHeading}</h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  {t.regSub}
                </p>
              </div>

              <form onSubmit={handlePayment} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">{t.formLabels.name}</label>
                  <input type="text" id="name" required placeholder="Enter your full name" className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10 outline-none transition-all text-lg font-medium" />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">{t.formLabels.phone}</label>
                  <div className="flex shadow-sm rounded-xl">
                    <span className="inline-flex items-center px-5 rounded-l-xl border border-r-0 border-slate-200 bg-slate-100 text-slate-500 font-bold text-lg">
                      +91
                    </span>
                    <input type="tel" id="phone" required placeholder="10-digit mobile number" pattern="[0-9]{10}" className="w-full px-5 py-4 rounded-r-xl bg-slate-50 border border-slate-200 focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10 outline-none transition-all text-lg font-medium" />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">{t.formLabels.email}</label>
                  <input type="email" id="email" required placeholder="you@example.com" className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10 outline-none transition-all text-lg font-medium" />
                </div>

                {paymentError && (
                  <div className="bg-rose-50 border border-rose-200 rounded-xl p-4 text-rose-700 font-medium text-center">
                    {paymentError}
                  </div>
                )}

                <div className="pt-6">
                  <button type="submit" disabled={isLoading} className={`group relative overflow-hidden w-full bg-gradient-to-r from-amber-400 to-yellow-500 hover:from-amber-300 hover:to-yellow-400 text-slate-900 font-outfit font-bold py-5 px-8 rounded-2xl shadow-[0_0_40px_rgba(251,191,36,0.3)] hover:shadow-[0_0_60px_rgba(251,191,36,0.5)] hover:-translate-y-1 transition-all duration-300 flex flex-col items-center justify-center gap-1.5 ${isLoading ? 'opacity-70 cursor-not-allowed hover:translate-y-0' : ''}`}>
                    <div className="absolute inset-0 w-full h-full bg-white/20 group-hover:animate-[shine_1.5s_ease-in-out_infinite] -skew-x-12 translate-x-[-150%]"></div>
                    <span className="text-xl sm:text-2xl relative z-10">
                      {isLoading ? (
                        <span className="flex items-center gap-3">
                          <svg className="animate-spin h-6 w-6" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/></svg>
                          Processing...
                        </span>
                      ) : t.formBtn}
                    </span>
                    {!isLoading && <span className="text-sm font-semibold text-amber-900/70 relative z-10 flex items-center gap-1.5"><ShieldCheck size={16}/> {t.formSecure}</span>}
                  </button>

                  {/* Money Back Guarantee Box in Form */}
                  <div className="mt-6 bg-emerald-50 border border-emerald-200 rounded-xl p-5 flex items-start gap-4 shadow-sm">
                     <div className="bg-emerald-100 p-2.5 rounded-full text-emerald-600 shrink-0">
                        <ShieldCheck size={26} />
                     </div>
                     <div className="text-left">
                        <p className="font-outfit font-bold text-emerald-900 text-lg">{t.guaranteeBadge}</p>
                        <p className="text-sm text-emerald-700 mt-1">{t.guaranteeDesc}</p>
                     </div>
                  </div>

                  <p className="text-center text-rose-500 font-bold mt-6 flex items-center justify-center gap-2 text-sm sm:text-base bg-rose-50 py-3 rounded-lg border border-rose-100">
                    <Clock size={18} className="animate-pulse" /> {t.formUrgency}
                  </p>
                </div>
              </form>
            </div>
          ) : (
            <div className="text-center py-16 animate-fade-in">
              <div className="w-24 h-24 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-8 relative">
                 <div className="absolute inset-0 bg-emerald-400/20 rounded-full animate-ping"></div>
                <CheckCircle2 className="text-emerald-500 w-12 h-12 relative z-10" />
              </div>
              <h2 className="font-outfit text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">{t.successHeading}</h2>
              <p className="text-xl text-slate-600 mb-6 max-w-lg mx-auto leading-relaxed">
                {t.successSub}
              </p>

              {/* Loading dots animation */}
              <div className="flex justify-center gap-2 mb-10">
                <div className="w-3 h-3 bg-indigo-500 rounded-full animate-bounce" style={{animationDelay: '0ms'}}></div>
                <div className="w-3 h-3 bg-indigo-500 rounded-full animate-bounce" style={{animationDelay: '150ms'}}></div>
                <div className="w-3 h-3 bg-indigo-500 rounded-full animate-bounce" style={{animationDelay: '300ms'}}></div>
              </div>

              <p className="text-slate-500 mb-6">{t.successFallback}</p>

              <a
                href={WHATSAPP_GROUP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-emerald-500 hover:bg-emerald-600 text-white font-outfit font-bold py-4 px-10 rounded-full shadow-[0_0_30px_rgba(16,185,129,0.4)] hover:shadow-[0_0_50px_rgba(16,185,129,0.6)] hover:-translate-y-1 transition-all duration-300 text-xl"
              >
                <MessageCircle size={24} />
                {t.successBtn}
              </a>
            </div>
          )}
          
        </div>
      </section>

      {/* 10. FAQ Section */}
      <section className="py-24 px-4 sm:px-6 bg-[#FAFAFA]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-outfit text-4xl md:text-5xl font-extrabold text-slate-900">{t.faqHeading}</h2>
          </div>
          <div className="space-y-4">
            {t.faqs.map((faq, idx) => (
               <FAQItem key={idx} question={faq.q} answer={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* 11. Footer */}
      <footer className="bg-slate-950 text-slate-400 py-16 px-4 sm:px-6 text-center border-t border-white/10">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-8">
            <img src="/logo.png" alt="ICANLEARN" className="w-10 h-10 rounded-xl object-contain" />
            <span className="font-outfit font-extrabold text-2xl tracking-tight text-white">ICANLEARN</span>
          </div>
          <p className="text-lg text-slate-300 mb-8">{t.footerTagline}</p>
          
          <div className="flex justify-center items-center gap-6 mb-8 flex-wrap">
            <a href="https://wa.me/919315447145" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 px-6 py-3 rounded-full text-white transition-colors font-medium">
               <MessageCircle size={20} className="text-emerald-400" /> WhatsApp Support
            </a>
          </div>

          <div className="flex justify-center items-center gap-4 sm:gap-8 mb-8 text-sm flex-wrap">
            <a href="/privacy-policy.html" className="text-slate-400 hover:text-white transition-colors">Privacy Policy</a>
            <span className="text-slate-700">•</span>
            <a href="/contact.html" className="text-slate-400 hover:text-white transition-colors">Contact Us</a>
            <span className="text-slate-700">•</span>
            <a href="/refund-policy.html" className="text-slate-400 hover:text-white transition-colors">Refund Policy</a>
          </div>

          <p className="text-xs text-slate-500 mb-2">
            <a href="mailto:Help@icanlearn.in" className="text-slate-500 hover:text-slate-300 transition-colors">Help@icanlearn.in</a> · <a href="tel:+919315447145" className="text-slate-500 hover:text-slate-300 transition-colors">+91 9315447145</a>
          </p>

          <p className="text-sm text-slate-500">
            © 2026 ICANLEARN. All Rights Reserved.
          </p>
          
          <div className="mt-8 pt-8 border-t border-white/5 text-xs text-slate-600 max-w-5xl mx-auto leading-relaxed text-center sm:text-justify">
            This site is not a part of the Facebook™ website or Facebook™ Inc. Additionally, This site is NOT endorsed by Facebook™ in any way. FACEBOOK™ is a trademark of FACEBOOK™, Inc. As stipulated by law, we can not and do not make any guarantees about your ability to get results or earn any money with my ideas, information, tools or strategies. I just want to help you by giving great content, direction and strategies that worked well for me and my students and that I believe can help you move forward. All of my terms, privacy policies and disclaimers for this program and website can be accessed via the links. I feel transparency is important and I hold ourselves (you & me) to a high standard of integrity. Thanks for stopping by. I hope this training and content brings you a lot of value & results.
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/919315447145" 
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-emerald-500 text-white p-4 rounded-full shadow-[0_4px_20px_rgba(16,185,129,0.4)] hover:bg-emerald-600 hover:scale-110 transition-all z-50 flex items-center justify-center group"
        aria-label="Contact on WhatsApp"
      >
        <MessageCircle size={32} className="group-hover:animate-bounce" />
      </a>
    </div>
  );
}