import Icon from '@/components/ui/icon';

export default function Support() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center space-y-8 max-w-2xl">
        <div className="inline-block p-6 bg-primary/10 rounded-3xl border border-primary/20">
          <Icon name="Headphones" size={64} className="text-primary" />
        </div>
        <h1 className="text-5xl font-bold text-foreground">
          Поддержка
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          Наша команда готова помочь вам с любыми вопросами по оборудованию и сервису
        </p>
        <div className="flex gap-4 justify-center pt-4">
          <button className="px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/30">
            Написать нам
          </button>
          <button className="px-8 py-4 bg-card text-foreground border border-border rounded-xl font-semibold hover:border-primary transition-all duration-300 hover:scale-105">
            FAQ
          </button>
        </div>
      </div>
    </div>
  );
}
