export const app = {
  name: 'Mern Social Media',
  apiEndpoint: process.env.API_URL ? `${process.env.API_URL}` : 'api',
};
export const database = {
  url: process.env.MONGODB_URI || 'mongodb+srv://giulia:Uz0QKJpGixupEPrx@cluster1.qjbu96s.mongodb.net/?retryWrites=true&w=majority',
};
export const jwt = {
  secret: process.env.JWT_SECRET || 'jwt-secret',
  tokenLife: '7d',
};
