import ko from 'knockout';


class testComponent {
	
	constructor(params) {
		this.firstName = ko.observable('Bob');
	}

	template() {
		return (
			`<div style="">

				<h1> Hello friend, nice to meet you </h1>

				<div>
					Dear <span data-bind="text: firstName()"></span> It is nice to meet you.
				</div>

			</div>`
		);
	}

}


var test = new testComponent();


ko.components.register('app', {
	viewModel: testComponent,
	template: test.template()
})


export default testComponent;
