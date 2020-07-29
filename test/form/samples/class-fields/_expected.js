class Example extends SomeClass {
	firstPublicField = 1;
	secondPublicField = this.firstPublicField + super.someField;
	static firstPublicStaticField = 2;
	static secondPublicStaticField = this.firstPublicStaticField + super.someStaticField;

	#privateField = () => {};

	#uninitializedPrivateField;

	// Those are apparently unsupported at the moment
	// get #getter() {
	// 	return this.#uninitializedPrivateField;
	// }

	// set #setter(value) {
	// 	this.#uninitializedPrivateField = value;
	// }

	// #privateMethod() {
	// 	const foo = 'tree-shaken';
	// }

	static #privateStaticField = () => {};

	static #privateStaticMethod() {}
}
