import React, { useState, useEffect, useRef } from 'react';
import axios from "axios";

import { 
  Scissors, 
  CalendarCheck, 
  Users, 
  LayoutDashboard, 
  Image, 
  Bell, 
  Settings, 
  CreditCard, 
  Briefcase, 
  CheckCircle2, 
  Server, 
  TrendingUp, 
  Menu, 
  X, 
  ChevronDown, 
  Star, 
  Mail, 
  MapPin, 
  Phone,
  Monitor,
  Sparkles,
  Calendar,
  Globe,
  MessageSquare,
  Building,
  Shield
} from 'lucide-react';

/* --- UTILITY COMPONENTS --- */

const useOnScreen = (options) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [ref, options]);

  return [ref, isVisible];
};

const Reveal = ({ children, delay = 0, className = "" }) => {
  const [ref, isVisible] = useOnScreen({ threshold: 0.1 });
  
  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

/* --- LEGAL CONTENT COMPONENT --- */

const LegalDocContent = ({ type }) => {
  const currentDate = new Date().toLocaleDateString('en-GB', { year: 'numeric', month: 'long' });

  const styles = {
    h4: "text-lg font-bold text-white mt-6 mb-2",
    p: "text-slate-400 mb-3 leading-relaxed",
    ul: "list-disc list-inside text-slate-400 space-y-1 mb-4 ml-2",
    header: "text-sm text-slate-500 mb-6 italic"
  };

  if (type === 'privacy') {
    return (
      <div className="text-sm">
        <p className={styles.header}>Last Updated: {currentDate}</p>
        <p className={styles.p}>SalonWare (“we”, “our”, “us”) provides self-hosted salon management software designed for salons, nail studios, barbershops, and beauty businesses.</p>
        <p className={styles.p}>This Privacy Policy explains how we collect, use, and safeguard information when you interact with our website or make a software purchase.</p>
        <p className={styles.p}>Because SalonWare is self-hosted, once installed on your server, we do not have access to your customer data stored inside the software.</p>

        <h4 className={styles.h4}>1. Information We Collect</h4>
        <p className={styles.p}>We may collect the following information when you purchase or request support:</p>
        <ul className={styles.ul}>
          <li>Full Name</li>
          <li>Business Name</li>
          <li>Email Address</li>
          <li>Phone Number</li>
          <li>Country & City</li>
          <li>Payment Information (processed securely by third-party payment gateways)</li>
          <li>Any details voluntarily submitted through contact forms or emails</li>
        </ul>
        <p className={styles.p}>We do not store credit card numbers on our servers.</p>

        <h4 className={styles.h4}>2. Information We Do Not Collect</h4>
        <p className={styles.p}>Once the software is installed on your hosting/server, we do not collect:</p>
        <ul className={styles.ul}>
          <li>Your client details</li>
          <li>Appointment records</li>
          <li>Staff information</li>
          <li>Revenue or payout data</li>
          <li>Gallery or media uploaded by you</li>
        </ul>
        <p className={styles.p}>All such data remains stored entirely on your hosting environment.</p>

        <h4 className={styles.h4}>3. How We Use Your Information</h4>
        <ul className={styles.ul}>
          <li>Processing your order</li>
          <li>Providing installation assistance and technical support</li>
          <li>Sending product updates and important notifications</li>
          <li>Improving our website and service quality</li>
          <li>Fraud prevention and legal compliance</li>
        </ul>
        <p className={styles.p}>We never sell or share your information with third parties for marketing.</p>

        <h4 className={styles.h4}>4. Data Security</h4>
        <p className={styles.p}>We use standard industry practices to protect your information on our website, including:</p>
        <ul className={styles.ul}>
          <li>SSL encryption</li>
          <li>Secure payment processing</li>
          <li>Role-based access controls</li>
          <li>Internal data minimisation</li>
        </ul>
        <p className={styles.p}>Once your software is installed, you are fully responsible for data security on your own hosting.</p>

        <h4 className={styles.h4}>5. Cookies & Tracking</h4>
        <p className={styles.p}>Our website may use cookies for Analytics, Improving user experience, and Remembering preferences. You may disable cookies in your browser settings.</p>

        <h4 className={styles.h4}>6. Third-Party Services</h4>
        <p className={styles.p}>We may use third-party providers such as Payment gateways (Stripe, Razorpay, PayPal, etc.), Email or communication tools, and Hosting or CDN providers. Each third-party provider has its own privacy policy.</p>

        <h4 className={styles.h4}>7. Your Rights (UK & GDPR Compliant)</h4>
        <p className={styles.p}>You have the right to:</p>
        <ul className={styles.ul}>
          <li>Request access to your personal data</li>
          <li>Request correction or deletion</li>
          <li>Withdraw consent</li>
          <li>Request data portability</li>
          <li>Lodge complaints with the UK ICO (Information Commissioner’s Office)</li>
        </ul>

        <h4 className={styles.h4}>8. Contact Us</h4>
        <p className={styles.p}>For privacy-related questions: 📧 support@salonware.com</p>
      </div>
    );
  }

  if (type === 'terms') {
    return (
      <div className="text-sm">
        <p className={styles.header}>Last Updated: {currentDate}</p>
        <p className={styles.p}>By purchasing or using SalonWare (“Software”), you agree to the following Terms of Use. If you do not agree, please do not install or use the software.</p>

        <h4 className={styles.h4}>1. License Type</h4>
        <p className={styles.p}>SalonWare is sold as a one-time purchase, granting you:</p>
        <ul className={styles.ul}>
          <li>Lifetime usage</li>
          <li>Self-hosting rights</li>
          <li>Ability to install on one domain per license</li>
          <li>Access to source files</li>
        </ul>
        <p className={styles.p}>The license is non-transferable unless we approve a domain change.</p>

        <h4 className={styles.h4}>2. Restrictions</h4>
        <p className={styles.p}>You may not:</p>
        <ul className={styles.ul}>
          <li>Resell or redistribute the software</li>
          <li>Share or publish the source code</li>
          <li>Claim the software as your own intellectual property</li>
          <li>Use the software for illegal activities</li>
          <li>Modify the software for resale or duplication</li>
        </ul>
        <p className={styles.p}>You may customize the code for your own business needs.</p>

        <h4 className={styles.h4}>3. Software Installation</h4>
        <p className={styles.p}>You are responsible for providing hosting/server, managing your domain, and ensuring your environment meets system requirements. We provide setup assistance if included with your purchase.</p>

        <h4 className={styles.h4}>4. Updates</h4>
        <p className={styles.p}>Updates (if included) are provided as downloadable files. You are responsible for applying updates on your hosting.</p>

        <h4 className={styles.h4}>5. Support</h4>
        <p className={styles.p}>Each license includes 6 months of technical support (or as per your purchase agreement). Support includes Bug fixes, Installation help, and Basic troubleshooting.</p>
        <p className={styles.p}>Support does not include Custom feature development, Server management, or Third-party plugin conflicts. Paid support packages are available.</p>

        <h4 className={styles.h4}>6. Data Responsibility</h4>
        <p className={styles.p}>Because SalonWare is self-hosted: You are fully responsible for securing your user, staff, and customer data. We do not store or access your operational data. We cannot be held liable for breaches resulting from your hosting provider or server misconfiguration.</p>

        <h4 className={styles.h4}>7. Intellectual Property</h4>
        <p className={styles.p}>All branding, UI design, copyright text, and original features remain the intellectual property of SalonWare.</p>

        <h4 className={styles.h4}>8. Limitation of Liability</h4>
        <p className={styles.p}>To the maximum extent permitted by law, we are not responsible for any data loss, business damages, revenue loss, or downtime. Software is provided “as is” without warranty of uninterrupted operation.</p>

        <h4 className={styles.h4}>9. Termination</h4>
        <p className={styles.p}>We may terminate your license if you violate the terms, engage in fraud or abuse, or redistribute/resell the code illegally. Upon termination, you must stop using and delete the software.</p>

        <h4 className={styles.h4}>10. Governing Law</h4>
        <p className={styles.p}>These terms are governed by UK Law (for clients purchasing in the UK) or Indian Law (for company jurisdiction). Any disputes will be handled under these applicable laws.</p>

        <h4 className={styles.h4}>11. Contact Information</h4>
        <p className={styles.p}>📧 Email: support@salonware.com</p>
      </div>
    );
  }

  if (type === 'refund') {
    return (
      <div className="text-sm">
        <p className={styles.header}>Last Updated: {currentDate}</p>
        <p className={styles.p}>Because SalonWare is a digital software product, refunds are handled under strict conditions.</p>

        <h4 className={styles.h4}>1. 30-Day Refund Guarantee</h4>
        <p className={styles.p}>You are eligible for a refund within 30 days of purchase if:</p>
        <ul className={styles.ul}>
          <li>The software does not install as described</li>
          <li>Our support team is unable to resolve a genuine technical issue</li>
          <li>The product is completely unusable in your environment</li>
        </ul>
        <p className={styles.p}>Refunds will NOT be issued if:</p>
        <ul className={styles.ul}>
          <li>You changed your mind</li>
          <li>You purchased by mistake</li>
          <li>You expected features not listed in our description</li>
          <li>Your hosting/server does not meet requirements</li>
          <li>You refuse to cooperate with support for troubleshooting</li>
        </ul>

        <h4 className={styles.h4}>2. Non-Refundable Conditions</h4>
        <p className={styles.p}>No refunds will be granted after:</p>
        <ul className={styles.ul}>
          <li>You have downloaded the full source code</li>
          <li>You have successfully installed the software</li>
          <li>You have used or modified the files</li>
          <li>30 days have passed since purchase</li>
        </ul>
        <p className={styles.p}>This is standard industry policy for downloadable software.</p>

        <h4 className={styles.h4}>3. Exchanges</h4>
        <p className={styles.p}>In rare cases, we may offer a replacement build, a debugged version, or extended support. This is not guaranteed and evaluated case-by-case.</p>

        <h4 className={styles.h4}>4. Refund Process</h4>
        <p className={styles.p}>To request a refund: Email support@salonware.com, provide your order number and reason, and include screenshots or error logs if applicable. If approved, refunds are processed to the same payment method used during purchase.</p>

        <h4 className={styles.h4}>5. Contact Us</h4>
        <p className={styles.p}>For refund or billing issues: info@accuwisetech.com</p>
      </div>
    );
  }

  return null;
};

/* --- MODAL COMPONENTS --- */

const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      <div 
        className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>
      <div className="relative w-full max-w-2xl bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl flex flex-col max-h-[90vh]">
        <div className="flex justify-between items-center p-6 border-b border-slate-800">
          <h3 className="text-2xl font-bold text-white">{title}</h3>
          <button 
            onClick={onClose}
            className="text-slate-400 hover:text-white transition-colors hover:bg-slate-800 p-2 rounded-full"
          >
            <X size={24} />
          </button>
        </div>
        <div className="p-6 overflow-y-auto custom-scrollbar">
          {children}
        </div>
      </div>
    </div>
  );
};

