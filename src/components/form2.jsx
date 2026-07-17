import { useState } from "react";

function SignupForm() {
  // State
  const [form, setForm] = useState({
    email: "",
    password: "",
    isSubscribed: false,
  });

  // Handles all input changes
  function handleChange(e) {
    const { name, value, type, checked } = e.target;

    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  }

  return (
    <div>
      <h2>Signup Form</h2>

      <form>
        {/* Email Input */}
        <div>
          <label>Email:</label>
          <br />
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={form.email}
            onChange={handleChange}
          />
        </div>

        <br />

        {/* Password Input */}
        <div>
          <label>Password:</label>
          <br />
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={form.password}
            onChange={handleChange}
          />
        </div>

        <br />

        {/* Checkbox */}
        <div>
          <label>
            <input
              type="checkbox"
              name="isSubscribed"
              checked={form.isSubscribed}
              onChange={handleChange}
            />
            Subscribe to Newsletter
          </label>
        </div>

        <br />

        <button type="submit">Sign Up</button>
      </form>

      <hr />

      <h3>Current State</h3>

      <p>
        <strong>Email:</strong> {form.email}
      </p>

      <p>
        <strong>Password:</strong> {form.password}
      </p>

      <p>
        <strong>Subscribed:</strong>{" "}
        {form.isSubscribed ? "Yes" : "No"}
      </p>
    </div>
  );
}

export default SignupForm;