module.exports = {
  apps : [{
    name: 'my_app',
    script: './build/index.js',
    watch: '.',
    instances: 1,
    autorestart: true,
  },
]
};
