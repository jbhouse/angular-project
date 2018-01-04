import { Injectable } from '@angular/core';

@Injectable()
export class SystemService {

	data = {
		about: 'system service',
		user : {
			loggedIn: false,
			instance: null
		},
		displayMenu: true
	};

	get debug() {return this.data};

  constructor() { }

}
