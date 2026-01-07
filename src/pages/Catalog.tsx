import Icon from '@/components/ui/icon';

export default function Catalog() {
  const categories = [
    {
      id: 'video',
      title: 'Видео',
      description: 'Профессиональное видеооборудование',
      image: 'https://cdn.poehali.dev/projects/5c266f76-d700-4beb-9b6f-0347b9189239/files/ab7a3cb4-68e7-461c-8d07-28d4ae854578.jpg',
      icon: 'Video',
    },
    {
      id: 'photo',
      title: 'Фото',
      description: 'Камеры и объективы для фотографии',
      image: 'https://cdn.poehali.dev/projects/5c266f76-d700-4beb-9b6f-0347b9189239/files/613bcaca-22bd-4e72-8754-3ce1694150be.jpg',
      icon: 'Camera',
    },
  ];

  return (
    <div className="min-h-screen py-24 px-6">
      <div className="container mx-auto">
        <h1 className="text-5xl font-bold text-center mb-4 text-foreground">
          Каталог
        </h1>
        <p className="text-center text-muted-foreground text-lg mb-16">
          Выберите категорию оборудования
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {categories.map((category) => (
            <div
              key={category.id}
              className="group relative overflow-hidden rounded-2xl bg-card border border-border hover:border-primary transition-all duration-500 cursor-pointer hover:scale-105 hover:shadow-2xl hover:shadow-primary/20"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent opacity-90 group-hover:opacity-95 transition-opacity duration-500" />
              
              <div className="absolute bottom-0 left-0 right-0 p-8 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-primary/20 rounded-xl backdrop-blur-sm border border-primary/30">
                    <Icon name={category.icon} size={32} className="text-primary" />
                  </div>
                  <h2 className="text-4xl font-bold text-foreground">
                    {category.title}
                  </h2>
                </div>
                <p className="text-muted-foreground text-lg">
                  {category.description}
                </p>
              </div>

              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="p-2 bg-primary rounded-full">
                  <Icon name="ArrowRight" size={24} className="text-primary-foreground" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
