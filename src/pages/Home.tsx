const Home = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] animate-gradient-flow bg-clip-text text-transparent">
        Welcome to My Portfolio
      </h1>
      <div className="relative bg-card p-6 rounded-lg animate-float">
        <div className="absolute inset-0 bg-gradient-shine bg-shine animate-shine rounded-lg opacity-50"></div>
        <p className="text-lg relative z-10">
          Hi, I'm [Your Name]. I'm a web developer passionate about creating
          beautiful and functional websites.
        </p>
      </div>
    </div>
  );
};

export default Home;
