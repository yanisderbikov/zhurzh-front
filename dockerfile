# Определяем базовый образ
FROM node:alpine as build-stage

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем файлы проекта
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем остальные файлы проекта
COPY . .

# Собираем проект
RUN npm run build

# Финальный этап с использованием Nginx
FROM nginx:alpine

# Копируем собранные файлы из предыдущего этапа
COPY --from=build-stage /app/build /usr/share/nginx/html

# Открываем порт 80
EXPOSE 80

# Запускаем Nginx
CMD ["nginx", "-g", "daemon off;"]
