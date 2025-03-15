import { AiOutlineFacebook, AiOutlineX, AiOutlineGithub, AiOutlineLinkedin, AiOutlineInstagram } from "react-icons/ai";

const Footer: React.FC = () => {
  const currentYear: number = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-100 dark:bg-black shadow-sm text-gray-400 py-6 dark:border-gray-800">
      <div className="container mx-auto px-4 flex flex-wrap justify-center sm:justify-between items-center text-sm">
        {/* Animated Text Effect */}
        <p className="ml-4 text-xl font-bold bg-clip-text text-transparent bg-[url('https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExeWV3a3JveTZhZTBrMW5mOXAzcTg1MHZvdG9nN3RlbTF6dHBnZTZodCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/AIGF7ljcNKZI4/giphy.gif')] bg-cover bg-center">
          &copy; {currentYear} QualityAI. All rights reserved.
        </p>
        <p className="ml-4 text-xl font-bold bg-clip-text text-transparent bg-[url('https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExaHplb2VjemtyaHhlNmkwdjA5c3lkdjc2Y3FxMmt1eW95Nno5MnhwZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/gBxL0G0DqZd84/giphy.gif')] bg-cover bg-center">
          Made In The Mountains.
        </p>
        <div className="flex space-x-4 mt-2 mr-4 sm:mt-0">
          <a href="#" aria-label="Facebook" className="hover:text-gray-300">
            <AiOutlineFacebook className="w-5 h-5" />
          </a>
          <a href="#" aria-label="LinkedIn" className="hover:text-gray-300">
            <AiOutlineLinkedin className="w-5 h-5" />
          </a>
          <a href="#" aria-label="Instagram" className="hover:text-gray-300">
            <AiOutlineInstagram className="w-5 h-5" />
          </a>
          <a href="#" aria-label="X (formerly Twitter)" className="hover:text-gray-300">
            <AiOutlineX className="w-5 h-5" />
          </a>
          <a href="#" aria-label="GitHub" className="hover:text-gray-300">
            <AiOutlineGithub className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