const FormInput = ({ label, type = "text", placeholder, required = true }) => (
  <div className="mb-4">
    <label className="block text-sm font-medium text-slate-400 mb-1">{label} {required && <span className="text-rose-500">*</span>}</label>
    <input 
      type={type} 
      className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-rose-500 focus:ring-1 focus:ring-rose-500 transition-all"
      placeholder={placeholder}
      required={required}
    />
  </div>
);

const FormSelect = ({ label, options, required = true, onChange, value }) => (
  <div className="mb-4">
    <label className="block text-sm font-medium text-slate-400 mb-1">{label} {required && <span className="text-rose-500">*</span>}</label>
    <div className="relative">
      <select 
        defaultValue={value === undefined ? "" : undefined}
        value={value}
        onChange={onChange}
        className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white appearance-none focus:outline-none focus:border-rose-500 focus:ring-1 focus:ring-rose-500 transition-all"
      >
        <option value="" disabled>Select an option</option>
        {options.map((opt, i) => <option key={i} value={opt}>{opt}</option>)}
      </select>
      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none" size={16} />
    </div>
  </div>
);

const FormTextarea = ({ label, placeholder, rows = 3 }) => (
  <div className="mb-4">
    <label className="block text-sm font-medium text-slate-400 mb-1">{label}</label>
    <textarea 
      className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-rose-500 focus:ring-1 focus:ring-rose-500 transition-all"
      placeholder={placeholder}
      rows={rows}
    ></textarea>
  </div>
);
//Get Your Software form


const PurchaseForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    businessName: "",
    phoneNumber: "",
    email: "",
    country: "",
    city: "",
    businessType: "",
    numberOfBranches: "",
    websiteIntegration: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:9000/api/leads", formData);
      alert("Lead submitted successfully!");
      console.log("SUCCESS:", res.data);
    } catch (error) {
      console.log("BACKEND ERROR:", error.response?.data);
      alert(error.response?.data?.message || "Error submitting form");
    }
  };

  return (
    
    <form onSubmit={handleSubmit} className="space-y-4">

      {/* FULL NAME / BUSINESS NAME */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className='opacity-50'>Full Name</label>
          <input
            type="text"
            name="fullName"
            placeholder="Sarah Smith"
            value={formData.fullName}
            onChange={handleChange}
            className="border px-3 py-2 rounded w-full"
          />
        </div>

        <div>
          <label className='opacity-50'>Business Name</label>
          <input
            type="text"
            name="businessName"
            placeholder="Posh Parlour London"
            value={formData.businessName}
            onChange={handleChange}
            className="border px-3 py-2 rounded w-full"
          />
        </div>
      </div>

      {/* PHONE / EMAIL */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className='opacity-50'>Phone Number</label>
          <input
            type="tel"
            name="phoneNumber"
            placeholder="+44 7700 900000"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="border px-3 py-2 rounded w-full"
          />
        </div>

        <div>
          <label className='opacity-50'>Email Address</label>
          <input
            type="email"
            name="email"
            placeholder="sarah@example.co.uk"
            value={formData.email}
            onChange={handleChange}
            className="border px-3 py-2 rounded w-full"
          />
        </div>
      </div>

      {/* COUNTRY / CITY */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className='opacity-50'>Country</label>
          <input
            type="text"
            name="country"
            placeholder="United Kingdom"
            value={formData.country}
            onChange={handleChange}
            className="border px-3 py-2 rounded w-full"
          />
        </div>

        <div>
          <label className='opacity-50'>City</label>
          <input
            type="text"
            name="city"
            placeholder="London"
            value={formData.city}
            onChange={handleChange}
            className="border px-3 py-2 rounded w-full"
          />
        </div>
      </div>

      {/* TYPE OF BUSINESS / BRANCHES */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className='opacity-50'>Type of Business</label>
          <select
            name="businessType"
            value={formData.businessType}
            onChange={handleChange}
            className="border px-3 py-2 rounded w-full"
          >
            <option value="" className='opacity-50'>Select...</option>
            <option value="Salon" className='text-black'>Salon</option>
            <option value="Nail Studio" className='text-black'>Nail Studio</option>
            <option value="Barbershop" className='text-black'>Barbershop</option>
            <option value="Hair Stylist" className='text-black'>Hair Stylist</option>
            <option value="Gents Parlour" className='text-black'>Gents Parlour</option>
            <option value="Beauty Academy" className='text-black'>Beauty Academy</option>
            <option value="Other" className='text-black'>Other</option>
          </select>
        </div>

        <div>
          <label className='opacity-50'>Number of Branches</label>
          <select
            name="numberOfBranches"
            value={formData.numberOfBranches}
            onChange={handleChange}
            className="border px-3 py-2 rounded w-full"
          >
            <option value="" className='opacity-50'>Select...</option>
            <option value="1" className='text-black'>1</option>
            <option value="2–3" className='text-black'>2–3</option>
            <option value="4–5" className='text-black'>4–5</option>
            <option value="5+" className='text-black'>5+</option>
          </select>
        </div>
      </div>

      {/* WEBSITE INTEGRATION */}
      <div>
        <label className='opacity-50'>Do you want website integration?</label>
        <select
          name="websiteIntegration"
          value={formData.websiteIntegration}
          onChange={handleChange}
          className="border px-3 py-2 rounded w-full "
        >
          <option value="" className='opacity-50'>Select...</option>
          <option value="Yes" className='text-black'>Yes</option>
          <option value="No"className='text-black' >No</option>
        </select>
      </div>

      {/* MESSAGE */}
      <div>
        <label className='opacity-50' >Message / Requirements</label>
        <textarea
          name="message"
          placeholder="Tell us more about your setup..."
          value={formData.message}
          onChange={handleChange}
          className="border px-3 py-2 rounded w-full"
          rows="4"
        ></textarea>
      </div>

      <button className="w-full bg-gradient-to-r from-rose-600 to-amber-600 text-white font-bold py-4 rounded-xl hover:shadow-lg hover:shadow-rose-600/20 transition-all transform hover:-translate-y-1 mt-4">
        👉 Confirm & Get Software Access
      </button>
    </form>
  );
};

//request a demo

const RequestDemoForm = () => {
   const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    businessName: "",
    businessType: "",
    preferredDemoType: "",
    featuresInterested: [],
    questions: ""
  });
   const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:9000/api/demo", formData);
      alert("demo submitted successfully!");
      console.log("SUCCESS:", res.data);
    } catch (error) {
      console.log("BACKEND ERROR:", error.response?.data);
      alert(error.response?.data?.message || "Error submitting form");
    }
  };
  const [demoType, setDemoType] = useState('');

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className='opacity-50'>Full Name</label>
          <input
            type="text"
            name="fullName"
            placeholder="Sarah Smith"
            value={formData.fullName}
            onChange={handleChange}
            className="border px-3 py-2 rounded w-full"
          />
        </div>

        <div>
          <label className='opacity-50'>Business Name</label>
          <input
            type="text"
            name="businessName"
            placeholder="Posh Parlour London"
            value={formData.businessName}
            onChange={handleChange}
            className="border px-3 py-2 rounded w-full"
          />
        </div>
      </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className='opacity-50'>Phone Number</label>
          <input
            type="tel"
            name="phoneNumber"
            placeholder="+44 7700 900000"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="border px-3 py-2 rounded w-full"
          />
        </div>

        <div>
          <label className='opacity-50'>Email Address</label>
          <input
            type="email"
            name="email"
            placeholder="sarah@example.co.uk"
            value={formData.email}
            onChange={handleChange}
            className="border px-3 py-2 rounded w-full"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
       <div>
          <label className='opacity-50'>Type of Business</label>
          <select
            name="businessType"
            value={formData.businessType}
            onChange={handleChange}
            className="border px-3 py-2 rounded w-full"
          >
            <option value="" className='opacity-50 text-black'>Select...</option>
            <option value="Salon" className='text-black'>Salon</option>
            <option value="Nail Studio" className='text-black'>Nail Studio</option>
            <option value="Barbershop" className='text-black'>Barbershop</option>
            <option value="Hair Stylist" className='text-black'>Hair Stylist</option>
            <option value="Gents Parlour" className='text-black'>Gents Parlour</option>
            <option value="Beauty Academy" className='text-black'>Beauty Academy</option>
            <option value="Other" className='text-black'>Other</option>
          </select>
        </div>
       <div>
  <label className="opacity-50">Preferred Demo Type</label>
  <select
    name="preferredDemoType"
    value={formData.preferredDemoType}
    onChange={(e) => {
      handleChange(e); 
      setDemoType(e.target.value);  // keeps old logic
    }}
    className="border px-3 py-2 rounded w-full"
  >
    <option value="" className="opacity-50 text-black">Select...</option>
    <option value="Recorded Video Demo"  className='text-black'>Recorded Video Demo</option>
    <option value="Live Zoom Demo"  className='text-black'>Live Zoom Demo</option>
  </select>
