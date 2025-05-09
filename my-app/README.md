# Modern Portfolio Website

A stunning, responsive portfolio website built with React, Three.js, and Framer Motion. Features a modern design with interactive 3D elements, smooth animations, and a sleek user interface.

## Features

- 🎨 Modern, dark theme with neon accents
- 🌟 Interactive 3D background using Three.js
- 📱 Fully responsive design
- ⚡ Smooth animations and transitions
- 🎯 Sections for About, Skills, Projects, and Contact
- 📧 Contact form with EmailJS integration
- 🎵 Optional ambient sound effects
- 🔄 Smooth scrolling navigation
- 📱 Mobile-friendly navigation menu

## Technologies Used

- React
- Three.js
- Framer Motion
- Styled Components
- EmailJS
- React Icons
- React Router DOM

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory and add your EmailJS credentials:
```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

4. Start the development server:
```bash
npm run dev
```

## Customization

### Personal Information
- Update the content in each component (Hero, About, Skills, Projects, Contact)
- Replace placeholder images with your own
- Update social media links in the Contact component

### Styling
- Modify the color scheme in `src/styles/GlobalStyles.js`
- Adjust animations and transitions in individual components
- Customize the 3D background in `src/3d/StarField.jsx`

### Projects
- Add your projects to the projects array in `src/components/Projects.jsx`
- Update project images, descriptions, and links
- Modify the tech stack tags as needed

### Contact Form
- Set up an EmailJS account and update the credentials in the `.env` file
- Customize the email template in EmailJS dashboard
- Modify the form fields in `src/components/Contact.jsx`

## Deployment

1. Build the project:
```bash
npm run build
```

2. Deploy to your preferred hosting platform (Vercel, Netlify, etc.)

## Contributing

Feel free to submit issues and enhancement requests!

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Three.js for 3D graphics
- Framer Motion for animations
- Styled Components for styling
- React Icons for icons
- EmailJS for contact form functionality
