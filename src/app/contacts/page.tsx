export default function Contacts() {
  async function submitForm(formData: FormData) {
    "use server";
    const formFields = {
      email: formData.get("email"),
      message: formData.get("message"),
    };

    console.log("Form submitted", formFields);
  }
  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md">
      <h1 className="text-2xl font-bold mb-6">Contacts info!!</h1>
      <form action={submitForm} className="space-y-4">
        <div>
          <label
            className="block text-sm text-gray-700 font-medium"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="text-black border border-grey-300 focus:ring-2 focus:ring-blue-400 focus:border-blue-50"
            id="email"
            type="email"
            name="email"
            required
            placeholder="Enter your email"
          />
        </div>
        <div>
          <label
            className="block text-sm text-gray-700 font-medium"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            className="text-black border border-grey-300 focus:ring-2 focus:ring-blue-400 focus:border-blue-500"
            id="textarea"
            name="message"
            required
            rows={4}
            placeholder="Write your message here..."
          />
        </div>
        <button type="submit" className="p-3 bg-blue-600 text-white rounded-md">
          Send message
        </button>
      </form>
    </div>
  );
}
