import React, { useState, ChangeEvent, FormEvent } from "react";

// Define the shape of our form fields
interface FormValues {
  email: "";
  password: "";
}

// Define the shape of our validation errors
interface FormErrors {
  email?: string;
  password?: string;
}

export const Login: React.FC = () => {
  // 1. Manage State for inputs, errors, and loading status
  const [values, setValues] = useState<FormValues>({ email: "", password: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<
    Partial<Record<keyof FormValues, boolean>>
  >({});
  const [apiError, setApiError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // 2. Validate function
  const validate = (formValues: FormValues): FormErrors => {
    const localErrors: FormErrors = {};

    // Email validation
    if (!formValues.email) {
      localErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
      localErrors.email = "Invalid email address";
    }

    // Password validation
    if (!formValues.password) {
      localErrors.password = "Password is required";
    } else if (formValues.password.length < 6) {
      localErrors.password = "Password must be at least 6 characters";
    }

    return localErrors;
  };

  // 3. Handle Input Changes
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const nextValues = { ...values, [name]: value };

    setValues(nextValues);

    // Live validation update if the field has been touched
    if (touched[name as keyof FormValues]) {
      const nextErrors = validate(nextValues);
      setErrors(nextErrors);
    }
  };

  // 4. Handle Blur (when a user clicks out of an input)
  const handleBlur = (e: ChangeEvent<HTMLInputElement>) => {
    const { name } = e.target;
    setTouched({ ...touched, [name]: true });

    // Validate on blur
    const nextErrors = validate(values);
    setErrors(nextErrors);
  };

  // 5. Handle Form Submission
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Mark all fields as touched on submit attempt
    setTouched({ email: true, password: true });

    // Validate all fields
    const validationErrors = validate(values);
    setErrors(validationErrors);

    // If there are errors, stop the submission
    if (Object.keys(validationErrors).length > 0) return;

    // Start API Integration sequence
    setIsLoading(true);
    setApiError(null);

    try {
      console.log("Sending data to API:", values);

      // Native fetch API call
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const data = await response.json();

      //   if (!response.ok) {
      //     throw new Error(data.message || "Authentication failed");
      //   }
      if (data.success) {
        alert(data.message);
      } else {
        alert(data.message);
      }
      // Success logic (e.g., save token, redirect)
      console.log("Login successful!", data);
    } catch (error: any) {
      // Handle server-side errors
      setApiError(error.message || "Failed to connect to the server.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <h2>Login</h2>

      {/* Global API Error */}
      {apiError && <div style={styles.apiError}>{apiError}</div>}

      <form onSubmit={handleSubmit} style={styles.form}>
        {/* Email Input */}
        <div style={styles.inputGroup}>
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            name="email"
            type="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            style={
              touched.email && errors.email ? styles.inputError : styles.input
            }
          />
          {touched.email && errors.email && (
            <span style={styles.errorText}>{errors.email}</span>
          )}
        </div>

        {/* Password Input */}
        <div style={styles.inputGroup}>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            style={
              touched.password && errors.password
                ? styles.inputError
                : styles.input
            }
          />
          {touched.password && errors.password && (
            <span style={styles.errorText}>{errors.password}</span>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isLoading}
          style={isLoading ? styles.buttonDisabled : styles.button}
        >
          {isLoading ? "Logging in..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

// Styling Object
const styles: Record<string, React.CSSProperties> = {
  container: {
    maxWidth: "400px",
    margin: "40px auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    fontFamily: "Arial, sans-serif",
  },
  form: { display: "flex", flexDirection: "column", gap: "15px" },
  inputGroup: { display: "flex", flexDirection: "column", gap: "5px" },
  input: {
    padding: "8px",
    fontSize: "16px",
    borderRadius: "4px",
    border: "1px solid #ccc",
    outline: "none",
  },
  inputError: {
    padding: "8px",
    fontSize: "16px",
    borderRadius: "4px",
    border: "1px solid red",
    backgroundColor: "#fff6f6",
    outline: "none",
  },
  errorText: { color: "red", fontSize: "12px" },
  apiError: {
    padding: "10px",
    backgroundColor: "#fde8e8",
    color: "red",
    borderRadius: "4px",
    marginBottom: "15px",
    fontSize: "14px",
  },
  button: {
    padding: "10px",
    fontSize: "16px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  buttonDisabled: {
    padding: "10px",
    fontSize: "16px",
    backgroundColor: "#cccccc",
    color: "#666666",
    border: "none",
    borderRadius: "4px",
    cursor: "not-allowed",
  },
};
