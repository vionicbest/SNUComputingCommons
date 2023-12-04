module.exports = {
  apps: [
    {
      name: 'sveltekit-app',
      script: 'npm',
      args: 'run start',
      watch: '.',
      instances: 1,
      autorestart: true,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production'
      },
      env_production: {
        NODE_ENV: 'production'
      }
    }
  ]
};