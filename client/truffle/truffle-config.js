module.exports = {
    networks: {
        development: {
            host: '127.0.0.1',
            port: 8545,
            network_id: "*"
        }
    },
    compiler: {
        solc: {
            version: "0.8.0",
            settings: {
                optimizer: {
                    enabled: false,
                    runs: 200
                }
            }
        }
    }
}