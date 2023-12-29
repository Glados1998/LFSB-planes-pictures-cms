module.exports = ({ env }) => ({
  'users-permissions': {
    config: {
      jwtSecret: env('JWT_SECRET'),
    },
  },
  upload: {
    config: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: env('CLOUDINARY_NAME'),
        api_key: env('CLOUDINARY_KEY'),
        api_secret: env('CLOUDINARY_SECRET'),
      },
      actionOptions: {
        upload: {
          file: 'https://console.cloudinary.com/console/c-c9e5feeb9523ecd23e80934736ff96/media_library/folders/c6597db30d09113371e0344fd469d8a2a2',
          upload_preset: 'owiop47b',
          media_metadata: true,
        },
      },
    },
  },
});
