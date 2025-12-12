import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';

const Header = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = [
    {
      label: 'Overview',
      path: '/sentiment-overview',
      icon: 'BarChart3',
      tooltip: 'Real-time sentiment monitoring and system status'
    },
    {
      label: 'Voice Analysis',
      path: '/voice-analysis-hub',
      icon: 'Mic',
      tooltip: 'Active processing hub for recording and file uploads'
    },
    {
      label: 'Customer Insights',
      path: '/customer-insights',
      icon: 'Users',
      tooltip: 'Strategic analytics for business decision-making'
    },
    {
      label: 'Performance',
      path: '/performance-analytics',
      icon: 'TrendingUp',
      tooltip: 'Technical monitoring and AI model accuracy tracking'
    },
    {
      label: 'Agent Performance',
      path: '/agent-performance-cards',
      icon: 'UserCheck',
      tooltip: 'Agent metrics and performance cards'
    },
    {
      label: 'Users',
      path: '/admin-user-management',
      icon: 'Settings',
      tooltip: 'User management and access control'
    }
  ];

  const isActiveRoute = (path) => {
    return location?.pathname === path;
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-card border-b border-border">
      <div className="flex items-center h-16 px-6">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-10 h-10 bg-primary/10 rounded-lg transition-all duration-150 ease-out">
            <Icon name="Activity" size={24} color="var(--color-primary)" />
          </div>
          <span className="text-lg font-semibold text-foreground">
            Customer Sentiment Analyzer
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-2 ml-auto">
          {navigationItems?.map((item) => (
            <Link
              key={item?.path}
              to={item?.path}
              className={`
                flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium
                whitespace-nowrap
                transition-all duration-150 ease-out
                ${isActiveRoute(item?.path)
                  ? 'bg-primary text-primary-foreground'
                  : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                }
              `}
              title={item?.tooltip}
            >
              <Icon name={item?.icon} size={18} />
              <span>{item?.label}</span>
            </Link>
          ))}
        </nav>

        <button
          onClick={toggleMobileMenu}
          className="md:hidden ml-auto p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-all duration-150 ease-out"
          aria-label="Toggle mobile menu"
        >
          <Icon name={isMobileMenuOpen ? 'X' : 'Menu'} size={24} />
        </button>
      </div>
      {isMobileMenuOpen && (
        <>
          <div
            className="fixed inset-0 z-45 bg-background/80 backdrop-blur-sm md:hidden"
            onClick={toggleMobileMenu}
          />
          <div className="fixed top-16 left-0 right-0 z-50 bg-card border-b border-border shadow-lg md:hidden">
            <nav className="flex flex-col p-4 gap-2">
              {navigationItems?.map((item) => (
                <Link
                  key={item?.path}
                  to={item?.path}
                  onClick={toggleMobileMenu}
                  className={`
                    flex items-center gap-3 px-4 py-3 rounded-md text-sm font-medium
                    transition-all duration-150 ease-out
                    ${isActiveRoute(item?.path)
                      ? 'bg-primary text-primary-foreground'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                    }
                  `}
                >
                  <Icon name={item?.icon} size={20} />
                  <div className="flex flex-col">
                    <span>{item?.label}</span>
                    <span className="text-xs opacity-70">{item?.tooltip}</span>
                  </div>
                </Link>
              ))}
            </nav>
          </div>
        </>
      )}
    </header>
  );
};

export default Header;