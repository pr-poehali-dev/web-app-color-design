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
    <>
      <div 
        className="fixed top-6 left-6 z-50 text-3xl font-bold text-primary cursor-pointer hover:text-secondary transition-colors"
        onClick={() => onNavigate('home')}
      >
        iZiBot
      </div>

      <nav className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 flex gap-12">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id)}
            className={`text-2xl font-medium transition-all duration-300 relative group ${
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
    </>
  );
}