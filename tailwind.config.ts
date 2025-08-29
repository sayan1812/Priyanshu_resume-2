import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				// Core System Colors
				border: 'hsl(var(--card-border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				
				// Brand Colors
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
					glow: 'hsl(var(--primary-glow))',
					light: 'hsl(var(--primary-light))'
				},
				
				// Accent Colors
				accent: {
					red: 'hsl(var(--accent-red))',
					'red-light': 'hsl(var(--accent-red-light))'
				},
				
				// Surface & Glass
				surface: {
					DEFAULT: 'hsl(var(--surface))',
					hover: 'hsl(var(--surface-hover))'
				},
				glass: 'hsl(var(--glass))',
				
				// Card System
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))',
					border: 'hsl(var(--card-border))'
				},
				
				// Text Hierarchy
				text: {
					primary: 'hsl(var(--text-primary))',
					secondary: 'hsl(var(--text-secondary))',
					muted: 'hsl(var(--text-muted))'
				},
				
				// Interactive States
				hover: 'hsl(var(--hover))',
				active: 'hsl(var(--active))',
				
				// Status Colors
				success: 'hsl(var(--success))',
				warning: 'hsl(var(--warning))',
				destructive: 'hsl(var(--destructive))'
			},
			
			borderRadius: {
				DEFAULT: 'var(--radius)',
				sm: 'var(--radius-sm)',
				lg: 'var(--radius-lg)',
				full: '9999px'
			},
			
			boxShadow: {
				glow: 'var(--shadow-glow)',
				'red-glow': 'var(--shadow-red-glow)',
				glass: 'var(--shadow-lg)'
			},
			
			backgroundImage: {
				'gradient-primary': 'var(--gradient-primary)',
				'gradient-hero': 'var(--gradient-hero)',
				'gradient-glass': 'var(--gradient-glass)',
				'gradient-background': 'var(--gradient-background)'
			},
			
			keyframes: {
				// Accordion
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				
				// Float Animation
				float: {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-20px)' }
				},
				
				// Fade Animations
				'fade-in-up': {
					from: { 
						opacity: '0', 
						transform: 'translateY(30px)' 
					},
					to: { 
						opacity: '1', 
						transform: 'translateY(0)' 
					}
				},
				
				// Slide Animations
				'slide-in-right': {
					from: { 
						opacity: '0', 
						transform: 'translateX(50px)' 
					},
					to: { 
						opacity: '1', 
						transform: 'translateX(0)' 
					}
				},
				
				'slide-in-left': {
					from: { 
						opacity: '0', 
						transform: 'translateX(-50px)' 
					},
					to: { 
						opacity: '1', 
						transform: 'translateX(0)' 
					}
				},
				
				// Glow Animation
				'pulse-glow': {
					'0%, 100%': { 
						boxShadow: '0 0 20px hsl(var(--primary) / 0.3)' 
					},
					'50%': { 
						boxShadow: '0 0 40px hsl(var(--primary) / 0.6)' 
					}
				},
				
				// Gradient Animation
				'gradient-shift': {
					'0%, 100%': { backgroundPosition: '0% 50%' },
					'50%': { backgroundPosition: '100% 50%' }
				},
				
				// Typing Animation
				typing: {
					'0%': { width: '0' },
					'100%': { width: '100%' }
				},
				
				'blink-caret': {
					'0%, 50%': { borderColor: 'transparent' },
					'51%, 100%': { borderColor: 'hsl(var(--primary))' }
				}
			},
			
			animation: {
				// Default
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				
				// Custom Animations
				float: 'float 6s ease-in-out infinite',
				'float-delayed': 'float 6s ease-in-out infinite 2s',
				'fade-in-up': 'fade-in-up 0.6s ease-out forwards',
				'slide-in-right': 'slide-in-right 0.6s ease-out forwards',
				'slide-in-left': 'slide-in-left 0.6s ease-out forwards',
				'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
				'gradient-shift': 'gradient-shift 3s ease infinite',
				
				// Typing Effect
				typing: 'typing 3.5s steps(40, end)',
				'blink-caret': 'blink-caret 1s infinite'
			},
			
			fontFamily: {
				sans: ['Inter', 'ui-sans-serif', 'system-ui'],
				mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular']
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
