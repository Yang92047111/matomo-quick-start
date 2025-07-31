# Matomo Vue3 Integration Example

This is a lightweight open-source demo project showcasing how to integrate [Matomo](https://matomo.org/) (a Google Analytics alternative) with a frontend application built using **Vue 3**. The entire project can be brought up and tested using **Docker containers**, making it easy to run and explore the analytics system locally.

---

## 🧰 Tech Stack

- **Frontend**: Vue 3 + TypeScript + Vite
- **Analytics**: Matomo (self-hosted)
- **Database**: MySQL 8.0
- **Containerization**: Docker & Docker Compose
- **Testing**: Vitest (for unit testing)
- **Coverage**: `@vitest/coverage-c8`

---

## 🚀 Quick Start

### Prerequisites

- Docker & Docker Compose installed
- Node.js v18+ (for frontend dev/test)

### Spin Up the Project (Full Stack)

```bash
docker-compose up --build
```

This will:

* Serve the Vue 3 frontend at `http://localhost:8080`
* Start the Matomo analytics server at `http://localhost:8081`
* Set up a MySQL database for Matomo data
* Provide a Matomo dashboard (requires initial setup)

> 📍 **Matomo Setup**
>
> * URL: [http://localhost:8081](http://localhost:8081)
> * Follow the installation wizard on first visit
> * Database settings are pre-configured in docker-compose.yml
> * See [SETUP.md](SETUP.md) for detailed setup instructions

### Development Only (Frontend)

```bash
cd frontend
npm install
npm run dev
```

> Note: Matomo server still needs to be running via Docker for analytics tracking to work.

---

## ✅ Unit Testing & Coverage

This project uses `vitest` for unit testing with Vue Test Utils.

### Run Unit Tests

```bash
cd frontend
npm run test
```

### View Coverage Report

```bash
cd frontend
npm run coverage
```

HTML coverage report will be available at: `./frontend/coverage/index.html`

---

## 📁 Project Structure

```
matomo-vue3-project/
│
├── docker-compose.yml          # Docker services configuration
├── README.md                   # This file
├── LICENSE                     # MIT License
├── .gitignore                  # Git ignore rules
│
├── frontend/                   # Vue 3 frontend application
│   ├── Dockerfile             # Frontend container config
│   ├── package.json           # Dependencies and scripts
│   ├── vite.config.ts         # Vite configuration
│   ├── index.html             # HTML entry point
│   ├── public/                # Static assets
│   ├── src/
│   │   ├── main.ts            # App entry point
│   │   ├── App.vue            # Root component
│   │   ├── components/
│   │   │   ├── Home.vue       # Home page component
│   │   │   └── About.vue      # About page component
│   │   └── plugins/
│   │       └── matomo.ts      # Matomo integration
│   └── tests/                 # Unit tests
│       ├── Home.test.ts
│       └── About.test.ts
│
└── matomo/                    # Matomo configuration
    └── config/
        └── config.ini.php     # Pre-configured settings
```

---

## 🔧 Features Demonstrated

### Analytics Integration
- **Automatic page view tracking** - Tracks route changes in SPA
- **Custom event tracking** - Track user interactions
- **Goal conversion tracking** - Measure conversion funnels
- **Privacy-friendly** - Self-hosted, GDPR compliant

### Technical Features
- **Vue 3 Composition API** - Modern Vue.js patterns
- **TypeScript support** - Type-safe development
- **Vue Router** - Client-side routing
- **Docker containerization** - Easy deployment
- **Unit testing** - Comprehensive test coverage

---

## 🎯 Usage Examples

### Track Custom Events
```typescript
import { trackEvent } from './plugins/matomo'

// Track button clicks
trackEvent('UI', 'Button Click', 'Header CTA')

// Track form submissions
trackEvent('Form', 'Submit', 'Contact Form')
```

### Track Goals
```typescript
import { trackGoal } from './plugins/matomo'

// Track conversion goals
trackGoal(1) // Goal ID 1
trackGoal(2, 29.99) // Goal with revenue
```

---

## 🪪 License

This project is licensed under the [MIT License](LICENSE).

---

## ❤️ Open Source

This repository is designed to help developers:

* Understand how to self-host privacy-friendly analytics (Matomo)
* Set up quick experiments or POCs integrating frontend analytics
* Learn best practices for frontend instrumentation
* Explore Vue 3 + TypeScript development patterns

If you find this useful, consider giving a ⭐ on GitHub or contributing!