</div>

      </div>

     {demoType === "Live Zoom Demo" && (
  <div className="animate-in fade-in slide-in-from-top-2 duration-300">
    <label className="opacity-50">Preferred Time Slot (UK Time)</label>
    <select
      name="preferredTimeSlot"
      value={formData.preferredTimeSlot}
      onChange={handleChange}
      className="border px-3 py-2 rounded w-full"
    >
      <option value="" className="opacity-20 text-black">Select...</option>
      <option value="10:00 AM" className='text-black'>10:00 AM</option>
      <option value="11:00 AM" className='text-black'>11:00 AM</option>
      <option value="1:00 PM"className='text-black'>1:00 PM</option>
      <option value="2:00 PM" className='text-black'>2:00 PM</option>
      <option value="4:00 PM" className='text-black'>4:00 PM</option>
      <option value="5:00 PM" className='text-black'>5:00 PM</option>
    </select>
  </div>
)}

      
      <div className="mb-4">
  <label className="block text-sm font-medium text-slate-400 mb-2">
    What features are you most interested in?
  </label>
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
    {[
      "Appointment Booking",
      "Staff & Services",
      "Branch Management",
      "Portfolio/Gallery",
      "Payments & Billing",
      "Attendance & Payouts",
      "Customer Panel",
    ].map((feature) => (
      <label
        key={feature}
        className="flex items-center space-x-2 text-sm text-slate-300 cursor-pointer p-2 rounded hover:bg-slate-800 transition"
      >
        <input
          type="checkbox"
          name="featuresInterested"
          value={feature}
          checked={formData.featuresInterested.includes(feature)}
          onChange={(e) => {
            const { value, checked } = e.target;
            let updatedFeatures = [...formData.featuresInterested];
            if (checked) {
              updatedFeatures.push(value);
            } else {
              updatedFeatures = updatedFeatures.filter((f) => f !== value);
            }
            setFormData({ ...formData, featuresInterested: updatedFeatures });
          }}
          className="rounded border-slate-600 bg-slate-800 text-rose-600 focus:ring-rose-500"
        />
        <span>{feature}</span>
      </label>
    ))}
  </div>
</div>


      <div>
        <label className='opacity-50' >Message / Requirements</label>
        <textarea
          name="questions"
          placeholder="Tell us more about your setup..."
          value={formData.questions}
          onChange={handleChange}
          className="border px-3 py-2 rounded w-full"
          rows="4"
          border="none"
        ></textarea>
      </div>
      
      <button className="w-full bg-slate-800 border border-slate-600 text-white font-bold py-4 rounded-xl hover:bg-slate-700 transition-all mt-4">
        👉 Request Demo
      </button>
    </form>
  );
};


const ScheduleLiveDemoForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    businessName: "",
    countryTimezone: "",
    preferredDate: "",
    preferredTimeSlot: "",
    teamMembers: "",
    focus: ""
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await fetch("http://localhost:9000/api/schedule", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        setMessage(data.message || "Something went wrong!");
      } else {
        setMessage("Demo scheduled successfully!");
        setFormData({
          fullName: "",
          phoneNumber: "",
          email: "",
          businessName: "",
          countryTimezone: "",
          preferredDate: "",
          preferredTimeSlot: "",
          teamMembers: "",
          focus: ""
        });
      }
    } catch (err) {
      console.error(err);
      setMessage("Error submitting the form.");
    }

    setLoading(false);
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          placeholder="Full Name"
          className="border px-3 py-2 rounded w-full"
          required
        />
        <input
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          placeholder="+44 7700 900000"
          type="tel"
          className="border px-3 py-2 rounded w-full"
          required
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email Address"
          type="email"
          className="border px-3 py-2 rounded w-full"
        />
        <input
          name="businessName"
          value={formData.businessName}
          onChange={handleChange}
          placeholder="Business Name"
          className="border px-3 py-2 rounded w-full"
        />
      </div>

      <input
        name="countryTimezone"
        value={formData.countryTimezone}
        onChange={handleChange}
        placeholder="Country & Timezone"
        className="border px-3 py-2 rounded w-full"
        required
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          name="preferredDate"
          value={formData.preferredDate}
          onChange={handleChange}
          type="date"
          className="border px-3 py-2 rounded w-full"
          required
        />

        <select
          name="preferredTimeSlot"
          value={formData.preferredTimeSlot}
          onChange={handleChange}
          className="border px-3 py-2 rounded w-full"
          required
        >
          <option value="">Select Time Slot</option>
          {["10:00 AM", "11:00 AM", "1:00 PM", "2:00 PM", "4:00 PM", "5:00 PM"].map(slot => (
            <option key={slot} value={slot}>{slot}</option>
          ))}
        </select>
      </div>

      <select
        name="teamMembers"
        value={formData.teamMembers}
        onChange={handleChange}
        className="border px-3 py-2 rounded w-full"
        required
      >
        <option value="">Number of Team Members</option>
        {["Just Me", "2", "3–5", "5+"].map(team => (
          <option key={team} value={team}>{team}</option>
        ))}
      </select>

      <textarea
        name="focus"
        value={formData.focus}
        onChange={handleChange}
        placeholder="What should we focus on?"
        className="border px-3 py-2 rounded w-full"
      />

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold py-4 rounded-xl hover:shadow-lg hover:shadow-emerald-600/20 transition-all transform hover:-translate-y-1 mt-4"
      >
        {loading ? "Scheduling..." : "👉 Schedule Live Demo"}
      </button>

      {message && <p className="mt-2 text-center">{message}</p>}
    </form>
  );
};




