export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center space-y-6 px-6">
        <h1 className="text-6xl font-bold text-foreground animate-fade-in">
          Добро пожаловать в <span className="text-primary">iZiBot</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Профессиональные решения для видео и фотосъемки
        </p>
      </div>
    </div>
  );
}
