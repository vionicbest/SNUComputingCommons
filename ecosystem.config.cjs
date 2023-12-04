module.exports = {
<<<<<<< HEAD
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
=======
  apps : [{
    name: 'my_app',
    script: './build/index.js',
    watch: '.',
    instances: 1,
    autorestart: true,
  },
]
};
>>>>>>> 282b96c2e75aefecc882c074f8af1542186363f3
