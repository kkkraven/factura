# Supplier Hub MVP

6-недельный MVP, демонстрирующий основной поток управления поставщиками:  
Каталог → Поиск/Фильтрация → Чат по RFQ → PDF-контракт → Тестовая эскроу-оплата

## Возможности

- **Каталог поставщиков**: Просмотр и поиск проверенных китайских фабрик
- **Система RFQ**: Чат с поставщиками в реальном времени для получения котировок
- **Генерация контрактов**: Автоматическое создание PDF-контракта
- **Тестовые платежи**: Симуляция эскроу через Stripe (тестовый режим)
- **Админ-панель**: Просмотр оплаченных заказов и управление поставщиками

## Технологии

- **Фронтенд**: Next.js 14 (App Router), React Server Components
- **Стилизация**: Tailwind CSS, компоненты shadcn/ui
- **База данных**: Supabase Postgres с Row Level Security (RLS)
- **Аутентификация**: Magic link по email через Supabase
- **Реалтайм**: Supabase Realtime для обновлений чата
- **Платежи**: Stripe Checkout (тестовый режим)
- **Деплой**: Vercel + Supabase

## Требования

- Node.js 18+
- pnpm
- Аккаунт Supabase
- Аккаунт Stripe (для тестового режима)

## Установка

1. Клонируйте репозиторий:
   ```bash
   git clone <repo-url>
   cd supplier-hub-mvp
   ```

2. Установите зависимости:
   ```bash
   pnpm install
   ```

3. Скопируйте пример файла переменных окружения и заполните его:
   ```bash
   cp .env.local.example .env.local
   ```
   - Укажите параметры Supabase (`NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, `SUPABASE_SERVICE_ROLE_KEY`)
   - Укажите параметры Stripe (`STRIPE_SECRET_KEY`, `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`, `STRIPE_WEBHOOK_SECRET`)
   - Укажите `NEXT_PUBLIC_SITE_URL` (например, http://localhost:3000)

4. Примените миграции базы данных:
   - Войдите в Supabase, импортируйте миграцию из `supabase/migrations/20231120000000_initial_schema.sql`

5. (Опционально) Засейте тестовые данные:
   ```bash
   pnpm seed
   ```

6. Запустите проект в режиме разработки:
   ```bash
   pnpm dev
   ```

7. Откройте [http://localhost:3000](http://localhost:3000) в браузере.

## Примечания

- Для тестовых платежей используйте тестовые карты Stripe.
- Для работы чата и аутентификации убедитесь, что RLS в Supabase настроен корректно.
- Для работы Stripe webhook настройте endpoint `/api/webhook` в панели Stripe. 