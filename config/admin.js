module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '114f7de54d82440e76c2a2a89e8540de'),
  },
});
