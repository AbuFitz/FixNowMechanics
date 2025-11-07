import React from 'react';

export function Card({ children, className = '', ...props }) {
  return (
    <div
      className={`rounded-2xl border border-white/10 bg-white/5 backdrop-blur ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardHeader({ children, className = '' }) {
  return (
    <div className={`p-6 border-b border-white/10 ${className}`}>
      {children}
    </div>
  );
}

export function CardBody({ children, className = '' }) {
  return (
    <div className={`p-6 ${className}`}>
      {children}
    </div>
  );
}

export function CardFooter({ children, className = '' }) {
  return (
    <div className={`p-6 border-t border-white/10 ${className}`}>
      {children}
    </div>
  );
}