/* --- SUB-COMPONENTS --- */

const DashboardMockup = () => (
  <div className="animate-float relative rounded-xl overflow-hidden shadow-2xl bg-slate-900 border border-slate-700 aspect-[16/9] w-full max-w-4xl mx-auto transform transition-transform hover:scale-[1.01] duration-500">
    <div className="bg-slate-950 h-8 flex items-center px-4 space-x-2 border-b border-slate-800">
      <div className="w-3 h-3 rounded-full bg-red-400"></div>
      <div className="w-3 h-3 rounded-full bg-amber-400"></div>
      <div className="w-3 h-3 rounded-full bg-green-400"></div>
    </div>
    <div className="flex h-full">
      <div className="w-16 md:w-48 bg-slate-900 border-r border-slate-800 p-4 hidden sm:flex flex-col gap-4">
        <div className="h-8 bg-slate-800 rounded w-3/4 mb-4"></div>
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="flex items-center gap-3">
            <div className="w-6 h-6 bg-slate-800 rounded-full"></div>
            <div className="h-4 bg-slate-800 rounded w-full hidden md:block"></div>
          </div>
        ))}
      </div>
      <div className="flex-1 p-6 bg-slate-950/50">
        <div className="flex justify-between items-center mb-8">
          <div>
            <div className="h-6 w-32 bg-slate-800 rounded mb-2"></div>
            <div className="h-4 w-48 bg-slate-800/50 rounded"></div>
          </div>
          <div className="h-10 w-10 rounded-full bg-rose-500/20"></div>
        </div>
        <div className="grid grid-cols-3 gap-4 mb-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-slate-900 p-4 rounded-lg shadow-sm border border-slate-800">
              <div className="h-8 w-8 rounded bg-rose-900/30 mb-2"></div>
              <div className="h-6 w-16 bg-slate-800 rounded mb-1"></div>
              <div className="h-4 w-12 bg-slate-800/50 rounded"></div>
            </div>
          ))}
        </div>
        <div className="bg-slate-900 rounded-lg shadow-sm border border-slate-800 p-4 h-full">
           <div className="flex justify-between mb-4">
              <div className="h-4 w-24 bg-slate-800 rounded"></div>
              <div className="h-8 w-24 bg-slate-950 rounded"></div>
           </div>
           {[1, 2, 3, 4].map(i => (
             <div key={i} className="h-12 border-b border-slate-800 flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-slate-800"></div>
                <div className="flex-1 h-3 bg-slate-800 rounded"></div>
                <div className="w-20 h-6 bg-green-900/20 rounded-full"></div>
             </div>
           ))}
        </div>
      </div>
    </div>
  </div>
);




const FeatureCard = ({ icon: Icon, title, desc }) => (
  // Added h-full and flex flex-col to ensure uniform height
  <div className="h-full p-6 bg-slate-900 rounded-2xl shadow-lg border border-slate-800 hover:border-rose-500/30 hover:shadow-rose-500/10 transition-all duration-300 hover:-translate-y-1 group flex flex-col">
    <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center text-rose-500 mb-4 group-hover:bg-rose-600 group-hover:text-white transition-colors duration-300">
      <Icon size={24} />
    </div>
    <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
    {/* Added flex-1 to push any potential footer content down, ensuring consistent spacing */}
    <p className="text-slate-400 leading-relaxed flex-1">{desc}</p>
  </div>
);

const AudienceCard = ({ icon: Icon, label }) => (
  <div className="flex flex-col items-center justify-center p-6 bg-slate-800/40 backdrop-blur-md rounded-2xl border border-slate-700/50 shadow-sm hover:bg-slate-800 hover:border-rose-500/50 transition-all group">
    <Icon size={32} className="text-slate-400 mb-3 group-hover:text-rose-400 transition-colors" />
    <span className="font-semibold text-slate-300 group-hover:text-white transition-colors">{label}</span>
  </div>
);

