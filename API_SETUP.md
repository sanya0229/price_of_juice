# API Setup Instructions

## Environment Variables

Create a `.env.local` file in the root directory with:

```
REACT_APP_API_URL=http://localhost:3001
```

## API Endpoints

The application now uses the following public API endpoints:

- `GET /admin/products` - List all products
- `GET /admin/products/:id` - Get product by ID  
- `GET /admin/text` - Get text content
- `GET /admin/text/test` - Test endpoint

## Development

1. Install dependencies: `npm install` or `yarn install`
2. Start the development server: `npm start` or `yarn start`
3. The proxy will automatically route `/admin/*` requests to your backend server

## Production

In production, the API requests will be made to the same domain where the app is hosted.
Make sure your backend server is accessible at the `/admin` path.
