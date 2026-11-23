function SectionTitle({ children }) {
  return (
    <div className="mb-6 sm:mb-8">
      <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
        {children}
      </h2>
      <div className="mt-3 sm:mt-4 h-px w-12 sm:w-16 bg-gradient-to-r from-blue-500 to-cyan-400" />
    </div>
  );
}

export default SectionTitle;
