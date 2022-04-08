FROM cypress/browsers:node14.17.6-chrome100-ff98

WORKDIR /app

COPY . /app

RUN npm i && npx cypress run
