const Footer = () => (
  <footer className="bg-gradient-to-r from-blue-800 via-blue-900 to-blue-800 text-white pt-8 pb-6 mt-12">
    <div className="container mx-auto flex flex-col items-center gap-2">
      <div className="w-full flex flex-col items-center">
        <p className="text-base font-semibold tracking-wide">&copy; 2025 STEM Simplified. All rights reserved.</p>
        <span className="block w-16 h-1 bg-blue-400 rounded-full my-3"></span>
        <p className="text-sm text-blue-100 font-medium tracking-wide">
          Made by <span className="font-bold text-white">Jevesh Jain</span>
        </p>
      </div>
    </div>
  </footer>
);

export default Footer; 