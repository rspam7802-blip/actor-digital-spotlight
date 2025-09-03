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
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
					glow: 'hsl(var(--primary-glow))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			backgroundImage: {
				'gradient-hero': 'var(--gradient-hero)',
				'gradient-accent': 'var(--gradient-accent)',
				'gradient-subtle': 'var(--gradient-subtle)',
			},
			boxShadow: {
				'dramatic': 'var(--shadow-dramatic)',
				'glow': 'var(--shadow-glow)',
				'elegant': 'var(--shadow-elegant)',
			},
			transitionTimingFunction: {
				'smooth': 'var(--transition-smooth)',
				'dramatic': 'var(--transition-dramatic)',
			},
			fontFamily: {
				'display': ['Inter', 'system-ui', 'sans-serif'],
				'body': ['Inter', 'system-ui', 'sans-serif'],
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'float-3d': {
					'0%, 100%': { 
						transform: 'translateY(0px) rotateX(0deg) rotateY(0deg)' 
					},
					'50%': { 
						transform: 'translateY(-20px) rotateX(5deg) rotateY(2deg)' 
					}
				},
				'rotate-3d': {
					'0%': { 
						transform: 'rotateY(0deg) rotateX(0deg)' 
					},
					'100%': { 
						transform: 'rotateY(360deg) rotateX(360deg)' 
					}
				},
				'tilt-3d': {
					'0%, 100%': { 
						transform: 'perspective(var(--perspective)) rotateY(0deg) rotateX(0deg)' 
					},
					'25%': { 
						transform: 'perspective(var(--perspective)) rotateY(-5deg) rotateX(2deg)' 
					},
					'75%': { 
						transform: 'perspective(var(--perspective)) rotateY(5deg) rotateX(-2deg)' 
					}
				},
				'scale-3d': {
					'0%': { 
						transform: 'perspective(var(--perspective)) scale3d(0.8, 0.8, 0.8) rotateY(-180deg)',
						opacity: '0' 
					},
					'100%': { 
						transform: 'perspective(var(--perspective)) scale3d(1, 1, 1) rotateY(0deg)',
						opacity: '1' 
					}
				},
				'flip-3d': {
					'0%': { 
						transform: 'perspective(var(--perspective)) rotateY(0deg)' 
					},
					'50%': { 
						transform: 'perspective(var(--perspective)) rotateY(-90deg)' 
					},
					'100%': { 
						transform: 'perspective(var(--perspective)) rotateY(0deg)' 
					}
				},
				'slide-3d-left': {
					'0%': { 
						transform: 'perspective(var(--perspective)) translate3d(-100%, 0, -200px) rotateY(45deg)',
						opacity: '0' 
					},
					'100%': { 
						transform: 'perspective(var(--perspective)) translate3d(0, 0, 0) rotateY(0deg)',
						opacity: '1' 
					}
				},
				'slide-3d-right': {
					'0%': { 
						transform: 'perspective(var(--perspective)) translate3d(100%, 0, -200px) rotateY(-45deg)',
						opacity: '0' 
					},
					'100%': { 
						transform: 'perspective(var(--perspective)) translate3d(0, 0, 0) rotateY(0deg)',
						opacity: '1' 
					}
				},
				'card-hover-3d': {
					'0%': { 
						transform: 'perspective(var(--perspective)) rotateX(0deg) rotateY(0deg) translateZ(0px)' 
					},
					'100%': { 
						transform: 'perspective(var(--perspective)) rotateX(-5deg) rotateY(10deg) translateZ(20px)' 
					}
				},
				'parallax-scroll': {
					'0%': { 
						transform: 'translate3d(0, 0, 0)' 
					},
					'100%': { 
						transform: 'translate3d(0, -50px, 0)' 
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float-3d': 'float-3d 6s ease-in-out infinite',
				'rotate-3d': 'rotate-3d 20s linear infinite',
				'tilt-3d': 'tilt-3d 4s ease-in-out infinite',
				'scale-3d': 'scale-3d 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
				'flip-3d': 'flip-3d 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
				'slide-3d-left': 'slide-3d-left 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
				'slide-3d-right': 'slide-3d-right 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
				'card-hover-3d': 'card-hover-3d 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
				'parallax-scroll': 'parallax-scroll 1s linear'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
