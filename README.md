# 🎨 Inpainter

https://user-images.githubusercontent.com/2289/188992670-3dc9db47-fb8e-45c1-85ee-afc850009c48.mp4

## Как это работает:

🐢🚀 это приложение работает при помощи Node.js!:

- [Replicate](https://replicate.com/), платформа для запуска моделей глубокого обучения.
- [Stable Diffusion](https://replicate.com/stability-ai/stable-diffusion), open-source text-to-image генирационная модель.
- Next.js [server-side API routes](pages/api) для связи с replicate API
- Next.js React компонент для создания GUI
- [Tailwind CSS](https://tailwindcss.com/) для стилизирования приложения
- [Lucide](https://lucide.dev/) для иконок

## разработка

предпосылки:

1. последняя версия Node.js
2. [Replicate API token](https://replicate.com/account)
```
клонируйте репозиторий установите зависимости и запустите сервер:

```sh
npm install
npm run dev
```

откройте в браузере [http://localhost:3000](http://localhost:3000)
