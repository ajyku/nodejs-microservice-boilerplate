module.exports = {
    port: process.env.PORT || 3000,
    database: {
      host: 'localhost',
      port: 27017,
      dbName: 'userdb'
    },
    serviceDiscovery: {
      host: 'service-discovery.example.com',
      port: 8080
    }
  };
  