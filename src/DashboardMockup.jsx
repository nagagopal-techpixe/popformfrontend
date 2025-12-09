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