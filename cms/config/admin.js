module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'bc08e0e908a23c9217fcc2d05d39494e'),
  },
});
