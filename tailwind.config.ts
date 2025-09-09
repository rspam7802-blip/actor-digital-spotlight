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
				'glow-orb': '0 0 15px hsl(var(--primary)), 0 0 30px hsl(var(--primary) / 0.6)',
			},
			transitionTimingFunction: {
				'smooth': 'var(--transition-smooth)',
				'dramatic': 'var(--transition-dramatic)',
			},
			fontFamily: {
				'display': ['Dancing Script', 'cursive'],
				'header': ['Cormorant Garamond', 'serif'],
				'cinematic': ['Playfair Display', 'serif'],
				'body': ['Inter', 'system-ui', 'sans-serif']
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
						transform: 'translate3d(0, 0px, 0) rotateX(0deg) rotateY(0deg)' 
					},
					'50%': { 
						transform: 'translate3d(0, -20px, 0) rotateX(5deg) rotateY(2deg)' 
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
				},
				'premium-glow': {
					'0%, 100%': {
						transform: 'scale3d(1, 1, 1)',
						filter: 'brightness(1) drop-shadow(0 0 20px hsl(var(--primary) / 0.3))'
					},
					'50%': {
						transform: 'scale3d(1.02, 1.02, 1)',
						filter: 'brightness(1.1) drop-shadow(0 0 40px hsl(var(--primary) / 0.6))'
					}
				},
				'text-shimmer': {
					'0%': {
						backgroundPosition: '-200% center'
					},
					'100%': {
						backgroundPosition: '200% center'
					}
				},
				'morph': {
					'0%, 100%': {
						borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%'
					},
					'50%': {
						borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%'
					}
				},
				'orbit': {
					'0%': {
						transform: 'rotate(0deg) translateX(100px) rotate(0deg)'
					},
					'100%': {
						transform: 'rotate(360deg) translateX(100px) rotate(-360deg)'
					}
				},
				'slide-up-stagger': {
					'0%': {
						opacity: '0',
						transform: 'translate3d(0, 100px, 0) scale3d(0.8, 0.8, 1)'
					},
					'100%': {
						opacity: '1',
						transform: 'translate3d(0, 0, 0) scale3d(1, 1, 1)'
					}
				},
				'fade-blur': {
					'0%': {
						opacity: '0',
						filter: 'blur(10px)',
						transform: 'scale3d(1.1, 1.1, 1)'
					},
					'100%': {
						opacity: '1',
						filter: 'blur(0px)',
						transform: 'scale3d(1, 1, 1)'
					}
				},
				'bounceIn': {
					'0%': {
						opacity: '0',
						transform: 'scale3d(0.3, 0.3, 1)'
					},
					'50%': {
						opacity: '1',
						transform: 'scale3d(1.05, 1.05, 1)'
					},
					'70%': {
						transform: 'scale3d(0.9, 0.9, 1)'
					},
					'100%': {
						opacity: '1',
						transform: 'scale3d(1, 1, 1)'
					}
				},
				'typewriter': {
					'0%': {
						width: '0'
					},
					'100%': {
						width: '100%'
					}
				},
				'gradient-shift': {
					'0%, 100%': {
						backgroundPosition: '0% 50%'
					},
					'50%': {
						backgroundPosition: '100% 50%'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float-3d': 'float-3d 6s ease-in-out infinite',
				'rotate-3d': 'rotate-3d 20s linear infinite',
				'tilt-3d': 'tilt-3d 4s ease-in-out infinite',
				'scale-3d': 'scale-3d 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) both',
				'flip-3d': 'flip-3d 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) both',
				'slide-3d-left': 'slide-3d-left 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) both',
				'slide-3d-right': 'slide-3d-right 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) both',
				'card-hover-3d': 'card-hover-3d 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) both',
				'parallax-scroll': 'parallax-scroll 1s linear both',
				'premium-glow': 'premium-glow 2s ease-in-out',
				'text-shimmer': 'text-shimmer 3s ease-in-out',
				'morph': 'morph 8s ease-in-out infinite',
				'orbit': 'orbit 20s linear infinite',
				'slide-up-stagger': 'slide-up-stagger 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) both',
				'fade-blur': 'fade-blur 1s cubic-bezier(0.34, 1.56, 0.64, 1) both',
				'bounceIn': 'bounceIn 1s cubic-bezier(0.34, 1.56, 0.64, 1) both',
				'typewriter': 'typewriter 4s steps(40, end) both',
				'gradient-shift': 'gradient-shift 6s ease-in-out infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
