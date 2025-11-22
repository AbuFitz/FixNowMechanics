import React from 'react';
import { BRAND } from '../constants/brand';

export function Button({
  children,
  variant = 'primary',
  className = '',
  icon: Icon,
  ...props
}) {
  const baseStyles = "inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 font-semibold transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-offset-black disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary: `${baseStyles} text-black shadow-lg hover:shadow-xl`,
    secondary: `${baseStyles} border-2 text-white hover:bg-white/10`,
    ghost: `${baseStyles} text-white hover:bg-white/5`,
  };

  const style = variant === 'primary'
    ? { backgroundColor: BRAND.colors.primary, color: BRAND.colors.dark }
    : variant === 'secondary'
    ? { borderColor: BRAND.colors.primary }
    : {};

  return (
    <button
      className={`${variants[variant]} ${className}`}
      style={style}
      {...props}
    >
      {Icon && <Icon size={20} />}
      {children}
    </button>
  );
}

export function LinkButton({
  children,
  variant = 'primary',
  className = '',
  icon: Icon,
  href,
  ...props
}) {
  const baseStyles = "inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 font-semibold transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-offset-black";

  const variants = {
    primary: `${baseStyles} text-black shadow-lg hover:shadow-xl`,
    secondary: `${baseStyles} border-2 text-white hover:bg-white/10`,
    ghost: `${baseStyles} text-white hover:bg-white/5`,
  };

  const style = variant === 'primary'
    ? { backgroundColor: BRAND.colors.primary, color: BRAND.colors.dark }
    : variant === 'secondary'
    ? { borderColor: BRAND.colors.primary }
    : {};

  return (
    <a
      href={href}
      className={`${variants[variant]} ${className}`}
      style={style}
      {...props}
    >
      {Icon && <Icon size={20} />}
      {children}
    </a>
  );
}
