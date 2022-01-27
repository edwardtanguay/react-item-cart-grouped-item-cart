import _config from './config.json';

class Config {

	constructor(config) {
		this.config = config;
		this.mockPageWaitTime = 0;
		this.dataSources = this.config.environment[this.getCurrentEnvironmentIdCode()].data;
		this.environment = this.getCurrentEnvironmentIdCode();
	}

	getCurrentEnvironmentIdCode() {
		// return 'production';
		// return 'development';
		// return 'testing';
		return process.env.REACT_APP_ENVIRONMENT ? process.env.REACT_APP_ENVIRONMENT : 'production';
	}
}

export const config = new Config(_config);