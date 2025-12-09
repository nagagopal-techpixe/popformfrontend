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