/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import { PageLoader } from '../components/PageLoader';
import { config } from '../config';

let _employees = config.dataSources.employees.startsWith('http') ? [] : require(`../data/${config.dataSources.employees}`);
let _customers = config.dataSources.customers.startsWith('http') ? [] : require(`../data/${config.dataSources.customers}`);

const fetchData = async (url) => {
	const response = await fetch(url);
	return await response.json();
}

export const dataManager = Component => (props) => {
	const [dataLoaded, setDataLoaded] = useState(false);
	const [employees, setEmployees] = useState([]);
	const [customers, setCustomers] = useState([]);

	const getUkEmployees = () => {
		return employees.filter(emp => emp.address.country === 'UK');
	}

	const getUsaEmployees = () => {
		return employees.filter(emp => emp.address.country === 'USA');
	}

	const getUkCustomers = () => {
		return customers.filter(emp => emp.address.country === 'UK');
	}

	const prepareEmployees = (_employees) => {
		_employees.map(m => m.fullName = `${m.firstName} ${m.lastName}`);
		setEmployees([..._employees]);
	}

	const prepareCustomers = (_customers) => {
		setCustomers([..._customers]);
	}
	useEffect(() => {
		setTimeout(async () => {
			if (config.dataSources.employees.startsWith('http')) {
				_employees = await fetchData(config.dataSources.employees);
			}
			if (config.dataSources.customers.startsWith('http')) {
				_customers = await fetchData(config.dataSources.customers);
			}
			prepareEmployees(_employees);
			prepareCustomers(_customers);
			setDataLoaded(true);
		}, config.mockPageWaitTime * 1000);
	}, []);

	return !dataLoaded ? <PageLoader /> : <Component {...props} ukEmployees={getUkEmployees()} usaEmployees={getUsaEmployees()} employees={employees} customers={customers} ukCustomers={getUkCustomers()} />
}