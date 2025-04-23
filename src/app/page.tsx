"use client";

import React, { useEffect, useState } from "react";
import {
  FaBell,
  FaHome,
  FaWallet,
  FaUsers,
  FaTasks,
  FaTelegramPlane,
  FaWhatsapp,
} from "react-icons/fa";
import {
  MdCardGiftcard,
  MdGroups,
  MdAccountBalanceWallet,
  MdAttachMoney,
  MdBusiness,
  MdGavel,
  MdHelp,
  MdAssignment,
} from "react-icons/md";

export default function HomePage() {
  const [visibleIndex, setVisibleIndex] = useState(0);
  const [currentBanner, setCurrentBanner] = useState(0);

  const taskData = [
    { user: "4******2", amount: "$9.91" },
    { user: "8******1", amount: "$15.35" },
    { user: "1******8", amount: "$6.20" },
    { user: "3******6", amount: "$18.70" },
    { user: "5******3", amount: "$22.15" },
    { user: "9******0", amount: "$7.88" },
    { user: "6******4", amount: "$11.99" },
    { user: "2******5", amount: "$14.05" },
    { user: "7******9", amount: "$12.45" },
    { user: "0******7", amount: "$5.60" },
    { user: "4******1", amount: "$9.50" },
    { user: "8******3", amount: "$20.99" },
    { user: "3******2", amount: "$13.20" },
    { user: "6******5", amount: "$17.45" },
    { user: "1******9", amount: "$8.75" },
  ];

  const banners = [
    { title: "Welcome Bonus", subtitle: "$3 USDT Free for New Users", bg: "from-pink-500 to-yellow-500" },
    { title: "Deposit Commission", subtitle: "Earn up to 5% Commission on Deposits", bg: "from-blue-500 to-indigo-500" },
    { title: "Referral Bonus", subtitle: "Profit from 3-Level Generations", bg: "from-green-500 to-emerald-500" },
    { title: "Rank Rewards", subtitle: "Up to $500 for Rank Achievements", bg: "from-purple-500 to-fuchsia-500" },
    { title: "Monthly Salary", subtitle: "Receive $100 - $200 Every Month", bg: "from-orange-500 to-amber-500" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleIndex((prev) => (prev + 1) % taskData.length);
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [taskData.length, banners.length]);

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-between dark:bg-gray-900">
      <header className="bg-white dark:bg-gray-800 flex items-center justify-between px-6 py-4 shadow-md">
        <div className="flex items-center gap-4">
          <img src="/logo.png" alt="Paicoo Logo" className="h-10" />
          <span className="text-xl font-bold text-gray-800 dark:text-white tracking-wide">BITNEXECOMMERCE</span>
        </div>
        <div className="flex gap-4 items-center">
          <FaBell className="text-2xl text-gray-600 dark:text-white hover:scale-110 transition-transform duration-300" />
        </div>
      </header>

      <section className="relative w-full h-40 md:h-48 text-white flex items-center justify-center overflow-hidden rounded-b-2xl shadow-md">
        {banners.map((banner, index) => (
          <div
            key={index}
            className={`absolute transition-all duration-1000 ease-in-out w-full h-full flex items-center justify-center text-center bg-gradient-to-r ${banner.bg} ${currentBanner === index ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-95 z-0'}`}
          >
            <div>
              <h2 className="text-lg md:text-xl font-bold drop-shadow mb-1 uppercase tracking-wide animate-pulse">{banner.title}</h2>
              <p className="text-2xl md:text-3xl font-extrabold drop-shadow animate-fade-in-up">{banner.subtitle}</p>
            </div>
          </div>
        ))}
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-2">
          {banners.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentBanner(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${currentBanner === index ? 'bg-white scale-110' : 'bg-white/60'}`}
              aria-label={`Go to banner ${index + 1}`}
            />
          ))}
        </div>
      </section>

      <section className="grid grid-cols-4 gap-4 px-4 py-6 bg-white dark:bg-gray-800 border-b dark:border-gray-700">
        <Feature icon={<MdCardGiftcard />} label="Invite" />
        <Feature icon={<MdGroups />} label="Team" />
        <Feature icon={<MdAccountBalanceWallet />} label="Recharge" />
        <Feature icon={<MdAttachMoney />} label="Withdraw" />
        <Feature icon={<MdBusiness />} label="Company" />
        <Feature icon={<MdGavel />} label="Rule" />
        <Feature icon={<MdHelp />} label="Help" />
        <Feature icon={<MdAssignment />} label="Task" />
      </section>

      <section className="px-4 py-6 bg-white dark:bg-gray-800 border-b dark:border-gray-700">
        <h3 className="font-semibold text-gray-800 dark:text-white mb-3">Task Record (Recent Earnings)</h3>
        <div className="overflow-hidden h-6 relative">
          <div
            className="absolute inset-0 transition-transform duration-500"
            style={{ transform: `translateY(-${visibleIndex * 1.5}rem)` }}
          >
            {taskData.map((task, index) => (
              <div key={index} className="h-6 flex items-center">
                <TaskRecord user={task.user} amount={task.amount} index={index} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pt-4 pb-6 bg-white dark:bg-gray-800 border-b dark:border-gray-700">
        <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-3 text-center">🌐 Global Conference</h3>
        <div className="w-full rounded-xl overflow-hidden shadow-xl aspect-[16/9]">
          <video autoPlay loop muted playsInline className="w-full h-full object-cover">
            <source src="/conference.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <p className="text-center text-sm text-gray-600 dark:text-gray-300 mt-3 leading-relaxed px-2">
          Experience our international business conference—see how Paicoo is driving global innovation and success in the eCommerce space.
        </p>
      </section>

      <section className="px-4 py-10 bg-white dark:bg-gray-800">
        <h3 className="text-2xl font-bold text-center text-gray-800 dark:text-white mb-6">
          Our Global eCommerce Partners
        </h3>
        <p className="text-center text-gray-500 dark:text-gray-300 mb-10">
          We collaborate with the world’s leading eCommerce brands to power global trade.
        </p>
        <div className="flex flex-wrap gap-6 justify-center items-center">
          {[
            { name: "Amazon", image: "amazon.png" },
            { name: "Alibaba", image: "alibaba.png" },
            { name: "PayPal", image: "paypal.png" },
            { name: "Shopify", image: "shopify.png" },
            { name: "Stripe", image: "stripe.png" },
            { name: "Google Pay", image: "googlepay.png" },
            { name: "DHL", image: "dhl.png" },
            { name: "FedEx", image: "fedex.png" },
            { name: "eBay", image: "ebay.png" },
            { name: "Etsy", image: "etsy.png" },
            { name: "WooCommerce", image: "woocommerce.png" },
            { name: "TikTok Shop", image: "tiktokshop.png" },
          ].map((partner, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <img
                src={`/partners/${partner.image}`}
                alt={partner.name}
                className="h-10 grayscale hover:grayscale-0 transition"
              />
              <span className="text-xs mt-1 text-gray-600 dark:text-gray-300">{partner.name}</span>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-gray-50 dark:bg-gray-900 py-8 px-4 text-center">
        <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Join Our Community</h4>
        <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto mb-4 text-sm">
          Stay connected with our community for updates, support, and exclusive offers. Join us on your favorite platform.
        </p>
        <div className="flex justify-center flex-wrap gap-6">
          <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Join us on Telegram" className="text-2xl text-blue-500 hover:text-blue-700"><FaTelegramPlane /></a>
          <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Join us on WhatsApp" className="text-2xl text-green-500 hover:text-green-700"><FaWhatsapp /></a>
        </div>
      </section>

      <footer className="bg-white dark:bg-gray-800 py-3 px-6 shadow-inner flex justify-around">
        <BottomNav icon={<FaHome />} label="Home" active={true} />
        <BottomNav icon={<FaTasks />} label="Task" />
        <BottomNav icon={<FaWallet />} label="Wallet" />
        <BottomNav icon={<FaUsers />} label="Me" />
      </footer>
    </div>
  );
}

function Feature({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex flex-col items-center text-center text-gray-700 dark:text-white hover:scale-110 transition-transform duration-300">
      <div className="text-3xl mb-2">{icon}</div>
      <div className="text-sm font-medium">{label}</div>
    </div>
  );
}

function TaskRecord({ user, amount, index = 0 }: { user: string; amount: string; index?: number }) {
  const colors = [
    "text-rose-600",
    "text-blue-600",
    "text-green-600",
    "text-yellow-600",
    "text-purple-600",
    "text-pink-600",
    "text-teal-600",
    "text-orange-600",
    "text-amber-600",
    "text-lime-600",
  ];
  const color = colors[index % colors.length];
  return (
    <div className={`text-sm px-3 py-1 rounded-md font-semibold whitespace-nowrap ${color}`}>
      🎉 Congrats {user}, you earned <span className="underline">{amount}</span>!
    </div>
  );
}

function BottomNav({ icon, label, active = false }: { icon: React.ReactNode; label: string; active?: boolean }) {
  return (
    <div
      className={`flex flex-col items-center text-xs font-semibold transition-transform duration-300 hover:scale-110 ${active ? 'text-orange-500' : 'text-gray-500 dark:text-gray-400'}`}
    >
      <div className="text-xl mb-1">{icon}</div>
      {label}
    </div>
  );
}