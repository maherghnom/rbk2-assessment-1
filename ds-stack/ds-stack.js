var Stack = function() {
	//your code is here
	Instance=Object.create(Stackmethods);
	Instance._storage=[];


	return Instance;
};
Stackmethods={}

Stackmethods.add=function(value){
	this._storage.push(value)

}
Stackmethods.remove=function(){
	this._storage.pop()
}
