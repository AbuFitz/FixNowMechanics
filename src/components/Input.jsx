import React from 'react';
import { BRAND } from '../constants/brand';

export function Input({
  label,
  error,
  icon: Icon,
  className = '',
  containerClassName = '',
  ...props
}) {
  return (
    <div className={`w-full ${containerClassName}`}>
      {label && (
        <label className="block text-white/90 font-medium mb-2 text-sm">
          {label}
        </label>
      )}
      <div className="relative">
        {Icon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40">
            <Icon size={18} />
          </div>
        )}
        <input
          className={`
            w-full px-4 py-3 rounded-xl
            bg-white/5 border border-white/10
            text-white placeholder:text-white/40
            focus:outline-none focus:ring-2 focus:border-transparent
            transition-all duration-200
            disabled:opacity-50 disabled:cursor-not-allowed
            ${Icon ? 'pl-11' : ''}
            ${error ? 'border-red-500 focus:ring-red-500' : 'focus:ring-yellow-500'}
            ${className}
          `}
          style={{
            focusRingColor: error ? '#ef4444' : BRAND.colors.primary
          }}
          {...props}
        />
      </div>
      {error && (
        <p className="mt-1 text-sm text-red-400">{error}</p>
      )}
    </div>
  );
}

export function TextArea({
  label,
  error,
  className = '',
  containerClassName = '',
  rows = 4,
  ...props
}) {
  return (
    <div className={`w-full ${containerClassName}`}>
      {label && (
        <label className="block text-white/90 font-medium mb-2 text-sm">
          {label}
        </label>
      )}
      <textarea
        rows={rows}
        className={`
          w-full px-4 py-3 rounded-xl
          bg-white/5 border border-white/10
          text-white placeholder:text-white/40
          focus:outline-none focus:ring-2 focus:border-transparent
          transition-all duration-200
          disabled:opacity-50 disabled:cursor-not-allowed
          ${error ? 'border-red-500 focus:ring-red-500' : 'focus:ring-yellow-500'}
          ${className}
        `}
        {...props}
      />
      {error && (
        <p className="mt-1 text-sm text-red-400">{error}</p>
      )}
    </div>
  );
}

export function Select({
  label,
  error,
  icon: Icon,
  children,
  className = '',
  containerClassName = '',
  ...props
}) {
  return (
    <div className={`w-full ${containerClassName}`}>
      {label && (
        <label className="block text-white/90 font-medium mb-2 text-sm">
          {label}
        </label>
      )}
      <div className="relative">
        {Icon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none z-10">
            <Icon size={18} />
          </div>
        )}
        <select
          className={`
            w-full px-4 py-3 rounded-xl
            bg-white/5 border border-white/10
            text-white
            focus:outline-none focus:ring-2 focus:border-transparent
            transition-all duration-200
            disabled:opacity-50 disabled:cursor-not-allowed
            appearance-none
            [&>option]:bg-gray-900 [&>option]:text-white
            ${Icon ? 'pl-11' : ''}
            ${error ? 'border-red-500 focus:ring-red-500' : 'focus:ring-yellow-500'}
            ${className}
          `}
          style={{ colorScheme: 'dark' }}
          {...props}
        >
          {children}
        </select>
        <div className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none">
          <svg width="12" height="8" viewBox="0 0 12 8" fill="currentColor">
            <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none"/>
          </svg>
        </div>
      </div>
      {error && (
        <p className="mt-1 text-sm text-red-400">{error}</p>
      )}
    </div>
  );
}
