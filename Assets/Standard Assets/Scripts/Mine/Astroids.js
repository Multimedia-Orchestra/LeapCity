#pragma strict

var prefab : Transform;
var fireRate = 10;
private var nextFire = 0.0;

function Start () {

}

function Update () {
	//var newValue : Random.insideUnitCircle * 10;
	if(Time.time > nextFire) {
		nextFire = Time.time + fireRate;
		Instantiate (prefab, Vector3(Random.Range(-12,12), -400, Random.Range(-7,7)), Quaternion.identity);
	}
}