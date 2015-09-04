var config = {
  production: {},
  staging: {},
  development: {
    serverPath: 'http://localhost:3000',
    dbconfig: {
      name: 'rust',
      username: 'root'
    },
    googleAuth: {
      clientId: '837204469183-nklfavnlll2v6jh0ku65tieuvc6qmhn1.apps.googleusercontent.com',
      clientSecret: 'mXAPIt-gVJqr4NeXIvVFTi_M',
      callbackUrl: 'http://localhost:3000/api/auth/google/callback'
    },
    facebookAuth: {
      clientId: '996722297026435',
      clientSecret: 'cf12933d9699db44e3577e54d2fda15e',
      callbackUrl: 'http://localhost:3000/api/auth/facebook/callback'
    },
    secret: 'development'
  }
};

exports.get = function get(env) {
  return config[env] || config.development;
};
