import Link from "next/link";
import ThemeSwitch from "./ThemeSwitch";
import Image from "next/image"; // Import Image component for optimized image rendering

export default function Header() {
  return (
    <header className="bg-white dark:bg-black shadow-sm dark:border-b dark:border-gray-800">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center justify-center flex-grow">
          {/* Logo */}
          <Image 
            src="/assets/qai.png" // Path to the logo image inside the public folder
            alt="QualityAI Logo"
            width={150} // Adjust width as necessary
            height={40} // Adjust height as necessary
            className="dark:hidden" // Hide on dark mode
          />
        </div>
      </div>
    </header>
  );
}