'use client';

import React, { useState } from 'react';
import { subscribe } from '../actions/subscribe';

export default function SignUpForm() {
  const [status, setStatus] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [rawPhone, setRawPhone] = useState('');
  const [email, setEmail] = useState('');
  const [favoriteWine, setFavoriteWine] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const formatPhoneNumber = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    setRawPhone(numbers);

    if (numbers.length === 0) return '';
    if (numbers.length <= 3) return `(${numbers}`;
    if (numbers.length <= 6)
      return `(${numbers.slice(0, 3)}) ${numbers.slice(3)}`;
    return `(${numbers.slice(0, 3)}) ${numbers.slice(3, 6)}-${numbers.slice(6, 10)}`;
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!rawPhone) {
      newErrors.phone = 'Phone number is required';
    } else if (rawPhone.length !== 10) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }

    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!favoriteWine) {
      newErrors.favoriteWine = 'Please select your favorite wine type';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      setStatus('Please fix the errors before submitting.');
      return;
    }

    const formData = new FormData();
    formData.append('name', name);
    formData.append('phone', rawPhone);
    formData.append('email', email);
    formData.append('favoriteWine', favoriteWine);

    const result = await subscribe(formData);
    if (result.success) {
      setStatus('Subscribed!');
      setName('');
      setPhone('');
      setRawPhone('');
      setEmail('');
      setFavoriteWine('');
      setErrors({});
    } else {
      setStatus('Something went wrong.');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full md:w-1/2 flex flex-col gap-4 bg-[#663F47]/80 rounded-xl p-6 md:p-10 border border-[#FFEFCF]/30 shadow-lg backdrop-blur-sm"
    >
      <h1 className="text-2xl md:text-4xl font-playfair text-[#FFEFCF] text-center mb-2">
        Join Our Wine Club
      </h1>
      <h2 className="text-xl md:text-2xl font-playfair text-[#FFEFCF] text-center mb-0 leading-tight">
        &quot;Heard It Through The Grapevine&quot;
      </h2>
      <p className="text-sm md:text-base w-[90%] mb-4 mx-auto text-[#FFEFCF]/70 text-center">
        and stay up to date with our latest news and events
      </p>
      <div className="flex flex-col gap-1">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={name}
          onChange={e => setName(e.target.value)}
          className={`bg-transparent border ${errors.name ? 'border-red-500' : 'border-[#FFEFCF]'} rounded-md px-4 py-2 md:py-3 text-[#FFEFCF] placeholder-[#FFEFCF]/70 focus:outline-none focus:ring-2 focus:ring-[#FFEFCF]/60 transition text-sm md:text-base`}
        />
        {errors.name && (
          <span className="text-red-500 text-sm">{errors.name}</span>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={phone}
          onChange={e => setPhone(formatPhoneNumber(e.target.value))}
          className={`bg-transparent border ${errors.phone ? 'border-red-500' : 'border-[#FFEFCF]'} rounded-md px-4 py-2 md:py-3 text-[#FFEFCF] placeholder-[#FFEFCF]/70 focus:outline-none focus:ring-2 focus:ring-[#FFEFCF]/60 transition text-sm md:text-base`}
        />
        {errors.phone && (
          <span className="text-red-500 text-sm">{errors.phone}</span>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className={`bg-transparent border ${errors.email ? 'border-red-500' : 'border-[#FFEFCF]'} rounded-md px-4 py-2 md:py-3 text-[#FFEFCF] placeholder-[#FFEFCF]/70 focus:outline-none focus:ring-2 focus:ring-[#FFEFCF]/60 transition text-sm md:text-base`}
        />
        {errors.email && (
          <span className="text-red-500 text-sm">{errors.email}</span>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <select
          name="favoriteWine"
          value={favoriteWine}
          onChange={e => setFavoriteWine(e.target.value)}
          className={`bg-transparent border ${errors.favoriteWine ? 'border-red-500' : 'border-[#FFEFCF]'} rounded-md px-4 py-2 md:py-3 text-[#FFEFCF] placeholder-[#FFEFCF]/70 focus:outline-none focus:ring-2 focus:ring-[#FFEFCF]/60 transition appearance-none text-sm md:text-base`}
        >
          <option value="" disabled>
            Favorite type of wine
          </option>
          <option value="red">Red</option>
          <option value="white">White</option>
          <option value="rosé">Rosé</option>
          <option value="sparkling">Sparkling</option>
          <option value="dessert">Dessert</option>
          <option value="other">Other</option>
        </select>
        {errors.favoriteWine && (
          <span className="text-red-500 text-sm">{errors.favoriteWine}</span>
        )}
      </div>

      <button
        type="submit"
        className="mt-2 bg-[#A0522D] hover:bg-[#7a3920] text-[#FFEFCF] font-playfair text-base md:text-lg rounded-md py-2 md:py-3 transition-colors duration-200 shadow-md"
      >
        Subscribe
      </button>
      {status && (
        <div
          className={`text-center ${status.includes('error') ? 'text-red-500' : 'text-[#FFEFCF]'} mt-2`}
        >
          {status}
        </div>
      )}
    </form>
  );
}
