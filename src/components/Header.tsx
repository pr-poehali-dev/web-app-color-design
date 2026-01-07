import { useState } from 'react';

interface HeaderProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

export default function Header({ onNavigate, currentPage }: HeaderProps) {
  const navItems = [
    { id: 'home', label: 'Главное' },
    { id: 'catalog', label: 'Каталог' },
    { id: 'support', label: 'Поддержка' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-6">
        <div className="flex items-start justify-between">
          <div 
            className="text-3xl font-bold text-primary cursor-pointer hover:text-secondary transition-colors pt-1"
            onClick={() => onNavigate('home')}
          >
            iZiBot
          </div>

          <nav className="flex gap-8 items-center h-full">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`text-lg font-medium transition-all duration-300 relative group ${
                  currentPage === item.id
                    ? 'text-primary'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {item.label}
                <span 
                  className={`absolute bottom-0 left-0 w-full h-0.5 bg-primary transition-transform origin-left ${
                    currentPage === item.id ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}
                />
              </button>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}