const PanelCard = ({ title, role, items, colorClass, borderColor }) => (
  <div className={`bg-slate-900 rounded-2xl overflow-hidden shadow-lg border ${borderColor} flex flex-col h-full hover:shadow-xl transition-shadow`}>
    <div className={`p-6 ${colorClass} text-white`}>
      <h3 className="text-2xl font-bold">{title}</h3>
      <p className="opacity-90 text-sm mt-1">{role}</p>
    </div>
    <div className="p-6 flex-1 bg-slate-950/30">
      <ul className="space-y-3">
        {items.map((item, idx) => (
          <li key={idx} className="flex items-start text-slate-400">
            <CheckCircle2 size={18} className="mr-2 mt-1 text-green-500 flex-shrink-0" />
            <span className="text-sm">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-slate-800 last:border-0">
      <button 
        className="flex justify-between items-center w-full py-5 text-left focus:outline-none group"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium text-slate-200 group-hover:text-rose-400 transition-colors">{question}</span>
        <ChevronDown className={`transform transition-transform duration-300 text-rose-500 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100 pb-5' : 'max-h-0 opacity-0'}`}>
        <p className="text-slate-400 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
};

/* --- MAIN APP COMPONENT --- */

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeModal, setActiveModal] = useState(null); 

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const closeModal = () => setActiveModal(null);

  // Helper to determine modal title
  const getModalTitle = (type) => {
    switch(type) {
      case 'purchase': return 'Get Your Software';
      case 'requestDemo': return 'Request a Demo';
      case 'scheduleDemo': return 'Schedule Live Demo';
      case 'privacy': return 'Privacy Policy';
      case 'terms': return 'Terms of Use';
      case 'refund': return 'Refund Policy';
      default: return '';
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 font-sans text-slate-200 selection:bg-rose-500/30 selection:text-rose-200">
      {/* <h1 class="text-4xl text-red-500">Tailwind Working</h1> */}

      {/* Custom Styles */}
      <style>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
          100% { transform: translateY(0px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        /* Custom Scrollbar for Modal */
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #1e293b; 
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #475569; 
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #64748b; 
        }
      `}</style>

      {/* --- MODALS --- */}
      {/* Consolidated Modal rendering logic */}
      <Modal isOpen={!!activeModal} onClose={closeModal} title={getModalTitle(activeModal)}>
        {activeModal === 'purchase' && <PurchaseForm />}
        {activeModal === 'requestDemo' && <RequestDemoForm />}
        {activeModal === 'scheduleDemo' && <ScheduleLiveDemoForm />}
        {['privacy', 'terms', 'refund'].includes(activeModal) && <LegalDocContent type={activeModal} />}
      </Modal>

      {/* --- NAVBAR --- */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/90 backdrop-blur-md shadow-lg border-b border-slate-800 py-3' : 'bg-transparent py-5'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
            <div className="w-8 h-8 bg-rose-600 rounded-lg flex items-center justify-center text-white shadow-lg shadow-rose-600/20">
              <Scissors size={18} />
            </div>
            Salon<span className="text-rose-500">Ware</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {['Features', 'Panels', 'Benefits', 'FAQ'].map((item) => (
              <button 
                key={item} 
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-slate-400 hover:text-white font-medium transition-colors"
              >
                {item}
              </button>
            ))}
          </div>

          <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-slate-900 border-t border-slate-800 shadow-xl p-4 flex flex-col space-y-4 md:hidden">
            {['Features', 'Panels', 'Benefits', 'FAQ'].map((item) => (
              <button 
                key={item} 
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-left text-slate-300 font-medium py-2 hover:text-white"
              >
                {item}
              </button>
            ))}
            <button 
              onClick={() => { setActiveModal('purchase'); setMobileMenuOpen(false); }}
              className="bg-rose-600 text-white px-6 py-3 rounded-lg font-bold w-full"
            >
              Get Software
            </button>
          </div>
        )}
      </nav>

      {/* --- SECTION 1: HERO --- */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-slate-950">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-rose-900/20 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-0 left-0 -ml-20 -mt-20 w-[600px] h-[600px] bg-indigo-900/20 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <Reveal>
              <span className="inline-block py-1 px-3 rounded-full bg-rose-900/30 border border-rose-500/30 text-rose-300 text-sm font-bold tracking-wide mb-6">
                LIFETIME LICENCE • NO MONTHLY FEES
              </span>
              <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6 drop-shadow-sm">
                The All-In-One <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-amber-500">
                  Salon Management System
                </span>
              </h1>
              <p className="text-xl text-slate-400 mb-8 max-w-2xl mx-auto leading-relaxed">
                Take full control of your beauty business with a complete booking, staff, and management suite. Installed on your server. 100% GDPR Compliant.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button 
                  onClick={() => setActiveModal('purchase')}
                  className="bg-rose-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-rose-500 transition-all shadow-lg shadow-rose-600/20 flex items-center justify-center gap-2 hover:scale-105"
                >
                  <Monitor size={20} /> Get Your Software
                </button>
                <button 
                  onClick={() => setActiveModal('requestDemo')}
                  className="bg-slate-800 text-white border border-slate-700 px-8 py-4 rounded-full font-bold text-lg hover:bg-slate-700 transition-all flex items-center justify-center gap-2"
                >
                  <LayoutDashboard size={20} /> Request Demo
                </button>
              </div>
            </Reveal>
          </div>

          <Reveal delay={200}>
            <DashboardMockup />
          </Reveal>
        </div>
      </section>

      {/* --- SECTION 2: WHO THIS IS FOR --- */}
      <section className="py-16 bg-slate-950 border-y border-slate-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-10">
            <p className="text-slate-500 font-medium uppercase tracking-widest text-sm">Built exclusively for</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            <AudienceCard icon={Scissors} label="Salons" />
            <AudienceCard icon={Sparkles} label="Nail Studios" />
            <AudienceCard icon={Users} label="Barbershops" />
            <AudienceCard icon={Briefcase} label="Hair Stylists" />
            <AudienceCard icon={TrendingUp} label="Gents Parlours" />
          </div>
        </div>
      </section>

      {/* --- SECTION 3: CORE FEATURES --- */}
      <section id="features" className="py-24 bg-slate-950">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Everything You Need to Run Your Salon</h2>
            <p className="text-slate-400 text-lg">Powerful features wrapped in a beautiful, easy-to-use interface.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Reveal delay={0} className="h-full">
              <FeatureCard 
                icon={CalendarCheck} 
                title="Smart Booking" 
                desc="Flexible time-slot booking system with instant confirmations and conflict detection."
              />
            </Reveal>
            <Reveal delay={100} className="h-full">
              <FeatureCard 
                icon={Users} 
                title="Staff Management" 
                desc="Organize services, assign staff, set individual schedules, break times, and commissions."
              />
            </Reveal>
            <Reveal delay={200} className="h-full">
              <FeatureCard 
                icon={Image} 
                title="Portfolio Showcase" 
                desc="Display your best hairstyles, nail designs, and before/after images in a stunning gallery."
              />
            </Reveal>
            <Reveal delay={300} className="h-full">
              <FeatureCard 
                icon={Bell} 
                title="Auto Notifications" 
                desc="Automated email notifications for bookings, cancellations, reminders, and updates."
              />
            </Reveal>
            <Reveal delay={400} className="h-full">
              <FeatureCard 
                icon={Settings} 
                title="Customisable Theme" 
                desc="Change branding, logos, colours, and layout settings to match your salon's identity."
              />
            </Reveal>
            <Reveal delay={500} className="h-full">
              <FeatureCard 
                icon={Monitor} 
                title="Customer Panel" 
                desc="A dedicated portal for clients to book, view history, download invoices, and leave feedback."
              />
            </Reveal>
            <Reveal delay={600} className="h-full">
              <FeatureCard 
                icon={LayoutDashboard} 
                title="Admin Dashboard" 
                desc="Track bookings, revenue, staff activity, and branch performance in real-time."
              />
            </Reveal>
            <Reveal delay={700} className="h-full">
              <FeatureCard 
                icon={Shield} 
                title="GDPR Compliant" 
                desc="Self-hosted means you keep full control of customer data, ensuring compliance with UK data laws."
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* --- SECTION 4: WHAT YOU GET (PANELS) --- */}
      <section id="panels" className="py-24 bg-slate-900/50 relative">
        <div className="container mx-auto px-6">
           <div className="text-center mb-16">
             <h2 className="text-4xl font-bold text-white">4 Powerful Panels Included</h2>
             <p className="text-slate-400 mt-4">One software installation, four distinct roles.</p>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
             <Reveal delay={0}>
               <PanelCard 
                 title="Admin" 
                 role="The Owner" 
                 colorClass="bg-slate-800"
                 borderColor="border-slate-700"
                 items={['Full Business Control', 'Manage Branches', 'Financial Reports', 'Staff Settings', 'System Config']}
               />
             </Reveal>
             <Reveal delay={150}>
               <PanelCard 
                 title="Manager" 
                 role="Operations Head" 
                 colorClass="bg-rose-700"
                 borderColor="border-rose-900/30"
                 items={['Daily Operations', 'Booking Oversight', 'Customer Handling', 'Gallery Updates', 'Inventory Check']}
               />
             </Reveal>
             <Reveal delay={300}>
               <PanelCard 
                 title="Staff" 
                 role="Stylists & Barbers" 
                 colorClass="bg-amber-700"
                 borderColor="border-amber-900/30"
                 items={['View Schedule', 'Check Appointments', 'Track Commissions', 'Mark Attendance', 'Availability Status']}
               />
             </Reveal>
             <Reveal delay={450}>
               <PanelCard 
                 title="Customer" 
                 role="Your Clients" 
                 colorClass="bg-emerald-700"
                 borderColor="border-emerald-900/30"
                 items={['Book Online', 'Choose Staff', 'View Invoices', 'Rate Services', 'Mobile Friendly']}
               />
             </Reveal>
           </div>
        </div>
      </section>

      {/* --- SECTION 5: CUSTOMER FEATURES --- */}
      <section className="py-20 bg-slate-950 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
               <Reveal>
                 <div className="bg-slate-900 p-8 rounded-3xl shadow-2xl relative border border-slate-800">
                    <div className="absolute top-4 right-4 w-3 h-3 bg-red-400 rounded-full animate-ping"></div>
                    <div className="space-y-6">
                      <div className="flex items-center gap-4 border-b border-slate-800 pb-4">
                        <div className="w-12 h-12 rounded-full bg-slate-800"></div>
                        <div>
                           <div className="h-4 w-32 bg-slate-800 rounded mb-2"></div>
                           <div className="h-3 w-20 bg-slate-800/50 rounded"></div>
                        </div>
                      </div>
                      <div className="h-32 bg-slate-950 rounded-xl border border-dashed border-slate-700 flex items-center justify-center text-slate-600">
                        Book Appointment UI
                      </div>
                      <div className="flex gap-2">
                        <div className="h-10 flex-1 bg-rose-600 rounded-lg"></div>
                        <div className="h-10 w-10 bg-slate-800 rounded-lg"></div>
                      </div>
                    </div>
                 </div>
               </Reveal>
            </div>
            <div className="lg:w-1/2">
              <Reveal delay={200}>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">A Premium Experience for Your Clients</h2>
                <ul className="space-y-6">
                  {[
                    "Seamless Online Booking: Clients can book 24/7 from any device.",
                    "Staff Selection: Let them choose their favorite stylist.",
                    "Transparent History: Easy access to past bookings and invoices.",
                    "Automated Reminders: Reduce no-shows with email alerts.",
                    "Visual Gallery: Inspire them with your portfolio before they book."
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start text-lg text-slate-300">
                      <CheckCircle2 className="text-rose-500 mr-3 mt-1 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 6: ADMIN FEATURES --- */}
      <section className="py-24 bg-slate-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Advanced Business Management</h2>
            <p className="text-slate-400 mt-4">Deep control for single salons or multi-branch franchises.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10">
            {[
              { title: "Branch Management", desc: "Add branches, assign managers, and compare performance across locations.", icon: MapPin },
              { title: "Revenue Tracking", desc: "Detailed daily, weekly, and monthly revenue insights and charts.", icon: TrendingUp },
              { title: "Staff Attendance", desc: "Digital check-in/out, work hours tracking, and leave management.", icon: CalendarCheck },
              { title: "Automated Payouts", desc: "Automatic calculation of staff commissions and incentives.", icon: CreditCard },
              { title: "Service Control", desc: "Update service menu, pricing, and duration instantly.", icon: Scissors },
              { title: "Appointment Filter", desc: "Filter view by staff, date, branch, status, or service type.", icon: check => <Server size={24} /> },
              { title: "Media Manager", desc: "Upload high-res portfolio images and organize galleries.", icon: Image },
              { title: "Timings & Holidays", desc: "Configure global or branch-wise business hours and off-days.", icon: CalendarCheck },
              { title: "SEO Settings", desc: "Modify meta titles, descriptions, and site content for better ranking.", icon: Settings },
            ].map((feature, idx) => (
              <Reveal key={idx} delay={idx * 50}>
                <div className="flex gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-rose-500 flex-shrink-0 group-hover:bg-rose-500 group-hover:text-white transition-colors">
                    <feature.icon size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-lg">{feature.title}</h4>
                    <p className="text-slate-400 text-sm leading-relaxed mt-1">{feature.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION 7: WHY CHOOSE --- */}
      <section id="benefits" className="py-20 bg-slate-950 text-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <Reveal>
                <h2 className="text-4xl font-bold mb-6">Why Owners Love Us?</h2>
                <div className="space-y-8">
                  <div className="flex items-start">
                    <div className="p-3 bg-slate-800 rounded-lg mr-4 border border-slate-700">
                      <CreditCard className="text-amber-400" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">One-Time Purchase</h3>
                      <p className="text-slate-400">Stop paying monthly subscriptions. Buy it once, own it forever. No hidden renewal fees.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="p-3 bg-slate-800 rounded-lg mr-4 border border-slate-700">
                      <Server className="text-rose-400" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Self-Hosted & GDPR Secure</h3>
                      <p className="text-slate-400">Your data lives on your server. Essential for UK data privacy compliance. We don't have access to your client list.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="p-3 bg-slate-800 rounded-lg mr-4 border border-slate-700">
                      <Settings className="text-blue-400" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">100% Customisable</h3>
                      <p className="text-slate-400">Since you own the code, you can request custom changes or modify it to fit your exact workflow.</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
            
            <div className="relative">
               <div className="absolute inset-0 bg-gradient-to-r from-rose-600 to-amber-600 rounded-2xl transform rotate-3 opacity-20 blur-lg"></div>
               <div className="relative bg-slate-900 border border-slate-700 p-8 rounded-2xl shadow-2xl">
                  <h3 className="text-2xl font-bold mb-6 text-center">Cost Comparison</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-4 bg-slate-800 rounded-lg border border-slate-700">
                      <span>SaaS Competitors</span>
                      <span className="text-red-400 font-mono">£40 - £120 / month</span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-slate-800 rounded-lg border border-slate-700">
                      <span>Yearly Cost (SaaS)</span>
                      <span className="text-red-400 font-mono">£480 - £1440 / year</span>
                    </div>
                    <div className="h-px bg-slate-700 my-4"></div>
                    <div className="flex justify-between items-center p-6 bg-gradient-to-r from-rose-600 to-amber-600 rounded-lg shadow-lg transform scale-105">
                      <span className="font-bold text-lg">SalonWare Lifetime</span>
                      <span className="font-bold text-2xl font-mono">£1499 Once</span>
                    </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 8: TESTIMONIALS --- */}
      <section className="py-24 bg-slate-900">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-12">Trusted by UK Studios</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {[
               { name: "Sarah Jenkins", role: "Owner, Luxe Nails London", text: "The booking system is flawless. My clients love that they can pick their specific nail tech." },
               { name: "Marc Davies", role: "Founder, Blade Barbers Manchester", text: "Finally, software that doesn't charge me monthly. The staff commission tracking saves me hours every week." },
               { name: "Elena R.", role: "Manager, Glow Spa Birmingham", text: "Setting it up on our domain was easy with their support. It looks so professional." }
             ].map((t, i) => (
               <Reveal key={i} delay={i * 100}>
                 <div className="bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-700">
                   <div className="flex justify-center mb-4 text-amber-400">
                     {[1,2,3,4,5].map(star => <Star key={star} size={16} fill="currentColor" />)}
                   </div>
                   <p className="text-slate-300 italic mb-6">"{t.text}"</p>
                   <div>
                     <h4 className="font-bold text-white">{t.name}</h4>
                     <span className="text-sm text-slate-500">{t.role}</span>
                   </div>
                 </div>
               </Reveal>
             ))}
          </div>
        </div>
      </section>

      {/* --- SECTION 9: FAQ --- */}
      <section id="faq" className="py-24 bg-slate-950">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-2">
            <FAQItem 
              question="How does the 'One-Time Purchase' work?" 
              answer="You pay a single fee to download the source code and files. You install it on your hosting, and it works forever without any monthly subscription fees." 
            />
            <FAQItem 
              question="Do I need a server or hosting?" 
              answer="Yes. Since this is self-hosted software, you need a domain name (e.g., yoursalon.co.uk) and a standard hosting plan (cPanel, VPS, or Cloud). We can help you set this up." 
            />
            <FAQItem 
              question="What happens if I need support?" 
              answer="We offer 6 months of free technical support with your purchase. After that, we offer optional paid support packages if you need specific help." 
            />
            <FAQItem 
              question="Can I customise the colours and logo?" 
              answer="Absolutely. The admin panel allows you to upload your logo, change the primary colour scheme, and update text to match your brand identity." 
            />
            <FAQItem 
              question="Is my client data safe?" 
              answer="Yes, safer than cloud apps! You own the database. Your client list is stored on your own private server, ensuring you remain in control of GDPR compliance." 
            />
          </div>
        </div>
      </section>

      {/* --- SECTION 10: FINAL CTA --- */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 invert"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-rose-600 rounded-full mix-blend-screen filter blur-3xl opacity-10"></div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <Reveal>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Transform Your Salon Into a <br />
              <span className="text-rose-500">Fully Automated Business</span>
            </h2>
            <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
              Stop renting your software. Start owning your success. <br/>
              Join hundreds of smart salon owners today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button 
                onClick={() => setActiveModal('purchase')}
                className="bg-gradient-to-r from-rose-600 to-amber-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-[0_0_30px_rgba(225,29,72,0.6)] transition-all transform hover:-translate-y-1"
              >
                Buy Software Now - £1499
              </button>
              <button 
                onClick={() => setActiveModal('scheduleDemo')}
                className="bg-transparent border border-slate-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-slate-800 transition-all"
              >
                Schedule Live Demo
              </button>
            </div>
            <p className="text-slate-500 mt-6 text-sm">Includes Installation Guide • 30-Day Money Back Guarantee</p>
          </Reveal>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-800">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-1 md:col-span-1">
              <div className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Scissors size={20} className="text-rose-600" /> SalonWare
              </div>
              <p className="text-sm">Premium, self-hosted management solutions for the beauty industry.</p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Product</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-rose-500 transition">Features</a></li>
                <li><a href="#" className="hover:text-rose-500 transition">Pricing</a></li>
                <li><a href="#" className="hover:text-rose-500 transition">Changelog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <button onClick={() => setActiveModal('privacy')} className="hover:text-rose-500 transition text-left">
                    Privacy Policy
                  </button>
                </li>
                <li>
                  <button onClick={() => setActiveModal('terms')} className="hover:text-rose-500 transition text-left">
                    Terms of Use
                  </button>
                </li>
                <li>
                  <button onClick={() => setActiveModal('refund')} className="hover:text-rose-500 transition text-left">
                    Refund Policy
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2"><Mail size={14} /> support@salonware.com</li>
                <li className="flex items-center gap-2"><Phone size={14} /> +44 7700 900000</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-xs">
            &copy; {new Date().getFullYear()} SalonWare Systems. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
