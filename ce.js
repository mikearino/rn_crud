chicken = () => egg();
egg = () => chicken();

console.log(`${chicken()} came first`);
