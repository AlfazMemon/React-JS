# Alfaz Memon Portfolio — React

A React/Vite recreation of the uploaded portfolio design.

## Structure

```text
src/
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── Profile.jsx
│   ├── SkillCard.jsx
│   ├── Projects.jsx
│   ├── ProjectCard.jsx
│   ├── Education.jsx
│   └── Contact.jsx
├── hooks/
│   └── useResponsive.js
├── theme.js
├── App.jsx
└── main.jsx
```

Every visual component keeps its styling in React `style={{...}}` objects. There is no separate CSS stylesheet.

## Run

```bash
npm install
npm run dev
```

Then open the local Vite URL shown in the terminal.

## Resume

Put the uploaded resume PDF in the project's `public` folder with this filename:

`Alfaz_Memon_Resume_Modern(1).pdf`

The Download CV button is already configured for that path.
