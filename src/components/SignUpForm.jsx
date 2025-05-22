import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import api from "../api/api";
import { useHistory, useLocation } from "react-router-dom";

export default function SignUpForm() {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm();
  const [roles, setRoles] = useState([]);
  const [selectedRole, setSelectedRole] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const location = useLocation();
  useEffect(() => {
    const fetchRoles = async () => {
      try {
        const response = await api.get("/roles");
        setRoles(response.data);

        console.log("Roller çekildi:", response.data); //LOG

        const customerRole = response.data.find(
          (role) => role.code.toLowerCase() === "customer"
        );

        if (customerRole) {
          setSelectedRole(customerRole.id);
          setValue("role_id", customerRole.id);
          console.log("Default role selected:", customerRole); // LOG
        } else {
          console.warn("Customer role not found"); // LOG
        }
      } catch (error) {
        console.error("Error fetching roles:", error); // LOG
      }
    };
    fetchRoles();
  }, [setValue]);

  const onSubmit = async (data) => {
    setLoading(true);

    const formData = {
      name: data.name,
      email: data.email,
      password: data.password,
      role_id: data.role_id,
    };

    if (
      selectedRole ===
      roles.find((role) => role.code.toLowerCase() === "store")?.id
    ) {
      formData.store = {
        name: data.storeName,
        phone: data.storePhone,
        tax_no: data.storeTaxID,
        bank_account: data.storeBankAccount,
      };
    }

    // LOG
    console.log("Form verisi:", formData);

    try {
      await api.post("/signup", formData);
      setLoading(false);
      history.push(location.state?.from || "/", {
        message:
          "You need to click the link in the email to activate your account!",
      });
    } catch (error) {
      setLoading(false);
      // Hata durumunda formda hata mesajı gösteriyoruz
      alert(
        "Error submitting the form: " +
          (error.response?.data?.message || "Unknown error")
      );
    }
  };

  return (
    <form className="max-w-lg mx-auto p-6" onSubmit={handleSubmit(onSubmit)}>
      {/* Name */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Name</label>
        <input
          type="text"
          {...register("name", {
            required: "Name is required",
            minLength: {
              value: 3,
              message: "Name must be at least 3 characters",
            },
          })}
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
        />
        {errors.name && (
          <p className="text-red-500 text-sm">{errors.name.message}</p>
        )}
      </div>

      {/* Email */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          {...register("email", {
            required: "Email is required",
            pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" },
          })}
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
        />
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email.message}</p>
        )}
      </div>

      {/* Password */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Password
        </label>
        <input
          type="password"
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters",
            },
            pattern: {
              value: /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/,
              message:
                "Password must include uppercase, lowercase, number, and special character",
            },
          })}
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
        />
        {errors.password && (
          <p className="text-red-500 text-sm">{errors.password.message}</p>
        )}
      </div>

      {/* Confirm Password */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Confirm Password
        </label>
        <input
          type="password"
          {...register("confirmPassword", {
            validate: (value) =>
              value === watch("password") || "Passwords do not match",
          })}
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
        />
        {errors.confirmPassword && (
          <p className="text-red-500 text-sm">
            {errors.confirmPassword.message}
          </p>
        )}
      </div>

      {/* Role */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Role</label>
        <select
          {...register("role_id", { required: "Role is required" })}
          onChange={(e) => setSelectedRole(e.target.value)}
          value={selectedRole}
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
        >
          {roles.map((role) => (
            <option key={role.id} value={role.id}>
              {role.name}
            </option>
          ))}
        </select>
      </div>

      {/* Store*/}
      {selectedRole ===
        roles.find((role) => role.code.toLowerCase() === "store")?.id && (
        <>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Store Name
            </label>
            <input
              type="text"
              {...register("storeName", {
                required: "Store Name is required",
                minLength: {
                  value: 3,
                  message: "Store Name must be at least 3 characters",
                },
              })}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            />
            {errors.storeName && (
              <p className="text-red-500 text-sm">{errors.storeName.message}</p>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Store Phone
            </label>
            <input
              type="text"
              {...register("storePhone", {
                required: "Store Phone is required",
                pattern: {
                  value: /^\+90\d{10}$/,
                  message:
                    "Invalid Türkiye phone number (format: +905xxxxxxxxx)",
                },
              })}
              placeholder="+905xxxxxxxxx"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            />
            {errors.storePhone && (
              <p className="text-red-500 text-sm">
                {errors.storePhone.message}
              </p>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Store Tax ID
            </label>
            <input
              type="text"
              {...register("storeTaxID", {
                required: "Store Tax ID is required",
                pattern: {
                  value: /^T\d{4}V\d{6}$/,
                  message: "Invalid Tax ID format (format: TXXXXVXXXXXX)",
                },
              })}
              placeholder="TXXXXVXXXXXX"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            />
            {errors.storeTaxID && (
              <p className="text-red-500 text-sm">
                {errors.storeTaxID.message}
              </p>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Store Bank Account
            </label>
            <input
              type="text"
              {...register("storeBankAccount", {
                required: "Bank Account is required",
                pattern: {
                  value: /^[A-Z]{2}\d{2}[A-Z0-9]{16,30}$/,
                  message: "Invalid IBAN format",
                },
              })}
              placeholder="TRXX XXXX XXXX XXXX XXXX XXXX XX"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            />
            {errors.storeBankAccount && (
              <p className="text-red-500 text-sm">
                {errors.storeBankAccount.message}
              </p>
            )}
          </div>
        </>
      )}

      {/* Submit Button */}
      <div className="flex justify-center">
        <button
          type="submit"
          disabled={loading}
          className={`px-8 py-3 text-white font-semibold rounded-md ${
            loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700"
          } transition`}
        >
          {loading ? (
            <>
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white inline"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Submitting...
            </>
          ) : (
            "Sign Up"
          )}
        </button>
      </div>
    </form>
  );
}
