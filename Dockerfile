FROM node:10-alpine as build-stage
WORKDIR /app
COPY ./frontend ./
RUN yarn
RUN yarn build


FROM node:10-alpine as production-stage
WORKDIR /app
COPY ./backend ./
RUN yarn
COPY --from=build-stage /app/dist /app/src/public
EXPOSE 3000
CMD ["yarn", "start"]