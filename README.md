# todo-app
An interactice todo web app to log, update, delete your task 

## Run locally
1. Install dependencies:
	npm install
2. Configure env variables in `.env`:
	- `PORT`
	- `MONGODB_URI`
	- `SECRET_KEY`
3. Start the app:
	npm run dev

## Vercel serverless setup
- The Express app is exported from `src/app.js`.
- Vercel handler is `api/index.js`.
- Vercel routing is configured in `vercel.json`.

### Required environment variables on Vercel
- `MONGODB_URI`
- `SECRET_KEY`
